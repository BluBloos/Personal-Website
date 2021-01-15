/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

/*

React helmet -> attributes you add in the component will get added to static HTML builds
Ex)  title, meta attributes, etc
- basically no morphing

*/

module.exports = {
  /* Your site config here */
  plugins: [`gatsby-plugin-react-helmet`],
}
