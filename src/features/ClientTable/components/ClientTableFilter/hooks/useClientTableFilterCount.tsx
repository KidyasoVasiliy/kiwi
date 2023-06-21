import { TypedDocumentNode } from '@graphql-typed-document-node/core';
import { useQueryClient } from '@tanstack/react-query';
import debounce from 'lodash.debounce';
import { useState, useRef, useCallback, useMemo } from 'react';
import {
  ClientTableFilterQuery,
  ClientTableFilterQueryVariables,
} from 'src/__gql__/graphql';
import { graphQLClient, gql } from 'src/shared/app';

import { ClientTableFilterType } from '..';
import { getClientBoolExp } from '../../../helpers/getCountClientBoolExp';

const queryDocument: TypedDocumentNode<
  ClientTableFilterQuery,
  ClientTableFilterQueryVariables
> = gql`
  query ClientTableFilter($where: client_bool_exp) {
    client_aggregate(where: $where) {
      aggregate {
        count
      }
    }
  }
`;

const useClientTableFilter = () => {
  const queryClient = useQueryClient();

  const fetchClientTableFilter = async (
    variables: ClientTableFilterQueryVariables,
  ) => {
    const result = await queryClient.ensureQueryData({
      queryKey: ['ClientCount', variables],
      queryFn: async () => graphQLClient.request(queryDocument, variables),
    });

    return result.client_aggregate.aggregate?.count;
  };

  return { fetchClientTableFilter };
};

export const useClientTableFilterCount = () => {
  const { fetchClientTableFilter } = useClientTableFilter();

  const [isFetching, setFetching] = useState(false);
  const [count, setCount] = useState<number | undefined>(undefined);
  const fetchRef = useRef(0);

  const loadOptions = useCallback(
    (values: ClientTableFilterType) => {
      fetchRef.current += 1;
      const fetchId = fetchRef.current;
      setCount(undefined);
      setFetching(true);

      const where = getClientBoolExp(values);

      fetchClientTableFilter({
        where,
      }).then((_count) => {
        if (fetchId !== fetchRef.current) {
          return;
        }

        setCount(_count);
        setFetching(false);
      });
    },
    [fetchClientTableFilter],
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
