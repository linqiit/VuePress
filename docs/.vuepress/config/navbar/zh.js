module.exports = [
    {
      text: '首页',
      link: '/'
    },
    {
      text: '资源',
      items: [
        {
          text: '博客',
          link: '/zh/bolg/'
        },
        {
          text: '其他',
          link: '/zh/other/'
        }
      ]
    },
    {
      text: '了解更多',
      ariaLabel: '了解更多',
      items: [
        {
          text: 'VuePress',
          items: [
            {
              text: 'v2.x',
              link: 'https://v2.vuepress.vuejs.org/zh/'
            },
            {
              text: 'v1.x',
              link: 'https://vuepress.vuejs.org/zh/'
            },
            {
              text: 'v0.x',
              link: 'https://v0.vuepress.vuejs.org/zh/'
            }
          ]
        },
        {
          text: '开发指南',
          items: [
            {
              text: 'Nojs',
              link: 'https://nodejs.org/zh-cn/'
            },
            {
              text: 'yarn',
              link: 'https://yarnpkg.com/'
            },
            {
              text: 'Webpack',
              link: 'https://webpack.js.org/'
            },
            {
              text: 'Awesome VuePress',
              link: 'https://github.com/vuepress/awesome-vuepress'
            }
          ]
        }
      ]
    }
  ]