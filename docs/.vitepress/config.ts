export default {
  lang: 'zh-CN',
  title: 'SCUT.life',
  description: '好的大学 没有围墙',
  themeConfig: {
    nav: nav()
  }
}

function nav() {
  return [
    {text: 'Guide', link: '/guide'},
    {text: 'Configs', link: '/configs'},
  ]
}