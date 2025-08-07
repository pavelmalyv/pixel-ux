import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import checker from "vite-plugin-checker";
import tailwindcss from "@tailwindcss/vite";
import flowbiteReact from "flowbite-react/plugin/vite";
import svgr from "vite-plugin-svgr";

// https://vite.dev/config/
export default defineConfig({
  base: "/pixel-ux/",
  resolve: {
    alias: {
      "@shared": "/src/shared",
      "@assets": "/src/assets",
      "@img": "/src/assets/img",
      "@pages": "/src/pages",
      "@modules": "/src/modules",
      "@components": "/src/components",
      "@UI": "/src/UI",
      "@": "/src",
    },
  },
  plugins: [
    svgr(),
    react(),
    tailwindcss(),
    flowbiteReact(),
    checker({
      typescript: true,
      eslint: {
        lintCommand: 'eslint "./src/**/*.{ts,tsx}"',
        useFlatConfig: true,
      },
    }),
  ],
});
