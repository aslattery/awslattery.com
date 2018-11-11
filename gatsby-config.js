module.exports = {
  siteMetadata: {
    title: 'Andrew Slattery',
    siteUrl: 'https://awslattery.com'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'awslattery.com',
        short_name: 'awslattery',
        start_url: '/',
        background_color: '#FFFFFF',
        theme_color: '#FFFFFF',
        display: 'minimal-ui',
        icon: 'src/img/globals/aslattery.jpg',
      },
    },
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-plugin-google-tagmanager',
      options: {
        id: 'GTM-5DJSSW9',
        includeInDevelopment: false,
      },
    },
    'gatsby-plugin-sitemap',
  ],
};
