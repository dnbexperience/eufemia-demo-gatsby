module.exports = {
  siteMetadata: {
    title: 'Eufemia Demos'
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Eufemia Demos',
        short_name: 'Eufemia',
        start_url: '/',
        background_color: '#fff',
        theme_color: '#007272',
        display: 'minimal-ui',
        icon: 'node_modules/dnb-ui-lib/assets/images/dnb-icon.png' // This path is relative to the root of the site.
      }
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    'gatsby-plugin-emotion',
    'gatsby-plugin-offline'
  ]
}
