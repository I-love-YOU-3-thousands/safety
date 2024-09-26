import { defineConfig } from "vitepress";
import { shared } from "./config/shared";
import { blogTheme } from "./blog-theme";
// export default shared;
import { en } from "./config/en";
import { zh } from "./config/zh";

export default defineConfig({
  base: "/safety/",
  extends: blogTheme,
  ...shared,
  locales: {
    root: {
      label: "简体中文",
      lang: "zh-Hans",
      ...zh,
    },
    // en: { label: "English", lang: "en-US", ...en },
  },
});
