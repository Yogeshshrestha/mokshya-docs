// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");
const path = require("path");

// const navbars = require("./navbars");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Mokshya",
  tagline: "Mokshya Protocol",
  url: "https://mokshya-docs-7r96.vercel.app/",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/min-logo.png",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "Mokshya", // Usually your GitHub org/user name.
  projectName: "mokshya-docs", // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  plugins: [path.resolve(__dirname, "./node_modules/docusaurus-lunr-search/")],

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/Yogeshshrestha/mokshya-docs/tree/main/",

          // lastUpdated: new Date(),
        },
        // lastUpdated: "Dec 31, 2022",
        blog: false,
        // blog: {
        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   editUrl:
        //     "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        // },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  // themes: [
  //   [
  //     "@easyops-cn/docusaurus-search-local",
  //     /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
  //     ({
  //       hashed: true,
  //       language: ["en"],
  //       highlightSearchTermsOnTargetPage: true,
  //       explicitSearchResultPath: true,
  //     }),
  //   ],
  // ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      enableUpdateTime: true,
      lastUpdated: true,
      docs: {
        sidebar: {
          hideable: true,
        },
      },
      // algolia: {
      //   apiKey: "2c473e0a42b84c6b90a733d10aa10ebe",
      //   indexName: "mokshya_docs",
      //   contextualSearch: true,
      //   placeholder: "Search in my beautiful website",
      //   appId: "USFOT78RE3",
      // },
      navbar: {
        // title: "My Site",
        logo: {
          alt: "Mokshya",
          src: "img/docusaurus.png",
        },
        items: [
          {
            type: "doc",
            docId: "intro",
            position: "left",
            label: "Mokshya Protocol",
          },
          // { to: "/blog", label: "Blog", position: "left" },
          {
            href: "https://github.com/mokshyaprotocol",
            label: "GitHub",
            position: "right",
            // navbars,
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Mokshya Protocol",
                to: "/",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Discord",
                href: "https://discord.com/invite/U9RkTGfU6Y",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/mokshyaprotocol?s=21&t=qlWJHb7IKQCfa0t6SuxbFA",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Mokshya Website",
                href: "https://mokshya.io/",
              },
              {
                label: "GitHub",
                href: "https://github.com/facebook/docusaurus",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Mokshya`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
