import { Button, Space, Typography, theme } from 'antd';
import { Content } from 'antd/es/layout/layout';
import { useNavigate } from 'react-router-dom';
import { ClientsTable } from 'src/features/ClientsTable';
import { useTitle } from 'src/shared/lib/browser/dom';

export default function ClientsPage() {
  useTitle('Клиенты');

  const navigate = useNavigate();
  const {
    token: { colorBgContainer, borderRadius },
  } = theme.useToken();

  return (
    <>
      <Space size="middle" direction="vertical" style={{ width: '100%' }}>
        <Content
          style={{
            borderRadius,
            padding: '22px 24px 12px',
            background: colorBgContainer,
          }}
        >
          <Typography.Title level={4}>Клиенты</Typography.Title>
          <Button
            type="link"
            onClick={() => navigate('create', { relative: 'path' })}
          >
            Добавить клиента
          </Button>
        </Content>
        <Content
          style={{
            borderRadius,
            padding: 24,
            background: colorBgContainer,
          }}
        >
          <ClientsTable />
        </Content>
      </Space>
    </>
  );
}
