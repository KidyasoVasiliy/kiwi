import { useQuery } from '@tanstack/react-query';
import request from 'graphql-request';
import { gql } from 'src/gql/request';

const clientsQueryDoc = gql`
  query Clients($offset: Int, $limit: Int) {
    client(offset: $offset, limit: $limit) {
      id
      created_at
      updated_at
      fullName
      objects {
        name
      }
    }
  }
`;

export const useClients = () => {
  const result = useQuery({
    queryKey: ['clients'],
    queryFn: async () =>
      request({
        document: clientsQueryDoc,
        variables: {
          offset: 0,
          limit: 10,
        },
        url: process.env.REACT_APP_HASURA_GRAPHQL_URL!,
        requestHeaders: {
          'X-Hasura-Admin-Secret':
            process.env.REACT_APP_HASURA_GRAPHQL_ADMIN_SECRET!,
        },
      }),
    // request(
    //   process.env.REACT_APP_HASURA_GRAPHQL_URL!,
    //   clientsQueryDoc,
    // {
    //   offset: 0,
    //   limit: 10,
    // },

    // ),
  });

  return result;
};
