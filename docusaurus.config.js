module.exports = {
  "title": "chartscii",
  "tagline": "Beautiful ascii bar charts",
  "url": "https://chartscii.netlify.app",
  "baseUrl": "/",
  "projectName": "chartscii",
  "organizationName": "tool3",
  "favicon": "img/favicon.ico",
  "themeConfig": {
    "navbar": {
      "title": "chartscii",
      "logo": {
        "alt": "chartscii logo",
        "src": "img/chartscii-logo.png"
      },
      "items": [
        {
          type: 'doc',
          position: 'left',
          docId: 'chartscii',
          label: 'Docs',
        },
        {
          type: 'doc',
          position: 'left',
          docId: 'examples/examples',
          label: 'Examples',
        },
        {
          "href": "https://github.com/tool3/chartscii",
          "position": "right",
          "className": "header-github-link",
          "aria-label": "GitHub repository"
        }
      ]
    },
    "footer": {
      "style": "dark",
      "links": [
        {
          "title": " ",
          "items": [
            {
              "label": " ",
              "className": "linkedIn",
              "href": "https://linkedin.com/in/talhayut"
            },
            {
              "label": " ",
              "className": "github",
              "href": "https://github.com/tool3"
            },
            {
              "label": " ",
              "className": "npm",
              "href": "https://npmjs.com/~tool3"
            }
          ]
        }
      ],
      "copyright": "Tal Hayut © 2021"
    }
  },
  "plugins": [
    "/workspaces/experiments/rex/node_modules/docusaurus-lunr-search/src/index.js"
  ],
  "presets": [
    [
      "@docusaurus/preset-classic",
      {
        "docs": {
          "sidebarPath": "/Users/talhayut/projects/rex/sidebars.js"
        },
        "theme": {
          "customCss": "/Users/talhayut/projects/rex/src/css/custom.css"
        }
      }
    ]
  ]
}