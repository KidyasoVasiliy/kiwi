import { useNavigate } from 'react-router-dom';
import { PageLayout } from 'src/components/PageLayout';

export default function EmployeesCardPage() {
  const navigate = useNavigate();

  return (
    <PageLayout
      documentTitle="Карточка пользователя"
      pageTitle="Карточка пользователя"
      prevBtnConfig={{
        onClick: () => navigate(-1),
      }}
      primaryBtnConfig={{
        text: 'Редактировать',
        onClick: () => navigate('edit', { relative: 'path' }),
      }}
    >
      Карточка пользователя
    </PageLayout>
  );
}
