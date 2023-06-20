import { Table, Typography } from 'antd';
import type { TablePaginationConfig } from 'antd/es/table';
import { FilterValue, SorterResult } from 'antd/es/table/interface';
import React, { useState } from 'react';
import { ClientsTableQueryVariables, Order_By } from 'src/__gql__/graphql';
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
import { getClientBoolExp } from './helpers/getCountClientBoolExp';
import { useClientsTable, ClientsTableDataType } from './hooks/useClientsTable';
import { useColumnsClientTable } from './hooks/useColumnsClientTable';

export const ClientsTable: React.FC = () => {
  const [tableParams, setTableParams] = useState<ClientsTableQueryVariables>({
    order_by: { updated_at: Order_By.Desc },
    distinct_on: null,
    where: null,
    offset: 0,
    limit: 10,
    includeCreatedAt: false,
    includeUpdateAt: false,
  });
  const { columns } = useColumnsClientTable({ setTableParams });
  const { data, isFetching } = useClientsTable(tableParams);

  const offset = tableParams.offset ?? 0;
  const limit = tableParams.limit ?? 10;
  const current = getPageNumber(offset, limit);
  const pageSize = getPageSize(offset, limit);
  const total = data?.pagination?.count;

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

    let order_by: ClientsTableQueryVariables['order_by'] = null;
    const sortDirection =
      sorter.order === 'ascend' ? Order_By.Asc : Order_By.Desc;
    switch (sorter.field) {
      case 'name':
      case 'created_at':
      case 'updated_at':
        order_by = { [sorter.field]: sortDirection };
        break;
      case 'responsible_employee':
        order_by = { responsible_employee: { fullName: sortDirection } };
        break;
      default:
        order_by = { updated_at: Order_By.Desc };
    }

    setTableParams((prev) => ({ ...prev, offset, limit, order_by }));
  };

  const handleSubmitFilter = (values: ClientsTableFilterType) => {
    setTableParams((prev) => ({
      ...prev,
      offset: 0,
      where: getClientBoolExp(values),
    }));
  };

  return (
    <>
      <ClientsTableFilter
        isFetching={isFetching}
        onFinish={handleSubmitFilter}
      />
      <Table
        loading={isFetching}
        size="middle"
        columns={columns}
        dataSource={data?.list}
        pagination={{
          current,
          pageSize,
          total,
          showTotal: () => <Typography.Text>Всего {total}</Typography.Text>,
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
