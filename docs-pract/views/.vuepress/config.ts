import { defineUserConfig } from "vuepress";

export default defineUserConfig({
  lang: "zh-CN",
  title: "Pract UI",
  description: "Pract UI 文档",
  pagePatterns: ["**/*.md", "!**/README.md", "!.vuepress", "!node_modules"],
  port: 9090,
});
