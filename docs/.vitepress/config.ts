export default {
  lang: 'zh-CN',
  title: 'SCUT.life',
  description: '好的大学 没有围墙',
  themeConfig: {
    nav: nav(),
    sidebar: {
      '/docs/': docsSidebar(),
    },
    footer: footer()
  }
}

function nav() {
  return [
    {text: '主页', link: '/'},
    {text: '文档', link: '/docs/getting-started', activeMatch: '/docs'},
    {text: '下载', link: '/download/', activeMatch: '/download'},
  ]
}

function docsSidebar() {
  return [
    {
      text: '简介',
      collapsible: false,
      items: [
        {text: '快速开始', link: '/docs/getting-started'},
        {text: '产品优势', link: '/docs/advantages'},
      ]
    },
    {
      text: '使用说明',
      collapsible: false,
      items: [
        {text: 'Windows', link: '/docs/usage-windows'},
        {text: 'Linux', link: '/docs/usage-linux'},
        {text: 'Android', link: '/docs/usage-android'},
        {text: 'iOS', link: '/docs/usage-ios'},
        {text: '卸载证书', link: '/docs/uninstall-certificate'},
      ]
    },
    {
      text: '高级篇',
      collapsible: false,
      items: [
        {text: '实现原理', link: '/docs/implementation-theory'},
        {text: '私有化部署', link: '/docs/privatization-deployment'},
      ]
    },
  ]
}

function footer() {
  return {
    message: '好的大学 没有围墙',
    copyright: 'Copyright © 2022 SCUT.life'
  }
}