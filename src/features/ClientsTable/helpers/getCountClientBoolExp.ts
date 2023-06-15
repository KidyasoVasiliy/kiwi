import { Client_Bool_Exp, InputMaybe } from 'src/__gql__/graphql';

import { ClientsTableFilterType } from '../components/ClientsTableFilter';

/** Собирает фильтры:
 * responsible_employee
 * industry
 * status
 */
export const getClientBoolExp = (values: ClientsTableFilterType) => {
  const where: InputMaybe<Client_Bool_Exp> = {};

  if (values.responsible_employee?.length) {
    where.responsible_employee = {
      _or: values.responsible_employee?.map((item) => ({
        id: { _eq: item.value },
      })),
    };
  }

  if (values.industry?.length) {
    where.industries = {
      industry: {
        _or: values.industry?.map((item) => ({
          id: { _eq: item.value },
        })),
      },
    };
  }

  if (values.status?.length) {
    where.statuses = {
      is_current: { _eq: true },
      status: {
        _or: values.status?.map((item) => ({
          id: { _eq: item.value },
        })),
      },
    };
  }

  return Object.keys(where).length ? where : undefined;
};
