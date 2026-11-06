"use client";

import { useEffect } from "react";

const revealTargets: [selector: string, variant: string][] = [
  [".intro h2, .intro > p", "up"],
  [".cycle-stage", "pop"],
  [".section-heading", "up"],
  [".feature-card", "up"],
  [".course", "up"],
  [".story-visual", "left"],
  [".story-copy", "right"],
  [".member-voice", "pop"],
  [".journey-step", "up"],
  [".support-copy", "left"],
  [".support-note", "right"],
  [".support-note li", "pop"],
  [".faq-list details", "up"],
  [".consultation-inner", "up"],
];

const triggerTargets = [".journey-board", ".hill-divider", ".feature-cards", ".consultation"];

export function ScrollMotion() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const root = document.documentElement;
    let pending: Element[] = [];

    for (const [selector, variant] of revealTargets) {
      const groups = new Map<Element | null, number>();
      document.querySelectorAll<HTMLElement>(selector).forEach((element) => {
        const index = groups.get(element.parentElement) ?? 0;
        groups.set(element.parentElement, index + 1);
        element.classList.add("reveal", `reveal-${variant}`);
        element.style.setProperty("--reveal-delay", `${Math.min(index, 5) * 0.12}s`);
        pending.push(element);
      });
    }
    pending.push(...document.querySelectorAll(triggerTargets.join(",")));
    root.classList.add("motion-ready");

    // Anything whose top has entered the lower 88% of the viewport — including elements skipped over by a jump — is revealed.
    let frame = 0;
    const check = () => {
      frame = 0;
      const line = window.innerHeight * 0.88;
      pending = pending.filter((element) => {
        if (element.getBoundingClientRect().top > line) return true;
        element.classList.add("is-in");
        return false;
      });
      if (pending.length === 0) detach();
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(check);
    };
    const detach = () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    check();

    const hero = document.querySelector<HTMLElement>(".hero");
    let heroFrame = 0;
    const moveHero = () => {
      heroFrame = 0;
      if (!hero) return;
      hero.style.setProperty("--hero-scroll", `${Math.min(window.scrollY, hero.offsetHeight)}px`);
    };
    const scheduleHero = () => {
      if (!heroFrame) heroFrame = requestAnimationFrame(moveHero);
    };
    window.addEventListener("scroll", scheduleHero, { passive: true });

    return () => {
      window.removeEventListener("scroll", scheduleHero);
      cancelAnimationFrame(heroFrame);
      detach();
      cancelAnimationFrame(frame);
      root.classList.remove("motion-ready");
    };
  }, []);

  return null;
}
