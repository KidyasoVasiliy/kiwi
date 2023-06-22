import { useNavigate, useParams } from 'react-router-dom';
import { PageLayout } from 'src/components/PageLayout';
import { EmployeeForm } from 'src/features/EmployeeForm';

export default function EmployeesFormPage() {
  const { id } = useParams<{ id?: string }>();
  const navigate = useNavigate();

  return (
    <PageLayout
      documentTitle="Форма пользователя"
      pageTitle={id ? 'Изменить пользователя' : 'Создать пользователя'}
      prevBtnConfig={{
        onClick: () => navigate(-1),
      }}
    >
      <EmployeeForm />
    </PageLayout>
  );
}
