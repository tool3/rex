
module.exports = {
  title: 'REX',
  tagline: 'Docusaurus based README docs generator',
  url: 'https://tool3.github.io/',
  baseUrl: '/rex/',
  projectName: 'rex',
  organizationName: 'tool3',
  favicon: 'img/favicon.ico',
  themeConfig: {
    navbar: {
      title: 'rex',
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
          href: 'https://github.com/tool3/rex',
          position: 'right',
          className: 'header-github-link',
          'aria-label': 'GitHub repository',
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
              label: '',
              className: "linkedIn",
              href: 'https://linkedin.com/in/talhayut',
            },
            {
              label: '',
              className: "github",
              href: 'https://github.com/tool3',
            },
            {
              label: '',
              className: "npm",
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
