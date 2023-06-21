import { TypedDocumentNode } from '@graphql-typed-document-node/core';
import { useQuery } from '@tanstack/react-query';
import {
  InitialObjectFormQuery,
  InitialObjectFormQueryVariables,
} from 'src/__gql__/graphql';
import { gql, graphQLClient } from 'src/shared/app';

const queryDocument: TypedDocumentNode<
  InitialObjectFormQuery,
  InitialObjectFormQueryVariables
> = gql`
  query InitialObjectForm($id: uuid!) {
    client_object_by_pk(id: $id) {
      id
      name
      client {
        name
        id
      }
    }
  }
`;

type Props = { id?: string };
export const useInitialObjectForm = ({ id }: Props) => {
  const result = useQuery({
    queryKey: ['useInitialObjectForm', id],
    queryFn: async () =>
      graphQLClient.request(queryDocument, {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        id: id!, // @warn Тайпинг не учитывает enabled: !!id
      }),
    networkMode: 'always',
    enabled: !!id,
  });

  return result;
};
