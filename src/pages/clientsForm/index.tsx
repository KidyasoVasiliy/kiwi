import { Button, Space, Typography, theme } from 'antd';
import { Content } from 'antd/es/layout/layout';
import { useNavigate, useParams } from 'react-router-dom';
import { useTitle } from 'react-use';
import { ClientForm } from 'src/features/ClientForm';

export default function ClientsFormPage() {
  useTitle('Форма клиента');

  const {
    token: { colorBgContainer, borderRadius },
  } = theme.useToken();

  const { id } = useParams<{ id?: string }>();
  const navigate = useNavigate();

  return (
    <div>
      <Space size="middle" direction="vertical" style={{ width: '100%' }}>
        <Content
          style={{
            borderRadius,
            padding: '22px 24px 12px',
            background: colorBgContainer,
          }}
        >
          <Button type="link" onClick={() => navigate(-1)}>
            Назад
          </Button>
          <Typography.Title level={4}>
            {id ? 'Изменить клиента' : 'Создать клиента'}
          </Typography.Title>
        </Content>
        <Content
          style={{
            borderRadius,
            padding: 24,
            background: colorBgContainer,
          }}
        >
          <ClientForm />
        </Content>
      </Space>
    </div>
  );
}
