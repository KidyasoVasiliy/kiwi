import { Button, Col, Form, Input, Row, Spin } from 'antd';
import debounce from 'lodash.debounce';
import React, { useCallback, useMemo, useRef, useState } from 'react';
import {
  EmployeeSelect,
  EmployeeSelectValue,
} from 'src/features/EmployeeSelect';

import { useClientsCount } from './hooks/useClientsCount';

export type ClientsTableFilterType = {
  search?: string;
  status?: string;
  industry?: string;
  responsible_employee?: EmployeeSelectValue[];
};

type Props = {
  onFinish: (values: ClientsTableFilterType) => void;
};

export const ClientsTableFilter: React.FC<Props> = ({ onFinish }) => {
  const { fetchClientCount } = useClientsCount();

  const [fetching, setFetching] = useState(false);
  const [count, setCount] = useState<number | undefined>(undefined);
  const fetchRef = useRef(0);

  const loadOptions = useCallback(
    (values: ClientsTableFilterType) => {
      fetchRef.current += 1;
      const fetchId = fetchRef.current;
      setCount(undefined);
      setFetching(true);

      fetchClientCount({
        where: values.responsible_employee?.length
          ? {
              responsible_employee: {
                _or: values.responsible_employee?.map((item) => ({
                  id: { _eq: item.value },
                })),
              },
            }
          : undefined,
      }).then((_count) => {
        if (fetchId !== fetchRef.current) {
          return;
        }

        setCount(_count);
        setFetching(false);
      });
    },
    [fetchClientCount],
  );

  const debounceFetcher = useMemo(() => {
    return debounce(loadOptions, 800);
  }, [loadOptions]);

  return (
    <Form<ClientsTableFilterType>
      name="ClientsTableFilter"
      onValuesChange={(_, values) => {
        debounceFetcher(values);
      }}
      initialValues={{
        search: '',
        status: '',
        industry: '',
        responsible_employee: [],
      }}
      onFinish={onFinish}
      autoComplete="off"
    >
      <Row gutter={24}>
        <Col flex="auto">
          <Form.Item name="search">
            <Input.Search
              placeholder="Поиск"
              onSearch={(searchValue) => {
                console.log(searchValue);
              }}
            />
          </Form.Item>
        </Col>

        <Form.Item name="status">
          <Input placeholder="Статус" /> {/* todo */}
        </Form.Item>

        <Col span={6}>
          <Form.Item name="responsible_employee">
            <EmployeeSelect />
          </Form.Item>
        </Col>

        <Form.Item name="industry">
          <Input placeholder="Отрасль" /> {/* todo */}
        </Form.Item>

        <Col>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              loading={fetching}
              disabled={count === 0}
            >
              {count === 0 && 'Не найдено'}
              {!!count && `Показать ${count}`}
              {count !== 0 && !count && 'Показать'}
            </Button>
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
};
