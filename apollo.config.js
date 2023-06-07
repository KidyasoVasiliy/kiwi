require('dotenv').config();

/** Конфигурация для плагина apollo
 * https://marketplace.visualstudio.com/items?itemName=apollographql.vscode-apollo
 */
module.exports = {
  client: {
    service: {
      headers: {
        'X-Hasura-Admin-Secret':
          process.env.REACT_APP_HASURA_GRAPHQL_ADMIN_SECRET,
      },
      name: 'sterling-grizzly-67',
      url: process.env.REACT_APP_HASURA_GRAPHQL_URL,
      skipSSLValidation: false,
    },
  },
};
