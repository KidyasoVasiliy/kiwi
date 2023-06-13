import { ClientsTable } from 'src/features/ClientsTable';
import { useTitle } from 'src/shared/lib/browser/dom';

export default function ClientsPage() {
  useTitle('Клиенты');

  return (
    <>
      <ClientsTable />
    </>
  );
}
