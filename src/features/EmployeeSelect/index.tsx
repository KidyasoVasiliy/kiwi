import { TypedDocumentNode } from '@graphql-typed-document-node/core';
import { SelectProps } from 'antd';
import React, { useCallback } from 'react';
import {
  EmployeeSelectQuery,
  EmployeeSelectQueryVariables,
} from 'src/__gql__/graphql';
import { DebounceSelect } from 'src/components/Deb';
import { gql } from 'src/shared/app';

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

export const EmployeeSelect: React.FC<
  SelectProps<EmployeeSelectValue | EmployeeSelectValue[]>
> = ({ value, onChange }) => {
  return (
    <DebounceSelect<EmployeeSelectQuery>
      mode="multiple"
      placeholder="Ответственный"
      value={value}
      queryDocument={queryDocument}
      selectName="EmployeeSelect"
      getOptions={useCallback(
        (result) =>
          result.employee.map(({ id, fullName }) => ({
            key: id,
            label: fullName ?? 'Без имени',
            value: id,
          })),
        [],
      )}
      onChange={onChange}
    />
  );
};
