export default {
  "title": "Anyswap",
  "tagline": "Anyswap is a protocol to power DeFi with trustless cross chain value transfer",
  "url": "https://anyswap.org",
  "baseUrl": "/",
  "onBrokenLinks": "throw",
  "onBrokenMarkdownLinks": "warn",
  "favicon": "img/c-16-color-2@2x.png",
  "organizationName": "Anyswap",
  "projectName": "anyswap",
  "customFields": {
    "description": "Power DeFi with Anyswap Bridges"
  },
  "themeConfig": {
    "navbar": {
      "title": "",
      "logo": {
        "alt": "Anyswap Logo",
        "src": "img/logo.png"
      },
      "items": [
        {
          "to": "docs/",
          "activeBasePath": "docs",
          "label": "Docs",
          "position": "left"
        },
        {
          "to": "news",
          "label": "News",
          "position": "left"
        },
        {
          "to": "movies",
          "label": "YouTubes",
          "position": "left"
        },
        {
          "to": "https://anyswap.exchange",
          "label": "DEX",
          "position": "right"
        },
        {
          "to": "https://multichain.xyz",
          "label": "multichain.xyz",
          "position": "right"
        },
        {
          "to": "https://anyswap.net",
          "label": "Anyswap Network",
          "position": "right"
        },
        {
          "href": "https://github.com/anyswap",
          "label": "GitHub",
          "position": "right"
        }
      ],
      "hideOnScroll": false
    },
    "footer": {
      "style": "dark",
      "links": [
        {
          "title": "Docs",
          "items": [
            {
              "label": "Quick Start",
              "to": "docs/quickStart/"
            },
            {
              "label": "FAQ's",
              "to": "docs/FAQ/"
            },
            {
              "label": "Full Documentation",
              "to": "docs/"
            }
          ]
        },
        {
          "title": "Community",
          "items": [
            {
              "label": "Telegram - Main",
              "href": "https://t.me/anyswap"
            },
            {
              "label": "Telegram - Trading",
              "href": "https://t.me/anyswapmarkets"
            },
            {
              "label": "Medium",
              "href": "https://medium.com/@anyswap"
            },
            {
              "label": "YouTube",
              "href": "https://www.youtube.com/channel/UCrLZAS83TFuy-EdbT-44kng"
            },
            {
              "label": "Twitter - Announcements",
              "href": "https://twitter.com/AnyswapNetwork"
            }
          ]
        },
        {
          "title": "More",
          "items": [
            {
              "label": "News",
              "to": "news"
            },
            {
              "label": "GitHub",
              "href": "https://github.com/anyswap"
            },
            {
              "label": "Audit",
              "href": "https://github.com/anyswap/Anyswap-Audit/find/master"
            }
          ]
        }
      ],
      "copyright": "Copyright © 2021 Anyswap"
    },
    "colorMode": {
      "defaultMode": "light",
      "disableSwitch": false,
      "respectPrefersColorScheme": false,
      "switchConfig": {
        "darkIcon": "🌜",
        "darkIconStyle": {},
        "lightIcon": "🌞",
        "lightIconStyle": {}
      }
    },
    "docs": {
      "versionPersistence": "localStorage"
    },
    "metadatas": [],
    "prism": {
      "additionalLanguages": []
    },
    "hideableSidebar": false
  },
  "presets": [
    [
      "@docusaurus/preset-classic",
      {
        "docs": {
          "sidebarPath": "/home/marcel/Cryptocurrency/Anyswap/Docs/Anyswap-FAQ/Anyswap-FAQ/sidebars.js",
          "editUrl": "https://github.com/facebook/docusaurus/edit/master/website/"
        },
        "blog": {
          "showReadingTime": true,
          "editUrl": "https://github.com/facebook/docusaurus/edit/master/website/blog/"
        },
        "theme": {
          "customCss": "/home/marcel/Cryptocurrency/Anyswap/Docs/Anyswap-FAQ/Anyswap-FAQ/src/css/custom.css"
        }
      }
    ]
  ],
  "baseUrlIssueBanner": true,
  "i18n": {
    "defaultLocale": "en",
    "locales": [
      "en"
    ],
    "localeConfigs": {}
  },
  "onDuplicateRoutes": "warn",
  "plugins": [],
  "themes": [],
  "titleDelimiter": "|",
  "noIndex": false
};