import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";
import { defineConfig } from "astro/config";
import { seoConfig } from "./src/utils/seoConfig";


export default defineConfig({
  integrations: [tailwind({
    applyBaseStyles: false
  }), react()],
  output: "hybrid",
  image: {
    domains: ["us-east-1-shared-usea1-02.graphassets.com"]
  },
  adapter: vercel(),
  site: seoConfig.baseURL
});