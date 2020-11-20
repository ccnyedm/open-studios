const path = require('path');

module.exports = {
    pathPrefix: "/openstudios2020",
    plugins: [
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'images',
                path: path.join(__dirname, 'src', 'images'),
            },
        },
        'gatsby-image',
        'gatsby-plugin-sharp',
        'gatsby-transformer-sharp',
        'gatsby-plugin-sass',
        {
            resolve: "gatsby-plugin-web-font-loader",
            options: {
              custom: {
                families: ["Sintesi Bold, Sintesi Regular, Happy Italic"],
                urls: ["fonts/fonts.css"],
              },
            },
          },
  
    ],
};