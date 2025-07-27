// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import { loadEnv } from "vite";
const { IMAGE_DOMAIN } = loadEnv(process.env.NODE_ENV ?? "development", process.cwd(), "");
// https://astro.build/config
export default defineConfig({
  image: {
    domains: [IMAGE_DOMAIN],
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
