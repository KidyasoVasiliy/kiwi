import { TypedDocumentNode } from '@graphql-typed-document-node/core';
import { useMutation } from '@tanstack/react-query';
import {
  UpdateObjectFormMutation,
  UpdateObjectFormMutationVariables,
} from 'src/__gql__/graphql';
import { gql, graphQLClient } from 'src/shared/app';
import { CustomError } from 'src/shared/error/CustomError';

import { ObjectFormSubmitType, ObjectFormType } from '../ObjectFormType';

const mutateDocument: TypedDocumentNode<
  UpdateObjectFormMutation,
  UpdateObjectFormMutationVariables
> = gql`
  mutation UpdateObjectForm(
    $object_id: uuid!
    # Изменение сущность Клиент
    $client_object_set_input: client_object_set_input
  ) {
    # Изменение сущность Клиент
    update_client_object_by_pk(
      pk_columns: { id: $object_id }
      _set: $client_object_set_input
    ) {
      id
    }
  }
`;

type Props = {
  objectId: string | undefined;
};
export const useUpdateObject = ({ objectId }: Props) => {
  const { mutateAsync, ...rest } = useMutation<
    UpdateObjectFormMutation,
    unknown,
    UpdateObjectFormMutationVariables
  >({
    mutationFn: (data) => graphQLClient.request(mutateDocument, data),
  });

  const updateObject = async (
    originValues: ObjectFormType,
    newValues: ObjectFormSubmitType,
  ) => {
    if (!objectId) {
      return Promise.reject(
        new CustomError('Отсутствует идентификатор клиента', 500),
      );
    }

    await mutateAsync({
      object_id: objectId,
      client_object_set_input: {
        name: newValues.name,
        client_id: newValues.client?.value,
      },
    });
  };

  return { updateObject, ...rest };
};
