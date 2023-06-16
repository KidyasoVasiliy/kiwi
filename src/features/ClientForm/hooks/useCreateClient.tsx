import { TypedDocumentNode } from '@graphql-typed-document-node/core';
import { useMutation, useQuery } from '@tanstack/react-query';
import {
  CreateClientMutation,
  CreateClientMutationVariables,
} from 'src/__gql__/graphql';
import { gql, graphQLClient } from 'src/shared/app';

const queryDocument: TypedDocumentNode<
  CreateClientMutation,
  CreateClientMutationVariables
> = gql`
  mutation CreateClient($employee_id: uuid!, $name: String) {
    insert_client(objects: { employee_id: $employee_id, name: $name }) {
      returning {
        id
      }
    }
  }
`;

export const useCreateClient = () => {
  const createClient = useMutation<
    CreateClientMutation,
    unknown,
    CreateClientMutationVariables
  >({
    mutationFn: (data) => graphQLClient.request(queryDocument, data),
  });

  return createClient;
};
