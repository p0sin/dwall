import { defineConfig } from "tailwindcss";

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
