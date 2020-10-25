export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f94c733ad6746b28d0f169d',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-cnwjv361',
                  apiId: '23f527d2-24be-4cd5-9fb5-b3e7cd45c3bf'
                },
                {
                  buildHookId: '5f94c73398c2a5c116789941',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-c3r8d2ww',
                  apiId: '67d9f10e-a271-4ea6-a2ca-5f3b57dee8ea'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/edylan/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-c3r8d2ww.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
