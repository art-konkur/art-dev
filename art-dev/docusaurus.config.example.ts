import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'کوشک کنکورهنر',
  tagline: 'عمارتی برای یادگیری هنر',
  favicon: 'img/favicon.ico',
  
  // Set the production url of your site here
  url: 'http://kushk.surge.sh',
  // Set the /<baseUrl>/ pathname under which your site is served
  baseUrl: '/',

  // GitHub pages deployment config
  // organizationName: 'your-org', // Usually your GitHub org/user name
  // projectName: 'your-project', // Usually your repo name

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang
  i18n: {
    defaultLocale: 'fa',
    locales: ['fa'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: require.resolve('./art-dev/sidebars.ts'),  
          // Please change this to your repo
          // editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          onInlineTags: 'warn',
          // Please change this to your repo
          // editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'کوشک',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'آموزش‌ها',
        },
        {to: '/blog', label: 'وبلاگ', position: 'left'},
        {
          href: 'https://github.com/your-username/your-repo-name',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'آموزش',
          items: [
            {
              label: 'دوره‌ها',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'ارتباط',
          items: [
            {
              label: 'گیت‌هاب',
              href: 'https://github.com/your-username/your-repo-name',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} کوشک کنکورهنر`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
