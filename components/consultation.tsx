"use client";

import { createContext, useContext, useRef, useState, type ReactNode } from "react";
import { ContactForm } from "@/components/contact-form";
import { consultationUrl } from "@/lib/site-config";

type ConsultationContextValue = {
  selectedCourse: string | null;
  selectCourse: (course: string) => void;
  openConsultation: () => void;
};

const ConsultationContext = createContext<ConsultationContextValue | null>(null);

function useConsultation() {
  const value = useContext(ConsultationContext);
  if (!value) throw new Error("ConsultationProvider の内側で使ってください");
  return value;
}

export function ConsultationProvider({ children }: { children: ReactNode }) {
  const [selectedCourse, setSelectedCourse] = useState<string | null>(null);
  const [formKey, setFormKey] = useState(0);
  const dialogRef = useRef<HTMLDialogElement>(null);

  const openConsultation = () => {
    if (consultationUrl && /^https:\/\//i.test(consultationUrl)) {
      window.location.assign(consultationUrl);
      return;
    }
    if (!dialogRef.current?.open) setFormKey((key) => key + 1);
    dialogRef.current?.showModal();
  };

  const closeDialog = () => dialogRef.current?.close();

  const onDialogClick = (event: React.MouseEvent<HTMLDialogElement>) => {
    const dialog = event.currentTarget;
    if (event.target !== dialog) return;
    const bounds = dialog.getBoundingClientRect();
    const outside =
      event.clientX < bounds.left ||
      event.clientX > bounds.right ||
      event.clientY < bounds.top ||
      event.clientY > bounds.bottom;
    if (outside) dialog.close();
  };

  return (
    <ConsultationContext.Provider
      value={{ selectedCourse, selectCourse: setSelectedCourse, openConsultation }}
    >
      {children}
      <dialog
        ref={dialogRef}
        id="consultation-dialog"
        aria-labelledby="dialog-title"
        onClick={onDialogClick}
      >
        <button className="dialog-close" aria-label="閉じる" onClick={closeDialog}>
          ×
        </button>
        <svg className="dialog-leaf">
          <use href="#sprout" />
        </svg>
        <p className="section-label">森のAI開発部の個別面談</p>
        <ContactForm key={formKey} defaultPlan={selectedCourse} onClose={closeDialog} />
      </dialog>
    </ConsultationContext.Provider>
  );
}

export function ConsultationLink({
  className,
  course,
  onOpen,
  children,
}: {
  className?: string;
  course?: string;
  onOpen?: () => void;
  children: ReactNode;
}) {
  const { selectCourse, openConsultation } = useConsultation();
  return (
    <a
      href="#consultation"
      className={className}
      onClick={(event) => {
        event.preventDefault();
        if (course) selectCourse(course);
        onOpen?.();
        openConsultation();
      }}
    >
      {children}
    </a>
  );
}

export function CourseLink({ course }: { course: string }) {
  return (
    <ConsultationLink course={course}>
      {course}について相談する <span>↗</span>
    </ConsultationLink>
  );
}

export function ConsultationTrigger({ className, children }: { className?: string; children: ReactNode }) {
  const { openConsultation } = useConsultation();
  return (
    <button type="button" className={className} onClick={openConsultation}>
      {children}
    </button>
  );
}

export function ConsultationPanel() {
  const { selectedCourse, openConsultation } = useConsultation();
  return (
    <section id="consultation" className="consultation section">
      <div className="container consultation-inner">
        <svg className="cta-tree" aria-hidden="true">
          <use href="#tree" />
        </svg>
        <h2>
          学びを、
          <br />
          実務につなげよう。
        </h2>
        <p>
          案件獲得や、スキルへの不安も話してみませんか。
          <br />
          今の経験に合う学び方と、実案件へのステップを一緒に考えます。
        </p>
        <p id="selected-course" className="selected-course" hidden={selectedCourse === null}>
          {selectedCourse ? `ご相談の内容：${selectedCourse}について` : null}
        </p>
        <button type="button" className="button cream" id="consultation-button" onClick={openConsultation}>
          個別面談のご案内 <span>↗</span>
        </button>
        <p className="consultation-note">学習から実案件への参加まで、具体的な流れをご案内します。</p>
      </div>
    </section>
  );
}
