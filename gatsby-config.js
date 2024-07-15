/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  pathPrefix: `/theOmurbekWed`,
  plugins: [
    `gatsby-plugin-react-helmet`,
    'gatsby-plugin-eslint',
    `gatsby-plugin-emotion`,
    'gatsby-optional-chaining',
    `gatsby-plugin-react-i18next`,
    {
      resolve: `gatsby-plugin-react-i18next`,
      path: `${__dirname}/locales`,
      languages: ['en', 'kg', 'kor', 'ru'],
      defaultLanguage: 'en',
      i18nextOptions: {
        interpolation: {
          escapeValue: false, // not needed for react as it escapes by default
        },
      },
    },
    {
      resolve: 'gatsby-alias-imports',
      options: {
        aliases: {
          '@components': 'src/components',
          '@helpers': 'src/helpers',
          '@pages': 'src/pages',
          '@assets': 'src/assets',
          '@hooks': 'src/hooks',
          '@': 'src',
        },
      },
    },
  ],
};
