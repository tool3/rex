
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
        alt: 'rex logo',
        src: 'img/logo.svg',
      },
      links: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
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
          title: '',
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
            {
              label: '',
              className: "rex_badge",
              href: 'https://npmjs.com/tool3',
            },
          ],
        },
      ],
      copyright: `Tal Hayut © ${new Date().getFullYear()}`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
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
