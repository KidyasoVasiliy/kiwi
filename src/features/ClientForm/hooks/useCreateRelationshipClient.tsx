import { TypedDocumentNode } from '@graphql-typed-document-node/core';
import { useMutation } from '@tanstack/react-query';
import {
  CreateRelationshipClientMutation,
  CreateRelationshipClientMutationVariables,
} from 'src/__gql__/graphql';
import { gql, graphQLClient } from 'src/shared/app';

const queryDocument: TypedDocumentNode<
  CreateRelationshipClientMutation,
  CreateRelationshipClientMutationVariables
> = gql`
  mutation CreateRelationshipClient(
    $clientId: uuid
    $status_id: uuid
    $industry_id: uuid
    $skipStatus: Boolean!
    $skipIndustry: Boolean!
  ) {
    insert_client_status(
      objects: { client_id: $clientId, status_id: $status_id }
    ) @skip(if: $skipStatus) {
      returning {
        id
      }
    }
    insert_client_directory_client_industry(
      objects: { client_id: $clientId, industry_id: $industry_id }
    ) @skip(if: $skipIndustry) {
      returning {
        id
      }
    }
  }
`;

export const useCreateRelationshipClient = () => {
  const createClient = useMutation<
    CreateRelationshipClientMutation,
    unknown,
    CreateRelationshipClientMutationVariables
  >({
    mutationFn: (data) => graphQLClient.request(queryDocument, data),
  });

  return createClient;
};
