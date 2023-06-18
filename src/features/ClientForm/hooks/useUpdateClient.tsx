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
  mutation UpdateClient(
    $clientId: uuid!
    $client_set_input: client_set_input
    $insertIndustries: [client_directory_client_industry_insert_input!]!
    $skipInsertIndustry: Boolean!
    $deleteClient_industry: [client_directory_client_industry_bool_exp!]!
    $skipDeleteIndustry: Boolean!
    $status_id: uuid
    $skipInsertStatus: Boolean!
  ) {
    update_client_by_pk(
      pk_columns: { id: $clientId }
      _set: $client_set_input
    ) {
      id
    }

    insert_client_status(
      objects: { client_id: $clientId, status_id: $status_id }
    ) @skip(if: $skipInsertStatus) {
      affected_rows
    }

    insert_client_directory_client_industry(objects: $insertIndustries)
      @skip(if: $skipInsertIndustry) {
      affected_rows
    }

    delete_client_directory_client_industry(
      where: { _or: $deleteClient_industry }
    ) @skip(if: $skipDeleteIndustry) {
      affected_rows
    }
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
