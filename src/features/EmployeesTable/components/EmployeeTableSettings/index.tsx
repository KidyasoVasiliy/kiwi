import { CloseOutlined } from '@ant-design/icons';
import { Divider, Button, theme, Checkbox, Typography, Menu } from 'antd';
import type { MenuProps } from 'antd';
import { CheckboxValueType } from 'antd/es/checkbox/Group';
import { FilterDropdownProps } from 'antd/es/table/interface';
import React, { useState } from 'react';
import { EmployeeTableQueryVariables } from 'src/__gql__/graphql';

const { useToken } = theme;

type CheckboxValueTyped = keyof typeof dataMap;
const dataMap = {
  created_at: {
    label: 'Дата создания',
  },
  updated_at: {
    label: 'Дата обновления',
  },
};

const items: MenuProps['items'] = Object.entries(dataMap).map(
  ([key, value]) => ({
    key,
    label: (
      <Checkbox value={key} onClick={(e) => e.stopPropagation()}>
        {value.label}
      </Checkbox>
    ),
  }),
);

type Props = FilterDropdownProps & {
  setTableParams: React.Dispatch<
    React.SetStateAction<EmployeeTableQueryVariables>
  >;
  changeColumns: (tableParams: EmployeeTableQueryVariables) => void;
};

export const EmployeeTableSettings: React.FC<Props> = ({
  close,
  setTableParams,
  changeColumns,
}) => {
  const { token } = useToken();
  const [state, setState] = useState<CheckboxValueTyped[]>([]);

  const onChange = (checkedValues: CheckboxValueType[]) => {
    const typedCeckedValues = checkedValues as CheckboxValueTyped[];
    setState(typedCeckedValues);
  };

  const onSubmit = () => {
    setTableParams((prev) => {
      const tableParams = {
        ...prev,
        includeCreatedAt: state.includes('created_at'),
        includeUpdateAt: state.includes('updated_at'),
      };

      setTimeout(() => changeColumns(tableParams), 50); // изменить колонки во время запроса а не перед ним

      return tableParams;
    });

    close();
  };

  return (
    <div
      style={{
        backgroundColor: token.colorBgElevated,
        borderRadius: token.borderRadiusLG,
        boxShadow: token.boxShadowSecondary,
        width: 348,
      }}
      onClick={(e) => e.stopPropagation()}
    >
      <div
        style={{
          display: 'flex',
          padding: '10px 24px',
          justifyContent: 'space-between',
          alignItems: 'baseline',
        }}
      >
        <Typography.Title level={5} style={{ margin: 0 }}>
          Настроить столбцы
        </Typography.Title>
        <Button type="text" onClick={close} icon={<CloseOutlined />} />
      </div>
      <Divider style={{ margin: 0 }} />
      <div style={{ maxHeight: 300, overflow: 'scroll' }}>
        {/* <div
          style={{
            margin: '24px 24px 0',
          }}
        >
          <Input.Search size="large" />
        </div> */}

        <div
          style={{
            margin: '10px 20px',
          }}
        >
          <Checkbox.Group onChange={onChange} style={{ display: 'block' }}>
            <Menu mode="vertical" items={items} />
          </Checkbox.Group>
        </div>
      </div>
      <Divider style={{ margin: 0 }} />
      <div
        style={{
          padding: '10px 24px',
          textAlign: 'right',
        }}
      >
        <Button type="primary" onClick={onSubmit}>
          OK
        </Button>
      </div>
    </div>
  );
};
