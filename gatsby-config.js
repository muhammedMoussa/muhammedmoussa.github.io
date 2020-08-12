module.exports = {
  siteMetadata: {
    pathPrefix: "/muhammedmoussa.github.io",
    title: 'Muhammed Moussa',
    author: 'Muhammed Moussa',
    intro: 'Hello, I\'m Muhammed. Frontend Engineer.',
    quote: 'I\'m not a great programmer; I\'m just a good programmer with great habits; clean, solid, and tested code.',
    summary: 'A thorough few years of expertise worked in various industries like Saas,\ Booking, Event Planning, ERP, and Social platforms. with a passion for delivering high-quality software throw requirements to end-user. Regardless of the technology/framework limitation and the platform (Web, Mobile, or PWA).',
    social: [
      { icon: 'fab fa-linkedin', url: 'https://www.linkedin.com/in/muhammedmoussa'},
      { icon: 'fab fa-twitter', url: 'http://twitter.com/muhammedMoussa'},
      { icon: 'fab fa-github', url: 'http://github.com/muhammedMoussa'},
      { icon: 'fab fa-stack-overflow', url: 'https://stackoverflow.com/story/muhammedmoussa'},
      { icon: 'fab fa-quora', url: 'https://www.quora.com/profile/Muhammed-Moussa-2'},
      { icon: 'fab fa-codepen', url: 'https://codepen.io/muhammedMoussa'},
      { icon: 'fab fa-dev', url: 'https://dev.to/muhammedmoussa'},
      { icon: 'fab fa-medium', url: 'https://medium.com/@muhammedmoussa'},
      { icon: 'fab fa-npm', url: 'https://www.npmjs.com/~muhammedmoussa'},
      { icon: 'fab fa-gitlab', url: 'https://gitlab.com/muhammedMoussa'},
      { icon: 'fab fa-bitbucket', url: 'https://bitbucket.org/muhammedmoussa/'}
    ],
    version: '2.0.3'
  }, 
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-plugin-sharp',
    'gatsby-plugin-dark-mode',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`
      }
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-remark-relative-images',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 960,
              linkImagesToOriginal: false,
            }
          }
        ]
      }
    },
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID || 'lj21o0y4riho',
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || 'MhcfymbIQnoLbZi_kpoGZ9jh0ke_qxv2Q_by5_6TxJQ'
      }
    },
    {
      resolve: `gatsby-plugin-disqus`,
      options: {
        shortname: process.env.SHORTNAME || 'muhammedmoussa'     
      }
    }
  ]
}
