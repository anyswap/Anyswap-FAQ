/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Anyswap',
  tagline: 'Anyswap is a trustless protocol to bridge assets and to facilitate cross-chain swaps',
  url: 'https://anyswap.org',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'Anyswap', // Usually your GitHub org/user name.
  projectName: 'anyswap', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Anyswap',
      logo: {
        alt: 'Anyswap Logo',
        src: 'img/c-16-color-2@2x.png',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {to: 'blog', label: 'News', position: 'left'},
        {to: 'movies', label: 'YouTubes', position: 'left'},
        {to: 'https://anyswap.exchange', label: 'DEX', position: 'right'},
        {to: 'https://multichain.xyz', label: 'multichain.xyz', position: 'right'},
        {
          href: 'https://github.com/anyswap',
          label: 'Anyswap GitHub',
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
              label: 'Getting Started',
              to: 'docs/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/AnyswapNetwork',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/anyswap',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
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
