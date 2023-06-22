import { Button, Col, Form, Input, Row } from 'antd';
import { useForm } from 'antd/es/form/Form';
import React from 'react';

import { useEmployeeTableFilterCount } from './hooks/useEmployeeTableFilterCount';

export type EmployeeTableFilterType = {
  search?: string;
};

type Props = {
  isFetching: boolean;
  onFinish: (values: EmployeeTableFilterType) => void;
};

export const EmployeeTableFilter: React.FC<Props> = ({ onFinish }) => {
  const [form] = useForm();
  const { isFetching, debounceFetcher, submitText, isEmpty } =
    useEmployeeTableFilterCount();

  return (
    <Form<EmployeeTableFilterType>
      form={form}
      name="EmployeeTableFilter"
      onValuesChange={debounceFetcher}
      initialValues={{
        search: '',
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
