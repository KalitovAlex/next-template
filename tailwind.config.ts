import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";

export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          400: "#7C3AED", // Light mode primary
          900: "#2E1065", // Dark mode primary
        },
        secondary: {
          400: "#EC4899", // Light mode secondary
          900: "#831843", // Dark mode secondary
        },
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
} satisfies Config;
