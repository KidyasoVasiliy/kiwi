import { TypedDocumentNode } from '@graphql-typed-document-node/core';
import { SelectProps } from 'antd';
import React, { useCallback } from 'react';
import {
  DirectoryClientIndustrySelectQuery,
  DirectoryClientIndustrySelectQueryVariables,
  Directory_Client_Industry,
} from 'src/__gql__/graphql';
import { DebounceSelect } from 'src/components/Deb';
import { gql } from 'src/shared/app';

const queryDocument: TypedDocumentNode<
  DirectoryClientIndustrySelectQuery,
  DirectoryClientIndustrySelectQueryVariables
> = gql`
  query DirectoryClientIndustrySelect(
    $limit: Int
    $offset: Int
    $where: directory_client_industry_bool_exp
  ) {
    directory_client_industry(where: $where, limit: $limit, offset: $offset) {
      id
      name
    }
  }
`;

export type DirectoryClientIndustrySelectValue = {
  key: string;
  label: string;
  value: string;
};

export const getDirectoryClientIndustryOption = ({
  id,
  name,
}: Pick<
  Directory_Client_Industry,
  'id' | 'name'
>): DirectoryClientIndustrySelectValue => ({
  key: id,
  label: name,
  value: id,
});

export const getDirectoryClientIndustryOptions = (
  list: Pick<Directory_Client_Industry, 'id' | 'name'>[],
): DirectoryClientIndustrySelectValue[] =>
  list.map(getDirectoryClientIndustryOption);

export const DirectoryClientIndustrySelect: React.FC<
  SelectProps<DirectoryClientIndustrySelectValue[]>
> = (props) => {
  return (
    <DebounceSelect<DirectoryClientIndustrySelectQuery>
      {...props}
      placeholder="Отрасль"
      queryDocument={queryDocument}
      selectName="DirectoryClientIndustrySelect"
      getOptions={useCallback(
        (result) =>
          getDirectoryClientIndustryOptions(result.directory_client_industry),
        [],
      )}
    />
  );
};
