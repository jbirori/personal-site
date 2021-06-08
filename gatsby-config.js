/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: 'Jeff Birori',
    // titleTemplate: "%s · The Real Hero",
    description: 'Jeff Birori is a software engineer based in San Francisco, CA.',
    url: 'https://www.jeffbirori.com', // No trailing slash allowed!
    image: '', // Path to your image you placed in the 'static' folder
    twitterUsername: '@jeffreybirori',
  },
  plugins: [
    `gatsby-plugin-netlify-cms`,
    'gatsby-transformer-yaml',
    'gatsby-plugin-react-helmet',
    `gatsby-transformer-remark`,
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: [
          'rubik\:600,700,800',
          'Poppins\:300,400',
        ],
        display: 'swap',
      },
    },
    {
      resolve: 'gatsby-plugin-styled-components',
      options: {
        // Add any options here
      },
    },
    {
      resolve: 'gatsby-plugin-layout',
      options: {
        component: require.resolve('./src/layouts/index.jsx'),
      },
    },
    {
      resolve: 'gatsby-plugin-eslint',
      options: {
        test: /\.js$|\.jsx$/,
        exclude: /(node_modules|.cache|public)/,
        stages: ['develop'],
        options: {
          emitWarning: true,
          failOnError: false,
        },
      },
    },
    {
      resolve: 'gatsby-transformer-yaml',
      options: {
        typeName: ({ node }) => {
          const name = node.sourceInstanceName;
          if (name === 'data') {
            return 'Project';
          }
          return name;
        },
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'data',
        path: `${__dirname}/src/data/`,
        // ignore: [`**/\.*`], // ignore files starting with a dot
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'data',
        path: `${__dirname}/content/projects/`,
        // ignore: [`**/\.*`], // ignore files starting with a dot
      },
    },
  ],
};
