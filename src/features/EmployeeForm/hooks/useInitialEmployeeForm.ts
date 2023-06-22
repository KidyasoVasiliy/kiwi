import { TypedDocumentNode } from '@graphql-typed-document-node/core';
import { useQuery } from '@tanstack/react-query';
import {
  InitialEmployeeFormQuery,
  InitialEmployeeFormQueryVariables,
} from 'src/__gql__/graphql';
import { gql, graphQLClient } from 'src/shared/app';

const queryDocument: TypedDocumentNode<
  InitialEmployeeFormQuery,
  InitialEmployeeFormQueryVariables
> = gql`
  query InitialEmployeeForm($id: uuid!) {
    employee_by_pk(id: $id) {
      id
      fullName
    }
  }
`;

type Props = { id?: string };
export const useInitialEmployeeForm = ({ id }: Props) => {
  const result = useQuery({
    queryKey: ['useInitialEmployeeForm', id],
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
