import { Globe } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { applySiteLanguage } from "@/lib/googleTranslate";

type Lang = "en" | "mr";

const LanguageToggle = ({
  className = "",
  variant = "light",
}: {
  className?: string;
  variant?: "light" | "dark";
}) => {
  const [lang, setLang] = useState<Lang>("en");
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    const saved = (localStorage.getItem("site-lang") as Lang) || "en";
    setLang(saved);
    if (saved === "mr") {
      applySiteLanguage("mr").catch(() => {});
    }
  }, []);

  const setLanguage = useCallback(async (next: Lang) => {
    if (busy) return;
    setBusy(true);
    setLang(next);
    try {
      await applySiteLanguage(next);
    } finally {
      setBusy(false);
    }
  }, [busy]);

  const shell =
    variant === "dark"
      ? "border-white/30 bg-white/10"
      : "border-stone-200 bg-white shadow-sm";
  const active =
    variant === "dark" ? "bg-white text-slate-900" : "bg-slate-800 text-white shadow-sm";
  const inactive =
    variant === "dark"
      ? "text-white hover:bg-white/20"
      : "text-stone-700 hover:text-slate-900 hover:bg-stone-100";

  return (
    <div
      className={`inline-flex items-center rounded-full border p-0.5 ${shell} ${className}`}
      role="radiogroup"
      aria-label="Choose language"
    >
      <Globe className="h-3.5 w-3.5 text-stone-500 ml-2 mr-1 shrink-0 hidden sm:block" aria-hidden="true" />
      {(["en", "mr"] as const).map((code) => (
        <button
          key={code}
          type="button"
          role="radio"
          disabled={busy}
          onClick={() => setLanguage(code)}
          className={`px-2.5 sm:px-3 py-1.5 text-xs sm:text-sm font-medium rounded-full transition-all duration-200 disabled:opacity-60 ${
            lang === code ? active : inactive
          }`}
          aria-checked={lang === code}
        >
          {code === "en" ? "English" : "मराठी"}
        </button>
      ))}
    </div>
  );
};

export default LanguageToggle;
