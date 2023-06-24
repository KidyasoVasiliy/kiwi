import { Col, Table, Typography } from 'antd';
import type { TablePaginationConfig } from 'antd/es/table';
import { FilterValue, SorterResult } from 'antd/es/table/interface';
import React, { useState } from 'react';
import { ObjectTableQueryVariables, Order_By } from 'src/__gql__/graphql';
import { TableEmpty } from 'src/components/TableEmpty';
import { ClientSelectValue } from 'src/features/ClientSelect';
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

type Props = {
  externalClient?: ClientSelectValue;
};

export const ObjectTable: React.FC<Props> = ({ externalClient }) => {
  const externalValues: ObjectTableFilterType | undefined = externalClient
    ? {
        client: [externalClient],
      }
    : undefined;

  const [tableParams, setTableParams] = useState<ObjectTableQueryVariables>({
    order_by: { updated_at: Order_By.Desc },
    distinct_on: null,
    where: externalValues ? getObjectBoolExp(externalValues) : undefined,
    offset: 0,
    limit: 10,
    includeCreatedAt: false,
    includeUpdateAt: false,
  });
  const { columns } = useColumnsObjectTable({
    setTableParams,
    skipColumnsKey: externalClient ? ['client'] : undefined,
  });
  const { data, isFetching, isInitialLoading } = useObjectTable(tableParams);

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

  const isEmptyDataList = !isInitialLoading && data?.list.length === 0;

  const Wrapper = externalValues ? Col : React.Fragment;

  return (
    <Wrapper {...(externalValues && { offset: 1 })}>
      {!isEmptyDataList && (
        <ObjectTableFilter
          isFetching={isFetching}
          onFinish={handleSubmitFilter}
          externalValues={externalValues}
        />
      )}
      <Table
        loading={isFetching}
        size="middle"
        columns={columns}
        dataSource={data?.list}
        locale={{
          emptyText: (
            <TableEmpty
              primaryBtnText="Создать объект"
              primaryBtnNavigate={{
                to: '/objects/create',
                options: { state: externalClient },
              }}
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
    </Wrapper>
  );
};
