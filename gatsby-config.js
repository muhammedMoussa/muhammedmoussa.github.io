module.exports = {
  siteMetadata: {
    pathPrefix: "/muhammedmoussa.github.io",
    title: "Muhammed Moussa",
    author: "Muhammed Moussa",
    intro: "Hello, I'm Muhammed. Frontend Enthusiasm.",
    quote:
      // "I'm not a great programmer; I'm just a good programmer with great habits; clean, solid, and tested code.",
      `"Talk is cheap, show me the output.."`,
    summary: `
      Hello, I'm Muhammed. Frontend Enthusiasm.
      I'm not a great programmer; I'm just a good programmer with great habits; clean, solid, and testable code.
      A thorough few years of expertise worked in various industries like Fintech, Saas, Booking, Event Planning, ERP, and Social platforms. with a passion for delivering high-quality software throw requirements to end-user. also helped the organizations to grow or expand their success. Regardless of the technology/framework limitation and the platform (Web, Mobile, or PWA).
    `,
    // "A thorough few years of expertise worked in various industries like Saas, Booking, Event Planning, ERP, and Social platforms. with a passion for delivering high-quality software throw requirements to end-user. Regardless of the technology/framework limitation and the platform (Web, Mobile, or PWA).",
    social: [
      {
        icon: "fab fa-linkedin",
        url: "https://www.linkedin.com/in/muhammedmoussa",
      },
      { icon: "fab fa-twitter", url: "http://twitter.com/muhammedMoussa" },
      { icon: "fab fa-github", url: "http://github.com/muhammedMoussa" },
      {
        icon: "fab fa-stack-overflow",
        url: "https://stackoverflow.com/story/muhammedmoussa",
      },
      {
        icon: "fab fa-xing-square",
        url: "https://www.xing.com/profile/Muhammed_Moussa/cv",
      },
      {
        icon: "fab fa-quora",
        url: "https://www.quora.com/profile/Muhammed-Moussa-2",
      },
      { icon: "fab fa-codepen", url: "https://codepen.io/muhammedMoussa" },
      { icon: "fab fa-dev", url: "https://dev.to/muhammedmoussa" },
      { icon: "fab fa-medium", url: "https://medium.com/@muhammedmoussa" },
      { icon: "fab fa-npm", url: "https://www.npmjs.com/~muhammedmoussa" },
      { icon: "fab fa-gitlab", url: "https://gitlab.com/muhammedMoussa" },
      {
        icon: "fab fa-bitbucket",
        url: "https://bitbucket.org/muhammedmoussa/",
      },
      {
        icon: "fab fa-instagram",
        url: "https://www.instagram.com/muhammedmoussaa",
      },
    ],
    projectsData: [
      {
        title: "Paymob - Online Payment",
        description: `Accept payments online, in-store or from the comfort of your clients' homes. Boost your revenue as you offer the payment methods most relevant to your market. Maximize Sales Revenue. Suitable payment methods. Day Settlement Guarantees.`,
        // imgSrc: `src/images/paymob.jpeg`,
        imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2tgo0lhKB9_tT4gTg4fQMreOjs8hyh2BLIQ&usqp=CAU',
        href: "https://www.paymob.com/en/checkout",
      },
      {
        title: "Mntrni",
        description: `An internet application that brings you together with experts and specialists in several fields to increase your chances of success.`,
        // imgSrc: `src/images/mntrni.png`,
        imgSrc: 'https://pbs.twimg.com/profile_images/1313083032367181824/Ay8Lcej0_400x400.png',
        href: "https://mntrni.com/login",
      },
      {
        title: "Appgain",
        description: `Customer Engagement Platform - OmniChannel Messaging | Marketing Automation | Bio Links| URL Shortener and Retargeting For Web , Shopify Stores, POS
        and Mobile Apps in ONE  Single Platform
        Request`,
        // imgSrc: `src/images/appgain.jpeg`,
        imgSrc: 'https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_170,w_170,f_auto,b_white,q_auto:eco,dpr_1/v1475272730/qwp9ewy4o3sm6hmrlbt8.png',
        href: "https://dashboard.appgain.io/auth/login",
      },
      {
        title: "Eventania",
        description: `Event App, Mobile Event Management, Event Planning App. - Eventania.mobi is an event app for conferences,meetings and events, replace voting system to collect audience opinions.`,
        // imgSrc: `src/images/eventania.jpeg`,
        imgSrc: `data:image/png;base64,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`,
        href: "https://eventania.mobi/",
      },
      {
        title: "Gameel",
        description: `Gameel is a service where you can connect, find someone to help you, or help someone, and it's all based on a points system, just like how you would with friends, save your money for groceries, and rent!`,
        // imgSrc: `src/images/gameel.png`,
        imgSrc: 'https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/b5y0jbitrmxdurobn54x',
        href: "https://gameel.com.au/",
      },
      {
        title: "Accflex ERP",
        description: `From a vision that aims to provide different accounting programs Customer needs and requirements Course Operating with the Accflex system of accounting software Which gives it a great competitive advantage and compiled`,
        // imgSrc: `src/images/accflex.png`,
        imgSrc: 'data:image/png;base64,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',
        href: "https://subscription.cloud.accflex.com/",
      },
      {
        title: "Employee Self-Service (ESS) AccFlex ERP Solution",
        description: `The application of self-service is a microcosm of the most powerful employee accountant and personnel management software in terms of data, salaries, wages, attendance, departure and leave.`,
        // imgSrc: `src/images/ess.png`,
        imgSrc: 'data:image/png;base64,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',
        href: "https://apps.apple.com/eg/app/accflex-ess/id1603235720",
      },
      {
        title: "logzone",
        description: `a package to print pretty log messages. you can use predefined or customize your own!`,
        // imgSrc: `src/images/npm.png`,
        imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbx_fjWHiIBwuEz5TrP-c1xMcc4fkERUAa-g&usqp=CAU',
        href: "https://www.npmjs.com/package/logzone",
      },
      {
        title: "paix",
        description: `paix.js is a utility to map objects props with handy config!`,
        // imgSrc: `src/images/npm.png`,
        imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbx_fjWHiIBwuEz5TrP-c1xMcc4fkERUAa-g&usqp=CAU',
        href: "https://www.npmjs.com/package/paix",
      },
      {
        title: "Apiy",
        description: `a lightweight plugin that makes asynchronous api calls, one second of code!`,
        // imgSrc: `src/images/npm.png`,
        imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbx_fjWHiIBwuEz5TrP-c1xMcc4fkERUAa-g&usqp=CAU',
        href: "https://www.npmjs.com/package/apiy",
      },
    ],
    version: "2.1.5",
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-sharp",
    "gatsby-plugin-dark-mode",
    `gatsby-transformer-sharp`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
      },
      gatsbyRemarkPlugins: [
        {
          resolve: `gatsby-remark-highlight-code`,
        },
      ],
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "posts",
        path: `${__dirname}/src/posts`,
        // path: path.join(__dirname, `src`, `images`),
      },
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          "gatsby-remark-relative-images",
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 960,
              linkImagesToOriginal: false,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-disqus`,
      options: {
        shortname: process.env.SHORTNAME || "muhammedmoussa",
      },
    },
  ],
}
