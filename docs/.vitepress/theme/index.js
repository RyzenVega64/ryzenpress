// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import './style.css'

// 引入cesium
import { Ion } from "cesium";
import "cesium/Build/Cesium/Widgets/widgets.css";
Ion.defaultAccessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJjNjU1ZjE5YS1lMjY5LTRhMWMtODQ4YS1lNGM1ZTI4NDBjMWMiLCJpZCI6MTkwNjkzLCJpYXQiOjE3MDU2NDI1ODB9.7800xGHVpoqKM0jk0HNAen7C90JWo2kQbKLaAlBeVmg"
window.CESIUM_BASE_URL = '/libs/cesium';

/** @type {import('vitepress').Theme} */
export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  enhanceApp({ app, router, siteData }) {
    // ...
  }
}
