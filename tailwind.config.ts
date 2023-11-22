import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    colors: {
      "orange-light": "#FFD5AE",
      orange: "#FFB15D",
      "orange-dark": "#FF6E00",
      "orange-darker": "#7D3200",
      "green-light": "#CBF2C7",
      green: "#97DF92",
      "green-dark": "#47C442",
      "green-darker": "#005800",
      "blue-light": "#A1EEFF",
      blue: "#53CCFD",
      "blue-dark": "#00B8FF",
      "blue-darker": "#00588A",
      "violet-light": "#EAE4F6",
      violet: "#B69EEA",
      "violet-dark": "#8C80FF",
      "violet-darker": "#27154E",
    },
  },
  plugins: [],
};
export default config;
