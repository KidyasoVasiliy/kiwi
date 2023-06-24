import { Button, Form, Input, Spin, message } from 'antd';
import { useForm } from 'antd/es/form/Form';
import React from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { InitialObjectFormQuery } from 'src/__gql__/graphql';
import {
  ClientSelect,
  ClientSelectValue,
  getClientSelectOption,
} from 'src/features/ClientSelect';
import { REQUIRED } from 'src/shared/const/error-message';
import { CustomError } from 'src/shared/error/CustomError';

import { useCreateObject } from './hooks/useCreateObject';
import { useInitialObjectForm } from './hooks/useInitialObjectForm';
import { useUpdateObject } from './hooks/useUpdateObject';
import { ObjectFormSubmitType, ObjectFormType } from './ObjectFormType';

const adapterObjectForm = (
  data?: InitialObjectFormQuery,
  externalValues?: Partial<ObjectFormType>,
): ObjectFormType => {
  const initialClient = data?.client_object_by_pk;

  // if create
  if (!data) {
    return {
      name: '',
      client: externalValues?.client,
    };
  }

  // if edit, ignore externalValues
  return {
    name: initialClient?.name ?? '',
    client: initialClient?.client
      ? getClientSelectOption(initialClient.client)
      : undefined,
  };
};

export const ObjectForm: React.FC = () => {
  const { id } = useParams<{ id?: string }>();
  const navigate = useNavigate();
  const { state: externalClient } = useLocation() as {
    state?: ClientSelectValue;
  };

  const { data, isFetching } = useInitialObjectForm({
    id,
  });

  const [form] = useForm();
  const { createObject, isLoading: isCreateObjectLoading } = useCreateObject();
  const { updateObject, isLoading: isUpdateObjectLoading } = useUpdateObject({
    objectId: id,
  });

  const isLoading = isCreateObjectLoading || isUpdateObjectLoading;

  const initialValues: ObjectFormType = adapterObjectForm(data, {
    client: externalClient,
  });

  const onFinish = async (vals: ObjectFormType) => {
    const values = vals as ObjectFormSubmitType;

    if (id) {
      await updateObject(initialValues, values).catch((error) => {
        if (error instanceof CustomError) {
          message.success(error.message);
        } else {
          message.error('Произошла ошибка обновления');
          console.error('updateClient:', error.message);
        }
      });
      message.success('Объект успешно обновлен');
      navigate(`/objects/${id}`);
    } else {
      await createObject(values).catch((error) => {
        if (error instanceof CustomError) {
          message.success(error.message);
        } else {
          message.error('Произошла ошибка создания');
          console.error('createObject:', error.message);
        }
      });
      message.success('Объект успешно создан');
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
    <Form<ObjectFormType>
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
        label="Наименование объекта"
        rules={[{ required: true, message: REQUIRED }]}
      >
        <Input placeholder="Введите название объекта" disabled={isLoading} />
      </Form.Item>

      <Form.Item
        name="client"
        label="Клиент"
        rules={[{ required: true, message: REQUIRED }]}
      >
        <ClientSelect disabled={isLoading} />
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
