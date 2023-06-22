import { useNavigate } from 'react-router-dom';
import { PageLayout } from 'src/components/PageLayout';
import { ClientCard } from 'src/features/ClientCard';

export default function ClientsCardPage() {
  const navigate = useNavigate();

  return (
    <PageLayout
      documentTitle="Карточка клиент"
      pageTitle="Карточка клиент"
      prevBtnConfig={{
        onClick: () => navigate(-1),
      }}
      primaryBtnConfig={{
        text: 'Редактировать',
        onClick: () => navigate('edit', { relative: 'path' }),
      }}
    >
      <ClientCard />
    </PageLayout>
  );
}
