import { EditOutlined, EyeOutlined } from '@ant-design/icons';
import { Badge, Button, Space, Table, Tooltip } from 'antd';
import type { ColumnsType, TablePaginationConfig } from 'antd/es/table';
import { FilterValue, SorterResult } from 'antd/es/table/interface';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ClientsQueryVariables, Order_By } from 'src/__gql__/graphql';
import {
  getOffset,
  getLimit,
  getPageNumber,
  getPageSize,
} from 'src/shared/lib/pagination';

import {
  ClientsTableFilter,
  ClientsTableFilterType,
} from './components/ClientsTableFilter';
import { useClientsTable, ClientsTableDataType } from './hooks/useClients';

const columns: ColumnsType<ClientsTableDataType> = [
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
    title: 'Контакты',
    dataIndex: 'contact',
    key: 'contact',
  },
  {
    title: 'Статус',
    key: 'status',
    dataIndex: 'status',
    render: (_, { status }) => <Badge status="success" text={status} />,
  },
];

export const ClientsTable: React.FC = () => {
  const navigate = useNavigate();

  const [tableParams, setTableParams] = useState<ClientsQueryVariables>({
    order_by: null,
    distinct_on: null,
    where: null,
    offset: 0,
    limit: 10,
  });

  const { data, isFetching } = useClientsTable(tableParams);

  const handleTableChange = (
    pagination: TablePaginationConfig,
    filters: Record<string, FilterValue | null>,
    sorter:
      | SorterResult<ClientsTableDataType>
      | SorterResult<ClientsTableDataType>[],
  ) => {
    if (!pagination.current || !pagination.pageSize || Array.isArray(sorter))
      return; // typeguard

    const offset = getOffset(pagination.current, pagination.pageSize);
    const limit = getLimit(pagination.current, pagination.pageSize);

    let order_by: ClientsQueryVariables['order_by'] = null;
    const sortDirection =
      sorter.order === 'ascend' ? Order_By.Asc : Order_By.Desc;
    switch (sorter.field) {
      case 'name':
        order_by = { name: sortDirection };
        break;
      case 'responsible_employee':
        order_by = { responsible_employee: { fullName: sortDirection } };
        break;
      default:
        order_by = null;
    }

    setTableParams((prev) => ({ ...prev, offset, limit, order_by }));
  };

  const offset = tableParams.offset ?? 0;
  const limit = tableParams.limit ?? 10;
  const current = getPageNumber(offset, limit);
  const pageSize = getPageSize(offset, limit);
  const total = data?.pagination?.count;

  const handleSubmitFilter = (values: ClientsTableFilterType) => {
    setTableParams((prev) => {
      return {
        ...prev,
        offset: 0,
        where: values.responsible_employee?.length
          ? {
              responsible_employee: {
                _or: values.responsible_employee?.map((item) => ({
                  id: { _eq: item.value },
                })),
              },
            }
          : undefined,
      };
    });
  };

  return (
    <>
      <ClientsTableFilter onFinish={handleSubmitFilter} />
      <Table
        loading={isFetching}
        columns={columns.concat({
          title: 'Действия',
          key: 'action',
          width: 130,
          align: 'center',
          render: (_, record) => (
            <Space size="middle">
              <Tooltip title="Открыть клиента">
                <Button
                  shape="circle"
                  icon={<EyeOutlined />}
                  onClick={() => navigate(record.id, { relative: 'path' })}
                />
              </Tooltip>
              <Tooltip title="Редактировать клиента">
                <Button
                  shape="circle"
                  icon={<EditOutlined />}
                  onClick={() => navigate(record.id, { relative: 'path' })}
                />
              </Tooltip>
            </Space>
          ),
        })}
        dataSource={data?.list}
        pagination={{
          current,
          pageSize,
          total,
          position: ['bottomCenter'],
          defaultPageSize: 10,
          pageSizeOptions: [10, 20, 50],
          showSizeChanger: true,
        }}
        showSorterTooltip
        onChange={handleTableChange}
      />
    </>
  );
};