//  https://github.com/kaokei/vuepress-plugin-frontmatter

/*需要在项目的 package.json 文件的 scripts 部分新增"fmt": "vuepress fmt docs", 

当新建一个新的 markdown 文件时，默认是一个空文件，当然也没有frontmatter，

此时可以执行命令npm run fmt 之所以增加这个命令，是因为vdoing主题默认只支持npm run dev和npm run build这两个命令可以自动生成frontmatter 

除了增加了上面的命令以外，还做了永久链接的重复检查，如果存在重复的永久链接，会在终端进行提示。

需要注意本插件是基于 vdoing 主题的。除了新增加了 frontmatter 的命令。

还增加了一个功能就是默认_posts文件夹下的所有文件的frontmatter的showSidebar属性默认为false。

注意showSidebar属性是一个新增的 vdoing 主题特有的属性，不是 vuepress 原本就支持的属性。

主要是为了解决这样的问题。当 sidebar=false 时，虽然不会显示左侧 sidebar，但是也会导致不现实rightMenu。

但是showSidebar=false时，仍然可以显示右侧rightMenu。*/