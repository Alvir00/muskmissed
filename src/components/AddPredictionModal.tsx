"use client";

import { useEffect, useState } from "react";
import AddPredictionForm from "./AddPredictionForm";

export default function AddPredictionModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!mounted) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-start justify-center overflow-y-auto p-4 transition-all duration-300 sm:p-8 ${
        open ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
    >
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />
      <div
        className={`relative my-auto w-full max-w-2xl transform overflow-hidden rounded-2xl border border-tesla/30 bg-gradient-to-b from-zinc-950 to-black shadow-[0_0_60px_rgba(227,25,55,0.25)] transition-all duration-300 ${
          open ? "translate-y-0 scale-100" : "translate-y-8 scale-95"
        }`}
      >
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-tesla to-transparent" />
        <div className="sticky top-0 z-10 flex items-start justify-between gap-4 border-b border-white/10 bg-black/60 px-6 py-5 backdrop-blur">
          <div>
            <h2 className="font-display text-2xl font-600 uppercase tracking-wide text-white">
              Log a New Miss
            </h2>
            <p className="mt-1 text-sm text-zinc-400">
              Elon got it wrong again? Add it to the record.
            </p>
          </div>
          <button
            onClick={onClose}
            aria-label="Close"
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-zinc-400 transition-colors hover:border-tesla/50 hover:text-tesla"
          >
            ✕
          </button>
        </div>

        <div className="max-h-[70vh] overflow-y-auto px-6 py-6">
          <AddPredictionForm onDone={() => setTimeout(onClose, 1400)} />
        </div>
      </div>
    </div>
  );
}
