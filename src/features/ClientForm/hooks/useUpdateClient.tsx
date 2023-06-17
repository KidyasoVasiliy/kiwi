import { TypedDocumentNode } from '@graphql-typed-document-node/core';
import { useMutation } from '@tanstack/react-query';
import {
  UpdateClientMutation,
  UpdateClientMutationVariables,
} from 'src/__gql__/graphql';
import { gql, graphQLClient } from 'src/shared/app';

const queryDocument: TypedDocumentNode<
  UpdateClientMutation,
  UpdateClientMutationVariables
> = gql`
  mutation UpdateClient($clientId: uuid!, $client_set_input: client_set_input) {
    update_client_by_pk(
      pk_columns: { id: $clientId }
      _set: $client_set_input
    ) {
      id
    }

    # update_client_directory_client_industry
  }
`;

export const useUpdateClient = () => {
  const createClient = useMutation<
    UpdateClientMutation,
    unknown,
    UpdateClientMutationVariables
  >({
    mutationFn: (data) => graphQLClient.request(queryDocument, data),
  });

  return createClient;
};
