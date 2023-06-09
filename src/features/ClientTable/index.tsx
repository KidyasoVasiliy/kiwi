import { Table, Typography } from 'antd';
import type { TablePaginationConfig } from 'antd/es/table';
import { FilterValue, SorterResult } from 'antd/es/table/interface';
import React, { useState } from 'react';
import { ClientTableQueryVariables, Order_By } from 'src/__gql__/graphql';
import { TableEmpty } from 'src/components/TableEmpty';
import {
  getOffset,
  getLimit,
  getPageNumber,
  getPageSize,
} from 'src/shared/lib/pagination';

import {
  ClientTableFilter,
  ClientTableFilterType,
} from './components/ClientTableFilter';
import { getClientBoolExp } from './helpers/getClientBoolExp';
import { useClientTable, ClientTableDataType } from './hooks/useClientTable';
import { useColumnsClientTable } from './hooks/useColumnsClientTable';
import { getClientSelectOption } from '../ClientSelect';
import { ObjectTable } from '../ObjectTable';

export const ClientTable: React.FC = () => {
  const [tableParams, setTableParams] = useState<ClientTableQueryVariables>({
    order_by: { updated_at: Order_By.Desc },
    distinct_on: null,
    where: null,
    offset: 0,
    limit: 10,
    includeCreatedAt: false,
    includeUpdateAt: false,
  });
  const { columns } = useColumnsClientTable({ setTableParams });
  const { data, isFetching } = useClientTable(tableParams);

  const offset = tableParams.offset ?? 0;
  const limit = tableParams.limit ?? 10;
  const current = getPageNumber(offset, limit);
  const pageSize = getPageSize(offset, limit);
  const total = data?.pagination?.count;

  const handleTableChange = (
    pagination: TablePaginationConfig,
    filters: Record<string, FilterValue | null>,
    sorter:
      | SorterResult<ClientTableDataType>
      | SorterResult<ClientTableDataType>[],
  ) => {
    if (!pagination.current || !pagination.pageSize || Array.isArray(sorter))
      return; // typeguard

    const offset = getOffset(pagination.current, pagination.pageSize);
    const limit = getLimit(pagination.current, pagination.pageSize);

    let order_by: ClientTableQueryVariables['order_by'] = null;
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

  const handleSubmitFilter = (values: ClientTableFilterType) => {
    setTableParams((prev) => ({
      ...prev,
      offset: 0,
      where: getClientBoolExp(values),
    }));
  };

  return (
    <>
      <ClientTableFilter
        isFetching={isFetching}
        onFinish={handleSubmitFilter}
      />
      <Table
        loading={isFetching}
        size="middle"
        columns={columns}
        expandable={{
          expandedRowRender: (record) => {
            return (
              <ObjectTable
                externalClient={getClientSelectOption({
                  id: record.id,
                  name: record.name,
                })}
              />
            );
          },
        }}
        dataSource={data?.list}
        locale={{
          emptyText: (
            <TableEmpty
              primaryBtnText="Создать клиента"
              primaryBtnNavigate={{ to: '/clients/create' }}
            />
          ),
        }}
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
