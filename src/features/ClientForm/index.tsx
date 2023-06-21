import { Button, Form, Input, Spin, message } from 'antd';
import { useForm } from 'antd/es/form/Form';
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { InitialClientFormQuery } from 'src/__gql__/graphql';
import {
  DirectoryClientIndustrySelect,
  getDirectoryClientIndustryOptions,
} from 'src/features/DirectoryClientIndustrySelect';
import {
  DirectoryClientStatusSelect,
  getDirectoryClientStatusOption,
} from 'src/features/DirectoryClientStatusSelect';
import {
  EmployeeSelect,
  getEmployeeSelectOption,
} from 'src/features/EmployeeSelect';
import { REQUIRED } from 'src/shared/const/error-message';
import { CustomError } from 'src/shared/error/CustomError';

import { ClientFormType, ClientFormSubmitType } from './ClientFormType';
import { useCreateClient } from './hooks/useCreateClient';
import { useInitialClientForm } from './hooks/useInitialClientForm';
import { useUpdateClient } from './hooks/useUpdateClient';

const adapterClientForm = (data?: InitialClientFormQuery): ClientFormType => {
  const initialClient = data?.client_by_pk;

  return {
    name: initialClient?.name ?? '',
    responsible_employee: initialClient?.responsible_employee
      ? getEmployeeSelectOption(initialClient.responsible_employee)
      : undefined,
    industries: initialClient?.industries
      ? getDirectoryClientIndustryOptions(
          initialClient?.industries.flatMap((industry) => industry.industry),
        )
      : [],
    status: initialClient?.statuses[0]?.status
      ? getDirectoryClientStatusOption(initialClient?.statuses[0].status)
      : undefined,
  };
};

export const ClientForm: React.FC = () => {
  const { id } = useParams<{ id?: string }>();
  const navigate = useNavigate();
  const { data, isFetching } = useInitialClientForm({
    id,
  });

  const [form] = useForm();
  const { createClient, isLoading: isCreateClientLoading } = useCreateClient();
  const { updateClient, isLoading: isUpdateClientLoading } = useUpdateClient({
    clientId: id,
  });

  const isLoading = isCreateClientLoading || isUpdateClientLoading;
  const initialValues: ClientFormType = adapterClientForm(data);

  const onFinish = async (vals: ClientFormType) => {
    const values = vals as ClientFormSubmitType;

    if (id) {
      await updateClient(initialValues, values).catch((error) => {
        if (error instanceof CustomError) {
          message.success(error.message);
        } else {
          message.error('Произошла ошибка обновления');
          console.error('updateClient:', error.message);
        }
      });
      message.success('Клиент успешно обновлен');
      navigate(`/clients/${id}`);
    } else {
      await createClient(values).catch((error) => {
        if (error instanceof CustomError) {
          message.success(error.message);
        } else {
          message.error('Произошла ошибка создания');
          console.error('createClient:', error.message);
        }
      });
      message.success('Клиент успешно создан');
      form.resetFields();
    }
  };

  return isFetching ? (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: 600,
      }}
    >
      <Spin size="large" />
    </div>
  ) : (
    <Form<ClientFormType>
      form={form}
      name="ClientForm"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600 }}
      initialValues={initialValues}
      onFinish={onFinish}
      autoComplete="off"
    >
      <Form.Item
        name="name"
        label="Полное наименование"
        rules={[{ required: true, message: REQUIRED }]}
      >
        <Input placeholder="ООО “Ромашка”" disabled={isLoading} />
      </Form.Item>

      <Form.Item
        name="status"
        label="Статус"
        rules={[{ required: true, message: REQUIRED }]}
      >
        <DirectoryClientStatusSelect disabled={isLoading} />
      </Form.Item>

      <Form.Item
        name="responsible_employee"
        label="Ответственный"
        rules={[{ required: true, message: REQUIRED }]}
      >
        <EmployeeSelect disabled={isLoading} />
      </Form.Item>

      <Form.Item name="industries" label="Отрасль">
        <DirectoryClientIndustrySelect disabled={isLoading} mode="multiple" />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button
          type="primary"
          htmlType="submit"
          style={{ width: 180 }}
          loading={isLoading}
        >
          {id ? 'Сохранить' : 'Создать'}
        </Button>
      </Form.Item>
    </Form>
  );
};
