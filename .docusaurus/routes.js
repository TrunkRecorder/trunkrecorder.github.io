import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', 'dc8'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', 'd0c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'bc4'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', '684'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', 'a0f'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '39d'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '4f9'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', '4b2'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '78a'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', 'eb8'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus-v-2',
    component: ComponentCreator('/blog/tags/docusaurus-v-2', '7e8'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello', 'a4c'),
    exact: true
  },
  {
    path: '/blog/welcome-docusaurus-v2',
    component: ComponentCreator('/blog/welcome-docusaurus-v2', '84e'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '641'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '633'),
    routes: [
      {
        path: '/docs/CONFIGURE',
        component: ComponentCreator('/docs/CONFIGURE', '353'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/DEBUG',
        component: ComponentCreator('/docs/DEBUG', 'b33'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/FAQ',
        component: ComponentCreator('/docs/FAQ', 'cb6'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Install/INSTALL-DOCKER',
        component: ComponentCreator('/docs/Install/INSTALL-DOCKER', '2ce'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Install/INSTALL-LINUX',
        component: ComponentCreator('/docs/Install/INSTALL-LINUX', '5cd'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Install/INSTALL-MAC',
        component: ComponentCreator('/docs/Install/INSTALL-MAC', '024'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Install/INSTALL-PI',
        component: ComponentCreator('/docs/Install/INSTALL-PI', '4e6'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/intro',
        component: ComponentCreator('/docs/intro', 'aed'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/notes/CALL-HANDLING',
        component: ComponentCreator('/docs/notes/CALL-HANDLING', 'a35'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/notes/PLUGIN-SYSTEM',
        component: ComponentCreator('/docs/notes/PLUGIN-SYSTEM', 'c1a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/notes/STATES',
        component: ComponentCreator('/docs/notes/STATES', '34a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/notes/STATUS-JSON',
        component: ComponentCreator('/docs/notes/STATUS-JSON', 'd9e'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '64c'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
