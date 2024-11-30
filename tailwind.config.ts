import { nextui } from "@nextui-org/react";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e6f1fe',
          100: '#cce3fd',
          200: '#99c7fb',
          300: '#66aaf9',
          400: '#338ef7',
          500: '#007BFF',
          600: '#0056b3',
          700: '#004494',
          800: '#003366',
          900: '#001f3f',
        },
        secondary: {
          50: '#edf5ff',
          100: '#e6f0ff',
          200: '#d5e4ff',
          300: '#b3ceff',
          400: '#709dff',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
      },
    },
  },
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            background: "#FFFFFF",
            foreground: "#11181C",
            primary: {
              50: '#e6f1fe',
              100: '#cce3fd',
              200: '#99c7fb',
              300: '#66aaf9',
              400: '#338ef7',
              DEFAULT: '#007BFF',
              500: '#007BFF',
              600: '#0056b3',
              700: '#004494',
              800: '#003366',
              900: '#001f3f',
            },
            focus: '#007BFF',
          },
        },
        dark: {
          colors: {
            background: "#0C0F17",
            foreground: "#ECEDEE",
            primary: {
              50: '#e6f1fe',
              100: '#cce3fd',
              200: '#99c7fb',
              300: '#66aaf9',
              400: '#338ef7',
              DEFAULT: '#007BFF',
              500: '#007BFF',
              600: '#0056b3',
              700: '#004494',
              800: '#003366',
              900: '#001f3f',
            },
            focus: '#007BFF',
          },
        },
      },
    }),
  ],
};

export default config;
