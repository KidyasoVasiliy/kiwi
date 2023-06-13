// import { Button, Form, FormProps, Input, message } from 'antd';
// import { REQUIRED } from 'src/shared/const/error-message';

// const layout: FormProps = {
//   labelCol: { span: 8 },
//   wrapperCol: { span: 16 },
// };
// const tailLayout = {
//   wrapperCol: { offset: 8, span: 16 },
// };

// const initialValues = { email: '', password: '' };
// type Values = { email: string; password: string };

// export const AuthForm: React.FC = () => {
//   const onFinish = async (values: Values) => {
//     try {
//       console.log('fetch..');
//       console.log(values);
//     } catch (error) {
//       console.error(error);
//       message.error('Произошла ошибка, попробуйте позже');
//     }
//   };

//   return (
//     <Form<Values>
//       {...layout}
//       name="login"
//       initialValues={initialValues}
//       onFinish={onFinish}
//     >
//       <Form.Item<Values>
//         label="Логин"
//         name="email"
//         rules={[
//           {
//             min: 3,
//             required: true,
//             message: REQUIRED,
//             type: 'email',
//           },
//         ]}
//       >
//         <Input />
//       </Form.Item>

//       <Form.Item
//         label="Пароль"
//         name="password"
//         rules={[{ min: 6, required: true, message: REQUIRED }]}
//       >
//         <Input.Password />
//       </Form.Item>

//       <Form.Item {...tailLayout}>
//         <Button type="primary" htmlType="submit">
//           Войти
//         </Button>
//       </Form.Item>
//     </Form>
//   );
// };
