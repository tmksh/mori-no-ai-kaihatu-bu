"use client";

import { useEffect, useState } from "react";
import { ConsultationLink } from "@/components/consultation";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  const close = () => setOpen(false);

  return (
    <header className="site-header">
      <a href="#" className="brand" aria-label="森のAI開発部 トップ">
        <span className="brand-mark">
          <img src="/assets/logo-mark.webp" alt="" width={256} height={256} />
        </span>
        <strong>森のAI開発部</strong>
      </a>
      <button
        className="menu-toggle"
        aria-expanded={open}
        aria-controls="navigation"
        aria-label={open ? "メニューを閉じる" : "メニューを開く"}
        onClick={() => setOpen((current) => !current)}
      >
        <span />
        <span />
      </button>
      <nav id="navigation" aria-label="メインナビゲーション" className={open ? "is-open" : undefined}>
        <a href="#about" onClick={close}>
          森のAI開発部とは
        </a>
        <a href="#courses" onClick={close}>
          会員のしくみ
        </a>
        <a href="#stories" onClick={close}>
          実務への一歩
        </a>
        <a href="#faq" onClick={close}>
          よくある質問
        </a>
        <ConsultationLink className="button small" onOpen={close}>
          個別面談について <span>↗</span>
        </ConsultationLink>
      </nav>
    </header>
  );
}
