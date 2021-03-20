/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Anyswap',
  tagline: 'Anyswap is a protocol to power DeFi with trustless cross chain value transfer',
  url: 'https://anyswap.org',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/c-16-color-2@2x.png',
  organizationName: 'Anyswap', // Usually your GitHub org/user name.
  projectName: 'anyswap', // Usually your repo name.
  customFields: {
    description: "Power DeFi with Anyswap Bridges",
  },
  themeConfig: {
    navbar: {
      title: '',
      logo: {
        alt: 'Anyswap Logo',
        src: 'img/logo.png',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {to: 'news', label: 'News', position: 'left'},
        {to: 'movies', label: 'YouTubes', position: 'left'},
        {to: 'https://anyswap.exchange', label: 'DEX', position: 'right'},
        {to: 'https://multichain.xyz', label: 'multichain.xyz', position: 'right'},
        {to: 'https://anyswap.net', label: 'Anyswap Network', position: 'right'},
        {
          href: 'https://github.com/anyswap',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Quick Start',
              to: 'docs/quickStart/',
            },
            {
              label: 'FAQ\'s',
              to: 'docs/FAQ/',
            },
            {
              label: 'Full Documentation',
              to: 'docs/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Telegram - Main',
              href: 'https://t.me/anyswap',
            },
            {
              label: 'Telegram - Trading',
              href: 'https://t.me/anyswapmarkets',
            },
            {
                label: 'Medium',
                href: 'https://medium.com/@anyswap',
            },
            {
                label: 'YouTube',
                href: 'https://www.youtube.com/channel/UCrLZAS83TFuy-EdbT-44kng',
            },
            {
              label: 'Twitter - Announcements',
              href: 'https://twitter.com/AnyswapNetwork',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'News',
              to: 'news',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/anyswap',
            },
            {
              label: 'Audit',
              href: 'https://github.com/anyswap/Anyswap-Audit/find/master',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Anyswap`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
