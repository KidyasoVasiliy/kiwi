import { graphql } from "./gql";

/** override func graphql */
export const gql = (...args: any) => graphql(args);