import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#171B26",
        "ink-soft": "#5B6273",
        "ink-faint": "#9BA1B0",
        paper: "#F1F2F6",
        surface: "#FFFFFF",
        line: "#E3E5EC",
        route: {
          DEFAULT: "#2F4CDD",
          soft: "#E9EDFE",
          dim: "#B9C3F7"
        },
        amber: {
          DEFAULT: "#B4720C",
          soft: "#FBF0DC"
        },
        moss: {
          DEFAULT: "#1F7A52",
          soft: "#E4F4EC"
        },
        rust: {
          DEFAULT: "#B23A34",
          soft: "#FAEAE9"
        }
      },
      fontFamily: {
        sans: ["Manrope", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "ui-monospace", "SFMono-Regular", "monospace"]
      },
      boxShadow: {
        card: "0 1px 2px rgba(23, 27, 38, 0.04), 0 8px 24px -12px rgba(23, 27, 38, 0.12)",
        bar: "0 -8px 24px -12px rgba(23, 27, 38, 0.18)"
      },
      maxWidth: {
        device: "430px"
      }
    }
  },
  plugins: []
};

export default config;
