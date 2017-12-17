module.exports = {
  siteMetadata: {
    title: `Serendiptist`,
    discription: `blog`
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
}
