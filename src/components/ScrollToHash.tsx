"use client";

import { useEffect } from "react";

export function ScrollToHash() {
  useEffect(() => {
    const scroll = () => {
      const id = window.location.hash.replace("#", "");
      if (!id) return;
      const el = document.getElementById(id);
      if (!el) return;

      const offset = 96;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    };

    scroll();
    window.addEventListener("hashchange", scroll);
    return () => window.removeEventListener("hashchange", scroll);
  }, []);

  return null;
}