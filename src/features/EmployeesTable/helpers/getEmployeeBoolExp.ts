import { Employee_Bool_Exp, InputMaybe } from 'src/__gql__/graphql';

import { EmployeeTableFilterType } from '../components/EmployeeTableFilter';

/** Собирает фильтры:
 * fullName
 */
export const getEmployeeBoolExp = (values: EmployeeTableFilterType) => {
  const where: InputMaybe<Employee_Bool_Exp> = {};

  if (values.search?.length) {
    where.fullName = {
      _ilike: values.search,
    };
  }

  return Object.keys(where).length ? where : undefined;
};
