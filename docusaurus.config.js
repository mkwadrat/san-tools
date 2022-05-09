// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Sanpol Marketing Info',
  tagline: 'Repozytorium komunikacji marketingowej',
  url: 'https://mkwadrat.github.io',
  baseUrl: '/san-tools/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'mkwadrat', // Usually your GitHub org/user name.
  projectName: 'san-tools', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
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
          routeBasePath: '/san-tools/',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/mkwadrat/san-tools/',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Sanpol Marketing',
        logo: {
          alt: 'San Logo',
          src: 'img/san-logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Informator',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://sanpol.pl',
            label: 'Sanpol',
            position: 'right',
          },
          {
            href: 'https://sanpolprofi.pl',
            label: 'SanpolProfi',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Dokumentacja',
            items: [
              {
                label: 'Wprowadzenie',
                to: '/intro',
              },
            ],
          },
          {
            title: 'Kontakt',
            items: [
              {
                label: 'Vitalle',
                href: '#',
              },
              {
                label: 'Skalar',
                href: '#',
              },
              {
                label: 'Sanpol PR',
                href: '#',
              },
            ],
          },
          {
            title: 'Linki',
            items: [
              {
                label: 'Sanpol',
                href: 'https://sanpol.pl',
              },
              {
                label: 'SanpolProfi',
                href: 'https://sanpolprofi.pl',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} MM Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
