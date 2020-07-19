module.exports = {
  title: 'd.rex',
  tagline: 'Docusaurus based README docs generator',
  url: 'https://github.com/tool3/d.rex',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'tool3',
  projectName: 'd.rex',
  themeConfig: {
    navbar: {
      title: 'd.rex',
      logo: {
        alt: 'd.re logo',
        src: 'img/logo.svg',
      },
      links: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        // { to: 'blog', label: 'Blog', position: 'left' },
        {
          href: 'https://github.com/tool3/d.rex',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Social',
          items: [
            {
              label: 'LinkedIn',
              href: 'https://linkedin.com/in/talhayut',
            },
            {
              label: 'Github',
              href: 'https://github.com/tool3',
            },
            {
              label: 'npm',
              href: 'https://npmjs.com/tool3',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Tal Hayut`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          // It is recommended to set document id as docs home page (`docs/` path).
          homePageId: 'welcome',
          sidebarPath: require.resolve('./sidebars.js')
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
