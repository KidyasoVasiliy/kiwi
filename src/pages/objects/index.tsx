import { useNavigate } from 'react-router-dom';
import { PageLayout } from 'src/components/PageLayout';
import { ObjectTable } from 'src/features/ObjectTable';
import { useTitle } from 'src/shared/lib/browser/dom';

export default function ObjectsPage() {
  useTitle('Объекты');

  const navigate = useNavigate();

  return (
    <PageLayout
      documentTitle="Список объектов"
      pageTitle="Объекты"
      primaryBtnConfig={{
        text: 'Добавить объект',
        onClick: () => navigate('create', { relative: 'path' }),
      }}
    >
      <ObjectTable />
    </PageLayout>
  );
}
