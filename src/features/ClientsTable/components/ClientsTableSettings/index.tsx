import { CloseOutlined } from '@ant-design/icons';
import { Divider, Button, theme, Checkbox, Typography, Menu } from 'antd';
import type { MenuProps } from 'antd';
import { CheckboxValueType } from 'antd/es/checkbox/Group';
import { FilterDropdownProps } from 'antd/es/table/interface';
import React, { useState } from 'react';

const { useToken } = theme;

const dataMap = {
  created_at: {
    label: 'Дата создания',
  },
  updated_at: {
    label: 'Дата обновления',
  },
  address: {
    label: 'Адрес',
  },
  phone: {
    label: 'Телефон',
  },
  name: {
    label: 'Наименование',
  },
  responsible_employee: {
    label: 'Ответственный',
  },
  industries: {
    label: 'Отрасль',
  },
  status: {
    label: 'Статус',
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

export const ClientsTableSettings: React.FC<FilterDropdownProps> = ({
  close,
}) => {
  const { token } = useToken();
  const [state, setState] = useState<CheckboxValueType[]>([]);

  const onChange = (checkedValues: CheckboxValueType[]) => {
    setState(checkedValues);
  };

  const onSubmit = () => {
    console.log('checked = ', state);
    /** @todo add fields gql  */
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
