// @ts-check
require('dotenv').config()

const lightCodeTheme = require('prism-react-renderer/themes/github')
const darkCodeTheme = require('prism-react-renderer/themes/dracula')

const remarkPluginNpm2yarn = require('@docusaurus/remark-plugin-npm2yarn')

/** @type {import('@docusaurus/types').Config} */
module.exports = {
  // è‡ªå®šä¹‰å­—æ®µ
  customFields: {
    apiBaseUrl: process.env.API_BASE_URL
  },
  // eslint-disable-next-line quotes
  title: "Bruce's Wiki",
  tagline: 'ä¿¡ã˜ã¦è«¦ã‚ãªã‘ã‚Œã°ã€å¤¢ã¯å¿…ãšã‹ãªã†',
  url: 'https://rokkiz.github.io',
  baseUrl: '/harry-tran-portfolio/',
  baseUrlIssueBanner: true,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon/favicon.png',
  organizationName: 'rokkiz',
  projectName: 'harry-tran-portfolio',

  // ä¸»é¢˜
  themes: ['@docusaurus/theme-live-codeblock'],

  // æ’ä»¶
  plugins: ['docusaurus-plugin-sass'],

  // é¢„è®¾
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        pages: {
          remarkPlugins: [remarkPluginNpm2yarn]
        },
        docs: {
          remarkPlugins: [[remarkPluginNpm2yarn, { sync: true }]],
          sidebarPath: './sidebars.js',
          showLastUpdateAuthor: false,
          showLastUpdateTime: false,
          editUrl: 'https://github.com/recallwei/wiki/tree/main/website',
          include: ['**/*.md', '**/*.mdx'],
          exclude: ['**/_*.{js,jsx,ts,tsx,md,mdx}', '**/_*/**', '**/*.test.{js,jsx,ts,tsx}', '**/__tests__/**']
        },
        blog: {
          remarkPlugins: [remarkPluginNpm2yarn],
          showReadingTime: true,
          editUrl: 'https://github.com/recallwei/wiki/tree/main/website'
        },
        theme: {
          customCss: require.resolve('./src/style/index.scss')
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
          ignorePatterns: ['/tags/**'],
          filename: 'sitemap.xml'
        }
      })
    ]
  ],

  // ä¸»é¢˜é…ç½®
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false
      },
      announcementBar: {
        id: 'announcement-bar',
        content: 'I am currently building a website with Vue 3, TypeScript, Sass & Naive UI.',
        backgroundColor: '#fafbfc',
        textColor: '#091E42',
        isCloseable: true
      },
      navbar: {
        title: 'Bruce ã® Wiki',
        logo: {
          alt: 'Bruce ã® Wiki',
          src: 'img/favicon/favicon.png',
          srcDark: 'img/favicon/favicon.png',
          target: '_self',
          className: 'navbar-icon' // Defined in style/custom.scss
        },
        hideOnScroll: false,
        items: [
          {
            to: '/hobbies',
            label: 'My Hobbies',
            position: 'left'
          },
          {
            to: '/learning',
            label: 'Learning',
            position: 'left'
          },
          {
            to: '/finance',
            label: 'Personal Finance',
            position: 'left'
          },
          {
            to: '/about',
            label: 'About me',
            position: 'left'
          },

          {
            href: 'https://github.com/recallwei/',
            position: 'right',
            className: 'header-github-icon',
            title: 'GitHub',
            'aria-label': 'GitHub repository'
          }
        ]
      },
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: false
        }
      },
      footer: {
        logo: {
          src: 'img/favicon/favicon.png',
          href: '/',
          width: 40,
          height: 40,
          alt: 'bruce'
        },
        style: 'light', // "light" | "dark"
        links: [],
        copyright: `Copyright Â© ${new Date().getFullYear()} Bruce. Built with Docusaurus. Hosted by Vercel.`
      },
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 3
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        /**
         * Prism: https://prismjs.com/#supported-languages
         * Docusaurus Support: https://github.com/FormidableLabs/prism-react-renderer/blob/master/src/vendor/prism/includeLangs.js
         */
        additionalLanguages: [
          'aspnet',
          'cpp',
          'csharp',
          'graphql',
          'go',
          'http',
          'java',
          'powershell',
          'swift',
          'vim',
          'docker'
        ]
      },
      // algolia search removed - credentials from original repo don't apply here
      // and @docusaurus/theme-search-algolia@3.10.1 has a bug with useDocsPreferredVersionContext
      // Add your own Algolia credentials here when ready
      liveCodeBlock: {
        playgroundPosition: 'bottom'
      }
    })
}

