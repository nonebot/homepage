module.exports = {
    title: 'NoneBot',
    description: '跨平台的 Python 异步聊天机器人开发框架',
    head: [
        ['link', { rel: 'manifest', href: '/manifest.json' }],
        ['meta', { name: 'theme-color', content: '#ffffff' }],
        ['meta', { name: 'application-name', content: 'NoneBot' }],
        ['meta', { name: 'apple-mobile-web-app-title', content: 'NoneBot' }],
        ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
        ['link', { rel: 'apple-touch-icon', href: `/icons/apple-touch-icon.png` }],
        ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#5bbad5' }],
        ['meta', { name: 'msapplication-TileImage', content: '/icons/mstile-150x150.png' }],
        ['meta', { name: 'msapplication-TileColor', content: '#00aba9' }]
    ],
    theme: 'antdocs',
    themeConfig: {
        smoothScroll: true,
        search: false,
        logo: "/logo.png",
        repo: "https://github.com/nonebot",
        editLinks: false,
        nav: [
            {
                text: '主页',
                link: '/'
            },
            {
                text: '开源软件供应链点亮计划',
                link: '/ospp.md'
            },
            {
                text: '论坛',
                link: 'https://discussions.nonebot.dev/'
            },
            {
                text: '赞助',
                link: 'https://afdian.net/@nonebot'
            },
        ]
    }
}
