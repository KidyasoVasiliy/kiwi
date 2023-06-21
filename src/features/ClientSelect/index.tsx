import { TypedDocumentNode } from '@graphql-typed-document-node/core';
import { SelectProps } from 'antd';
import React, { useCallback } from 'react';
import {
  Client,
  ClientSelectQuery,
  ClientSelectQueryVariables,
} from 'src/__gql__/graphql';
import { DebounceSelect } from 'src/components/Deb';
import { gql } from 'src/shared/app';

const queryDocument: TypedDocumentNode<
  ClientSelectQuery,
  ClientSelectQueryVariables
> = gql`
  query ClientSelect($limit: Int, $offset: Int, $where: client_bool_exp) {
    client(where: $where, limit: $limit, offset: $offset) {
      name
      id
    }
  }
`;

export type ClientSelectValue = {
  key: string;
  label: string;
  value: string;
};

export const getClientSelectOption = ({
  id,
  name,
}: Pick<Client, 'id' | 'name'>): ClientSelectValue => ({
  key: id,
  label: name ?? 'Без имени',
  value: id,
});

export const getClientSelectOptions = (
  list: Pick<Client, 'id' | 'name'>[],
): ClientSelectValue[] => list.map(getClientSelectOption);

/** @todo Сделать асинхронным с пагинациией */
export const ClientSelect: React.FC<
  SelectProps<ClientSelectValue | ClientSelectValue[]>
> = (props) => {
  return (
    <DebounceSelect<ClientSelectQuery>
      {...props}
      placeholder="Клиент"
      queryDocument={queryDocument}
      selectName="ClientSelect"
      getOptions={useCallback(
        (result) => getClientSelectOptions(result.client),
        [],
      )}
    />
  );
};
