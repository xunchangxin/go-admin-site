var nav = require('./nav.js')
var { EcosystemNav, ComponentNav } = nav

var utils = require('./utils.js')
var { genNav, getComponentSidebar, deepClone } = utils

module.exports = {
  title: 'go-admin',
  description: 'A magical vue admin',
  base: '/go-admin-site/',
  head: [
    [
      'link',
      {
        rel: 'icon',
        href: '/favicon.ico'
      }
    ]
  ],
  themeConfig: {
    repo: 'wenjianzhang/go-admin',
    docsRepo: 'wenjianzhang/go-admin-site',
    docsDir: 'docs',
    editLinks: true,
    sidebarDepth: 3,
    algolia: {
      apiKey: '',
      indexName: 'go-admin'
    },
    locales: {
      '/': {
        label: '简体中文',
        selectText: '选择语言',
        editLinkText: '在 GitHub 上编辑此页',
        nav: [
          {
            text: '指南',
            link: '/guide/'
          },
          {
            text: '捐赠',
            link: '/donate/'
          }
        ],
        sidebar: {
          '/guide/': [
            {
              title: '文档',
              collapsable: false,
              children: genEssentialsSidebar()
            },
            {
              title: '第一个go-admin应用',
              collapsable: false,
              children: genAdvancedSidebar()
            },
            {
              title: '其他',
              collapsable: false,
              children: [
                '/guide/other/faq.md'
              ]
            }
          ]
        }
      },
      '/en/': {
        label: 'English',
        selectText: 'Languages',
        editLinkText: 'Edit this page on GitHub',
        nav: [
          {
            text: 'Guide',
            link: '/en/guide/'
          },
          {
            text: 'Donate',
            link: '/en/donate/'
          }],
        sidebar: {
          '/en/guide/': [
            {
              title: 'Docment',
              collapsable: false,
              children: genEssentialsSidebar('/en')
            },
            {
              title: 'First go admin app',
              collapsable: false,
              children: genAdvancedSidebar('/en')
            },
            {
              title: 'Other',
              collapsable: false,
              children: [
                
              ]
            }
          ]
        }
      }
    }
  },
  locales: {
    '/': {
      lang: 'zh-CN',
      description: '基于Gin+Vue+Element UI的中后台系统脚手架'
    },
    '/en/': {
      lang: 'en-US',
      description: 'A magical vue admin'
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@public': './public'
      }
    }
  },
  ga: 'UA-109340118-1'
}

function genEssentialsSidebar(type = '') {
  const mapArr = [
    '/guide/',
    '/guide/kslj.md',
    '/guide/ksks.md',
    '/guide/hjbs.md',
    '/guide/spjc.md',
    '/guide/ide.md',
    //'/guide/intro/tutorial01.md',
  ]
  return mapArr.map(i => {
    return type + i
  })
}

function genAdvancedSidebar(type = '') {
  const mapArr = [
    '/guide/intro/tutorial01.md',
    '/guide/intro/tutorial02.md',
  ]
  return mapArr.map(i => {
    return type + i
  })
}
