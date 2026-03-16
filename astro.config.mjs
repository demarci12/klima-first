import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://klimafirst.hu",
  output: "static",
  integrations: [
    tailwind(),
    sitemap({
      changefreq: "weekly",
      priority: 0.7,
      lastmod: new Date(),
      customPages: [
        "https://klimafirst.hu/",
        // Dynamic district pages are auto-generated via getStaticPaths
      ],
      filter: (page) => !page.includes("/404") && !page.includes("/thank-you"),
      serialize(item) {
        if (item.url === "https://klimafirst.hu/") {
          return { ...item, priority: 1.0, changefreq: "daily" };
        }
        if (item.url.includes("/budapest/")) {
          return { ...item, priority: 0.8, changefreq: "monthly" };
        }
        if (item.url.includes("/szolgaltatasok/") || item.url.includes("/arak")) {
          return { ...item, priority: 0.9, changefreq: "weekly" };
        }
        if (item.url.includes("/tudastar/")) {
          return { ...item, priority: 0.6, changefreq: "monthly" };
        }
        return item;
      },
    }),
  ],
  redirects: {
    "/szolgaltatasok": "/szolgaltatasok/klima-telepites",
    "/blog": "/tudastar",
    "/blog/[slug]": "/tudastar/[slug]",
  },
});
