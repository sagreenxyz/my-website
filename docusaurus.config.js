// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'SAGreenXYZ',
  tagline: 'The Official Documentation for SAGreenXYZ',
  favicon: 'https://avatars.githubusercontent.com/u/984308?v=4',

  // Set the production url of your site here
  url: 'https://sagreenxyz.github.io', // Your GitHub Pages URL
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/my-website/', // Your repository name

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'sagreenxyz', // Your GitHub username.
  projectName: 'my-website', // Usually your repo name.
  deploymentBranch: 'gh-pages', // Branch for deployment (usually gh-pages)

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'SAGreenXYZ',
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'openstaxAP2eSidebar', // Matches the key in sidebars.js
            position: 'left',
            label: 'OpenStax AP2e',
          },
          {
            type: 'docSidebar',
            sidebarId: 'summariesSidebar', // Matches the key in sidebars.js
            position: 'left',
            label: 'Summaries',
          },
          {
            type: 'dropdown',
            label: 'Vignettes',
            position: 'left',
            items: [
              {
                label: 'Neurological', // The existing sub-menu item
                to: '/docs/vignettes/neurological', // Link to the neurological index page
              },
              // Add other care plan categories here in the future
            ],
          },
          {to: '/blog', label: 'Blog', position: 'left'},
        ],
      },
      footer: {},
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
