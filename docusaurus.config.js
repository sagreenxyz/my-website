// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'My Site',
  tagline: 'Dinosaurs are cool',
  favicon: 'img/favicon.ico',

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
        title: 'My Site',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Tutorial',
          },
          {
            type: 'docSidebar',
            sidebarId: 'openstaxAP2eSidebar', // Matches the key in sidebars.js
            position: 'left',
            label: 'OpenStax AP2e',
          },
          {
            type: 'docSidebar',
            sidebarId: 'anatomySidebar', // Matches the key in sidebars.js
            position: 'left',
            label: 'Anatomy and Physiology',
          },
          // Modify the Care Plans item to be a dropdown
          {
            type: 'dropdown',
            label: 'Care Plans',
            position: 'left',
            items: [
              {
                label: 'Overview', // Link to the main care plans page
                to: '/docs/care-plans', // Revert to linking to the directory
              },
              {
                label: 'Neurological', // The existing sub-menu item
                to: '/docs/care-plans/neurological', // Link to the neurological index page
              },
              {
                label: 'Cardiovascular',
                to: '/docs/care-plans/cardiovascular',
              },
              {
                label: 'Respiratory',
                to: '/docs/care-plans/respiratory',
              },
              {
                label: 'Musculoskeletal',
                to: '/docs/care-plans/musculoskeletal',
              },
              // Add other care plan categories here in the future
            ],
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/facebook/docusaurus',
            label: 'GitHub',
            position: 'right',
          },
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
