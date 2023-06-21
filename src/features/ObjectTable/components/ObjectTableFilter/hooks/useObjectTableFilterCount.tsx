import { TypedDocumentNode } from '@graphql-typed-document-node/core';
import { useQueryClient } from '@tanstack/react-query';
import debounce from 'lodash.debounce';
import { useState, useRef, useCallback, useMemo } from 'react';
import {
  ObjectTableFilterQuery,
  ObjectTableFilterQueryVariables,
} from 'src/__gql__/graphql';
import { graphQLClient, gql } from 'src/shared/app';

import { ObjectTableFilterType } from '..';
import { getObjectBoolExp } from '../../../helpers/getObjectBoolExp';

const queryDocument: TypedDocumentNode<
  ObjectTableFilterQuery,
  ObjectTableFilterQueryVariables
> = gql`
  query ObjectTableFilter($where: client_object_bool_exp) {
    client_object_aggregate(where: $where) {
      aggregate {
        count
      }
    }
  }
`;

const useObjectTableFilter = () => {
  const queryClient = useQueryClient();

  const fetchObjectTableFilter = async (
    variables: ObjectTableFilterQueryVariables,
  ) => {
    const result = await queryClient.ensureQueryData({
      queryKey: ['ObjectCount', variables],
      queryFn: async () => graphQLClient.request(queryDocument, variables),
    });

    return result.client_object_aggregate.aggregate?.count;
  };

  return { fetchObjectTableFilter };
};

export const useObjectTableFilterCount = () => {
  const { fetchObjectTableFilter } = useObjectTableFilter();

  const [isFetching, setFetching] = useState(false);
  const [count, setCount] = useState<number | undefined>(undefined);
  const fetchRef = useRef(0);

  const loadOptions = useCallback(
    (values: ObjectTableFilterType) => {
      fetchRef.current += 1;
      const fetchId = fetchRef.current;
      setCount(undefined);
      setFetching(true);

      const where = getObjectBoolExp(values);

      fetchObjectTableFilter({
        where,
      }).then((_count) => {
        if (fetchId !== fetchRef.current) {
          return;
        }

        setCount(_count);
        setFetching(false);
      });
    },
    [fetchObjectTableFilter],
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
