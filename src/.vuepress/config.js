module.exports = {
  title: 'Nicolas\'s Blog',
  description: 'Blog surtido de ideas y cosas que salen',
  locales: {
    '/': {
      lang: 'en-US',
    },
  },
  theme: 'meteorlxy',
  port: 3000,
  serviceWorker: true,
  evergreen: true,
  markdown: {
    anchor: { permalink: true },
    toc: { includeLevel: [1, 2] }
  },

  themeConfig: {
    comments: false,
    lang: 'en-US',
    personalInfo: {
      nickname: 'Nicolas',
      description: 'Tech Leader</br>FullStack Developer</br>DevOps</br>Blogger',
      email: 'nmartinezv@icloud.com',
      location: 'Santiago, RM, Chile',
      avatar: '/img/avatar.jpg',
      sns: {
        github: {
          account: 'TheYakuza',
          link: 'https://github.com/TheYakuza/',
        },
        twitter: {
          account: '_makunga',
          link: 'https://twitter.com/_makunga',
        },
        linkedin: {
          account: 'nicolas martinez villarroel',
          link: 'https://www.linkedin.com/in/pedro-nicolas-martinez-v/',
        },
        instagram: {
          account: 'themakunga',
          link: 'https://instagram.com/themakunga/',
        },
      },
    },
    header: {
      background: {
        url: '/img/deader.png',
        useGeo: false,
      },
      showTitle: false,
    },
    lastUpdated: true,
    nav: [
      { text: 'Home', link: '/', exact: true },
      { text: 'Posts', link: '/posts/', exact: false },
    ],
    pagination: {
      perPage: 10,
    },

    // Default Pages (Optional, the default value of all pages is `true`)
    defaultPages: {
      // Allow theme to add Home page (url: /)
      home: true,
      // Allow theme to add Posts page (url: /posts/)
      posts: true,
    },
  },
};
