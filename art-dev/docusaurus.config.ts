import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'کوشک کنکور هنر',
  tagline: 'مرجع جامع آمادگی برای کنکور هنر',
  favicon: 'img/favicon.ico',
  
  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  organizationName: 'facebook',
  projectName: 'docusaurus',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'fa',
    locales: ['fa'],
    localeConfigs: {
      fa: {
        direction: 'rtl',
        htmlLang: 'fa',
        calendar: 'persian',
        path: 'fa',
      },
    },
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.ts'),
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
    // This adds a loading bar as you change pages
    docs: {
      sidebar: {
        hideable: true,
      },
    },
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      logo: {
        alt: 'لوگوی کوشک کنکور هنر',
        src: 'img/logo.svg',
      },
      title: 'کوشک کنکور هنر',
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'right',
          label: 'آموزش‌ها',
        },
        {to: '/blog', label: 'وبلاگ', position: 'right'},
        {to: '/contact', label: 'تماس با ما', position: 'right'},
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'آموزش‌ها',
          items: [
            {
              label: 'مقدمه',
              to: '/docs/intro',
            },
            {
              label: 'دروس تخصصی',
              to: '/docs/category/specialized',
            },
          ],
        },
        {
          title: 'ارتباط با ما',
          items: [
            {
              label: 'تماس با ما',
              to: '/contact',
            },
            {
              label: 'وبلاگ',
              to: '/blog',
            },
          ],
        },
      ],
      copyright: `تمامی حقوق محفوظ است  ${new Date().getFullYear()} کوشک کنکور هنر`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
