export default {
    title: 'VitePress',
    description: 'Just playing around.',
    cleanUrls: true,
    themeConfig: {
        siteTitle: "Rodolfo's Blog",
        sidebar: {
            '/books/': [
                {
                  text: 'Books',
                  items: [
                    { text: 'Ego is the enemy', link: '/books/ego' },
                    { text: 'How not to died alone', link: '/books/alone' },
                    { text: `I'm glad my mom died`, link: '/books/mom' }
                  ]
                }
              ],
        },
      },

  }