module.exports = {
  "title": "shellfie",
  "tagline": "create beautiful terminal screenshots from formatted string",
  "url": "https://docshellfie.netlify.app",
  "baseUrl": "/",
  "projectName": "shellfie",
  "organizationName": "tool3",
  "favicon": "img/terminal.ico",
  "themeConfig": {
    "navbar": {
      "title": "shellfie",
      "logo": {
        "alt": "shellfie logo",
        "src": "img/terminal.svg"
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {
          "href": "https://github.com/tool3/shellfie",
          "position": "right",
          "className": "header-github-link",
          "aria-label": "GitHub repository"
        }
      ]
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
          sidebarPath: '/Users/talhayut/projects/rex/sidebars.js',
        },
        theme: {
          customCss: '/Users/talhayut/projects/rex/src/css/custom.css',
        },
      },
    ],
  ],
};
