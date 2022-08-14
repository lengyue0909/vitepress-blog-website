import { defineConfig } from "vitepress";

import { lang, title, description, ogUrl, ogImage } from './meta';

export default defineConfig({
  lang,
  title,
  description,
  head: [
    // ['link', { rel: 'icon', href: '/logo.svg', type: 'image/svg+xml' }],
    // ['link', { rel: 'alternate icon', href: '/favicon.ico', type: 'image/png', sizes: '16x16' }],
    ['meta', { name: 'theme-color', content: '#42b883' }],
    ['meta', { name: 'keywords', content: 'frontend, vite, vitepress, blog, website, react, vue, esm, node' }],
    ['meta', { property: 'og:title', content: title }],
    ['meta', { property: 'og:description', content: description }],
    ['meta', { property: 'og:url', content: ogUrl }],
    // ['meta', { property: 'og:image', content: ogImage }],
    [
      "script",
      {},
      `
      var _hmt = _hmt || [];
      (function() {
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?05161f9d0354afbabee526467fa02b9f";
        var s = document.getElementsByTagName("script")[0]; 
        s.parentNode.insertBefore(hm, s);
      })();       
      `,
    ],
  ],
  lastUpdated: true,
  themeConfig: {
    siteTitle: title,
    editLink: {
      pattern: 'https://github.com/lengyue0909/vitepress-blog-website/edit/develop/docs/:path',
      text: 'Edit this page on GitHub',
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/lengyue0909/front-end' }
    ],
    nav: [
      { text: "指引", link: "/guide/", activeMatch: "/guide/" },
    ],
    sidebar: {
      "/guide/": [
        {
          text: "指引",
          items: [
            {
              text: "为什么选 Vite",
              link: "/guide/why",
            },
            {
              text: "开始",
              link: "/guide/",
            },
            {
              text: "功能",
              link: "/guide/features",
            },
          ],
        },
      ],
    },
    footer: {
      message: '个人微信号：qhxswlp，微信公众号：前端之境'
    }
  },
});
