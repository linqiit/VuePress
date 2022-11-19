module.exports = [
    ['reading-progress'],
    {
        name: 'page-plugins',
        globalUIComponents: ['GlobalTip','BlockToggle','Footer'] // 2.x 版本 globalUIComponents 改名为 clientAppRootComponentFiles
    },
    ['@vuepress/medium-zoom'],
    [
        '@vuepress/last-updated', {// "上次更新"时间格式
            transformer: (timestamp, lang) => {
                const dayjs = require('dayjs') // https://day.js.org/
                return dayjs(timestamp).format('YYYY-MM-DD HH:mm:ss')
            },
        }
    ],
    ['fulltext-search'],
    [
        'cursor-effects', {
            size: 2,
            shape: 'star',
            zIndex: 999999999
        }
    ],
    [
        'dynamic-title', {
            //showIcon: '/favicon.ico',
            showText: 'ヾ(≧▽≦*)o欢迎回来！',
            //hideIcon: '/failure.ico',
            hideText: 'ಥ_ಥ不要走呀！',
            recoverTime: 2000,
        }
    ],
    //['go-top'], // yarn add vuepress-plugin-go-top -D 'https://github.com/moefyit/moefy-vuepress'
    [
        'one-click-copy',{
            copySelector: ['div[class*="language-"] pre', 'div[class*="aside-code"] aside'],
            copyMessage: '复制成功!',
            //toolTipMessage: '复制到剪贴板',
            duration: 1000,
            showInMobile: false // whether to display on the mobile side, default: false.
        }
    ],
    [
        "vuepress-plugin-auto-sidebar", {
            title: {
                mode: "titlecase",
                map: {
                    "/zh/": "🎉 Hello 🎉",
                }
            },
            /*
            ignore: [
                // 忽略 `/menu3/menu3-3/` 目录下以 `ignore-` 开头的文件
                {
                    menu: "/menu3/menu3-3/",
                    regex: "ignore-*"
                }
            ],
            */
            collapse: {
                open: false,
                collapseList: [], //部分进行折叠
                uncollapseList: []
            },
            sort: {
                readmeFirstForce: true, //README 文件一直排在前面
            },
            git: {
                trackStatus: 'add'
            }
        }
    ],
    [require('../plugins/back-to-top/')],
    [require('../plugins/frontmatter/')],
    //[require('../plugins/')],
]

//    [
//      "vuepress-plugin-copy-copyright", // yarn add vuepress-plugin-copy-copyright -D 'https://github.com/raomaiping/vuepress-plugin-copy-copyright'掘金风格代码块复制
//      {
//        copyText: "复制代码",
//        tip: { content: "复制成功" },
//        copyright: false,
//        authorName: '小菜鸟',
//      }
//    ],
