import { TypedDocumentNode } from '@graphql-typed-document-node/core';
import { useQueryClient } from '@tanstack/react-query';
import debounce from 'lodash.debounce';
import { useState, useRef, useCallback, useMemo } from 'react';
import {
  ClientsTableFilterQuery,
  ClientsTableFilterQueryVariables,
} from 'src/__gql__/graphql';
import { graphQLClient, gql } from 'src/shared/app';

import { ClientsTableFilterType } from '..';
import { getClientBoolExp } from '../../../helpers/getCountClientBoolExp';

const queryDocument: TypedDocumentNode<
  ClientsTableFilterQuery,
  ClientsTableFilterQueryVariables
> = gql`
  query ClientsTableFilter($where: client_bool_exp) {
    client_aggregate(where: $where) {
      aggregate {
        count
      }
    }
  }
`;

const useClientsTableFilter = () => {
  const queryClient = useQueryClient();

  const fetchClientsTableFilter = async (
    variables: ClientsTableFilterQueryVariables,
  ) => {
    const result = await queryClient.ensureQueryData({
      queryKey: ['clientsCount', variables],
      queryFn: async () => graphQLClient.request(queryDocument, variables),
    });

    return result.client_aggregate.aggregate?.count;
  };

  return { fetchClientsTableFilter };
};

export const useClientsTableFilterCount = () => {
  const { fetchClientsTableFilter } = useClientsTableFilter();

  const [isFetching, setFetching] = useState(false);
  const [count, setCount] = useState<number | undefined>(undefined);
  const fetchRef = useRef(0);

  const loadOptions = useCallback(
    (values: ClientsTableFilterType) => {
      fetchRef.current += 1;
      const fetchId = fetchRef.current;
      setCount(undefined);
      setFetching(true);

      const where = getClientBoolExp(values);

      fetchClientsTableFilter({
        where,
      }).then((_count) => {
        if (fetchId !== fetchRef.current) {
          return;
        }

        setCount(_count);
        setFetching(false);
      });
    },
    [fetchClientsTableFilter],
  );

  const debounceFetcher = useMemo(() => {
    return debounce(loadOptions, 300);
  }, [loadOptions]);

  const submitText = useMemo(() => {
    if (count === 0) return 'Не найдено';
    if (count) return `Показать ${count}`;
    if (count !== 0 && !count) return 'Показать';
  }, [count]);

  return {
    isFetching,
    debounceFetcher,
    submitText,
    isEmpty: count === 0,
  };
};
