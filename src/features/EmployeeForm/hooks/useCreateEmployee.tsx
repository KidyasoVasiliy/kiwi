import { TypedDocumentNode } from '@graphql-typed-document-node/core';
import { useMutation } from '@tanstack/react-query';
import {
  EmployeeClientMutation,
  EmployeeClientMutationVariables,
} from 'src/__gql__/graphql';
import { gql, graphQLClient } from 'src/shared/app';

import { EmployeeFormSubmitType } from '../EmployeeFormType';

const mutateDocument: TypedDocumentNode<
  EmployeeClientMutation,
  EmployeeClientMutationVariables
> = gql`
  mutation EmployeeClient($fullName: String!) {
    # Создание сущность Объект клиента
    insert_employee_one(object: { fullName: $fullName }) {
      id
    }
  }
`;

export const useCreateEmployee = () => {
  const { mutateAsync, ...rest } = useMutation<
    EmployeeClientMutation,
    unknown,
    EmployeeClientMutationVariables
  >({
    mutationFn: (data) => graphQLClient.request(mutateDocument, data),
  });

  const createEmployee = async (values: EmployeeFormSubmitType) => {
    const newClient = await mutateAsync({
      fullName: values.fullName,
    });

    const employeeId = newClient.insert_employee_one?.id;

    return employeeId;
  };

  return {
    createEmployee,
    isLoading: rest.isLoading,
    create: rest,
  };
};
