"use client";

import { useState, type FormEvent } from "react";

const plans = ["どんぐり会員", "わかば会員", "まだ決めていない"];

type Status = "idle" | "sending" | "sent" | "error";

export function ContactForm({ defaultPlan, onClose }: { defaultPlan: string | null; onClose: () => void }) {
  const [status, setStatus] = useState<Status>("idle");

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("sending");
    const data = new FormData(event.currentTarget);
    const body = new URLSearchParams();
    data.forEach((value, key) => body.append(key, String(value)));
    try {
      const response = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: body.toString(),
      });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  };

  if (status === "sent") {
    return (
      <div className="contact-done" role="status">
        <h2 id="dialog-title">
          お問い合わせを、
          <br />
          受け付けました。
        </h2>
        <p>内容を確認のうえ、担当者からメールでご連絡します。</p>
        <button type="button" className="button dialog-dismiss" onClick={onClose}>
          ページに戻る <span>→</span>
        </button>
      </div>
    );
  }

  return (
    <>
      <h2 id="dialog-title" className="contact-title">
        <span>個別面談の</span>
        <span>お申し込み・お問い合わせ</span>
      </h2>
      <p>面談のご希望や、気になることをお送りください。担当者からメールでご連絡します。</p>
      <form className="contact-form" name="consultation" onSubmit={onSubmit}>
        <input type="hidden" name="form-name" value="consultation" />
        <p className="contact-hp" aria-hidden="true">
          <label>
            入力しないでください
            <input name="bot-field" tabIndex={-1} autoComplete="off" />
          </label>
        </p>
        <label className="contact-field">
          <span>
            お名前<b>必須</b>
          </span>
          <input name="name" required autoComplete="name" maxLength={100} />
        </label>
        <label className="contact-field">
          <span>
            メールアドレス<b>必須</b>
          </span>
          <input type="email" name="email" required autoComplete="email" maxLength={254} />
        </label>
        <label className="contact-field">
          <span>気になっている会員</span>
          <select name="plan" defaultValue={defaultPlan && plans.includes(defaultPlan) ? defaultPlan : plans[2]}>
            {plans.map((plan) => (
              <option key={plan} value={plan}>
                {plan}
              </option>
            ))}
          </select>
        </label>
        <label className="contact-field">
          <span>ご相談内容</span>
          <textarea
            name="message"
            rows={4}
            maxLength={2000}
            placeholder="例：これまでの学習経験や、面談で聞いてみたいこと"
          />
        </label>
        <p className="contact-privacy">
          いただいた情報は、お問い合わせへの回答と面談のご案内にのみ利用します。
        </p>
        {status === "error" ? (
          <p className="contact-error" role="alert">
            送信できませんでした。時間をおいて、もう一度お試しください。
          </p>
        ) : null}
        <button type="submit" className="button contact-submit" disabled={status === "sending"}>
          {status === "sending" ? "送信しています…" : "この内容で送信する"} <span>→</span>
        </button>
      </form>
    </>
  );
}
