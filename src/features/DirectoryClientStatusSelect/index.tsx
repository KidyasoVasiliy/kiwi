import { TypedDocumentNode } from '@graphql-typed-document-node/core';
import { useQueryClient } from '@tanstack/react-query';
import { SelectProps } from 'antd';
import { DefaultOptionType } from 'antd/es/select';
import React from 'react';
import {
  DirectoryClientStatusSelectQuery,
  DirectoryClientStatusSelectQueryVariables,
} from 'src/__gql__/graphql';
import { DebounceSelect } from 'src/components/Deb';
import { graphQLClient, gql } from 'src/shared/app';

const queryDocument: TypedDocumentNode<
  DirectoryClientStatusSelectQuery,
  DirectoryClientStatusSelectQueryVariables
> = gql`
  query DirectoryClientStatusSelect(
    $limit: Int
    $offset: Int
    $where: directory_client_status_bool_exp
  ) {
    directory_client_status(where: $where, limit: $limit, offset: $offset) {
      id
      name
    }
  }
`;

export type DirectoryClientStatusSelectValue = {
  key: string;
  label: string;
  value: string;
};

export const DirectoryClientStatusSelect: React.FC<
  SelectProps<DirectoryClientStatusSelectValue[]>
> = ({ value, onChange }) => {
  const queryClient = useQueryClient();

  const fetchOptions = async (name?: string) => {
    const result = await queryClient.ensureQueryData({
      queryKey: ['DirectoryClientStatusSelect', name],
      queryFn: async () =>
        graphQLClient.request(
          queryDocument,
          name
            ? {
                where: name ? { name: { _ilike: `%${name}%` } } : undefined,
              }
            : { limit: 50, offset: 0 },
        ),
      cacheTime: 300000, // 5 min
    });

    return result.directory_client_status.map(({ id, name }) => ({
      key: id,
      label: name,
      value: id,
    }));
  };

  return (
    <DebounceSelect
      mode="multiple"
      value={value}
      placeholder="Статус"
      fetchOptions={fetchOptions}
      onChange={(newValue, newOption) => {
        if (!onChange) return; // typeguard

        onChange(
          newValue as DirectoryClientStatusSelectValue[],
          newOption as DefaultOptionType[],
        );
      }}
    />
  );
};
