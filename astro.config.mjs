import partytown from '@astrojs/partytown';
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";
import { defineConfig } from "astro/config";
import { seoConfig } from "./src/utils/seoConfig";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind({
    applyBaseStyles: false
  }), react(), partytown({
    config: {
      forward: ["dataLayer.push"]
    }
  }), sitemap()],
  output: "hybrid",
  image: {
    domains: ["us-east-1-shared-usea1-02.graphassets.com"]
  },
  adapter: vercel(),
  site: seoConfig.baseURL
});