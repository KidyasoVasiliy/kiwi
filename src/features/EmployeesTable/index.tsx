import { Table, Typography } from 'antd';
import type { TablePaginationConfig } from 'antd/es/table';
import { FilterValue, SorterResult } from 'antd/es/table/interface';
import React, { useState } from 'react';
import { EmployeeTableQueryVariables, Order_By } from 'src/__gql__/graphql';
import {
  getOffset,
  getLimit,
  getPageNumber,
  getPageSize,
} from 'src/shared/lib/pagination';

import {
  EmployeeTableFilter,
  EmployeeTableFilterType,
} from './components/EmployeeTableFilter';
import { getEmployeeBoolExp } from './helpers/getEmployeeBoolExp';
import { useColumnsEmployeeTable } from './hooks/useColumnsEmployeeTable';
import {
  useEmployeeTable,
  EmployeeTableDataType,
} from './hooks/useEmployeeTable';

export const EmployeeTable: React.FC = () => {
  const [tableParams, setTableParams] = useState<EmployeeTableQueryVariables>({
    order_by: { updated_at: Order_By.Desc },
    distinct_on: null,
    where: null,
    offset: 0,
    limit: 10,
    includeCreatedAt: false,
    includeUpdateAt: false,
  });
  const { columns } = useColumnsEmployeeTable({ setTableParams });
  const { data, isFetching } = useEmployeeTable(tableParams);

  const offset = tableParams.offset ?? 0;
  const limit = tableParams.limit ?? 10;
  const current = getPageNumber(offset, limit);
  const pageSize = getPageSize(offset, limit);
  const total = data?.pagination?.count;

  const handleTableChange = (
    pagination: TablePaginationConfig,
    filters: Record<string, FilterValue | null>,
    sorter:
      | SorterResult<EmployeeTableDataType>
      | SorterResult<EmployeeTableDataType>[],
  ) => {
    if (!pagination.current || !pagination.pageSize || Array.isArray(sorter))
      return; // typeguard

    const offset = getOffset(pagination.current, pagination.pageSize);
    const limit = getLimit(pagination.current, pagination.pageSize);

    let order_by: EmployeeTableQueryVariables['order_by'] = null;
    const sortDirection =
      sorter.order === 'ascend' ? Order_By.Asc : Order_By.Desc;
    switch (sorter.field) {
      case 'fullName':
      case 'created_at':
      case 'updated_at':
        order_by = { [sorter.field]: sortDirection };
        break;
      default:
        order_by = { updated_at: Order_By.Desc };
    }

    setTableParams((prev) => ({ ...prev, offset, limit, order_by }));
  };

  const handleSubmitFilter = (values: EmployeeTableFilterType) => {
    setTableParams((prev) => ({
      ...prev,
      offset: 0,
      where: getEmployeeBoolExp(values),
    }));
  };

  return (
    <>
      <EmployeeTableFilter
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
