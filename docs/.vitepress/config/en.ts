import { defineConfig, type DefaultTheme } from "vitepress";
export const en = defineConfig({
  lang: "en-US",
  description: "Vite & Vue powered static site generator.",
  themeConfig: {
    // 展示 2,3 级标题在目录中
    outline: {
      level: [2, 3],
      label: "目录",
    },
    editLink: {
      pattern: "https://github.com/vuejs/vitepress/edit/main/docs/:path",
      text: "在 GitHub 上编辑此页面",
    },
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

    langMenuLabel: "多语言",
    returnToTopLabel: "回到顶部",
    sidebarMenuLabel: "菜单",
    darkModeSwitchLabel: "主题",
    lightModeSwitchTitle: "切换到浅色模式",
    darkModeSwitchTitle: "切换到深色模式",
  },
});

function nav(): DefaultTheme.NavItem[] {
  return [
    {
      text: "指南",
      link: "/en/guide/what-is-vitepress",
      activeMatch: "/en/guide/",
    },
    {
      text: "参考",
      link: "/en/reference/site-config",
      activeMatch: "/en/reference/",
    },
    {
      text: "版本更新English",
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
    { text: "配置和 API 参考", base: "/en/reference/", link: "site-config" },
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
          base: "/en/reference/default-theme-",
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
  en: {
    placeholder: "Search Documents",
    translations: {
      button: {
        buttonText: "Search Documents",
        buttonAriaLabel: "Search Documents",
      },
      modal: {
        searchBox: {
          resetButtonTitle: "Clear query conditions",
          resetButtonAriaLabel: "Clear query conditions",
          cancelButtonText: "cancel",
          cancelButtonAriaLabel: "cancel",
        },
        startScreen: {
          recentSearchesTitle: "Search history",
          noRecentSearchesText: "No search history",
          saveRecentSearchButtonTitle: "Save to search history",
          removeRecentSearchButtonTitle: "Remove from search history",
          favoriteSearchesTitle: "collect",
          removeFavoriteSearchButtonTitle: "Remove from favorites",
        },
        errorScreen: {
          titleText: "Unable to obtain results",
          helpText: "You may need to check your network connection",
        },
        footer: {
          selectText: "choose",
          navigateText: "switch",
          closeText: "close",
          searchByText: "Search Provider",
        },
        noResultsScreen: {
          noResultsText: "No relevant results found",
          suggestedQueryText: "You can try to query",
          reportMissingResultsText: "You can try to query",
          reportMissingResultsLinkText: "Click for feedback",
        },
      },
    },
  },
};
