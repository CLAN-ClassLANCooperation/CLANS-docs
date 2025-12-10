import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "portfolio",
    {
      text: "幻灯片",
      icon: "person-chalkboard",
      link: "https://ecosystem.vuejs.press/zh/plugins/markdown/revealjs/demo.html",
    },
  ],
  "/CLANDCRSide/": [
    {
      text: "CLAND 教室端使用文档",
      icon: "lightbulb",
      prefix: "/CLANDCRSide/",
      children: [
        {
          text: "部署",
          icon: "download",
          link: "install"
        },
        {
          text: "CLANDCR 介绍",
          icon: "compass",
          link: "introduce"
        }
      ]
    }
  ]
});
