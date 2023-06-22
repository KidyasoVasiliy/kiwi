import { TypedDocumentNode } from '@graphql-typed-document-node/core';
import { useQuery } from '@tanstack/react-query';
import dayjs from 'dayjs';
import {
  EmployeeTableQuery,
  EmployeeTableQueryVariables,
} from 'src/__gql__/graphql';
import { graphQLClient, gql } from 'src/shared/app';

const queryDocument: TypedDocumentNode<
  EmployeeTableQuery,
  EmployeeTableQueryVariables
> = gql`
  query EmployeeTable(
    $offset: Int
    $limit: Int
    $distinct_on: [employee_select_column!]
    $order_by: [employee_order_by!]
    $where: employee_bool_exp
    # Динамические колонки
    $includeCreatedAt: Boolean!
    $includeUpdateAt: Boolean!
  ) {
    employee_aggregate(where: $where) {
      aggregate {
        count
      }
    }
    employee(
      offset: $offset
      limit: $limit
      distinct_on: $distinct_on
      order_by: $order_by
      where: $where
    ) {
      id
      created_at @include(if: $includeCreatedAt)
      updated_at @include(if: $includeUpdateAt)
      fullName
    }
  }
`;

const mapping = (list: EmployeeTableQuery['employee'] = []) => {
  const newList = list.map(({ ...rest }) => {
    return {
      key: rest.id,
      ...rest,
      created_at: dayjs(rest.created_at).format('DD/MM/YYYY HH:mm'),
      updated_at: dayjs(rest.updated_at).format('DD/MM/YYYY HH:mm'),
    };
  });

  // console.log('mapEmployeeTable from:to', list, newList);

  return newList;
};

export type EmployeeTableDataType = ReturnType<typeof mapping>[number];
export const useEmployeeTable = (variables: EmployeeTableQueryVariables) => {
  const result = useQuery({
    refetchOnWindowFocus: false,
    queryKey: ['Employee', variables],
    queryFn: async () => graphQLClient.request(queryDocument, variables),
    select: (data) => ({
      list: mapping(data.employee),
      pagination: data.employee_aggregate.aggregate,
    }),
  });

  return result;
};
