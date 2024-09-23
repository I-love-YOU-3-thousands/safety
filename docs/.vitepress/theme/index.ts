import BlogTheme from "@sugarat/theme";
import confetti from "./components/confetti.vue";
// // import bgmPlayer from "./components/bgm.vue";
// import BgmPlayer from "bgm-player/packages/index";
// import vitepressMusic from "./components/lib/vitepress-plugin-music";
// import "./components/lib/css/index.css";

// const playlist = [
//   {
//     name: "song1",
//     author: "author1",
//     file: "/mp3/***.mp3",
//   },
//   {
//     name: "song2",
//     author: "author2",
//     file: "https://***.***.***/song2.mp3",
//   },
// ];

// 自定义样式重载
import "./style.scss";

// 自定义主题色
// import "./user-theme.css";

export default {
  extends: BlogTheme,
  enhanceApp({ app }) {
    app.component("confetti", confetti);
    // // app.use(BgmPlayer.install);
    // vitepressMusic(playlist);
    // BgmPlayer;
  },
};
