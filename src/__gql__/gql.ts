/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  query Client($id: uuid!) {\n    client_by_pk(id: $id) {\n      id\n      created_at\n      updated_at\n      name\n      contacts {\n        id\n        name\n        email\n        phone\n        is_main\n      }\n      responsible_employee {\n        fullName\n      }\n      statuses {\n        status\n        updated_at\n        is_current\n      }\n    }\n  }\n": types.ClientDocument,
    "\n  query ClientsCount($where: client_bool_exp) {\n    client_aggregate(where: $where) {\n      aggregate {\n        count\n      }\n    }\n  }\n": types.ClientsCountDocument,
    "\n  query Clients(\n    $offset: Int\n    $limit: Int\n    $distinct_on: [client_select_column!]\n    $order_by: [client_order_by!]\n    $where: client_bool_exp\n  ) {\n    client_aggregate(where: $where) {\n      aggregate {\n        count\n      }\n    }\n    client(\n      offset: $offset\n      limit: $limit\n      distinct_on: $distinct_on\n      order_by: $order_by\n      where: $where\n    ) {\n      id\n      name\n      statuses(where: { is_current: { _eq: true } }) {\n        is_current\n        status\n      }\n      contacts(where: { is_main: { _eq: true } }) {\n        is_main\n        phone\n      }\n      responsible_employee {\n        fullName\n      }\n    }\n  }\n": types.ClientsDocument,
    "\n  query EmployeeSelect($limit: Int, $offset: Int, $where: employee_bool_exp) {\n    employee(where: $where, limit: $limit, offset: $offset) {\n      fullName\n      id\n    }\n  }\n": types.EmployeeSelectDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query Client($id: uuid!) {\n    client_by_pk(id: $id) {\n      id\n      created_at\n      updated_at\n      name\n      contacts {\n        id\n        name\n        email\n        phone\n        is_main\n      }\n      responsible_employee {\n        fullName\n      }\n      statuses {\n        status\n        updated_at\n        is_current\n      }\n    }\n  }\n"): (typeof documents)["\n  query Client($id: uuid!) {\n    client_by_pk(id: $id) {\n      id\n      created_at\n      updated_at\n      name\n      contacts {\n        id\n        name\n        email\n        phone\n        is_main\n      }\n      responsible_employee {\n        fullName\n      }\n      statuses {\n        status\n        updated_at\n        is_current\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query ClientsCount($where: client_bool_exp) {\n    client_aggregate(where: $where) {\n      aggregate {\n        count\n      }\n    }\n  }\n"): (typeof documents)["\n  query ClientsCount($where: client_bool_exp) {\n    client_aggregate(where: $where) {\n      aggregate {\n        count\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query Clients(\n    $offset: Int\n    $limit: Int\n    $distinct_on: [client_select_column!]\n    $order_by: [client_order_by!]\n    $where: client_bool_exp\n  ) {\n    client_aggregate(where: $where) {\n      aggregate {\n        count\n      }\n    }\n    client(\n      offset: $offset\n      limit: $limit\n      distinct_on: $distinct_on\n      order_by: $order_by\n      where: $where\n    ) {\n      id\n      name\n      statuses(where: { is_current: { _eq: true } }) {\n        is_current\n        status\n      }\n      contacts(where: { is_main: { _eq: true } }) {\n        is_main\n        phone\n      }\n      responsible_employee {\n        fullName\n      }\n    }\n  }\n"): (typeof documents)["\n  query Clients(\n    $offset: Int\n    $limit: Int\n    $distinct_on: [client_select_column!]\n    $order_by: [client_order_by!]\n    $where: client_bool_exp\n  ) {\n    client_aggregate(where: $where) {\n      aggregate {\n        count\n      }\n    }\n    client(\n      offset: $offset\n      limit: $limit\n      distinct_on: $distinct_on\n      order_by: $order_by\n      where: $where\n    ) {\n      id\n      name\n      statuses(where: { is_current: { _eq: true } }) {\n        is_current\n        status\n      }\n      contacts(where: { is_main: { _eq: true } }) {\n        is_main\n        phone\n      }\n      responsible_employee {\n        fullName\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query EmployeeSelect($limit: Int, $offset: Int, $where: employee_bool_exp) {\n    employee(where: $where, limit: $limit, offset: $offset) {\n      fullName\n      id\n    }\n  }\n"): (typeof documents)["\n  query EmployeeSelect($limit: Int, $offset: Int, $where: employee_bool_exp) {\n    employee(where: $where, limit: $limit, offset: $offset) {\n      fullName\n      id\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;