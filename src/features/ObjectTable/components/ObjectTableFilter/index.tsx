import { Button, Col, Form, Input, Row } from 'antd';
import { useForm } from 'antd/es/form/Form';
import React from 'react';
import { ClientSelect, ClientSelectValue } from 'src/features/ClientSelect';

import { useObjectTableFilterCount } from './hooks/useObjectTableFilterCount';

export type ObjectTableFilterType = {
  search?: string;
  client?: ClientSelectValue[];
};

type Props = {
  isFetching: boolean;
  onFinish: (values: ObjectTableFilterType) => void;
};

export const ObjectTableFilter: React.FC<Props> = ({ onFinish }) => {
  const [form] = useForm();
  const { isFetching, debounceFetcher, submitText, isEmpty } =
    useObjectTableFilterCount();

  return (
    <Form<ObjectTableFilterType>
      form={form}
      name="ObjectTableFilter"
      onValuesChange={debounceFetcher}
      initialValues={{
        search: '',
        client: [],
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
          <Form.Item name="client">
            <ClientSelect mode="multiple" />
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
