import { defineConfig } from "vitepress";
import { search as enSearch, en } from "./en";
import { search as zhSearch, zh } from "./zh";
import { blogTheme } from "../blog-theme";

const base = "/safety/";
export const shared = defineConfig({
  extends: blogTheme,
  base,
  title: "safety",
  rewrites: {
    "zh/:rest*": ":rest*",
  }, //路径重写
  ignoreDeadLinks: true, //忽略死链接造成的构建失败
  lastUpdated: true,
  cleanUrls: true,
  metaChunk: true,
  markdown: {
    math: true,
    codeTransformers: [
      // We use `[!!code` in demo to prevent transformation, here we revert it back.
      {
        postprocess(code) {
          return code.replace(/\[\!\!code/g, "[!code");
        },
      },
    ],
  },
  head: [
    // 配置网站的图标（显示在浏览器的 tab 上）
    ["link", { rel: "icon", href: `${base}favicon.ico` }], // 修改了 base 这里也需要同步修改
    // ["link", { rel: "icon", href: "/safety/favicon.ico" }],
    // 移动栏优化
    [
      "meta",
      {
        name: "viewport",
        content: "width=device-width,initial-scale=1,user-scalable=no",
      },
    ],
    // 引入jquery
    [
      "script",
      {
        language: "javascript",
        type: "text/javascript",
        src: "/safety/js/jquery.js",
      },
    ],
    // 引入鼠标点击脚本
    [
      "script",
      {
        language: "javascript",
        type: "text/javascript",
        src: "/safety/js/MouseClickEffect.js",
      },
    ],
  ],
  themeConfig: {
    logo: "/logo.png",

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],

    search: {
      provider: "algolia",
      options: {
        appId: "8J64VVRP8K",
        apiKey: "a18e2f4cc5665f6602c5631fd868adfd",
        indexName: "vitepress",
        locales: {
          ...enSearch,
        },
      },
    },
    carbonAds: { code: "CEBDT27Y", placement: "vuejsorg" },
  },

  //多语言
  locales: {
    root: {
      label: "简体中文",
      lang: "zh-Hans",
      link: "/zh/",
      ...zh,
    },
    en: {
      label: "English",
      lang: "en-US",
      link: "/en/",
      ...en,
    },
  },
});
