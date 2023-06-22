import { Button, Form, Input, Spin, message } from 'antd';
import { useForm } from 'antd/es/form/Form';
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { InitialEmployeeFormQuery } from 'src/__gql__/graphql';
import { REQUIRED } from 'src/shared/const/error-message';
import { CustomError } from 'src/shared/error/CustomError';

import { EmployeeFormSubmitType, EmployeeFormType } from './EmployeeFormType';
import { useCreateEmployee } from './hooks/useCreateEmployee';
import { useInitialEmployeeForm } from './hooks/useInitialEmployeeForm';
import { useUpdateEmployee } from './hooks/useUpdateEmployee';

const adapterEmployeeForm = (
  data?: InitialEmployeeFormQuery,
): EmployeeFormType => {
  const initialEmployee = data?.employee_by_pk;

  return {
    fullName: initialEmployee?.fullName ?? '',
  };
};

export const EmployeeForm: React.FC = () => {
  const { id } = useParams<{ id?: string }>();
  const navigate = useNavigate();
  const { data, isFetching } = useInitialEmployeeForm({
    id,
  });

  const [form] = useForm();
  const { createEmployee, isLoading: isCreateEmployeeLoading } =
    useCreateEmployee();
  const { updateEmployee, isLoading: isUpdateEmployeeLoading } =
    useUpdateEmployee({
      employeeId: id,
    });

  const isLoading = isCreateEmployeeLoading || isUpdateEmployeeLoading;
  const initialValues: EmployeeFormType = adapterEmployeeForm(data);

  const onFinish = async (vals: EmployeeFormType) => {
    const values = vals as EmployeeFormSubmitType;

    if (id) {
      await updateEmployee(initialValues, values).catch((error) => {
        if (error instanceof CustomError) {
          message.success(error.message);
        } else {
          message.error('Произошла ошибка обновления');
          console.error('updateEmployee:', error.message);
        }
      });
      message.success('Пользователь успешно обновлен');
      navigate(`/objects/${id}`);
    } else {
      await createEmployee(values).catch((error) => {
        if (error instanceof CustomError) {
          message.success(error.message);
        } else {
          message.error('Произошла ошибка создания');
          console.error('createEmployee:', error.message);
        }
      });
      message.success('Пользователь успешно создан');
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
    <Form<EmployeeFormType>
      form={form}
      name="EmployeeForm"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600 }}
      initialValues={initialValues}
      onFinish={onFinish}
      autoComplete="off"
    >
      <Form.Item
        name="fullName"
        label="Полное наименование"
        rules={[{ required: true, message: REQUIRED }]}
      >
        <Input placeholder="Введите наименование" disabled={isLoading} />
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
