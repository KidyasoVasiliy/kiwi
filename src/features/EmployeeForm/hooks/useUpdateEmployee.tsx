import { TypedDocumentNode } from '@graphql-typed-document-node/core';
import { useMutation } from '@tanstack/react-query';
import {
  UpdateEmployeeFormMutation,
  UpdateEmployeeFormMutationVariables,
} from 'src/__gql__/graphql';
import { gql, graphQLClient } from 'src/shared/app';
import { CustomError } from 'src/shared/error/CustomError';

import { EmployeeFormSubmitType, EmployeeFormType } from '../EmployeeFormType';

const mutateDocument: TypedDocumentNode<
  UpdateEmployeeFormMutation,
  UpdateEmployeeFormMutationVariables
> = gql`
  mutation UpdateEmployeeForm(
    $employee_id: uuid!
    # Изменение сущность Клиент
    $employee_set_input: employee_set_input
  ) {
    # Изменение сущность Клиент
    update_employee_by_pk(
      pk_columns: { id: $employee_id }
      _set: $employee_set_input
    ) {
      id
    }
  }
`;

type Props = {
  employeeId: string | undefined;
};
export const useUpdateEmployee = ({ employeeId }: Props) => {
  const { mutateAsync, ...rest } = useMutation<
    UpdateEmployeeFormMutation,
    unknown,
    UpdateEmployeeFormMutationVariables
  >({
    mutationFn: (data) => graphQLClient.request(mutateDocument, data),
  });

  const updateEmployee = async (
    originValues: EmployeeFormType,
    newValues: EmployeeFormSubmitType,
  ) => {
    if (!employeeId) {
      return Promise.reject(
        new CustomError('Отсутствует идентификатор пользователя', 500),
      );
    }

    await mutateAsync({
      employee_id: employeeId,
      employee_set_input: {
        fullName: newValues.fullName,
      },
    });
  };

  return { updateEmployee, ...rest };
};
