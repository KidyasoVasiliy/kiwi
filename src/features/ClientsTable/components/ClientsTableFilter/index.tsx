import { Button, Col, Form, Input, Row } from 'antd';
import { useForm } from 'antd/es/form/Form';
import debounce from 'lodash.debounce';
import React, { useMemo } from 'react';
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

import { useClientsTableFilterCount } from './hooks/useClientsTableFilterCount';

export type ClientsTableFilterType = {
  search?: string;
  status?: DirectoryClientStatusSelectValue[];
  industry?: DirectoryClientIndustrySelectValue[];
  responsible_employee?: EmployeeSelectValue[];
};

type Props = {
  isFetching: boolean;
  onFinish: (values: ClientsTableFilterType) => void;
};

export const ClientsTableFilter: React.FC<Props> = ({ onFinish }) => {
  const [form] = useForm();
  const { isFetching, debounceFetcher, submitText, isEmpty } =
    useClientsTableFilterCount();

  return (
    <Form<ClientsTableFilterType>
      form={form}
      name="ClientsTableFilter"
      onValuesChange={debounceFetcher}
      initialValues={{
        search: '',
        status: [],
        industry: [],
        responsible_employee: [],
      }}
      onFinish={onFinish}
      autoComplete="off"
    >
      <Row gutter={16}>
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
              disabled={isEmpty}
              loading={isFetching}
              style={{ width: 180 }}
            >
              {submitText}
            </Button>
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
};
