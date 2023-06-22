import { Button, Col, Form, Input, Row } from 'antd';
import { useForm } from 'antd/es/form/Form';
import React from 'react';
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

import { useClientTableFilterCount } from './hooks/useClientTableFilterCount';

export type ClientTableFilterType = {
  search?: string;
  status?: DirectoryClientStatusSelectValue[];
  industry?: DirectoryClientIndustrySelectValue[];
  responsible_employee?: EmployeeSelectValue[];
};

type Props = {
  isFetching: boolean;
  onFinish: (values: ClientTableFilterType) => void;
};

export const ClientTableFilter: React.FC<Props> = ({ onFinish }) => {
  const [form] = useForm();
  const { isFetching, debounceFetcher, submitText, isEmpty } =
    useClientTableFilterCount();

  return (
    <Form<ClientTableFilterType>
      form={form}
      name="ClientTableFilter"
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
                form.setFieldValue('search', searchValue);
              }}
            />
          </Form.Item>
        </Col>

        <Col span={4}>
          <Form.Item name="status">
            <DirectoryClientStatusSelect mode="multiple" />
          </Form.Item>
        </Col>

        <Col span={4}>
          <Form.Item name="responsible_employee">
            <EmployeeSelect mode="multiple" />
          </Form.Item>
        </Col>

        <Col span={4}>
          <Form.Item name="industry">
            <DirectoryClientIndustrySelect mode="multiple" />
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
