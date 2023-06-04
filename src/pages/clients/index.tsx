import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';

export default function ClientsPage() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>ClientsPage</h1>
      <Button onClick={() => navigate('create', { relative: 'path' })}>
        Создать
      </Button>
      <Button onClick={() => navigate('123-123-123-123', { relative: 'path' })}>
        Открыть
      </Button>
    </div>
  );
}
