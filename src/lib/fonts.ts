import { JetBrains_Mono, Space_Grotesk } from "next/font/google";

// Vars "cruas" do next/font; `styles/theme/fonts.css` as remapeia para os tokens
// Tailwind --font-sans / --font-mono via `@theme inline`.
const fontSans = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-family-sans",
});

const fontMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-family-mono",
});

export const fontVariables = [fontSans.variable, fontMono.variable];
