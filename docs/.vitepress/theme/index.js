// https://vitepress.dev/guide/custom-theme
import { h } from "vue";
import DefaultTheme from "vitepress/theme";
import "./style.css";

/** @type {import('vitepress').Theme} */
export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    });
  },
  async enhanceApp({ app, router, siteData }) {
    // ...
    console.log(import.meta.env.SSR);
    if (!import.meta.env.SSR) {
      console.log("当前渲染模式为 : SSR");
      // const plugin = await import("@orillusion/core");
      // app.use(plugin.default);
    }
  },
};
