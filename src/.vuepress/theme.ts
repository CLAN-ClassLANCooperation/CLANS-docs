import { hopeTheme } from "vuepress-theme-hope";
import { markdownTabPlugin } from '@vuepress/plugin-markdown-tab'

import navbar from "./navbar.js";
import sidebar from "./sidebar.js";

export default hopeTheme({
  darkmode: "toggle",

  hostname: "https://vuepress-theme-hope-docs-demo.netlify.app",

  author: {
    name: "m3rc7Less",
    url: "https://github.com/zhonx07",
  },

  logo: "https://theme-hope-assets.vuejs.press/logo.svg",

  repo: "CLAN-ClassLANCooperation/CLANS-docs",

  docsDir: "src",

  // 导航栏
  navbar,

  // 侧边栏
  sidebar,

  // 页脚
  footer: "本项目文档内容采用 CC0 1.0 Universal (CC0 1.0) Public Domain Dedication 许可证，完全放弃版权，项目代码及构建工具采用 MIT 许可证发布。",
  displayFooter: true,

  // 加密配置
  encrypt: {
    config: {
      "/demo/encrypt.html": {
        hint: "Password: 1234",
        password: "1234",
      },
    },
  },

  // 多语言配置
  metaLocales: {
    editLink: "在 GitHub 上编辑",
  },

  // 如果想要实时查看任何改变，启用它。注: 这对更新性能有很大负面影响
  // hotReload: true,

  // 此处开启了很多功能用于演示，你应仅保留用到的功能。
  markdown: {
    align: true,
    attrs: true,
    codeTabs: true,
    component: true,
    demo: true,
    figure: true,
    gfm: true,
    imgLazyload: true,
    imgSize: true,
    include: true,
    mark: true,
    plantuml: true,
    spoiler: true,
    stylize: [
      {
        matcher: "Recommended",
        replacer: ({ tag }) => {
          if (tag === "em")
            return {
              tag: "Badge",
              attrs: { type: "tip" },
              content: "Recommended",
            };
        },
      },
    ],
    sub: true,
    sup: true,
    tabs: true,
    tasklist: true,
    vPre: true,

  },

  plugins: {


    components: {
      components: ["Badge", "VPCard"],
    },

    icon: {
      prefix: "fa6-solid:",
      assets: "fontawesome",
    },
    markdownTabPlugin({
      codeTabs: true,
      tabs: true,
    }),
  },
});
