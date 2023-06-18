import { TypedDocumentNode } from '@graphql-typed-document-node/core';
import { useMutation } from '@tanstack/react-query';
import {
  CreateClientMutation,
  CreateClientMutationVariables,
  CreateRelationshipClientMutation,
  CreateRelationshipClientMutationVariables,
} from 'src/__gql__/graphql';
import { gql, graphQLClient } from 'src/shared/app';
import { CustomError } from 'src/shared/error/CustomError';

import { ClientFormSubmitType } from '../ClientFormType';

const mutateDocument: TypedDocumentNode<
  CreateClientMutation,
  CreateClientMutationVariables
> = gql`
  mutation CreateClient($employee_id: uuid!, $name: String!) {
    # Создание сущность Клиент
    insert_client_one(object: { employee_id: $employee_id, name: $name }) {
      id
    }
  }
`;

const nextMutateDocument: TypedDocumentNode<
  CreateRelationshipClientMutation,
  CreateRelationshipClientMutationVariables
> = gql`
  mutation CreateRelationshipClient(
    $clientId: uuid!
    # Создание связи Клиент-Статус
    $status_id: uuid!
    # Создание связи Клиент-Статус
    $industries: [client_directory_client_industry_insert_input!]! ## как сделать необязательным?
  ) {
    # Создание связи Клиент-Статус
    insert_client_status(
      objects: { client_id: $clientId, status_id: $status_id }
    ) {
      affected_rows
    }
    # Создание связи Клиент-Отрасль
    insert_client_directory_client_industry(objects: $industries) {
      affected_rows
    }
  }
`;

export const useCreateClient = () => {
  const { mutateAsync, ...rest } = useMutation<
    CreateClientMutation,
    unknown,
    CreateClientMutationVariables
  >({
    mutationFn: (data) => graphQLClient.request(mutateDocument, data),
  });

  const { mutateAsync: nextMutateAsync, ...restNext } = useMutation<
    CreateRelationshipClientMutation,
    unknown,
    CreateRelationshipClientMutationVariables
  >({
    mutationFn: (data) => graphQLClient.request(nextMutateDocument, data),
  });

  const createClient = async (values: ClientFormSubmitType) => {
    const newClient = await mutateAsync({
      name: values.name,
      employee_id: values.responsible_employee.value,
    });

    const clientId = newClient.insert_client_one?.id;

    if (!clientId) {
      return Promise.reject(
        new CustomError('Отсутствует идентификатор клиента', 500),
      );
    }

    await nextMutateAsync({
      clientId: clientId,
      status_id: values.status.value,
      industries: values.industries.map(({ value }) => ({
        client_id: clientId,
        industry_id: value,
      })),
    });

    return clientId;
  };

  return {
    createClient,
    isLoading: rest.isLoading || restNext.isLoading,
    create: rest,
    createRel: restNext,
  };
};
