import { SettingOutlined, EditOutlined } from '@ant-design/icons';
import { Tooltip, Button } from 'antd';
import { ColumnsType } from 'antd/es/table';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ObjectTableQueryVariables } from 'src/__gql__/graphql';

import { ObjectTableDataType } from './useObjectTable';
import { ObjectTableSettings } from '../components/ObjectTableSettings';

type Props = {
  setTableParams: React.Dispatch<
    React.SetStateAction<ObjectTableQueryVariables>
  >;
};
export const useColumnsObjectTable = ({ setTableParams }: Props) => {
  const navigate = useNavigate();

  const [columns, setColumns] = useState<ColumnsType<ObjectTableDataType>>(
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
        showSorterTooltip: { title: 'Сортировка по наименованию объекта' },
      },
      {
        title: 'Клиент',
        dataIndex: 'client',
        key: 'client',
        render: (text, { client_id }) => (
          <Link to={`/clients/${client_id}`}>{text}</Link>
        ),
        sorter: true,
        showSorterTooltip: { title: 'Сортировка по наименованию объекта' },
      },
      {
        title: 'Действия',
        key: 'action',
        width: 130,
        align: 'center',
        filterDropdown: (props) => (
          <ObjectTableSettings
            {...props}
            setTableParams={setTableParams}
            changeColumns={changeColumns}
          />
        ),
        filterIcon: <SettingOutlined />,
        render: (_, record) => (
          <Tooltip title="Редактировать объекта">
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

  const changeColumns = (tableParams: ObjectTableQueryVariables) => {
    setColumns((prevColumns) => {
      let currentColumns = [...prevColumns];
      const actionColumn = currentColumns.pop();

      if (tableParams.includeCreatedAt) {
        currentColumns.push({
          title: 'Дата создания',
          dataIndex: 'created_at',
          key: 'created_at',
          sorter: true,
          showSorterTooltip: { title: 'Сортировка дате создания объекта' },
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
          showSorterTooltip: { title: 'Сортировка дате изменения объекта' },
        });
      } else {
        currentColumns = currentColumns.filter((el) => el.key !== 'updated_at');
      }

      const nextColumns = [
        ...currentColumns,
        actionColumn,
      ] as ColumnsType<ObjectTableDataType>;

      return nextColumns;
    });
  };

  return { columns, setColumns };
};
