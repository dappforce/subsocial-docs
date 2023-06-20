/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Subsocial Documentation',
  tagline: `Learn about the web3 social protocol and join our developer ecosystem`,
  url: 'https://dappforce.github.io/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'dappforce',
  projectName: 'dappforce.github.io',
  themeConfig: {
    prism: {
      theme: {
        ...require('prism-react-renderer/themes/vsLight'),
        plain: {
          color: "#000000",
          backgroundColor: "#f6f8fa",
        }
      },
      darkTheme: {
        ...require('prism-react-renderer/themes/vsDark'),
        plain: {
          color: "#9CDCFE",
          backgroundColor: "#262629"
        },
      },
      additionalLanguages: ['powershell', 'json'],
    },
    announcementBar: {
      id: 'playground',
      content:
        'We just launched the Subsocial Playground for developers, Try now <a target="_blank" rel="noopener noreferrer" href="https://play.subsocial.network">here</a>.',
      backgroundColor: '#f759ab',
      textColor: '#fff',
      isCloseable: true,
    },
    navbar: {
      hideOnScroll: true,
      title: 'Docs',
      logo: {
        alt: 'Subsocial Project Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'docs/basics/',
          activeBasePath: 'docs/basics/',
          label: '📚 Protocol Basics',
          position: 'left',
        },
        {
          to: 'docs/develop',
          label: '🧑🏻‍💻 Develop',
          position: 'left',
        },
        {
          to: 'docs/tutorials',
          label: '📖 User Tutorials',
          position: 'left',
        },
        {
          label: '⚡️ API',
          position: 'left',
          items: [
            {
              label: 'JS SDK API',
              href: 'https://js-sdk-api.subsocial.network',
            },
            {
              label: 'Rust API Guide',
              href: 'https://rust-api.subsocial.network',
            },
          ],
        },
        {
          href: 'https://t.me/+ZzvLu0ZfkQwxNGQy',
          label: 'Dev Chat',
          position: 'right',
        },
        {
          href: 'https://play.subsocial.network/',
          label: 'Playground',
          position: 'right',
        },
        // {
        //   type: 'localeDropdown',
        //   position: 'right',
        // },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Guides',
          items: [
            {
              label: 'SDK How-to-Guides',
              to: '/docs/develop/sdk/installation',
            },
            {
              label: 'Developer Quickstart',
              to: '/docs/develop/developer-quickstart',
            },
            {
              label: 'JS API Reference',
              href: 'https://js-sdk-api.subsocial.network',
            },
            {
              label: 'Rust API Guide',
              href: 'https://rust-api.subsocial.network',
            },
            {
              label: 'Explore on Calamar',
              href: 'https://calamar.app/subsocial-parachain/latest-extrinsics'
            },
          ],
        },
        {
          title: 'Learn',
          items: [
            {
              label: 'Lightpaper',
              to: '/docs/basics/',
            },
            {
              label: 'Tokenomics',
              to: 'docs/basics/tokenomics/economics-vs-distribution',
            },
            {
              label: 'FAQ',
              to: '/docs/basics/faq/overview',
            },
            {
              label: 'Glossary',
              to: 'docs/basics/glossary/overview',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: '📢 Announcements',
              href: 'https://t.me/SubsocialNetwork',
            },
            {
              label: 'Blog',
              href: 'https://polkaverse.com/@subsocial',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/SubsocialChain',
            },
            {
              label: 'Discord',
              href: 'https://discord.gg/w2Rqy2M',
            },
            // {
            //   label: 'Medium',
            //   href: 'https://medium.com/dappforce',
            // },
            {
              label: 'Telegram',
              href: 'https://t.me/Subsocial',
            },
          ],
        },
        {
          title: 'Legal',
          items: [
            {
              label: 'Privacy Policy',
              href: 'https://polkaverse.com/legal/privacy',
            },
            {
              label: 'Terms of Use',
              href: 'https://polkaverse.com/legal/terms',
            },
            {
              label: 'Token Disclaimer',
              href: 'https://polkaverse.com/legal/token',
            },
          ],
        },
      ],
      // Please do not remove the credits, help to publicize Docusaurus :)
      copyright: `Copyright © ${new Date().getFullYear()} DappForce`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/dappforce/subsocial-docs/tree/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        gtag: {
          trackingID: 'G-1MVDXTLKDW',
          anonymizeIP: false,
        },
      },
    ],
  ],
  themes: [
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      /** @type {import('@easyops-cn/docusaurus-search-local').PluginOptions} */
      ({
        // ... Your options.
        // `hashed` is recommended as long-term-cache of index file is possible.
        hashed: true,
        // For Docs using Chinese, The `language` is recommended to set to:
        // ```
        // language: ["en", "zh"],
        // ```
      }),
    ],
  ],
  plugins: [
    [
      '@docusaurus/plugin-client-redirects',
      {
        redirects: [
          {
            to: '/docs/develop/concepts/usernames',
            from: '/docs/develop/getting-started/blockchain-structure/domains',
          },
          {
            to: '/docs/develop/concepts/usernames',
            from: '/docs/develop/getting-started/blockchain-structure/usernames',
          },
          {
            to: '/docs/develop/developer-quickstart',
            from: '/docs/develop/quickstart',
          },
          {
            to: '/docs/develop/developer-quickstart',
            from: '/docs/develop/subsocial-starter',
          },
          {
            to: '/docs/develop/sdk-cheatsheet',
            from: '/docs/develop/quick-reference',
          },

          {
            to: '/docs/develop/concepts/entities',
            from: '/docs/develop/getting-started/blockchain-structure/entities',
          },
          {
            to: '/docs/develop/concepts/spaces',
            from: '/docs/develop/getting-started/blockchain-structure/spaces',
          },
          {
            to: '/docs/develop/concepts/profiles',
            from: '/docs/develop/getting-started/blockchain-structure/profiles',
          },
          {
            to: '/docs/develop/concepts/postsAndComments',
            from: '/docs/develop/getting-started/blockchain-structure/postsAndComments',
          },
          {
            to: '/docs/develop/concepts/reactions',
            from: '/docs/develop/getting-started/blockchain-structure/reactions',
          },
          {
            to: '/docs/develop/concepts/follows',
            from: '/docs/develop/getting-started/blockchain-structure/follows',
          },
          {
            to: '/docs/develop/concepts/entity-relations',
            from: '/docs/develop/getting-started/blockchain-structure/overallInteraction',
          },
          {
            to: '/docs/develop/testnet',
            from: '/docs/develop/getting-started/testnet',
          },
          {
            to: '/docs/develop/about-subsocial',
            from: '/docs/develop/getting-started/introduction',
          },
          {
            to: '/docs/basics/lightpaper/architecture',
            from: '/docs/basics/lightpaper/architecture/architecture',
          },
          {
            to: '/docs/tutorials',
            from: '/docs/faq/getting-started/account-setup/polkadot-js',
          },
        ],
        createRedirects(existingPath) {
          if (existingPath.includes('/grill-light/extension')) {
            return existingPath.replace('/grill-light/extension', '/zero-to-hero/extension')
          }
          if (existingPath.includes('/grill-light')) {
            return existingPath.replace('/grill-light', '/grill-chat')
          }
          if (existingPath.includes('/sdk')) {
            return existingPath.replace('/sdk', '/how-to-guides')
          }
          return undefined // Return a falsy value: no redirect created
        },
      },
    ],
  ],
}
