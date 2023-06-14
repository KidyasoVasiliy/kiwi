import { SelectProps } from 'antd';
import { DefaultOptionType } from 'antd/es/select';
import React from 'react';
import { DebounceSelect } from 'src/components/Deb';

import { useEmployeeSelect } from './hooks/useEmployeeSelect';

export type EmployeeSelectValue = {
  key: string;
  label: string;
  value: string;
};

export const EmployeeSelect: React.FC<SelectProps<EmployeeSelectValue[]>> = ({
  value,
  onChange,
}) => {
  const { fetchEmployeeSelect } = useEmployeeSelect();

  return (
    <DebounceSelect
      mode="multiple"
      value={value}
      placeholder="Ответственный"
      fetchOptions={fetchEmployeeSelect}
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
