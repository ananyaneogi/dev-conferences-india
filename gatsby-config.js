module.exports = {
  siteMetadata: {
    title: `Dev Conferences India`,
    description: `List of awesome developer conferences in India`,
    author: `https://ananyaneogi.com`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Dev Conferences India`,
        short_name: `Dev Conferences India`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#001fff`,
        display: `minimal-ui`,
        icon: `src/images/speaker.png`, // This path is relative to the root of the site.
      },
    },
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          path: `${__dirname}/content/conferences`,
          name: `conferences`,
        },
      },
      {
        resolve: 'gatsby-plugin-react-axe',
        options: {
          showInProduction: false
        },
      },
      'gatsby-transformer-remark',
      `gatsby-plugin-emotion`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
