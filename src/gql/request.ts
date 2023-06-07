import { GraphQLClient } from 'graphql-request';

export const request = new GraphQLClient(
  `https://api.graph.cool/simple/v1/cixos23120m0n0173veiiwrjr`,
);

// Override all existing headers
request.setHeaders({
  'X-Hasura-Admin-Secret': process.env.REACT_APP_HASURA_GRAPHQL_ADMIN_SECRET!,
});
