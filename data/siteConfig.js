module.exports = {
  siteTitle: 'Learn More About Yourself',
  siteDescription: 'Life is a Long Learning Journey',
  authorName: 'Luba Media',
  twitterUsername: '_maxpou',
  authorAvatar: 'avatar.jpeg', // file in content/images
  defaultLang: 'en', // show flag if lang is not default. Leave empty to enable flags in post lists
  authorDescription: `
  For the last decade, Maxence Poutord has worked with a variety of web technologies. He is currently focused on front-end development.
  On his day to day job, he is working as a senior front-end engineer at VSware. He is also an occasional tech speaker and a mentor.
  As a digital nomad, he is living where the WiFi and sun are 😎 <br>
  Do you want to know more? <a href="https://www.maxpou.fr/about" rel="noopener" target="_blank">Visit my website!</a>
  `,
  siteUrl: 'https://www.learnmoreaboutyourself.com/',
  disqusSiteUrl: 'https://www.maxpou.fr/',
  // Prefixes all links. For cases when deployed to maxpou.fr/gatsby-starter-morning-dew/
  pathPrefix: '/gatsby-starter-morning-dew', // Note: it must *not* have a trailing slash.
  siteCover: 'BELIEVE-IN-YOURSELF.png', // file in content/images
  background_color: '#ffffff',
  theme_color: '#222222',
  display: 'standalone',
  icon: 'content/images/LearnMoreAboutYourSelf_favicon.png',
  postsPerPage: 100,
  disqusShortname: 'maxpou',
  headerTitle: 'Learn More About Yourself',
  headerLinksIcon: '', //  (leave empty to disable: '')
  headerLinks: [
    {
      label: 'Happiness',
      url: '/tags/happiness',
    },
    {
      label: 'Success',
      url: '/tags/success',
    },
    {
      label: 'Motivation',
      url: '/tags/motivation',
    },
    {
      label: 'Self Help',
      url: '/tags/self%20help',
    },
    {
      label: 'Communication',
      url: '/tags/communication',
    },
    {
      label: 'Fitness',
      url: '/tags/fitness',
    },
    {
      label: 'Work',
      url: '/tags/work',
    },
  ],
  // Footer information (ex: Github, Netlify...)
  websiteHost: {
    name: 'GitHub',
    url: 'https://github.com',
  },
  footerLinks: [
    {
      links: [

        {
          label: 'About',
          url: '/about-us',
        },
        {
          label: 'Contact',
          url: '/contact',
        },
        {
          label: 'Privacy Policy',
          url: '/privacy-policy',
        },
        {
          label: 'Disclaimer',
          url: '/disclaimer-for-learn-more-about-your-self',
        },


      ],
    },

  ],
}
