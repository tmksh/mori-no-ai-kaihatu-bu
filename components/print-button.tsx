"use client";

export function PrintButton() {
  return (
    <button type="button" className="deck-print" onClick={() => window.print()}>
      PDFで保存・印刷
    </button>
  );
}
