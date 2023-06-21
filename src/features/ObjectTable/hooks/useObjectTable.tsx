import { TypedDocumentNode } from '@graphql-typed-document-node/core';
import { useQuery } from '@tanstack/react-query';
import dayjs from 'dayjs';
import {
  ObjectTableQuery,
  ObjectTableQueryVariables,
} from 'src/__gql__/graphql';
import { graphQLClient, gql } from 'src/shared/app';

const queryDocument: TypedDocumentNode<
  ObjectTableQuery,
  ObjectTableQueryVariables
> = gql`
  query ObjectTable(
    $offset: Int
    $limit: Int
    $distinct_on: [client_object_select_column!]
    $order_by: [client_object_order_by!]
    $where: client_object_bool_exp
    # Динамические колонки
    $includeCreatedAt: Boolean!
    $includeUpdateAt: Boolean!
  ) {
    client_object_aggregate(where: $where) {
      aggregate {
        count
      }
    }
    client_object(
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
      client_id
      client {
        name
      }
    }
  }
`;

const mapping = (list: ObjectTableQuery['client_object'] = []) => {
  const newList = list.map(({ client, ...rest }) => {
    return {
      key: rest.id,
      ...rest,
      client: client?.name,
      created_at: dayjs(rest.created_at).format('DD/MM/YYYY HH:mm'),
      updated_at: dayjs(rest.updated_at).format('DD/MM/YYYY HH:mm'),
    };
  });

  // console.log('mapObjectTable from:to', list, newList);

  return newList;
};

export type ObjectTableDataType = ReturnType<typeof mapping>[number];
export const useObjectTable = (variables: ObjectTableQueryVariables) => {
  const result = useQuery({
    refetchOnWindowFocus: false,
    queryKey: ['Object', variables],
    queryFn: async () => graphQLClient.request(queryDocument, variables),
    select: (data) => ({
      list: mapping(data.client_object),
      pagination: data.client_object_aggregate.aggregate,
    }),
  });

  return result;
};
