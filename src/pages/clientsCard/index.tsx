import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import { ClientCard } from 'src/features/ClientCard';
import { useTitle } from 'src/shared/lib/browser/dom';
import { MiniCalendar } from 'src/shared/ui/mini-calendar';

export default function ClientsCardPage() {
  useTitle('Клиенты');
  const navigate = useNavigate();

  return (
    <div>
      <Button type="link" onClick={() => navigate('/clients')}>
        Назад
      </Button>
      <ClientCard />
      <MiniCalendar />
    </div>
  );
}
