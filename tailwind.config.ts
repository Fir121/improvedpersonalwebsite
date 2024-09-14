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
        background: "var(--background)",
        foreground: "var(--foreground)",
        "light-black": "var(--light-black)",
        accent: "var(--accent)",
        "light-accent": "var(--light-accent)",
        "dark-accent": "var(--dark-accent)",
        "background-trans": "var(--background-trans)"
      },
    },
  },
  plugins: [],
};
export default config;
