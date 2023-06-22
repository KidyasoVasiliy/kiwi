import { TypedDocumentNode } from '@graphql-typed-document-node/core';
import { useQueryClient } from '@tanstack/react-query';
import debounce from 'lodash.debounce';
import { useState, useRef, useCallback, useMemo } from 'react';
import {
  EmployeeTableFilterQuery,
  EmployeeTableFilterQueryVariables,
} from 'src/__gql__/graphql';
import { graphQLClient, gql } from 'src/shared/app';

import { EmployeeTableFilterType } from '..';
import { getEmployeeBoolExp } from '../../../helpers/getEmployeeBoolExp';

const queryDocument: TypedDocumentNode<
  EmployeeTableFilterQuery,
  EmployeeTableFilterQueryVariables
> = gql`
  query EmployeeTableFilter($where: client_bool_exp) {
    client_aggregate(where: $where) {
      aggregate {
        count
      }
    }
  }
`;

const useEmployeeTableFilter = () => {
  const queryEmployee = useQueryClient();

  const fetchEmployeeTableFilter = async (
    variables: EmployeeTableFilterQueryVariables,
  ) => {
    const result = await queryEmployee.ensureQueryData({
      queryKey: ['EmployeeCount', variables],
      queryFn: async () => graphQLClient.request(queryDocument, variables),
    });

    return result.client_aggregate.aggregate?.count;
  };

  return { fetchEmployeeTableFilter };
};

export const useEmployeeTableFilterCount = () => {
  const { fetchEmployeeTableFilter } = useEmployeeTableFilter();

  const [isFetching, setFetching] = useState(false);
  const [count, setCount] = useState<number | undefined>(undefined);
  const fetchRef = useRef(0);

  const loadOptions = useCallback(
    (values: EmployeeTableFilterType) => {
      fetchRef.current += 1;
      const fetchId = fetchRef.current;
      setCount(undefined);
      setFetching(true);

      const where = getEmployeeBoolExp(values);

      fetchEmployeeTableFilter({
        where,
      }).then((_count) => {
        if (fetchId !== fetchRef.current) {
          return;
        }

        setCount(_count);
        setFetching(false);
      });
    },
    [fetchEmployeeTableFilter],
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
