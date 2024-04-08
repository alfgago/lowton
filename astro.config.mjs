import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";
import { defineConfig } from "astro/config";
import { seoConfig } from "./src/utils/seoConfig";

// https://astro.build/config
export default defineConfig({
	integrations: [
		tailwind({
			applyBaseStyles: false,
		}),
		react(),
	],
	output: "hybrid",
	adapter: vercel(),
	site: seoConfig.baseURL,
});
