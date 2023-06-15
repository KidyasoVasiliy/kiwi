import { TypedDocumentNode } from '@graphql-typed-document-node/core';
import { SelectProps } from 'antd';
import React, { useCallback } from 'react';
import {
  DirectoryClientIndustrySelectQuery,
  DirectoryClientIndustrySelectQueryVariables,
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

export const DirectoryClientIndustrySelect: React.FC<
  SelectProps<DirectoryClientIndustrySelectValue[]>
> = ({ value, onChange }) => {
  return (
    <DebounceSelect<DirectoryClientIndustrySelectQuery>
      mode="multiple"
      placeholder="Отрасль"
      value={value}
      queryDocument={queryDocument}
      selectName="DirectoryClientIndustrySelect"
      getOptions={useCallback(
        (result) =>
          result.directory_client_industry.map(({ id, name }) => ({
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
