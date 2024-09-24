// 主题独有配置
import { getThemeConfig } from "@sugarat/theme/node";

// 开启RSS支持（RSS配置）
// import type { Theme } from '@sugarat/theme'

// const baseUrl = 'https://sugarat.top'
// const RSS: Theme.RSSOptions = {
//   title: '小十三',
//   baseUrl,
//   copyright: 'Copyright (c) 2018-present, 小十三',
//   description: '你的指尖,拥有改变世界的力量（大前端相关技术分享）',
//   language: 'zh-cn',
//   image: 'https://img.cdn.sugarat.top/mdImg/MTY3NDk5NTE2NzAzMA==674995167030',
//   favicon: 'https://sugarat.top/favicon.ico',
// }

// 所有配置项，详见文档: https://theme.sugarat.top/
const blogTheme = getThemeConfig({
  // 开启RSS支持
  // RSS,

  // 搜索
  // 默认开启pagefind离线的全文搜索支持（如使用其它的可以设置为false）
  // markdown 图表支持（会增加一定的构建耗时）
  // mermaid: true

  // 页脚

  oml2d: {
    mobileDisplay: true,
    models: [
      //看板娘模型列表
      {
        path: "https://registry.npmmirror.com/oml2d-models/latest/files/models/Senko_Normals/senko.model3.json",
      },
      {
        path: "https://model.oml2d.com/Pio/model.json",
        scale: 0.4,
        position: [0, 50],
        stageStyle: {
          height: 300,
        },
      },
      {
        path: "https://model.oml2d.com/shizuku/shizuku.model.json",
        scale: 0.2,
        volume: 0,
        position: [70, 70],
        stageStyle: {
          height: 370,
          width: 400,
        },
      },
      {
        path: "https://model.oml2d.com/shizuku_pajama/index.json",
        scale: 0.2,
        volume: 0,
        position: [40, 10],
        stageStyle: {
          height: 350,
          width: 330,
        },
      },
      {
        path: "https://model.oml2d.com/HK416-1-normal/model.json",
        position: [0, 60],
        scale: 0.08,
        stageStyle: {
          height: 450,
        },
      },
      {
        path: "https://model.oml2d.com/cat-black/model.json",
        scale: 0.15,
        position: [0, 20],
        stageStyle: {
          height: 350,
        },
      },
    ],
  },
  footer: {
    // message 字段支持配置为HTML内容，配置多条可以配置为数组
    // message: '下面 的内容和图标都是可以修改的噢（当然本条内容也是可以隐藏的）',
    copyright: "MIT License | safety",
    // icpRecord: {
    //   name: '蜀ICP备19011724号',
    //   link: 'https://beian.miit.gov.cn/'
    // },
    // securityRecord: {
    //   name: '公网安备xxxxx',
    //   link: 'https://www.beian.gov.cn/portal/index.do'
    // },
  },

  // 主题色修改
  themeColor: "el-blue",

  // 文章默认作者
  author: "小十三",
  // 首页右侧精选文章  设置为hotArticle: false 时不展示
  hotArticle: {
    title: "🔥 精选文章",
    nextText: "换一组",
    pageSize: 9,
    empty: "暂无精选内容",
  },
  // 配置评论
  comment: {
    type: "giscus",
    options: {
      repo: "I-love-YOU-3-thousands/safety",
      repoId: "R_kgDOMvUXiQ",
      category: "General",
      categoryId: "DIC_kwDOMvUXic4CivcI",
      inputPosition: "bottom",
    },
    mobileMinify: true,
  },

  // 侧边栏配置
  recommend: {
    showSelf: true,
    title: "🔍 推荐文章",
    nextText: "下一页",
    pageSize: 9,
    empty: "暂无相关文章",
    style: "sidebar",
    sort: "filename",
    showDate: true,
    showNum: true,
  },
  article: {
    /**
     * 是否展示文章的预计阅读时间
     */
    readingTime: true,
    /**
     * 是否隐藏文章页的封面展示
     */
    hiddenCover: false,
    /**
     * 阅读时间分析展示位置
     */
    readingTimePosition: "inline",
    /**
     * 自定义一系列文案标题
     */
    // analyzeTitles: {
    //   inlineWordCount: '{{value}} word counts',
    //   inlineReadTime: '{{value}} min read time',
    //   wordCount: 'Total word count',
    //   readTime: 'Total read time',
    //   author: 'Author',
    //   publishDate: 'Published on',
    //   lastUpdated: 'Last updated on',
    //   tag: 'Tags',
    // }
  },
  alert: {
    type: "success",
    title: "xx功能上新啦🎉",
    duration: 3000,
  },

  // 友链
  friend: {
    list: [
      {
        nickname: "粥里有勺糖",
        des: "你的指尖用于改变世界的力量",
        avatar:
          "https://img.cdn.sugarat.top/mdImg/MTY3NDk5NTE2NzAzMA==674995167030",
        url: "https://sugarat.top",
      },
      {
        nickname: "Vitepress",
        des: "Vite & Vue Powered Static Site Generator",
        avatar: "https://vitepress.dev/vitepress-logo-large.webp",
        url: "https://vitepress.dev/",
      },
    ],

    // 开启顺序随机
    random: true,
    // 限制列表只展示 5 个
    limit: 5,
    // 自定义滚动速度（可选）
    // scrollSpeed: 10000
  },

  // 公告
  popover: {
    title: "公告",
    body: [
      { type: "text", content: "👇公众号👇---👇 微信 👇" },
      {
        type: "image",
        src: "https://img.cdn.sugarat.top/mdImg/MTYxNTAxODc2NTIxMA==615018765210~fmt.webp",
      },
      {
        type: "text",
        content: "欢迎大家加群&私信交流",
      },
      {
        type: "text",
        content: "文章首/文尾有群二维码",
        style: "padding-top:0",
      },
      {
        type: "button",
        content: "作者博客",
        link: "https://sugarat.top",
      },
      {
        type: "button",
        content: "加群交流",
        props: {
          type: "success",
        },
        link: "https://theme.sugarat.top/group.html",
      },
    ],
    duration: 0,
  },

  buttonAfterArticle: {
    openTitle: "赞赏",
    closeTitle: "下次一定",
    content:
      '<img src="https://img.cdn.sugarat.top/mdImg/MTY0Nzc1NTYyOTE5Mw==647755629193">',
    icon: "aliPay",
  },

  docMetaInsertSelector: "h1",
  docMetaInsertPosition: "after",
  formatShowDate(date) {
    return new Date(date).toLocaleString();
  },
  // formatShowDate: {
  //   minutesAgo: " minutes ago",
  // },
});

export { blogTheme };
