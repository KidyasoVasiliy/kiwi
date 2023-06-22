import { useNavigate } from 'react-router-dom';
import { PageLayout } from 'src/components/PageLayout';

export default function ObjectsCardPage() {
  const navigate = useNavigate();

  return (
    <PageLayout
      documentTitle="Карточка объекта"
      pageTitle="Карточка объекта"
      prevBtnConfig={{
        onClick: () => navigate(-1),
      }}
      primaryBtnConfig={{
        text: 'Редактировать',
        onClick: () => navigate('edit', { relative: 'path' }),
      }}
    >
      Карточка объекта
    </PageLayout>
  );
}
