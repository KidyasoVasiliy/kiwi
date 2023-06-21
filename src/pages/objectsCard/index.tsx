import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useTitle } from 'src/shared/lib/browser/dom';

export default function ObjectsCardPage() {
  useTitle('Объекты');
  const navigate = useNavigate();

  return (
    <div>
      <Button type="link" onClick={() => navigate('/objects')}>
        Назад
      </Button>
    </div>
  );
}
