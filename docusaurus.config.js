module.exports = {
  "title": "iny",
  "tagline": "world's tinest url-shortener service",
  "url": "https://tsiny.netlify.app",
  "baseUrl": "/",
  "projectName": "tsiny",
  "organizationName": "tool3",
  "favicon": "img/favicon.ico",
  "themeConfig": {
    "navbar": {
      "title": "tsiny",
      "logo": {
        "alt": "tsiny logo",
        "src": "img/ts_logo.svg"
      },
      "items": [
        {
          "to": "docs/",
          "activeBasePath": "docs",
          "label": "Docs",
          "position": "left"
        },
        {
          "href": "https://github.com/tool3/rex",
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
    "/Users/talhayut/projects/rex/node_modules/docusaurus-lunr-search/src/index.js"
  ],
  "presets": [
    [
      "@docusaurus/preset-classic",
      {
        "docs": {
          "sidebarPath": "./sidebars.js"
        },
        "theme": {
          "customCss": "../src/css/custom.css"
        }
      }
    ]
  ]
}