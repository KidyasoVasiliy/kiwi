import { Badge, Card, List, Typography } from 'antd';
import dayjs from 'dayjs';
import { useParams } from 'react-router-dom';

import { useClientCard } from './hooks/useClientCard';

export function ClientCard() {
  const { id } = useParams<{ id: string }>();
  if (!id) {
    throw new Error('id not found');
  }

  const { isLoading, data } = useClientCard({ id });
  const client = data?.client_by_pk;
  return (
    <div>
      <Card title={client?.name} bordered={false} loading={isLoading}>
        <p>ID {client?.id}</p>
        <p>Дата создания {client?.created_at}</p>
        <p>Дата обновления {client?.updated_at}</p>
        <p>Ответственный менеджер {client?.responsible_employee?.fullName}</p>
        <List
          header={<strong>История статусов</strong>}
          bordered
          dataSource={client?.statuses.sort((a, b) => {
            if (a.is_current === true) {
              return -1; // a будет расположен перед b
            }
            if (b.is_current === true) {
              return 1; // b будет расположен перед a
            }
            return (
              new Date(b.updated_at).getTime() -
              new Date(a.updated_at).getTime()
            ); // сортировка по убыванию updated_at
          })}
          renderItem={(item) => (
            <List.Item>
              {item.is_current ? (
                <Badge status="success" text={item.status} />
              ) : (
                <Typography.Text>{item.status}</Typography.Text>
              )}
              <Typography.Text type="secondary">
                от {dayjs(item.updated_at).format('DD/MM/YYYY')}
              </Typography.Text>
            </List.Item>
          )}
        />
        <List
          header={<div>Контакты</div>}
          bordered
          dataSource={client?.contacts.sort((a, b) => {
            if (a.is_main === true) {
              return -1; // a будет расположен перед b
            }
            if (b.is_main === true) {
              return 1; // b будет расположен перед a
            }
            return 0; // порядок не важен
          })}
          renderItem={(item) => (
            <List.Item style={{ display: 'flex', flexDirection: 'column' }}>
              {item.is_main && <Badge status="success" text="Основной" />}
              <Typography.Text type="secondary">
                Телефон {item.phone}
              </Typography.Text>
              <Typography.Text type="secondary">
                E-mail {item.email}
              </Typography.Text>
            </List.Item>
          )}
        />
      </Card>
    </div>
  );
}
