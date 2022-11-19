const head = require('./config/head')
const navbaren = require('./config/navbar/en')
const navbarzh = require('./config/navbar/zh')
const plugins = require('./config/plugins')

module.exports = {
    base: '/',                                                      // 该 VuePress 网站监听的 URL 的起始路径，会成为以 / 开始的其它 URL 的前缀
    //theme: 'vdoing',                                              // 使用的主题
    //host: '0.0.0.0',                                              // 该 VuePress 网站监听的 IP 地址
    //port: 8080,                                                   // 该 VuePress 网站监听的端口号
    //dest: '.vuepress/dist'                                        // 保存 vuepress build 构建结果的目录
    //cache: false,                                                 // 加快 webpack 的编译速度
    locales: {
        '/': {
            lang: 'zh-CN',                                          // 网站的语言，会保存在<html lang="...">中
            title: 'VuePress',                                      // 网站的标题，还会显示在导航栏的左上角
            escription: 'Vue 驱动的静态网站生成器'                   // 网站的简单描述，会保存在 HTML 的<meta>中
        }/*,
        '/en/': {
            lang: 'en-US',
            title: 'VuePress',
            description: 'Vue-powered Static Site Generator'
        }*/
    },
    head,                                                           // 定义一些标签，会保存在 HTML 的<head>中
    plugins,                                                        // 插件配置
    themeConfig: {
        sidebarDepth: 1,                                            // 侧边栏显示深度，默认1，最大2（显示到h3标题）
        logo: '/images/5_6258059283494077830.webp',                 // 网站 logo ，会显示在导航栏的左侧
        //search: false,                                            // 禁用默认的搜索框
        searchMaxSuggestions: 10,                                   // 搜索结果显示最大数
        searchPlaceholder: "Search",                                // 可选：搜索栏占位文本
        repo: 'vuejs/vuepress',                                     // 到 GitHub 仓库的链接，可以是一个完整的 URL, 显示在页面右上角
        repoLabel: 'GitHub ',                                       // repo 链接显示的名字
        //docsRepo: 'vuejs/vuepress',                               // 假如你的文档仓库和项目本身不在一个仓库
        //docsDir: 'docs',                                          // 假如文档不是放在仓库的根目录下, 使用仓库中哪个目录下的文档
        //docsBranch: 'master',                                     // 假如文档放在一个特定的分支下, 指向仓库的哪个分支
        smoothScroll: true,                                         // 在页面内进行跳转时，页面会平滑滚动
        editLinks: true,                                            // 设置为 true 来启用快速编辑的链接，显示在文章末尾的左下角
        nextLinks: true,                                            // 设置为 false 来禁用所有页面的 下一篇
        prevLinks: true,                                            // 设置为 false 来禁用所有页面的 上一篇
        BackToTop: true,
        locales: {
            '/': {
                label: '简体中文',
                selectText: 'Languages',
                editLinkText: '在 GitHub 上编辑此页',                // editlink 显示的名字
                lastUpdated: '上次更新',                             // 根据 git commit 记录显示每个页面的最后编辑时间
                nav: navbarzh,                                      // 导航栏配置
            }/*,
            '/en/': {
                label: 'English',
                selectText: '选择语言',
                editLinkText: 'Edit this page on GitHub',
                lastUpdated: 'Last Updated',
                nav: navbaren,
            }*/
        },
        social: {                                                   // 社交图标，信息显示于页脚栏
          icons: [
            {
                iconClass: 'mail',                                  //
                title: '发邮件',                                    //
                link: 'mailto:3379328034@qq.com'                    //         
            },
            {
                iconClass: 'bilibili',
                title: 'bilibili',
                link: 'https://bilibili.com/'
            },
            {
                iconClass: 'wangyiyunyinyuemusic1193417easyiconnet',
                title: '听音乐',
                link: 'https://music.163.com/#/playlist?id=755597173'
            }
          ]
        },
        footer: {
            createYear: 2019,                                       // 创建年份
            copyrightInfo:                                          // 博客版权信息、备案信息等，支持a标签或换行标签</br>
                'Evan Xu | <a href="" target="_blank">MIT License</a>',
            }
        },
    markdown: {
        lineNumbers: true,                                          // 让代码块显示行号
        extractHeaders: ['h2', 'h3'],                               // 从 MarkDown 文档中提取哪几级标题，保存到 this.$page.headers
        toc: { includeLevel: [2, 3] },                              // MarkDown 文档中，用 [[toc]] 标签建立目录时，收集哪几级标题
    }
    //extraWatchFiles: ['config.js','']                             // 监听文件，文件变动将会触发 重新构建，并实时更新
  }

