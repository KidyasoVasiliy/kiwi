import { TypedDocumentNode } from '@graphql-typed-document-node/core';
import { useQueryClient } from '@tanstack/react-query';
import {
  ClientsCountQuery,
  ClientsCountQueryVariables,
} from 'src/__gql__/graphql';
import { graphQLClient, gql } from 'src/shared/app';

const clientsCountQueryDoc: TypedDocumentNode<
  ClientsCountQuery,
  ClientsCountQueryVariables
> = gql`
  query ClientsCount($where: client_bool_exp) {
    client_aggregate(where: $where) {
      aggregate {
        count
      }
    }
  }
`;

export const useClientsCount = () => {
  const queryClient = useQueryClient();

  const fetchClientsCount = async (variables: ClientsCountQueryVariables) => {
    const result = await queryClient.ensureQueryData({
      queryKey: ['clientsCount', variables],
      queryFn: async () =>
        graphQLClient.request(clientsCountQueryDoc, variables),
    });

    return result.client_aggregate.aggregate?.count;
  };

  return { fetchClientCount: fetchClientsCount };
};
