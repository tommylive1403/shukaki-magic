import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import { formatDate } from "../formatDate";

process.env.TZ = "UTC";

describe("formatDate", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it("handles dates without a T separator", () => {
    vi.setSystemTime(new Date("2024-05-10T12:00:00Z"));

    const result = formatDate("2024-05-10");
    const expected = new Date("2024-05-10T00:00:00").toLocaleString("en-us", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });

    expect(result).toBe(expected);
  });

  it("returns only the full date when includeRelative is false", () => {
    vi.setSystemTime(new Date("2024-05-10T12:00:00Z"));

    const result = formatDate("2024-05-10", false);

    expect(result).not.toContain("(");
  });

  it("includes relative Today text when includeRelative is true", () => {
    vi.setSystemTime(new Date("2024-05-10T12:00:00Z"));

    const fullDate = new Date("2024-05-10T00:00:00").toLocaleString("en-us", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });

    expect(formatDate("2024-05-10", true)).toBe(`${fullDate} (Today)`);
  });

  it("formats months and years ago correctly", () => {
    vi.setSystemTime(new Date("2024-06-15T00:00:00Z"));

    const monthsDate = new Date("2024-04-15T00:00:00").toLocaleString("en-us", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
    const yearsDate = new Date("2022-06-15T00:00:00").toLocaleString("en-us", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });

    expect(formatDate("2024-04-15", true)).toBe(`${monthsDate} (2mo ago)`);
    expect(formatDate("2022-06-15", true)).toBe(`${yearsDate} (2y ago)`);
  });
});
