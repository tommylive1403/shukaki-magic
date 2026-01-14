import type {
  DataStyleConfig,
  DisplayConfig,
  EffectsConfig,
  FontsConfig,
  MailchimpConfig,
  ProtectedRoutesConfig,
  RoutesConfig,
  SameAsConfig,
  SchemaConfig,
  SocialSharingConfig,
  StyleConfig,
} from "@/types";

import { Geist } from "next/font/google";
import { Geist_Mono } from "next/font/google";

// IMPORTANT: Replace with your own domain address - it's used for SEO in meta tags and schema
export const baseURL: string = "https://shukaki-magic.vercel.app";

export const routes: RoutesConfig = {
  "/": true,
  "/about": false,
  "/work": false,
  "/blog": false,
  "/gallery": false,
};

export const protectedRoutes: ProtectedRoutesConfig = {};

export const display: DisplayConfig = {
  location: true,
  time: true,
  themeSwitcher: true,
};

// Fonts
const heading = Geist({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

const body = Geist({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const label = Geist({
  variable: "--font-label",
  subsets: ["latin"],
  display: "swap",
});

const code = Geist_Mono({
  variable: "--font-code",
  subsets: ["latin"],
  display: "swap",
});

export const fonts: FontsConfig = {
  heading,
  body,
  label,
  code,
};

// Theme styling
export const style: StyleConfig = {
  theme: "system",
  neutral: "slate",
  brand: "cyan",
  accent: "aqua",
  solid: "contrast",
  solidStyle: "flat",
  border: "playful",
  surface: "translucent",
  transition: "all",
  scaling: "100",
};

export const dataStyle: DataStyleConfig = {
  variant: "gradient",
  mode: "categorical",
  height: 24,
  axis: { stroke: "var(--neutral-alpha-weak)" },
  tick: {
    fill: "var(--neutral-on-background-weak)",
    fontSize: 11,
    line: false,
  },
};

export const effects: EffectsConfig = {
  mask: { cursor: false, x: 50, y: 0, radius: 100 },
  gradient: {
    display: false,
    opacity: 100,
    x: 50,
    y: 60,
    width: 100,
    height: 50,
    tilt: 0,
    colorStart: "accent-background-strong",
    colorEnd: "page-background",
  },
  dots: {
    display: true,
    opacity: 40,
    size: "2",
    color: "brand-background-strong",
  },
  grid: {
    display: false,
    opacity: 100,
    color: "neutral-alpha-medium",
    width: "0.25rem",
    height: "0.25rem",
  },
  lines: {
    display: false,
    opacity: 100,
    color: "neutral-alpha-weak",
    size: "16",
    thickness: 1,
    angle: 45,
  },
};

export const mailchimp: MailchimpConfig = {
  action: "",
  effects: effects,
};

// default schema data
export const schema: SchemaConfig = {
  logo: "/logo.png", // ВАЖЛИВО: шлях має бути web-path, не "public/..."
  type: "Organization",
  name: "Собаки Шукаки",
  description: "Підрозділ безпілотних систем",
  email: "",
};

export const sameAs: SameAsConfig = {
  threads: "",
  linkedin: "",
  discord: "",
};

export const socialSharing: SocialSharingConfig = {
  display: true,
  platforms: {
    x: false,
    linkedin: false,
    facebook: true,
    pinterest: false,
    whatsapp: false,
    reddit: false,
    telegram: true,
    email: false,
    copyLink: true,
  },
};