import { SettingOutlined, EditOutlined } from '@ant-design/icons';
import { Tag, Badge, Tooltip, Button } from 'antd';
import { ColumnsType } from 'antd/es/table';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ClientTableQueryVariables } from 'src/__gql__/graphql';

import { ClientTableDataType } from './useClientTable';
import { ClientTableSettings } from '../components/ClientTableSettings';

type Props = {
  setTableParams: React.Dispatch<
    React.SetStateAction<ClientTableQueryVariables>
  >;
};
export const useColumnsClientTable = ({ setTableParams }: Props) => {
  const navigate = useNavigate();

  const [columns, setColumns] = useState<ColumnsType<ClientTableDataType>>(
    () => [
      {
        title: 'Наименование',
        dataIndex: 'name',
        key: 'name',
        render: (text, { id }) => (
          <Link to={id} relative="path">
            {text}
          </Link>
        ),
        sorter: true,
        showSorterTooltip: { title: 'Сортировка по наименованию клиента' },
      },
      {
        title: 'Ответственный',
        dataIndex: 'responsible_employee',
        key: 'responsible_employee',
        sorter: true,
        showSorterTooltip: { title: 'Сортировка по имени сотрудника' },
      },
      {
        title: 'Отрасль',
        dataIndex: 'industries',
        key: 'industries',
        width: 300,
        render: (_, { industries }) => (
          <>
            {industries.map(({ name, color }) => (
              <Tag color={color} key={name}>
                {name.toUpperCase()}
              </Tag>
            ))}
          </>
        ),
      },
      {
        title: 'Статус',
        key: 'status',
        dataIndex: 'status',
        width: 200,
        render: (_, { status }) =>
          status ? <Badge text={status.name} color={status.color} /> : null,
      },
      {
        title: 'Действия',
        key: 'action',
        width: 130,
        align: 'center',
        filterDropdown: (props) => (
          <ClientTableSettings
            {...props}
            setTableParams={setTableParams}
            changeColumns={changeColumns}
          />
        ),
        filterIcon: <SettingOutlined />,
        render: (_, record) => (
          <Tooltip title="Редактировать клиента">
            <Button
              type="link"
              icon={<EditOutlined />}
              onClick={() =>
                navigate(`${record.id}/edit`, { relative: 'path' })
              }
            />
          </Tooltip>
        ),
      },
    ],
  );

  const changeColumns = (tableParams: ClientTableQueryVariables) => {
    setColumns((prevColumns) => {
      let currentColumns = [...prevColumns];
      const actionColumn = currentColumns.pop();

      if (tableParams.includeCreatedAt) {
        currentColumns.push({
          title: 'Дата создания',
          dataIndex: 'created_at',
          key: 'created_at',
          sorter: true,
          showSorterTooltip: { title: 'Сортировка дате создания клиента' },
        });
      } else {
        currentColumns = currentColumns.filter((el) => el.key !== 'created_at');
      }

      if (tableParams.includeUpdateAt) {
        currentColumns.push({
          title: 'Дата изменения',
          dataIndex: 'updated_at',
          key: 'updated_at',
          sorter: true,
          showSorterTooltip: { title: 'Сортировка дате изменения клиента' },
        });
      } else {
        currentColumns = currentColumns.filter((el) => el.key !== 'updated_at');
      }

      const nextColumns = [
        ...currentColumns,
        actionColumn,
      ] as ColumnsType<ClientTableDataType>;

      return nextColumns;
    });
  };

  return { columns, setColumns };
};
