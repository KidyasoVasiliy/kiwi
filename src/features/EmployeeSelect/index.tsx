import { TypedDocumentNode } from '@graphql-typed-document-node/core';
import { useQueryClient } from '@tanstack/react-query';
import { SelectProps } from 'antd';
import { DefaultOptionType } from 'antd/es/select';
import React from 'react';
import {
  EmployeeSelectQuery,
  EmployeeSelectQueryVariables,
} from 'src/__gql__/graphql';
import { DebounceSelect } from 'src/components/Deb';
import { graphQLClient, gql } from 'src/shared/app';

const queryDocument: TypedDocumentNode<
  EmployeeSelectQuery,
  EmployeeSelectQueryVariables
> = gql`
  query EmployeeSelect($limit: Int, $offset: Int, $where: employee_bool_exp) {
    employee(where: $where, limit: $limit, offset: $offset) {
      fullName
      id
    }
  }
`;

export type EmployeeSelectValue = {
  key: string;
  label: string;
  value: string;
};

export const EmployeeSelect: React.FC<SelectProps<EmployeeSelectValue[]>> = ({
  value,
  onChange,
}) => {
  const queryClient = useQueryClient();

  const fetchOptions = async (fullName?: string) => {
    const result = await queryClient.ensureQueryData({
      queryKey: ['EmployeeSelect', fullName],
      queryFn: async () =>
        graphQLClient.request(
          queryDocument,
          fullName
            ? {
                where: fullName
                  ? { fullName: { _ilike: `%${fullName}%` } }
                  : undefined,
              }
            : { limit: 50, offset: 0 },
        ),
      cacheTime: 300000, // 5 min
    });

    return result.employee.map(({ id, fullName }) => ({
      key: id,
      label: fullName,
      value: id,
    }));
  };

  return (
    <DebounceSelect
      mode="multiple"
      value={value}
      placeholder="Ответственный"
      fetchOptions={fetchOptions}
      onChange={(newValue, newOption) => {
        if (!onChange) return; // typeguard

        onChange(
          newValue as EmployeeSelectValue[],
          newOption as DefaultOptionType[],
        );
      }}
    />
  );
};
