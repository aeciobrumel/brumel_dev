import { JetBrains_Mono, Space_Grotesk } from "next/font/google";

// Vars "cruas" do next/font; `styles/theme/fonts.css` as remapeia para os tokens
// Tailwind --font-sans / --font-mono via `@theme inline`.
const fontSans = Space_Grotesk({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-family-sans",
});

const fontMono = JetBrains_Mono({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-family-mono",
});

export const fontVariables = [fontSans.variable, fontMono.variable];
