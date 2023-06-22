import { useNavigate, useParams } from 'react-router-dom';
import { PageLayout } from 'src/components/PageLayout';
import { ObjectForm } from 'src/features/ObjectForm';

export default function ObjectsFormPage() {
  const { id } = useParams<{ id?: string }>();
  const navigate = useNavigate();

  return (
    <PageLayout
      documentTitle="Форма объекта"
      pageTitle={id ? 'Изменить объект' : 'Создать объект'}
      prevBtnConfig={{
        onClick: () => navigate(-1),
      }}
    >
      <ObjectForm />
    </PageLayout>
  );
}
