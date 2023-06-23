import { TypedDocumentNode } from '@graphql-typed-document-node/core';
import { useQuery } from '@tanstack/react-query';
import dayjs from 'dayjs';
import {
  ClientTableQuery,
  ClientTableQueryVariables,
} from 'src/__gql__/graphql';
import { graphQLClient, gql } from 'src/shared/app';

const queryDocument: TypedDocumentNode<
  ClientTableQuery,
  ClientTableQueryVariables
> = gql`
  query ClientTable(
    $offset: Int
    $limit: Int
    $distinct_on: [client_select_column!]
    $order_by: [client_order_by!]
    $where: client_bool_exp
    # Динамические колонки
    $includeCreatedAt: Boolean!
    $includeUpdateAt: Boolean!
  ) {
    client_aggregate(where: $where) {
      aggregate {
        count
      }
    }
    client(
      offset: $offset
      limit: $limit
      distinct_on: $distinct_on
      order_by: $order_by
      where: $where
    ) {
      id
      created_at @include(if: $includeCreatedAt)
      updated_at @include(if: $includeUpdateAt)
      name
      statuses(where: { is_current: { _eq: true } }) {
        status {
          name
          color
        }
      }
      contacts(where: { is_main: { _eq: true } }) {
        phone
      }
      employee_id
      responsible_employee {
        fullName
      }
      industries {
        industry {
          name
          color
        }
      }
    }
  }
`;

const mapping = (list: ClientTableQuery['client'] = []) => {
  const newList = list.map(
    ({ statuses, contacts, responsible_employee, industries, ...rest }) => {
      return {
        key: rest.id,
        ...rest,
        status: statuses[0]?.status,
        contact: contacts[0]?.phone,
        responsible_employee: responsible_employee?.fullName,
        industries: industries.map((industry) => industry.industry),
        created_at: dayjs(rest.created_at).format('DD/MM/YYYY HH:mm'),
        updated_at: dayjs(rest.updated_at).format('DD/MM/YYYY HH:mm'),
      };
    },
  );

  // console.log('mapClientTable from:to', list, newList);

  return newList;
};

export type ClientTableDataType = ReturnType<typeof mapping>[number];
export const useClientTable = (variables: ClientTableQueryVariables) => {
  const result = useQuery({
    refetchOnWindowFocus: false,
    queryKey: ['Client', variables],
    queryFn: async () => graphQLClient.request(queryDocument, variables),
    select: (data) => ({
      list: mapping(data.client),
      pagination: data.client_aggregate.aggregate,
    }),
  });

  return result;
};
