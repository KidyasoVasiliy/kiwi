import { Button, Col, Form, Input, Row } from 'antd';
import debounce from 'lodash.debounce';
import React, { useCallback, useMemo, useRef, useState } from 'react';
import { Client_Bool_Exp, InputMaybe } from 'src/__gql__/graphql';
import { DirectoryClientIndustrySelect } from 'src/features/DirectoryClientIndustrySelect';
import { DirectoryClientIndustrySelectValue } from 'src/features/DirectoryClientIndustrySelect';
import {
  DirectoryClientStatusSelect,
  DirectoryClientStatusSelectValue,
} from 'src/features/DirectoryClientStatusSelect';
import {
  EmployeeSelect,
  EmployeeSelectValue,
} from 'src/features/EmployeeSelect';

import { useClientsCount } from './hooks/useClientsCount';

export type ClientsTableFilterType = {
  search?: string;
  status?: DirectoryClientStatusSelectValue[];
  industry?: DirectoryClientIndustrySelectValue[];
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

      const where: InputMaybe<Client_Bool_Exp> = {};

      if (values.responsible_employee?.length) {
        where.responsible_employee = {
          _or: values.responsible_employee?.map((item) => ({
            id: { _eq: item.value },
          })),
        };
      }

      if (values.industry?.length) {
        where.industries = {
          industry: {
            _or: values.industry?.map((item) => ({
              id: { _eq: item.value },
            })),
          },
        };
      }

      if (values.status?.length) {
        where.statuses = {
          is_current: { _eq: true },
          status: {
            _or: values.status?.map((item) => ({
              id: { _eq: item.value },
            })),
          },
        };
      }

      fetchClientCount({
        where,
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
        status: [],
        industry: [],
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

        <Col span={4}>
          <Form.Item name="status">
            <DirectoryClientStatusSelect />
          </Form.Item>
        </Col>

        <Col span={4}>
          <Form.Item name="responsible_employee">
            <EmployeeSelect />
          </Form.Item>
        </Col>

        <Col span={4}>
          <Form.Item name="industry">
            <DirectoryClientIndustrySelect />
          </Form.Item>
        </Col>

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
