import { useNavigate } from 'react-router-dom';
import { PageLayout } from 'src/components/PageLayout';
import { ClientTable } from 'src/features/ClientTable';

export default function ClientsPage() {
  const navigate = useNavigate();

  return (
    <PageLayout
      documentTitle="Список клиентов"
      pageTitle="Клиенты"
      primaryBtnConfig={{
        text: 'Добавить клиента',
        onClick: () => navigate('create', { relative: 'path' }),
      }}
    >
      <ClientTable />
    </PageLayout>
  );
}
