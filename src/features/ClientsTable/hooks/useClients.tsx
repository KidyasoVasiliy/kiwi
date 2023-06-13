import { TypedDocumentNode } from '@graphql-typed-document-node/core';
import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import { ClientsQuery, ClientsQueryVariables } from 'src/__gql__/graphql';
import { graphQLClient, gql } from 'src/shared/app';

const clientsQueryDoc: TypedDocumentNode<
  ClientsQuery,
  ClientsQueryVariables
> = gql`
  query Clients(
    $offset: Int
    $limit: Int
    $distinct_on: [client_select_column!]
    $order_by: [client_order_by!]
    $where: client_bool_exp
  ) {
    client_aggregate {
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
      name
      statuses(where: { is_current: { _eq: true } }) {
        is_current
        status
      }
      contacts(where: { is_main: { _eq: true } }) {
        is_main
        phone
      }
      responsible_employee {
        fullName
      }
    }
  }
`;

const mapClientsTable = (list: ClientsQuery['client'] = []) => {
  const newList = list.map(
    ({ statuses, contacts, responsible_employee, ...rest }) => {
      return {
        key: rest.id,
        ...rest,
        status: statuses[0]?.status,
        contact: contacts[0]?.phone,
        responsible_employee: responsible_employee?.fullName,
      };
    },
  );

  // console.log('mapClientsTable from:to', list, newList);

  return newList;
};

export type ClientsTableDataType = ReturnType<typeof mapClientsTable>[number];
export const useClientsTable = (variables: ClientsQueryVariables) => {
  const result = useQuery({
    refetchOnWindowFocus: false,
    queryKey: ['clients', variables],
    queryFn: async () => graphQLClient.request(clientsQueryDoc, variables),
    select: (data) => ({
      list: mapClientsTable(data.client),
      pagination: data.client_aggregate.aggregate,
    }),
  });

  return result;
};
