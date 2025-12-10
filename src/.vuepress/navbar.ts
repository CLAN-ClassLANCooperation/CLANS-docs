import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  {
    text: "CLAND 教师端使用文档",
    icon: "school",
    prefix: "/CLANDTSide/",
    children: [

    ]
  },
  {
    text: "CLAND 教室端使用文档",
    icon: "chalkboard-user",
    prefix: "/CLANDCRSide/",
    children: [
      {
        text: "CLANDCR 部署",
        icon: "download",
        link: "install"
      },
      {
        text: "CLANDCR 介绍",
        icon: "compass",
        link: "introduce"
      },
      
    ],
  },{
    text: "特别鸣谢",
    icon: "chalkboard-user",
    prefix: "/special/",
    children: [
      {
        text: "特别鸣谢",
        icon: "download",
        link: "thanks"
      }
    ],
  }
]);
