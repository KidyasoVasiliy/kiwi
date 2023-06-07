import { Button, Space, Table, Tag } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { mapClientsTable } from 'src/entities/client/map/mapClientsTable';

import { useClients } from '../../hooks/useClients';

type DataType = ReturnType<typeof mapClientsTable>[number];
const columns: ColumnsType<DataType> = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Дата создания',
    dataIndex: 'created_at',
    key: 'created_at',
  },
  {
    title: 'Дата обновления',
    dataIndex: 'updated_at',
    key: 'updated_at',
  },
  {
    title: 'Теги',
    key: 'tags',
    dataIndex: 'tags',
    render: (_, { tags }) => (
      <>
        {tags.map((tag) => {
          let color = tag.length > 5 ? 'geekblue' : 'green';
          if (tag === 'loser') {
            color = 'volcano';
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
];

export const ClientsTable: React.FC = () => {
  const { data } = useClients();
  const navigate = useNavigate();

  return (
    <Table
      columns={columns.concat({
        title: 'Action',
        key: 'action',
        render: (_, record) => (
          <Space size="middle">
            <Button
              onClick={() => navigate('123-123-123-123', { relative: 'path' })}
            >
              Открыть
            </Button>
            <a>Delete</a>
          </Space>
        ),
      })}
      dataSource={mapClientsTable(data?.client)}
    />
  );
};
