/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`
})

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "first gatsby project",
    data: ['item 1', 'item 2', 'item 3'],
    description: "random description",
    author: "@Johndoe",
    person: {
      name: "mohamed",
      age: 19
    }
  },
  plugins: [`gatsby-plugin-styled-components`, `gatsby-transformer-sharp`, `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `cqq5sclrera7`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.ACCESS_TOKEN,
      },
    },
  ],

}