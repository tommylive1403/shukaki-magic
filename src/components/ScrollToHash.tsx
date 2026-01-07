"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

export default function ScrollToHash() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // Даємо DOM “дихнути” після навігації/рендеру
    const id = window.location.hash?.replace("#", "");
    if (!id) return;

    const el = document.getElementById(id);
    if (!el) return;

    // М’який скрол + невеликий offset під fixed header
    const y = el.getBoundingClientRect().top + window.scrollY - 96;
    window.scrollTo({ top: y, behavior: "smooth" });
  }, [pathname, searchParams]);

  return null;
}
