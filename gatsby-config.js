module.exports = {
  siteMetadata: {
    title: `Patnem Chai Shop`,
    discription: `50 years old chai shop in South Goa`
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
