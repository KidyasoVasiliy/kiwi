import { TypedDocumentNode } from '@graphql-typed-document-node/core';
import { SelectProps } from 'antd';
import React, { useCallback } from 'react';
import {
  DirectoryClientStatusSelectQuery,
  DirectoryClientStatusSelectQueryVariables,
} from 'src/__gql__/graphql';
import { DebounceSelect } from 'src/components/Deb';
import { gql } from 'src/shared/app';

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
  return (
    <DebounceSelect<DirectoryClientStatusSelectQuery>
      mode="multiple"
      placeholder="Статус"
      value={value}
      queryDocument={queryDocument}
      selectName="DirectoryClientStatusSelect"
      getOptions={useCallback(
        (result) =>
          result.directory_client_status.map(({ id, name }) => ({
            key: id,
            label: name,
            value: id,
          })),
        [],
      )}
      onChange={onChange}
    />
  );
};
