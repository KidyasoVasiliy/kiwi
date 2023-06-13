import { GraphQLClient } from 'graphql-request';
import { graphql } from 'src/__gql__';

/** Клиент для запросов */
export const graphQLClient = new GraphQLClient(
  process.env.REACT_APP_HASURA_GRAPHQL_URL!,
  {
    headers: {
      'X-Hasura-Admin-Secret':
        process.env.REACT_APP_HASURA_GRAPHQL_ADMIN_SECRET!,
    },
  },
);

/** Шаблонизатор gql запроса */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const gql = (args: any) => graphql(args) as any;
