import { TypedDocumentNode } from '@graphql-typed-document-node/core';
import { useQueryClient } from '@tanstack/react-query';
import {
  EmployeeSelectQuery,
  EmployeeSelectQueryVariables,
} from 'src/__gql__/graphql';
import { graphQLClient, gql } from 'src/shared/app';

const employeeSelectQueryDoc: TypedDocumentNode<
  EmployeeSelectQuery,
  EmployeeSelectQueryVariables
> = gql`
  query EmployeeSelect($limit: Int, $offset: Int, $where: employee_bool_exp) {
    employee(where: $where, limit: $limit, offset: $offset) {
      fullName
      id
    }
  }
`;

const mapEmployeeOptions = (list: EmployeeSelectQuery['employee'] = []) => {
  const newList = list.map(({ id, fullName }) => {
    return {
      key: id,
      label: fullName,
      value: id,
    };
  });

  // console.log('mapEmployeeOptions from:to', list, newList);

  return newList;
};

export const useEmployeeSelect = () => {
  const queryClient = useQueryClient();

  const fetchEmployeeSelect = async (fullName?: string) => {
    console.log('first fetchEmployeeSelect', fullName);
    const result = await queryClient.ensureQueryData({
      queryKey: ['employee', fullName],
      queryFn: async () =>
        graphQLClient.request(
          employeeSelectQueryDoc,
          fullName
            ? {
                where: fullName
                  ? { fullName: { _ilike: `%${fullName}%` } }
                  : undefined,
              }
            : { limit: 50, offset: 0 },
        ),
      cacheTime: 300000, // 5 min
    });

    return mapEmployeeOptions(result.employee);
  };

  return { fetchEmployeeSelect };
};
