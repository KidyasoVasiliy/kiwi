import { SettingOutlined, EditOutlined } from '@ant-design/icons';
import { Tooltip, Button } from 'antd';
import { ColumnsType } from 'antd/es/table';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { EmployeeTableQueryVariables } from 'src/__gql__/graphql';

import { EmployeeTableDataType } from './useEmployeeTable';
import { EmployeeTableSettings } from '../components/EmployeeTableSettings';

type Props = {
  setTableParams: React.Dispatch<
    React.SetStateAction<EmployeeTableQueryVariables>
  >;
};
export const useColumnsEmployeeTable = ({ setTableParams }: Props) => {
  const navigate = useNavigate();

  const [columns, setColumns] = useState<ColumnsType<EmployeeTableDataType>>(
    () => [
      {
        title: 'Наименование',
        dataIndex: 'fullName',
        key: 'fullName',
        render: (text, { id }) => (
          <Link to={id} relative="path">
            {text}
          </Link>
        ),
        sorter: true,
        showSorterTooltip: { title: 'Сортировка по наименованию клиента' },
      },
      {
        title: 'Действия',
        key: 'action',
        width: 130,
        align: 'center',
        filterDropdown: (props) => (
          <EmployeeTableSettings
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

  const changeColumns = (tableParams: EmployeeTableQueryVariables) => {
    setColumns((prevColumns) => {
      let currentColumns = [...prevColumns];
      const actionColumn = currentColumns.pop();

      if (tableParams.includeCreatedAt) {
        currentColumns.push({
          title: 'Дата создания',
          dataIndex: 'created_at',
          key: 'created_at',
          sorter: true,
          showSorterTooltip: { title: 'Сортировка дате создания пользователя' },
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
          showSorterTooltip: {
            title: 'Сортировка дате изменения пользователя',
          },
        });
      } else {
        currentColumns = currentColumns.filter((el) => el.key !== 'updated_at');
      }

      const nextColumns = [
        ...currentColumns,
        actionColumn,
      ] as ColumnsType<EmployeeTableDataType>;

      return nextColumns;
    });
  };

  return { columns, setColumns };
};
