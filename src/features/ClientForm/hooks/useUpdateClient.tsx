import { TypedDocumentNode } from '@graphql-typed-document-node/core';
import { useMutation } from '@tanstack/react-query';
import differenceBy from 'lodash.differenceby';
import {
  UpdateClientFormMutation,
  UpdateClientFormMutationVariables,
} from 'src/__gql__/graphql';
import { gql, graphQLClient } from 'src/shared/app';
import { CustomError } from 'src/shared/error/CustomError';

import { ClientFormSubmitType, ClientFormType } from '../ClientFormType';

const mutateDocument: TypedDocumentNode<
  UpdateClientFormMutation,
  UpdateClientFormMutationVariables
> = gql`
  mutation UpdateClientForm(
    $client_id: uuid!
    # Создание связи Клиент-Статус
    $status_id: uuid
    $skip_insert_client_status: Boolean! # <- Обновлять если новое значение
    # Изменение сущность Клиент
    $client_set_input: client_set_input
    # Создание связи Клиент-Отрасль
    $client_directory_client_industry_insert_input: [client_directory_client_industry_insert_input!]!
    # Удаление связи Клиент-Отрасль
    $client_directory_client_industry_bool_exp: [client_directory_client_industry_bool_exp!]
  ) {
    # Изменение сущность Клиент
    update_client_by_pk(
      pk_columns: { id: $client_id }
      _set: $client_set_input
    ) {
      id
    }

    # Создание связи Клиент-Статус
    insert_client_status(
      objects: { client_id: $client_id, status_id: $status_id }
    ) @skip(if: $skip_insert_client_status) {
      affected_rows
    }

    # Создание связи Клиент-Отрасль (Массовое)
    insert_client_directory_client_industry(
      objects: $client_directory_client_industry_insert_input
    ) {
      affected_rows
    }

    # Удаление связи Клиент-Отрасль (Массовое)
    delete_client_directory_client_industry(
      where: { _or: $client_directory_client_industry_bool_exp }
    ) {
      affected_rows
    }
  }
`;

type Props = {
  clientId: string | undefined;
};
export const useUpdateClient = ({ clientId }: Props) => {
  const { mutateAsync, ...rest } = useMutation<
    UpdateClientFormMutation,
    unknown,
    UpdateClientFormMutationVariables
  >({
    mutationFn: (data) => graphQLClient.request(mutateDocument, data),
  });

  const updateClient = async (
    originValues: ClientFormType,
    newValues: ClientFormSubmitType,
  ) => {
    if (!clientId) {
      return Promise.reject(
        new CustomError('Отсутствует идентификатор клиента', 500),
      );
    }

    const deletedIndustries = differenceBy(
      originValues.industries,
      newValues.industries,
      'value',
    );

    const createIndustries = differenceBy(
      newValues.industries,
      originValues.industries,
      'value',
    );

    await mutateAsync({
      client_id: clientId,
      skip_insert_client_status:
        newValues.status?.value === originValues.status?.value,
      status_id: newValues.status?.value,
      client_set_input: {
        name: newValues.name,
        employee_id: newValues.responsible_employee?.value,
      },
      client_directory_client_industry_bool_exp: deletedIndustries.map(
        (el) => ({
          client_id: { _eq: clientId },
          industry_id: { _eq: el.value },
        }),
      ),
      client_directory_client_industry_insert_input: createIndustries.map(
        (el) => ({
          client_id: clientId,
          industry_id: el.value,
        }),
      ),
    });
  };

  return { updateClient, ...rest };
};
