import { Button, Form, Input, message } from 'antd';
import { useForm } from 'antd/es/form/Form';
import React, { useEffect } from 'react';
import {
  DirectoryClientIndustrySelect,
  DirectoryClientIndustrySelectValue,
} from 'src/features/DirectoryClientIndustrySelect';
import {
  DirectoryClientStatusSelect,
  DirectoryClientStatusSelectValue,
} from 'src/features/DirectoryClientStatusSelect';
import {
  EmployeeSelect,
  EmployeeSelectValue,
} from 'src/features/EmployeeSelect';

import { useCreateClient } from './hooks/useCreateClient';
import { useCreateRelationshipClient } from './hooks/useCreateRelationshipClient';

type ClientFormType = {
  name: '';
  responsible_employee: EmployeeSelectValue;
  industry: DirectoryClientIndustrySelectValue;
  status: DirectoryClientStatusSelectValue;
};

export const ClientForm: React.FC = () => {
  const [form] = useForm();
  const { mutateAsync: createClient, ...createClientMeta } = useCreateClient();

  const { mutate: createRelationshipClient, ...createRelationshipClientMeta } =
    useCreateRelationshipClient();

  const isSuccess =
    createClientMeta.isSuccess && createRelationshipClientMeta.isSuccess;
  const isError =
    createClientMeta.isError && createRelationshipClientMeta.isError;
  const isLoading =
    createClientMeta.isLoading && createRelationshipClientMeta.isLoading;

  const onFinish = async (values: ClientFormType) => {
    const newClient = await createClient({
      name: values.name,
      employee_id: values.responsible_employee.value,
    });

    const newClientId = newClient.insert_client?.returning[0].id;

    createRelationshipClient({
      clientId: newClientId,
      status_id: values.status.value,
      skipStatus: !values.status.value,
      industry_id: values.industry.value,
      skipIndustry: !values.industry.value,
    });
  };

  useEffect(() => {
    if (isSuccess) message.success('Клиент успешно создан');
  }, [isSuccess]);

  useEffect(() => {
    if (isError) message.error('Ошибка создания клиента');
  }, [isError]);

  return (
    <Form<ClientFormType>
      form={form}
      name="ClientForm"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600 }}
      initialValues={{
        name: '',
        responsible_employee: [],
        industry: [],
        status: [],
      }}
      onFinish={onFinish}
      autoComplete="off"
    >
      <Form.Item name="name" label="Полное наименование">
        <Input placeholder="ООО “Ромашка”" disabled={isLoading} />
      </Form.Item>

      <Form.Item name="status" label="Статус">
        <DirectoryClientStatusSelect disabled={isLoading} />
      </Form.Item>

      <Form.Item name="responsible_employee" label="Ответственный">
        <EmployeeSelect disabled={isLoading} />
      </Form.Item>

      <Form.Item name="industry" label="Отрасль">
        <DirectoryClientIndustrySelect disabled={isLoading} />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button
          type="primary"
          htmlType="submit"
          style={{ width: 180 }}
          loading={isLoading}
        >
          Сохранить
        </Button>
      </Form.Item>
    </Form>
  );
};
