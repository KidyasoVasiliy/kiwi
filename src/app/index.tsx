import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ClientsPage from 'src/pages/clients';
import ClientsCardPage from 'src/pages/clientsCard';
import ClientsFormPage from 'src/pages/clientsForm';
// import DealPage from 'src/pages/deal';
// import DealFormPage from 'src/pages/dealForm';
// import DealProcessPage from 'src/pages/dealProcess';
// import DictionariesPage from 'src/pages/dictionaries';
// import EmployeesPage from 'src/pages/employees';
// import EmployeesCardPage from 'src/pages/employeesCard';
// import EmployeesFormPage from 'src/pages/employeesForm';
import ObjectsPage from 'src/pages/objects';
import ObjectsCardPage from 'src/pages/objectsCard';
import ObjectsFormPage from 'src/pages/objectsForm';
import Root from 'src/pages/root';
// import SettingsPage from 'src/pages/settings';
// import StaffPage from 'src/pages/staff';
// import StaffCardPage from 'src/pages/staffCard';
// import StaffFormPage from 'src/pages/staffForm';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      // { path: 'deal', element: <DealPage /> },
      // { path: 'deal/create', element: <DealFormPage /> },
      // { path: 'deal/process', element: <DealProcessPage /> },
      { path: 'clients', element: <ClientsPage /> },
      { path: 'clients/create', element: <ClientsFormPage /> },
      { path: 'clients/:id/edit', element: <ClientsFormPage /> },
      { path: 'clients/:id', element: <ClientsCardPage /> },
      { path: 'objects', element: <ObjectsPage /> },
      { path: 'objects/create', element: <ObjectsFormPage /> },
      { path: 'objects/:id/edit', element: <ObjectsFormPage /> },
      { path: 'objects/:id', element: <ObjectsCardPage /> },
      // { path: 'employees', element: <EmployeesPage /> },
      // { path: 'employees/create', element: <EmployeesFormPage /> },
      // { path: 'employees/:id', element: <EmployeesCardPage /> },
      // { path: 'staff', element: <StaffPage /> },
      // { path: 'staff/create', element: <StaffFormPage /> },
      // { path: 'staff/:id', element: <StaffCardPage /> },
      // { path: 'settings', element: <SettingsPage /> },
      // { path: 'dictionaries', element: <DictionariesPage /> },
    ],
  },
]);

export const App = () => (
  <QueryClientProvider
    client={
      new QueryClient({
        defaultOptions: { queries: { refetchOnWindowFocus: false } },
      })
    }
  >
    <RouterProvider router={router} />
  </QueryClientProvider>
);
