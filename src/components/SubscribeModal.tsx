"use client";

import { useEffect, useState } from "react";

type SubscribeModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

type SubmitStatus = "idle" | "loading" | "success" | "error";

export function SubscribeModal({ isOpen, onClose }: SubscribeModalProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (!isOpen) {
      return undefined;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        const payload = (await response.json()) as { error?: string };
        throw new Error(payload.error || "Something went wrong. Please try again.");
      }

      setStatus("success");
    } catch (error) {
      setStatus("error");
      setErrorMessage(error instanceof Error ? error.message : "Something went wrong.");
    }
  };

  const handleClose = () => {
    setEmail("");
    setStatus("idle");
    setErrorMessage("");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#0A0A0A]/60 px-6">
      <div className="w-full max-w-md rounded-2xl bg-[#FAFAFA] p-6 shadow-2xl">
        <div className="flex items-start justify-between">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-widest text-[#0A0A0A]/50">
              Writings
            </p>
            <h2 className="mt-2 text-2xl leading-tight tracking-[-0.02em] text-[#0A0A0A]">
              Subscribe for updates
            </h2>
          </div>
          <button
            type="button"
            onClick={handleClose}
            className="rounded-full border border-[#0A0A0A]/10 px-3 py-1 text-xs text-[#0A0A0A]/70 transition-colors hover:text-[#0A0A0A]"
          >
            Close
          </button>
        </div>

        {status === "success" ? (
          <div className="mt-6 space-y-4">
            <p className="text-sm leading-relaxed text-[#0A0A0A]/70">
              You are in. Check your inbox for a welcome note.
            </p>
            <button
              type="button"
              onClick={handleClose}
              className="inline-flex items-center rounded bg-[#0A0A0A] px-4 py-2 text-[13px] font-medium text-[#FAFAFA] transition-colors duration-200 hover:bg-[#0A0A0A]/90"
            >
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <label className="block text-xs uppercase tracking-widest text-[#0A0A0A]/50">
              Email
              <input
                type="email"
                name="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
                placeholder="you@domain.com"
                className="mt-2 w-full rounded-lg border border-[#0A0A0A]/15 bg-white px-3 py-2 text-sm text-[#0A0A0A] outline-none transition-colors focus:border-[#0A0A0A]/40"
              />
            </label>
            {status === "error" && (
              <p className="text-sm text-[#B42318]">{errorMessage}</p>
            )}
            <button
              type="submit"
              disabled={status === "loading"}
              className="inline-flex items-center rounded bg-[#0A0A0A] px-4 py-2 text-[13px] font-medium text-[#FAFAFA] transition-colors duration-200 hover:bg-[#0A0A0A]/90 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {status === "loading" ? "Sending..." : "Subscribe"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
