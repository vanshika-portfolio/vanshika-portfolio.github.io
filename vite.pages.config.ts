import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    prerender: { enabled: true, crawlLinks: true },
    pages: [{ path: "/", prerender: { enabled: true } }],
  },
  nitro: { preset: "static" },
  vite: { base: process.env.PAGES_BASE || "/" },
});
