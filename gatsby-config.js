module.exports = {
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Satiate`,
        short_name: `Satiate`,
        start_url: `/`,
        background_color: `#E22635`,
        theme_color: `#ffffff`,
        display: `standalone`,
        icon: `src/images/logo.png`,
      },
    },
    `gatsby-plugin-offline`,
  ],
};
