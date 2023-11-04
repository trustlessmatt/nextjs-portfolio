import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#000000",
        secondary: "#C3CBD6",
        data: "#E6843C",
      },
    },
    fontFamily: {
      base: ["charter", "-apple-system", "system-ui", "monospace"],
      "base-b": ["charter-bold", "-apple-system", "system-ui", "monospace"],
      "base-i": ["charter-italic", "-apple-system", "system-ui", "monospace"],
    },
  },
  plugins: [],
};
export default config;
