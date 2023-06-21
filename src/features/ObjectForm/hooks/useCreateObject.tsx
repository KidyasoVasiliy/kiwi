import { TypedDocumentNode } from '@graphql-typed-document-node/core';
import { useMutation } from '@tanstack/react-query';
import {
  ObjectClientMutation,
  ObjectClientMutationVariables,
} from 'src/__gql__/graphql';
import { gql, graphQLClient } from 'src/shared/app';

import { ObjectFormSubmitType } from '../ObjectFormType';

const mutateDocument: TypedDocumentNode<
  ObjectClientMutation,
  ObjectClientMutationVariables
> = gql`
  mutation ObjectClient($client_id: uuid!, $name: String!) {
    # Создание сущность Объект клиента
    insert_client_object_one(object: { client_id: $client_id, name: $name }) {
      id
    }
  }
`;

export const useCreateObject = () => {
  const { mutateAsync, ...rest } = useMutation<
    ObjectClientMutation,
    unknown,
    ObjectClientMutationVariables
  >({
    mutationFn: (data) => graphQLClient.request(mutateDocument, data),
  });

  const createObject = async (values: ObjectFormSubmitType) => {
    const newClient = await mutateAsync({
      name: values.name,
      client_id: values.client.value,
    });

    const objectId = newClient.insert_client_object_one?.id;

    return objectId;
  };

  return {
    createObject,
    isLoading: rest.isLoading,
    create: rest,
  };
};
