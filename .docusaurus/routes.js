import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/my-website/__docusaurus/debug',
    component: ComponentCreator('/my-website/__docusaurus/debug', 'b55'),
    exact: true
  },
  {
    path: '/my-website/__docusaurus/debug/config',
    component: ComponentCreator('/my-website/__docusaurus/debug/config', '691'),
    exact: true
  },
  {
    path: '/my-website/__docusaurus/debug/content',
    component: ComponentCreator('/my-website/__docusaurus/debug/content', 'd0f'),
    exact: true
  },
  {
    path: '/my-website/__docusaurus/debug/globalData',
    component: ComponentCreator('/my-website/__docusaurus/debug/globalData', '798'),
    exact: true
  },
  {
    path: '/my-website/__docusaurus/debug/metadata',
    component: ComponentCreator('/my-website/__docusaurus/debug/metadata', '82b'),
    exact: true
  },
  {
    path: '/my-website/__docusaurus/debug/registry',
    component: ComponentCreator('/my-website/__docusaurus/debug/registry', '9a8'),
    exact: true
  },
  {
    path: '/my-website/__docusaurus/debug/routes',
    component: ComponentCreator('/my-website/__docusaurus/debug/routes', '2a9'),
    exact: true
  },
  {
    path: '/my-website/blog',
    component: ComponentCreator('/my-website/blog', 'a85'),
    exact: true
  },
  {
    path: '/my-website/markdown-page',
    component: ComponentCreator('/my-website/markdown-page', '68e'),
    exact: true
  },
  {
    path: '/my-website/docs',
    component: ComponentCreator('/my-website/docs', '260'),
    routes: [
      {
        path: '/my-website/docs',
        component: ComponentCreator('/my-website/docs', '16d'),
        routes: [
          {
            path: '/my-website/docs',
            component: ComponentCreator('/my-website/docs', 'f4e'),
            routes: [
              {
                path: '/my-website/docs/about',
                component: ComponentCreator('/my-website/docs/about', '18a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/my-website/docs/category/tutorial---basics',
                component: ComponentCreator('/my-website/docs/category/tutorial---basics', '1d0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/my-website/docs/category/tutorial---extras',
                component: ComponentCreator('/my-website/docs/category/tutorial---extras', '606'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/my-website/docs/contact',
                component: ComponentCreator('/my-website/docs/contact', '124'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/my-website/docs/intro',
                component: ComponentCreator('/my-website/docs/intro', '14d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/my-website/docs/tutorial-basics/congratulations',
                component: ComponentCreator('/my-website/docs/tutorial-basics/congratulations', 'e92'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/my-website/docs/tutorial-basics/create-a-blog-post',
                component: ComponentCreator('/my-website/docs/tutorial-basics/create-a-blog-post', 'c42'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/my-website/docs/tutorial-basics/create-a-document',
                component: ComponentCreator('/my-website/docs/tutorial-basics/create-a-document', 'b60'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/my-website/docs/tutorial-basics/create-a-page',
                component: ComponentCreator('/my-website/docs/tutorial-basics/create-a-page', '1e6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/my-website/docs/tutorial-basics/deploy-your-site',
                component: ComponentCreator('/my-website/docs/tutorial-basics/deploy-your-site', '24a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/my-website/docs/tutorial-basics/markdown-features',
                component: ComponentCreator('/my-website/docs/tutorial-basics/markdown-features', 'd96'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/my-website/docs/tutorial-extras/manage-docs-versions',
                component: ComponentCreator('/my-website/docs/tutorial-extras/manage-docs-versions', '93d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/my-website/docs/tutorial-extras/translate-your-site',
                component: ComponentCreator('/my-website/docs/tutorial-extras/translate-your-site', 'ff5'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/my-website/',
    component: ComponentCreator('/my-website/', 'e41'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
