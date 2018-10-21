module.exports = {
  siteMetadata: {
    title: `Serendiptist - Portfolio site`,
    discription: `blog - Blog about travel, art , photos, and tech career`
  },
  plugins: [`gatsby-plugin-react-helmet`],
  plugins: [
  {
    resolve: `gatsby-plugin-google-analytics`,
    options: {
      trackingId: "UA-106888717-1",
      // Setting this parameter is optional
      anonymize: true,
    },
  },
],
  plugins: [
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`
      }
    }
  ],
  plugins: [
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`,
      },
    },
  ],
}
