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
  externalValues?: ObjectTableFilterType;
};

export const ObjectTableFilter: React.FC<Props> = ({
  onFinish,
  externalValues,
}) => {
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
        client: externalValues?.client,
      }}
      onFinish={onFinish}
      autoComplete="off"
      preserve
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

        {/** В случае внешнего клиента не отображать фильтр */}
        <Col span={4} style={externalValues?.client && { display: 'none' }}>
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
