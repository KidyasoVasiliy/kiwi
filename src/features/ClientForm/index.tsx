import { Button, Form, Input, Spin, message } from 'antd';
import { useForm } from 'antd/es/form/Form';
import differenceBy from 'lodash/differenceBy';
import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {
  DirectoryClientIndustrySelect,
  DirectoryClientIndustrySelectValue,
  getDirectoryClientIndustryOptions,
} from 'src/features/DirectoryClientIndustrySelect';
import {
  DirectoryClientStatusSelect,
  DirectoryClientStatusSelectValue,
  getDirectoryClientStatusOption,
} from 'src/features/DirectoryClientStatusSelect';
import {
  EmployeeSelect,
  EmployeeSelectValue,
  getEmployeeSelectOption,
} from 'src/features/EmployeeSelect';
import { REQUIRED } from 'src/shared/const/error-message';

import { useCreateClient } from './hooks/useCreateClient';
import { useCreateRelationshipClient } from './hooks/useCreateRelationshipClient';
import { useInitialClientForm } from './hooks/useInitialClientForm';
import { useUpdateClient } from './hooks/useUpdateClient';

export type ClientFormType = {
  name: string;
  responsible_employee: EmployeeSelectValue | undefined;
  industries: Pick<DirectoryClientIndustrySelectValue, 'value'>[];
  status: Pick<DirectoryClientStatusSelectValue, 'value'> | undefined;
};

export const ClientForm: React.FC = () => {
  const { id } = useParams<{ id?: string }>();
  const navigate = useNavigate();
  const { data, isInitialLoading: isInitialClientFormLoading } =
    useInitialClientForm({
      id,
    });

  const [form] = useForm();
  const { mutateAsync: createClient, ...createClientMeta } = useCreateClient();
  const { mutateAsync: updateClient, ...updateClientMeta } = useUpdateClient();
  const { mutate: createRelationshipClient, ...createRelationshipClientMeta } =
    useCreateRelationshipClient();

  const isSuccess =
    (createClientMeta.isSuccess && createRelationshipClientMeta.isSuccess) ||
    updateClientMeta.isSuccess;
  const isError =
    (createClientMeta.isError && createRelationshipClientMeta.isError) ||
    updateClientMeta.isError;
  const isLoading =
    (createClientMeta.isLoading && createRelationshipClientMeta.isLoading) ||
    updateClientMeta.isLoading;

  const initialClient = data?.client_by_pk;

  const initialValues: ClientFormType = {
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

  const onFinish = async (validValues: ClientFormType) => {
    const values = validValues as DeepRequired<ClientFormType>;

    if (id) {
      const deletedIndustries = differenceBy(
        initialValues.industries,
        values.industries,
        'value',
      );

      const createIndustries = differenceBy(
        values.industries,
        initialValues.industries,
        'value',
      );

      await updateClient({
        clientId: id,
        client_set_input: {
          name: values.name,
          employee_id: values.responsible_employee?.value,
        },
        deleteClient_industry: deletedIndustries.map((el) => ({
          client_id: { _eq: id },
          industry_id: { _eq: el.value },
        })),
        skipDeleteIndustry: !deletedIndustries.length,
        skipInsertIndustry: !createIndustries.length,
        insertIndustries: createIndustries.map((el) => ({
          client_id: id,
          industry_id: el.value,
        })),
        skipInsertStatus: values.status?.value === initialValues.status?.value,
        status_id: values.status!.value,
      });

      navigate(`/clients/${id}`);
    } else {
      const newClient = await createClient({
        name: values.name,
        employee_id: values.responsible_employee!.value,
      });

      const newClientId = newClient.insert_client?.returning[0].id;

      createRelationshipClient({
        clientId: newClientId,
        status_id: values.status!.value,
        industries: values.industries.map(({ value }) => ({
          client_id: newClientId,
          industry_id: value,
        })),
        skipIndustry: !values.industries.length,
      });

      form.resetFields();
    }
  };

  useEffect(() => {
    if (isSuccess) {
      const msg = id ? 'Клиент успешно обновлен' : 'Клиент успешно создан';

      message.success(msg);
    }
  }, [isSuccess, id]);

  useEffect(() => {
    if (isError) {
      const msg = id ? 'Ошибка обновления клиента' : 'Ошибка создания клиента';

      message.success(msg);
    }
  }, [id, isError]);

  return isInitialClientFormLoading ? (
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
          Сохранить
        </Button>
      </Form.Item>
    </Form>
  );
};
