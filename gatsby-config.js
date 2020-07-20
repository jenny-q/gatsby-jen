/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: 'jennifer quispe - developer',
    description: 'portfolio',
    keywords: 'gatsby, developer, software engineer, contractor'
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      }
    },
    {
      resolve: `gatsby-transformer-remark`
    },
    'gatsby-plugin-react-helmet'
  ]
}


// <Helmet>
// <title>jennifer quispe - developer</title>
// <meta name="description" content="portfolio"></meta>
// <meta name="keywords" content="gatsby, developer, software engineer, contractor"></meta>
// <meta name="robots" content="noindex, nofollow"></meta>
// </Helmet>