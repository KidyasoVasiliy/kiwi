import { TypedDocumentNode } from '@graphql-typed-document-node/core';
import { SelectProps } from 'antd';
import React, { useCallback } from 'react';
import {
  DirectoryClientStatusSelectQuery,
  DirectoryClientStatusSelectQueryVariables,
  Directory_Client_Status,
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

export const getDirectoryClientStatusOption = ({
  id,
  name,
}: Pick<
  Directory_Client_Status,
  'id' | 'name'
>): DirectoryClientStatusSelectValue => ({
  key: id,
  label: name,
  value: id,
});

export const getDirectoryClientStatusOptions = (
  list: Pick<Directory_Client_Status, 'id' | 'name'>[],
): DirectoryClientStatusSelectValue[] =>
  list.map(getDirectoryClientStatusOption);

export const DirectoryClientStatusSelect: React.FC<
  SelectProps<DirectoryClientStatusSelectValue[]>
> = (props) => {
  return (
    <DebounceSelect<DirectoryClientStatusSelectQuery>
      {...props}
      placeholder="Статус"
      queryDocument={queryDocument}
      selectName="DirectoryClientStatusSelect"
      getOptions={useCallback(
        (result) =>
          getDirectoryClientStatusOptions(result.directory_client_status),
        [],
      )}
    />
  );
};
