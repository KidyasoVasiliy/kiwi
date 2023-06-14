import { TypedDocumentNode } from '@graphql-typed-document-node/core';
import { useQuery } from '@tanstack/react-query';
import { ClientQuery, ClientQueryVariables } from 'src/__gql__/graphql';
import { gql, graphQLClient } from 'src/shared/app';

const clientQueryDoc: TypedDocumentNode<
  ClientQuery,
  ClientQueryVariables
> = gql`
  query Client($id: uuid!) {
    client_by_pk(id: $id) {
      id
      created_at
      updated_at
      name
      contacts {
        id
        name
        email
        phone
        is_main
      }
      responsible_employee {
        fullName
      }
      statuses {
        status {
          name
          color
        }
        updated_at
        is_current
      }
    }
  }
`;

type ClientByIdArgs = { id: string };
export const useClientCard = ({ id }: ClientByIdArgs) => {
  const result = useQuery({
    queryKey: ['clientById'],
    queryFn: async () =>
      graphQLClient.request(clientQueryDoc, {
        id,
      }),
  });

  return result;
};
