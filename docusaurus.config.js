module.exports = {
  title: 'restory',
  tagline: 'rewrite git history',
  url: 'https://restory.netlify.app',
  baseUrl: '/',
  projectName: 'restory',
  organizationName: 'tool3',
  favicon: 'img/restory.ico',
  themeConfig: {
    navbar: {
      title: 'restory',
      logo: {
        alt: 'restory logo',
        src: 'img/restory.svg',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {
          href: 'https://github.com/tool3/restory',
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
          title: ' ',
          items: [
            {
              label: ' ',
              className: 'linkedIn',
              href: 'https://linkedin.com/in/talhayut',
            },
            {
              label: ' ',
              className: 'github',
              href: 'https://github.com/tool3',
            },
            {
              label: ' ',
              className: 'npm',
              href: 'https://npmjs.com/~tool3',
            },
          ],
        },
      ],
      copyright: 'Tal Hayut © 2021',
    },
  },
  plugins: [require.resolve('@cmfcmf/docusaurus-search-local')],
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          homePageId: 'restory',
          sidebarPath: '/Users/talhayut/projects/rex/sidebars.js',
        },
        theme: {
          customCss: '/Users/talhayut/projects/rex/src/css/custom.css',
        },
      },
    ],
  ],
};
