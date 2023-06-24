import { Client_Object_Bool_Exp, InputMaybe } from 'src/__gql__/graphql';

import { ObjectTableFilterType } from '../components/ObjectTableFilter';

/** Собирает фильтры:
 * name
 * client
 */
export const getObjectBoolExp = (values: ObjectTableFilterType) => {
  const where: InputMaybe<Client_Object_Bool_Exp> = {};

  if (values.search?.length) {
    where.name = {
      _ilike: `%${values.search}%`,
    };
  }

  if (values.client?.length) {
    where.client = {
      _or: values.client?.map((item) => ({
        id: { _eq: item.value },
      })),
    };
  }

  return Object.keys(where).length ? where : undefined;
};
