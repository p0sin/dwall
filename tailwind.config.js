import { defineConfig } from "tailwindcss";
import daisyui from "daisyui";

export default defineConfig({
  content: [
    "./src/**/*.{astro,js,jsx,ts,tsx,mdx,md}",
    "./public/**/*.html"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
});
