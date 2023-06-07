import { Button } from 'antd';
import { useNavigate, useParams } from 'react-router-dom';
import { MiniCalendar } from 'src/shared/ui/mini-calendar';

export default function ClientsCardPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  return (
    <div>
      <Button type="link" onClick={() => navigate('/clients')}>
        Назад
      </Button>
      <h1>ClientsPage</h1>
      <div>ID: {id}</div>
      <MiniCalendar />
    </div>
  );
}
