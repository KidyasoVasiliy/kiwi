import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import { ClientsTable } from 'src/features/client/ui/ClientsTable';

export default function ClientsPage() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>ClientsPage</h1>
      <Button onClick={() => navigate('create', { relative: 'path' })}>
        Создать
      </Button>

      <ClientsTable />
    </div>
  );
}
