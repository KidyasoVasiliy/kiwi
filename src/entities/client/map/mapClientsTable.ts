import { ClientsQuery } from 'src/gql/graphql';

export const mapClientsTable = (list: ClientsQuery['client'] = []) => {
  return list.map((client, ind) => {
    return {
      key: ind + 1,
      created_at: client.created_at,
      updated_at: client.updated_at,
      name: client.fullName,
      tags: ['Новый', 'Застройщик'],
    };
  });
};
