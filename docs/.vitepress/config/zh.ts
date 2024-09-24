import { defineConfig, type DefaultTheme } from "vitepress";
import { blogTheme } from "../blog-theme";
export const zh = defineConfig({
  extends: blogTheme,
  lang: "zh-Hans",
  description: "由 Vite 和 Vue 驱动的静态站点生成器",
  base: "/safety/",
  themeConfig: {
    // 展示 2,3 级标题在目录中
    outline: {
      level: [2, 3],
      label: "目录",
    },
    editLink: {
      pattern:
        "https://github.com/ATQQ/sugar-blog/tree/master/packages/blogpress/:path",
      text: "去 GitHub 上编辑内容",
    },
    // 内置离线全文搜索
    // search: {
    //   provider: "local",
    // },
    nav: nav(),
    footer: {
      message: "基于 MIT 许可发布",
      copyright: `版权所有 © 2019-${new Date().getFullYear()} 小十三`,
    },

    docFooter: {
      prev: "上一页",
      next: "下一页",
    },

    lastUpdated: {
      text: "最后更新于",
      formatOptions: {
        dateStyle: "short",
        timeStyle: "medium",
      },
    },
    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/ATQQ/sugar-blog/tree/master/packages/theme",
      },
    ],

    langMenuLabel: "多语言",
    // 默认文案修改
    returnToTopLabel: "回到顶部",
    sidebarMenuLabel: "菜单",
    lastUpdatedText: "上次更新于",
    darkModeSwitchLabel: "主题",
    lightModeSwitchTitle: "切换到浅色模式",
    darkModeSwitchTitle: "切换到深色模式",
  },
});

function nav(): DefaultTheme.NavItem[] {
  return [
    {
      text: "前端面经",
      activeMatch: "zh/interview",
      items: [
        {
          text: "基础进阶",
          link: "zh/interview/basicAdvanced/index",
          // activeMatch: "zh/base/",
          // items: [
          //   {
          //     text: "基础篇",
          //     link: "zh/base/base",
          //   },
          //   {
          //     text: "进阶篇",
          //     link: "zh/base/improve",
          //   },
          // ],
        },
        {
          //精选模块
          text: "精选模块",
          link: "zh/interview/featuredModules/index",
        },
        {
          text: "情景再现",
          link: "zh/base/advanced/index",
        },
      ],

      // items: [
      //   {
      //     text: "基础篇",
      //     link: "zh/base/base",
      //   },
      //   {
      //     text: "进阶篇",
      //     link: "zh/base/advanced",
      //   },
      // ],
    },
    {
      text: "🍉指南",
      link: "zh/guide/what-is-vitepress",
      activeMatch: "guide/",
    },
    {
      text: "参考",
      link: "zh/reference/site-config",
      activeMatch: "reference/",
    },
    {
      text: "版本更新",
      items: [
        {
          text: "更新日志",
          link: "https://github.com/vuejs/vitepress/blob/main/CHANGELOG.md",
        },
        {
          text: "参与贡献",
          link: "https://github.com/vuejs/vitepress/blob/main/.github/contributing.md",
        },
      ],
    },
  ];
}

function sidebarBase(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: "基础进阶",
      collapsed: false,
      items: [
        { text: "基础篇", link: "1-base" },
        { text: "进阶篇", link: "2-advanced" },
        { text: "高频篇", link: "3-highFrequency" },
        { text: "综合题型篇", link: "4-comprehensive" },
        { text: "手写篇", link: "5-handwriting" },
      ],
    },
  ];
}
function sidebarGuide(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: "简介",
      collapsed: false,
      items: [
        { text: "什么是 VitePress？", link: "what-is-vitepress" },
        { text: "快速开始", link: "getting-started" },
        { text: "路由", link: "routing" },
        { text: "部署", link: "deploy" },
      ],
    },
    {
      text: "写作",
      collapsed: false,
      items: [
        { text: "Markdown 扩展", link: "markdown" },
        { text: "资源处理", link: "asset-handling" },
        { text: "frontmatter", link: "frontmatter" },
        { text: "在 Markdown 使用 Vue", link: "using-vue" },
        { text: "国际化", link: "i18n" },
      ],
    },
    {
      text: "自定义",
      collapsed: false,
      items: [
        { text: "自定义主题", link: "custom-theme" },
        { text: "扩展默认主题", link: "extending-default-theme" },
        { text: "构建时数据加载", link: "data-loading" },
        { text: "SSR 兼容性", link: "ssr-compat" },
        { text: "连接 CMS", link: "cms" },
      ],
    },
    {
      text: "实验性功能",
      collapsed: false,
      items: [
        { text: "MPA 模式", link: "mpa-mode" },
        { text: "sitemap 生成", link: "sitemap-generation" },
      ],
    },
    { text: "配置和 API 参考", base: "/reference/", link: "site-config" },
  ];
}

function sidebarReference(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: "参考",
      items: [
        { text: "站点配置", link: "site-config" },
        { text: "frontmatter 配置", link: "frontmatter-config" },
        { text: "运行时 API", link: "runtime-api" },
        { text: "CLI", link: "cli" },
        {
          text: "默认主题",
          base: "/reference/default-theme-",
          items: [
            { text: "概览", link: "config" },
            { text: "导航栏", link: "nav" },
            { text: "侧边栏", link: "sidebar" },
            { text: "主页", link: "home-page" },
            { text: "页脚", link: "footer" },
            { text: "布局", link: "layout" },
            { text: "徽章", link: "badge" },
            { text: "团队页", link: "team-page" },
            { text: "上下页链接", link: "prev-next-links" },
            { text: "编辑链接", link: "edit-link" },
            { text: "最后更新时间戳", link: "last-updated" },
            { text: "搜索", link: "search" },
            { text: "Carbon Ads", link: "carbon-ads" },
          ],
        },
      ],
    },
  ];
}

export const search: DefaultTheme.AlgoliaSearchOptions["locales"] = {
  zh: {
    placeholder: "搜索文档",
    translations: {
      button: {
        buttonText: "搜索文档",
        buttonAriaLabel: "搜索文档",
      },
      modal: {
        searchBox: {
          resetButtonTitle: "清除查询条件",
          resetButtonAriaLabel: "清除查询条件",
          cancelButtonText: "取消",
          cancelButtonAriaLabel: "取消",
        },
        startScreen: {
          recentSearchesTitle: "搜索历史",
          noRecentSearchesText: "没有搜索历史",
          saveRecentSearchButtonTitle: "保存至搜索历史",
          removeRecentSearchButtonTitle: "从搜索历史中移除",
          favoriteSearchesTitle: "收藏",
          removeFavoriteSearchButtonTitle: "从收藏中移除",
        },
        errorScreen: {
          titleText: "无法获取结果",
          helpText: "你可能需要检查你的网络连接",
        },
        footer: {
          selectText: "选择",
          navigateText: "切换",
          closeText: "关闭",
          searchByText: "搜索提供者",
        },
        noResultsScreen: {
          noResultsText: "无法找到相关结果",
          suggestedQueryText: "你可以尝试查询",
          reportMissingResultsText: "你认为该查询应该有结果？",
          reportMissingResultsLinkText: "点击反馈",
        },
      },
    },
  },
};
