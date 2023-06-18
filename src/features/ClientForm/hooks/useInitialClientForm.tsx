import { TypedDocumentNode } from '@graphql-typed-document-node/core';
import { useQuery } from '@tanstack/react-query';
import {
  InitialClientFormQuery,
  InitialClientFormQueryVariables,
} from 'src/__gql__/graphql';
import { gql, graphQLClient } from 'src/shared/app';

const queryDocument: TypedDocumentNode<
  InitialClientFormQuery,
  InitialClientFormQueryVariables
> = gql`
  query InitialClientForm($id: uuid!) {
    client_by_pk(id: $id) {
      id
      name
      responsible_employee {
        id
        fullName
      }
      industries {
        id
        industry {
          id
          name
        }
      }
      statuses(where: { is_current: { _eq: true } }) {
        status {
          id
          name
        }
      }
    }
  }
`;

type Props = { id?: string };
export const useInitialClientForm = ({ id }: Props) => {
  const result = useQuery({
    queryKey: ['useInitialClientForm', id],
    queryFn: async () =>
      graphQLClient.request(queryDocument, {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        id: id!, // @warn depend enabled: !!id
      }),
    enabled: !!id,
  });

  return result;
};
