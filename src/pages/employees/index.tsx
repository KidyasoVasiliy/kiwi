import { useNavigate } from 'react-router-dom';
import { PageLayout } from 'src/components/PageLayout';
import { EmployeeTable } from 'src/features/EmployeesTable';

export default function EmployeesPage() {
  const navigate = useNavigate();

  return (
    <PageLayout
      documentTitle="Список пользователей"
      pageTitle="Пользователи"
      primaryBtnConfig={{
        text: 'Добавить пользователя',
        onClick: () => navigate('create', { relative: 'path' }),
      }}
    >
      <EmployeeTable />
    </PageLayout>
  );
}
