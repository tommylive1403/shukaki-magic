"use client";

import { useEffect, useState } from "react";
import { ToggleButton, useTheme } from "@once-ui-system/core";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [current, setCurrent] = useState("light");

  useEffect(() => {
    setCurrent(
      document.documentElement.getAttribute("data-theme") || "light"
    );
  }, [theme]);

  return (
    <ToggleButton
      prefixIcon={current === "dark" ? "light" : "dark"}
      onClick={() => setTheme(current === "dark" ? "light" : "dark")}
      aria-label="Toggle theme"
    />
  );
}