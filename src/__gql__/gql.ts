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
    "\n  query Client($id: uuid!) {\n    client_by_pk(id: $id) {\n      id\n      created_at\n      updated_at\n      name\n      contacts {\n        id\n        name\n        email\n        phone\n        is_main\n      }\n      responsible_employee {\n        fullName\n      }\n      statuses {\n        status {\n          name\n          color\n        }\n        updated_at\n        is_current\n      }\n    }\n  }\n": types.ClientDocument,
    "\n  mutation CreateClient($employee_id: uuid!, $name: String) {\n    insert_client(objects: { employee_id: $employee_id, name: $name }) {\n      returning {\n        id\n      }\n    }\n  }\n": types.CreateClientDocument,
    "\n  mutation CreateRelationshipClient(\n    $clientId: uuid\n    # Статус, один\n    $status_id: uuid\n    # Отрасли, множество\n    $industries: [client_directory_client_industry_insert_input!]! ## как сделать необязательным?\n    # Отрасли, пропустить создание\n    $skipIndustry: Boolean!\n  ) {\n    insert_client_status(\n      objects: { client_id: $clientId, status_id: $status_id }\n    ) {\n      returning {\n        id\n      }\n    }\n    insert_client_directory_client_industry(objects: $industries)\n      @skip(if: $skipIndustry) {\n      returning {\n        id\n      }\n    }\n  }\n": types.CreateRelationshipClientDocument,
    "\n  query InitialClientForm($id: uuid!) {\n    client_by_pk(id: $id) {\n      id\n      name\n      responsible_employee {\n        id\n        fullName\n      }\n      industries {\n        industry_id\n        industry {\n          id\n          name\n        }\n      }\n      statuses(where: { is_current: { _eq: true } }) {\n        status {\n          id\n          name\n        }\n      }\n    }\n  }\n": types.InitialClientFormDocument,
    "\n  mutation UpdateClient($clientId: uuid!, $client_set_input: client_set_input) {\n    update_client_by_pk(\n      pk_columns: { id: $clientId }\n      _set: $client_set_input\n    ) {\n      id\n    }\n\n    # update_client_directory_client_industry\n  }\n": types.UpdateClientDocument,
    "\n  query ClientsTableFilter($where: client_bool_exp) {\n    client_aggregate(where: $where) {\n      aggregate {\n        count\n      }\n    }\n  }\n": types.ClientsTableFilterDocument,
    "\n  query Clients(\n    $offset: Int\n    $limit: Int\n    $distinct_on: [client_select_column!]\n    $order_by: [client_order_by!]\n    $where: client_bool_exp\n  ) {\n    client_aggregate(where: $where) {\n      aggregate {\n        count\n      }\n    }\n    client(\n      offset: $offset\n      limit: $limit\n      distinct_on: $distinct_on\n      order_by: $order_by\n      where: $where\n    ) {\n      id\n      created_at\n      updated_at\n      name\n      statuses(where: { is_current: { _eq: true } }) {\n        status {\n          name\n          color\n        }\n      }\n      contacts(where: { is_main: { _eq: true } }) {\n        phone\n      }\n      responsible_employee {\n        fullName\n      }\n      industries {\n        industry {\n          name\n          color\n        }\n      }\n    }\n  }\n": types.ClientsDocument,
    "\n  query DirectoryClientIndustrySelect(\n    $limit: Int\n    $offset: Int\n    $where: directory_client_industry_bool_exp\n  ) {\n    directory_client_industry(where: $where, limit: $limit, offset: $offset) {\n      id\n      name\n    }\n  }\n": types.DirectoryClientIndustrySelectDocument,
    "\n  query DirectoryClientStatusSelect(\n    $limit: Int\n    $offset: Int\n    $where: directory_client_status_bool_exp\n  ) {\n    directory_client_status(where: $where, limit: $limit, offset: $offset) {\n      id\n      name\n    }\n  }\n": types.DirectoryClientStatusSelectDocument,
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
export function graphql(source: "\n  query Client($id: uuid!) {\n    client_by_pk(id: $id) {\n      id\n      created_at\n      updated_at\n      name\n      contacts {\n        id\n        name\n        email\n        phone\n        is_main\n      }\n      responsible_employee {\n        fullName\n      }\n      statuses {\n        status {\n          name\n          color\n        }\n        updated_at\n        is_current\n      }\n    }\n  }\n"): (typeof documents)["\n  query Client($id: uuid!) {\n    client_by_pk(id: $id) {\n      id\n      created_at\n      updated_at\n      name\n      contacts {\n        id\n        name\n        email\n        phone\n        is_main\n      }\n      responsible_employee {\n        fullName\n      }\n      statuses {\n        status {\n          name\n          color\n        }\n        updated_at\n        is_current\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation CreateClient($employee_id: uuid!, $name: String) {\n    insert_client(objects: { employee_id: $employee_id, name: $name }) {\n      returning {\n        id\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation CreateClient($employee_id: uuid!, $name: String) {\n    insert_client(objects: { employee_id: $employee_id, name: $name }) {\n      returning {\n        id\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation CreateRelationshipClient(\n    $clientId: uuid\n    # Статус, один\n    $status_id: uuid\n    # Отрасли, множество\n    $industries: [client_directory_client_industry_insert_input!]! ## как сделать необязательным?\n    # Отрасли, пропустить создание\n    $skipIndustry: Boolean!\n  ) {\n    insert_client_status(\n      objects: { client_id: $clientId, status_id: $status_id }\n    ) {\n      returning {\n        id\n      }\n    }\n    insert_client_directory_client_industry(objects: $industries)\n      @skip(if: $skipIndustry) {\n      returning {\n        id\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation CreateRelationshipClient(\n    $clientId: uuid\n    # Статус, один\n    $status_id: uuid\n    # Отрасли, множество\n    $industries: [client_directory_client_industry_insert_input!]! ## как сделать необязательным?\n    # Отрасли, пропустить создание\n    $skipIndustry: Boolean!\n  ) {\n    insert_client_status(\n      objects: { client_id: $clientId, status_id: $status_id }\n    ) {\n      returning {\n        id\n      }\n    }\n    insert_client_directory_client_industry(objects: $industries)\n      @skip(if: $skipIndustry) {\n      returning {\n        id\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query InitialClientForm($id: uuid!) {\n    client_by_pk(id: $id) {\n      id\n      name\n      responsible_employee {\n        id\n        fullName\n      }\n      industries {\n        industry_id\n        industry {\n          id\n          name\n        }\n      }\n      statuses(where: { is_current: { _eq: true } }) {\n        status {\n          id\n          name\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query InitialClientForm($id: uuid!) {\n    client_by_pk(id: $id) {\n      id\n      name\n      responsible_employee {\n        id\n        fullName\n      }\n      industries {\n        industry_id\n        industry {\n          id\n          name\n        }\n      }\n      statuses(where: { is_current: { _eq: true } }) {\n        status {\n          id\n          name\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation UpdateClient($clientId: uuid!, $client_set_input: client_set_input) {\n    update_client_by_pk(\n      pk_columns: { id: $clientId }\n      _set: $client_set_input\n    ) {\n      id\n    }\n\n    # update_client_directory_client_industry\n  }\n"): (typeof documents)["\n  mutation UpdateClient($clientId: uuid!, $client_set_input: client_set_input) {\n    update_client_by_pk(\n      pk_columns: { id: $clientId }\n      _set: $client_set_input\n    ) {\n      id\n    }\n\n    # update_client_directory_client_industry\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query ClientsTableFilter($where: client_bool_exp) {\n    client_aggregate(where: $where) {\n      aggregate {\n        count\n      }\n    }\n  }\n"): (typeof documents)["\n  query ClientsTableFilter($where: client_bool_exp) {\n    client_aggregate(where: $where) {\n      aggregate {\n        count\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query Clients(\n    $offset: Int\n    $limit: Int\n    $distinct_on: [client_select_column!]\n    $order_by: [client_order_by!]\n    $where: client_bool_exp\n  ) {\n    client_aggregate(where: $where) {\n      aggregate {\n        count\n      }\n    }\n    client(\n      offset: $offset\n      limit: $limit\n      distinct_on: $distinct_on\n      order_by: $order_by\n      where: $where\n    ) {\n      id\n      created_at\n      updated_at\n      name\n      statuses(where: { is_current: { _eq: true } }) {\n        status {\n          name\n          color\n        }\n      }\n      contacts(where: { is_main: { _eq: true } }) {\n        phone\n      }\n      responsible_employee {\n        fullName\n      }\n      industries {\n        industry {\n          name\n          color\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query Clients(\n    $offset: Int\n    $limit: Int\n    $distinct_on: [client_select_column!]\n    $order_by: [client_order_by!]\n    $where: client_bool_exp\n  ) {\n    client_aggregate(where: $where) {\n      aggregate {\n        count\n      }\n    }\n    client(\n      offset: $offset\n      limit: $limit\n      distinct_on: $distinct_on\n      order_by: $order_by\n      where: $where\n    ) {\n      id\n      created_at\n      updated_at\n      name\n      statuses(where: { is_current: { _eq: true } }) {\n        status {\n          name\n          color\n        }\n      }\n      contacts(where: { is_main: { _eq: true } }) {\n        phone\n      }\n      responsible_employee {\n        fullName\n      }\n      industries {\n        industry {\n          name\n          color\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query DirectoryClientIndustrySelect(\n    $limit: Int\n    $offset: Int\n    $where: directory_client_industry_bool_exp\n  ) {\n    directory_client_industry(where: $where, limit: $limit, offset: $offset) {\n      id\n      name\n    }\n  }\n"): (typeof documents)["\n  query DirectoryClientIndustrySelect(\n    $limit: Int\n    $offset: Int\n    $where: directory_client_industry_bool_exp\n  ) {\n    directory_client_industry(where: $where, limit: $limit, offset: $offset) {\n      id\n      name\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query DirectoryClientStatusSelect(\n    $limit: Int\n    $offset: Int\n    $where: directory_client_status_bool_exp\n  ) {\n    directory_client_status(where: $where, limit: $limit, offset: $offset) {\n      id\n      name\n    }\n  }\n"): (typeof documents)["\n  query DirectoryClientStatusSelect(\n    $limit: Int\n    $offset: Int\n    $where: directory_client_status_bool_exp\n  ) {\n    directory_client_status(where: $where, limit: $limit, offset: $offset) {\n      id\n      name\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query EmployeeSelect($limit: Int, $offset: Int, $where: employee_bool_exp) {\n    employee(where: $where, limit: $limit, offset: $offset) {\n      fullName\n      id\n    }\n  }\n"): (typeof documents)["\n  query EmployeeSelect($limit: Int, $offset: Int, $where: employee_bool_exp) {\n    employee(where: $where, limit: $limit, offset: $offset) {\n      fullName\n      id\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;