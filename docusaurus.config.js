module.exports = {
  "title": "Tal Hayut",
  "tagline": "senior fullstack developer",
  "url": "https://tsiny.netlify.app",
  "baseUrl": "/",
  "projectName": "tool3",
  "organizationName": "tool3",
  "favicon": "img/favicon.ico",
  "themeConfig": {
    colorMode: {
     switchConfig: {
        darkIcon: '🌙',
        lightIcon: '☀️'
     },
    },
    "navbar": {
      "title": "tool3",
      "logo": {
        "alt": "tsiny logo",
        "src": "img/profile.png"
      },
      "items": [
        {
          "to": "blog/",
          "activeBasePath": "blog",
          "label": "Blog",
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
        "theme": {
          "customCss": "../src/css/custom.css"
        }
      }
    ]
  ]
}