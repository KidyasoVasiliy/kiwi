import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';

export default function ClientsFormPage() {
  const navigate = useNavigate();

  return (
    <div>
      <Button type="link" onClick={() => navigate(-1)}>
        Назад
      </Button>
      <h1>ClientsPage</h1>
      <Button onClick={() => navigate('/clients/123-123-123-123')}>
        Создать
      </Button>
    </div>
  );
}
