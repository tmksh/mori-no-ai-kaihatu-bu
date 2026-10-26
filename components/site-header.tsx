"use client";

import { useEffect, useState } from "react";

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
          <img src="/assets/logo-emblem.webp" alt="" width={192} height={192} />
        </span>
        <span>
          <small>実務型AI開発スクール</small>
          <strong>森のAI開発部</strong>
        </span>
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
          3つのコース
        </a>
        <a href="#stories" onClick={close}>
          実務への一歩
        </a>
        <a href="#faq" onClick={close}>
          よくある質問
        </a>
        <a className="button small" href="#consultation" onClick={close}>
          個別面談について <span>↗</span>
        </a>
      </nav>
    </header>
  );
}
