import { defineConfig } from "vitepress";
import { zh } from "./config/zh";
import { shared } from "./config/shared";
// import { en } from "./config/en";

export default shared;
//  defineConfig({
//   extends: shared,
//   // //多语言
//   // locales: {
//   //   root: {
//   //     label: "简体中文",
//   //     lang: "zh-Hans",
//   //     link: "/",
//   //   },
//   //   en: {
//   //     label: "English",
//   //     lang: "en-US",
//   //     link: "/en/",
//   //   },
//   // },
//   themeConfig: {
//     nav: [
//       // {
//       //   text: "🌟 参考",
//       //   items: [
//       //     {
//       //       // 分组标题1
//       //       text: "基础用法",
//       //       items: [
//       //         { text: "简体中文", link: "/" },
//       //         { text: "English", link: "/en/" },
//       //       ],
//       //     },
//       //   ],
//       // },
//       {
//         text: "🍉指南",
//         items: [
//           {
//             // 分组标题1
//             text: "介绍",
//             items: [{ text: "前言", link: "/preface" }],
//           },
//           {
//             // 分组标题2
//             text: "基础设置",
//             items: [
//               { text: "快速上手", link: "/getting-started" },
//               { text: "配置", link: "/configuration" },
//               { text: "页面", link: "/page" },
//               { text: "Frontmatter", link: "/frontmatter" },
//             ],
//           },
//           {
//             // 分组标题3
//             text: "进阶玩法",
//             items: [
//               { text: "Markdown", link: "/markdown" },
//               { text: "团队", link: "/team" },
//               { text: "静态部署", link: "/assets" },
//               { text: "样式美化", link: "/style" },
//               { text: "组件", link: "/components" },
//               { text: "布局插槽", link: "/layout" },
//               { text: "插件", link: "/plugin" },
//               { text: "更新及卸载", link: "/update" },
//               { text: "搭建导航", link: "/nav/" },
//             ],
//           },
//         ],
//       },
//     ],
//     // search: {
//     //   provider: "local",
//     //   options: {
//     //     translations: {
//     //       button: {
//     //         buttonText: "搜索文档",
//     //         buttonAriaLabel: "搜索文档",
//     //       },
//     //       modal: {
//     //         noResultsText: "无法找到相关结果",
//     //         resetButtonTitle: "清除查询条件",
//     //         footer: {
//     //           selectText: "选择",
//     //           navigateText: "切换",
//     //         },
//     //       },
//     //     },
//     //   },
//     // },
//   },
// });

// import { defineConfig } from "vitepress";
// // import { zh } from "./config/index";
// // 导入主题的配置
// import { blogTheme } from "./blog-theme";

// // 如果使用 GitHub/Gitee Pages 等公共平台部署
// // 通常需要修改 base 路径，通常为“/仓库名/”
// // 如果项目名已经为 name.github.io 域名，则不需要修改！
// // const base = process.env.GITHUB_ACTIONS === 'true'
// //   ? '/vitepress-blog-sugar-template/'
// //   : '/'

// // Vitepress 默认配置
// // 详见文档：https://vitepress.dev/reference/site-config
// export default defineConfig({
//   // 继承博客主题(@sugarat/theme)
//   extends: blogTheme,
//   // base,
//   lang: "zh-CN",
//   title: "safety",
//   description: "safety的博客主题，基于 vitepress 实现",
//   lastUpdated: true,
//   // 详见：https://vitepress.dev/zh/reference/site-config#head
//   head: [
//     // 配置网站的图标（显示在浏览器的 tab 上）
//     // ['link', { rel: 'icon', href: `${base}favicon.ico` }], // 修改了 base 这里也需要同步修改
//     ["link", { rel: "icon", href: "/favicon.ico" }],
//   ],
//   locales: {
//     // root: { label: "简体中文", ...zh },
//     // "/": {
//     //   label:'简体中文'
//     //   selectLanguageName: "简体中文",
//     //   selectLanguageText: "选择语言",
//     //   navbar: zhNavbar,
//     //   sidebar: zhSidebar,
//     //   notFound: ["没找到", "网页走丢了"],
//     //   backToHome: "返回首页",
//     // },
//     // "/en/": {
//     //   selectLanguageName: "English",
//     //   selectLanguageText: "English",
//     //   navbar: enNavbar,
//     //   sidebar: enSidebar,
//     // },
//   },
//   themeConfig: {
//     // 展示 2,3 级标题在目录中
//     outline: {
//       level: [2, 3],
//       label: "目录",
//     },
//     // 内置离线全文搜索
//     search: {
//       provider: "local",
//     },
//     // 默认文案修改
//     returnToTopLabel: "回到顶部",
//     sidebarMenuLabel: "相关文章",
//     lastUpdatedText: "上次更新于",

//     // 设置logo
//     logo: "/logo.png",
//     // editLink: {
//     //   pattern:
//     //     'https://github.com/ATQQ/sugar-blog/tree/master/packages/blogpress/:path',
//     //   text: '去 GitHub 上编辑内容'
//     // },

//     nav: [
//       { text: "首页", link: "/" },
//       { text: "关于作者", link: "https://sugarat.top/aboutme.html" },
//     ],
//     socialLinks: [
//       {
//         icon: "github",
//         link: "https://github.com/ATQQ/sugar-blog/tree/master/packages/theme",
//       },
//     ],
//   },
// });
