import { useNavigate, useParams } from 'react-router-dom';
import { PageLayout } from 'src/components/PageLayout';
import { ClientForm } from 'src/features/ClientForm';

export default function ClientsFormPage() {
  const { id } = useParams<{ id?: string }>();
  const navigate = useNavigate();

  return (
    <PageLayout
      documentTitle="Форма клиента"
      pageTitle={id ? 'Изменить клиента' : 'Создать клиента'}
      prevBtnConfig={{
        onClick: () => navigate(-1),
      }}
    >
      <ClientForm />
    </PageLayout>
  );
}
