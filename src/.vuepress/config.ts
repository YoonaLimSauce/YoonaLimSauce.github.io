/*
 * @Author: 林允儿 Yoona Lim miraclefishleong@gmail.com
 * @Date: 2024-06-13 07:05:14
 * @LastEditors: 林允儿 Yoona Lim miraclefishleong@gmail.com
 * @LastEditTime: 2024-06-27 19:34:14
 * @FilePath: \YoonaLim.github.io\src\.vuepress\config.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "en-US",
      title: "Docs Demo",
      description: "A docs demo for vuepress-theme-hope",
    },
    "/zh/": {
      lang: "zh-CN",
      title: "文档演示",
      description: "vuepress-theme-hope 的文档演示",
    },
  },

  theme,

  // Enable it with pwa
  shouldPrefetch: false,
});
