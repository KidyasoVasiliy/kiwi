import { graphql } from './gql';

export * from './fragment-masking';

/** override func graphql */
export const gql = (...args: any) => graphql(args);
