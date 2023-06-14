import { TypedDocumentNode } from '@graphql-typed-document-node/core';
import { useQueryClient } from '@tanstack/react-query';
import debounce from 'lodash.debounce';
import { useState, useRef, useCallback, useMemo } from 'react';
import {
  Client_Bool_Exp,
  ClientsCountQuery,
  ClientsCountQueryVariables,
  InputMaybe,
} from 'src/__gql__/graphql';
import { graphQLClient, gql } from 'src/shared/app';

import { ClientsTableFilterType } from '..';

const clientsCountQueryDoc: TypedDocumentNode<
  ClientsCountQuery,
  ClientsCountQueryVariables
> = gql`
  query ClientsCount($where: client_bool_exp) {
    client_aggregate(where: $where) {
      aggregate {
        count
      }
    }
  }
`;

const useClientsCount = () => {
  const queryClient = useQueryClient();

  const fetchClientsCount = async (variables: ClientsCountQueryVariables) => {
    const result = await queryClient.ensureQueryData({
      queryKey: ['clientsCount', variables],
      queryFn: async () =>
        graphQLClient.request(clientsCountQueryDoc, variables),
    });

    return result.client_aggregate.aggregate?.count;
  };

  return { fetchClientCount: fetchClientsCount };
};

export const usePrefetch = () => {
  const { fetchClientCount } = useClientsCount();

  const [fetching, setFetching] = useState(false);
  const [count, setCount] = useState<number | undefined>(undefined);
  const fetchRef = useRef(0);

  const loadOptions = useCallback(
    (values: ClientsTableFilterType) => {
      fetchRef.current += 1;
      const fetchId = fetchRef.current;
      setCount(undefined);
      setFetching(true);

      const where: InputMaybe<Client_Bool_Exp> = {};

      if (values.responsible_employee?.length) {
        where.responsible_employee = {
          _or: values.responsible_employee?.map((item) => ({
            id: { _eq: item.value },
          })),
        };
      }

      if (values.industry?.length) {
        where.industries = {
          industry: {
            _or: values.industry?.map((item) => ({
              id: { _eq: item.value },
            })),
          },
        };
      }

      if (values.status?.length) {
        where.statuses = {
          is_current: { _eq: true },
          status: {
            _or: values.status?.map((item) => ({
              id: { _eq: item.value },
            })),
          },
        };
      }

      fetchClientCount({
        where,
      }).then((_count) => {
        if (fetchId !== fetchRef.current) {
          return;
        }

        setCount(_count);
        setFetching(false);
      });
    },
    [fetchClientCount],
  );

  const debounceFetcher = useMemo(() => {
    return debounce(loadOptions, 300);
  }, [loadOptions]);

  const node = () => {
    return (
      <>
        {count === 0 && 'Не найдено'}
        {!!count && `Показать ${count}`}
        {count !== 0 && !count && 'Показать'}
      </>
    );
  };
  return { fetching, count, debounceFetcher, node };
};
