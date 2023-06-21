import { Table, Typography } from 'antd';
import type { TablePaginationConfig } from 'antd/es/table';
import { FilterValue, SorterResult } from 'antd/es/table/interface';
import React, { useState } from 'react';
import { ObjectTableQueryVariables, Order_By } from 'src/__gql__/graphql';
import {
  getOffset,
  getLimit,
  getPageNumber,
  getPageSize,
} from 'src/shared/lib/pagination';

import {
  ObjectTableFilter,
  ObjectTableFilterType,
} from './components/ObjectTableFilter';
import { getObjectBoolExp } from './helpers/getObjectBoolExp';
import { useColumnsObjectTable } from './hooks/useColumnsObjectTable';
import { useObjectTable, ObjectTableDataType } from './hooks/useObjectTable';

export const ObjectTable: React.FC = () => {
  const [tableParams, setTableParams] = useState<ObjectTableQueryVariables>({
    order_by: { updated_at: Order_By.Desc },
    distinct_on: null,
    where: null,
    offset: 0,
    limit: 10,
    includeCreatedAt: false,
    includeUpdateAt: false,
  });
  const { columns } = useColumnsObjectTable({ setTableParams });
  const { data, isFetching } = useObjectTable(tableParams);

  const offset = tableParams.offset ?? 0;
  const limit = tableParams.limit ?? 10;
  const current = getPageNumber(offset, limit);
  const pageSize = getPageSize(offset, limit);
  const total = data?.pagination?.count;

  const handleTableChange = (
    pagination: TablePaginationConfig,
    filters: Record<string, FilterValue | null>,
    sorter:
      | SorterResult<ObjectTableDataType>
      | SorterResult<ObjectTableDataType>[],
  ) => {
    if (!pagination.current || !pagination.pageSize || Array.isArray(sorter))
      return; // typeguard

    const offset = getOffset(pagination.current, pagination.pageSize);
    const limit = getLimit(pagination.current, pagination.pageSize);

    let order_by: ObjectTableQueryVariables['order_by'] = null;
    const sortDirection =
      sorter.order === 'ascend' ? Order_By.Asc : Order_By.Desc;
    switch (sorter.field) {
      case 'name':
      case 'created_at':
      case 'updated_at':
        order_by = { [sorter.field]: sortDirection };
        break;
      case 'client':
        order_by = { client: { name: sortDirection } };
        break;
      default:
        order_by = { updated_at: Order_By.Desc };
    }

    setTableParams((prev) => ({ ...prev, offset, limit, order_by }));
  };

  const handleSubmitFilter = (values: ObjectTableFilterType) => {
    setTableParams((prev) => ({
      ...prev,
      offset: 0,
      where: getObjectBoolExp(values),
    }));
  };

  return (
    <>
      <ObjectTableFilter
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
