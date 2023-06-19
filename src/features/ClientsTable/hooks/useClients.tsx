import { TypedDocumentNode } from '@graphql-typed-document-node/core';
import { useQuery } from '@tanstack/react-query';
import {
  ClientsTableQuery,
  ClientsTableQueryVariables,
} from 'src/__gql__/graphql';
import { graphQLClient, gql } from 'src/shared/app';

const queryDocument: TypedDocumentNode<
  ClientsTableQuery,
  ClientsTableQueryVariables
> = gql`
  query ClientsTable(
    $offset: Int
    $limit: Int
    $distinct_on: [client_select_column!]
    $order_by: [client_order_by!]
    $where: client_bool_exp
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
      created_at
      updated_at
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

const mapping = (list: ClientsTableQuery['client'] = []) => {
  const newList = list.map(
    ({ statuses, contacts, responsible_employee, industries, ...rest }) => {
      return {
        key: rest.id,
        ...rest,
        status: statuses[0]?.status,
        contact: contacts[0]?.phone,
        responsible_employee: responsible_employee?.fullName,
        industries: industries.map((industry) => industry.industry),
      };
    },
  );

  // console.log('mapClientsTable from:to', list, newList);

  return newList;
};

export type ClientsTableDataType = ReturnType<typeof mapping>[number];
export const useClientsTable = (variables: ClientsTableQueryVariables) => {
  const result = useQuery({
    refetchOnWindowFocus: false,
    queryKey: ['clients', variables],
    queryFn: async () => graphQLClient.request(queryDocument, variables),
    select: (data) => ({
      list: mapping(data.client),
      pagination: data.client_aggregate.aggregate,
    }),
  });

  return result;
};
