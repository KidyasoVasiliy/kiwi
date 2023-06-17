/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string | number; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  bigint: { input: any; output: any; }
  date: { input: any; output: any; }
  timestamptz: { input: any; output: any; }
  uuid: { input: any; output: any; }
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Boolean']['input']>;
  _gt?: InputMaybe<Scalars['Boolean']['input']>;
  _gte?: InputMaybe<Scalars['Boolean']['input']>;
  _in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Boolean']['input']>;
  _lte?: InputMaybe<Scalars['Boolean']['input']>;
  _neq?: InputMaybe<Scalars['Boolean']['input']>;
  _nin?: InputMaybe<Array<Scalars['Boolean']['input']>>;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']['input']>;
  _gt?: InputMaybe<Scalars['Int']['input']>;
  _gte?: InputMaybe<Scalars['Int']['input']>;
  _in?: InputMaybe<Array<Scalars['Int']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Int']['input']>;
  _lte?: InputMaybe<Scalars['Int']['input']>;
  _neq?: InputMaybe<Scalars['Int']['input']>;
  _nin?: InputMaybe<Array<Scalars['Int']['input']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']['input']>;
  _gt?: InputMaybe<Scalars['String']['input']>;
  _gte?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']['input']>;
  _in?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']['input']>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']['input']>;
  _lt?: InputMaybe<Scalars['String']['input']>;
  _lte?: InputMaybe<Scalars['String']['input']>;
  _neq?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']['input']>;
  _nin?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']['input']>;
};

/** Boolean expression to compare columns of type "bigint". All fields are combined with logical 'AND'. */
export type Bigint_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['bigint']['input']>;
  _gt?: InputMaybe<Scalars['bigint']['input']>;
  _gte?: InputMaybe<Scalars['bigint']['input']>;
  _in?: InputMaybe<Array<Scalars['bigint']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['bigint']['input']>;
  _lte?: InputMaybe<Scalars['bigint']['input']>;
  _neq?: InputMaybe<Scalars['bigint']['input']>;
  _nin?: InputMaybe<Array<Scalars['bigint']['input']>>;
};

/** Таблица клиентов */
export type Client = {
  __typename?: 'client';
  /** An array relationship */
  contacts: Array<Client_Contact>;
  /** An aggregate relationship */
  contacts_aggregate: Client_Contact_Aggregate;
  created_at: Scalars['timestamptz']['output'];
  employee_id?: Maybe<Scalars['uuid']['output']>;
  id: Scalars['uuid']['output'];
  /** An array relationship */
  industries: Array<Client_Directory_Client_Industry>;
  /** An aggregate relationship */
  industries_aggregate: Client_Directory_Client_Industry_Aggregate;
  name: Scalars['String']['output'];
  /** An array relationship */
  objects: Array<Client_Object>;
  /** An aggregate relationship */
  objects_aggregate: Client_Object_Aggregate;
  /** An object relationship */
  responsible_employee?: Maybe<Employee>;
  /** An array relationship */
  statuses: Array<Client_Status>;
  /** An aggregate relationship */
  statuses_aggregate: Client_Status_Aggregate;
  updated_at: Scalars['timestamptz']['output'];
};


/** Таблица клиентов */
export type ClientContactsArgs = {
  distinct_on?: InputMaybe<Array<Client_Contact_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Client_Contact_Order_By>>;
  where?: InputMaybe<Client_Contact_Bool_Exp>;
};


/** Таблица клиентов */
export type ClientContacts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Client_Contact_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Client_Contact_Order_By>>;
  where?: InputMaybe<Client_Contact_Bool_Exp>;
};


/** Таблица клиентов */
export type ClientIndustriesArgs = {
  distinct_on?: InputMaybe<Array<Client_Directory_Client_Industry_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Client_Directory_Client_Industry_Order_By>>;
  where?: InputMaybe<Client_Directory_Client_Industry_Bool_Exp>;
};


/** Таблица клиентов */
export type ClientIndustries_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Client_Directory_Client_Industry_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Client_Directory_Client_Industry_Order_By>>;
  where?: InputMaybe<Client_Directory_Client_Industry_Bool_Exp>;
};


/** Таблица клиентов */
export type ClientObjectsArgs = {
  distinct_on?: InputMaybe<Array<Client_Object_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Client_Object_Order_By>>;
  where?: InputMaybe<Client_Object_Bool_Exp>;
};


/** Таблица клиентов */
export type ClientObjects_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Client_Object_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Client_Object_Order_By>>;
  where?: InputMaybe<Client_Object_Bool_Exp>;
};


/** Таблица клиентов */
export type ClientStatusesArgs = {
  distinct_on?: InputMaybe<Array<Client_Status_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Client_Status_Order_By>>;
  where?: InputMaybe<Client_Status_Bool_Exp>;
};


/** Таблица клиентов */
export type ClientStatuses_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Client_Status_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Client_Status_Order_By>>;
  where?: InputMaybe<Client_Status_Bool_Exp>;
};

/** aggregated selection of "client" */
export type Client_Aggregate = {
  __typename?: 'client_aggregate';
  aggregate?: Maybe<Client_Aggregate_Fields>;
  nodes: Array<Client>;
};

export type Client_Aggregate_Bool_Exp = {
  count?: InputMaybe<Client_Aggregate_Bool_Exp_Count>;
};

export type Client_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Client_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Client_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "client" */
export type Client_Aggregate_Fields = {
  __typename?: 'client_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Client_Max_Fields>;
  min?: Maybe<Client_Min_Fields>;
};


/** aggregate fields of "client" */
export type Client_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Client_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "client" */
export type Client_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Client_Max_Order_By>;
  min?: InputMaybe<Client_Min_Order_By>;
};

/** input type for inserting array relation for remote table "client" */
export type Client_Arr_Rel_Insert_Input = {
  data: Array<Client_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Client_On_Conflict>;
};

/** Boolean expression to filter rows from the table "client". All fields are combined with a logical 'AND'. */
export type Client_Bool_Exp = {
  _and?: InputMaybe<Array<Client_Bool_Exp>>;
  _not?: InputMaybe<Client_Bool_Exp>;
  _or?: InputMaybe<Array<Client_Bool_Exp>>;
  contacts?: InputMaybe<Client_Contact_Bool_Exp>;
  contacts_aggregate?: InputMaybe<Client_Contact_Aggregate_Bool_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  employee_id?: InputMaybe<Uuid_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  industries?: InputMaybe<Client_Directory_Client_Industry_Bool_Exp>;
  industries_aggregate?: InputMaybe<Client_Directory_Client_Industry_Aggregate_Bool_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  objects?: InputMaybe<Client_Object_Bool_Exp>;
  objects_aggregate?: InputMaybe<Client_Object_Aggregate_Bool_Exp>;
  responsible_employee?: InputMaybe<Employee_Bool_Exp>;
  statuses?: InputMaybe<Client_Status_Bool_Exp>;
  statuses_aggregate?: InputMaybe<Client_Status_Aggregate_Bool_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "client" */
export enum Client_Constraint {
  /** unique or primary key constraint on columns "id" */
  ClientPkey = 'client_pkey'
}

/** Контакты клиента */
export type Client_Contact = {
  __typename?: 'client_contact';
  /** An object relationship */
  client: Client;
  client_id: Scalars['uuid']['output'];
  email?: Maybe<Scalars['String']['output']>;
  id: Scalars['uuid']['output'];
  is_main: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  phone?: Maybe<Scalars['String']['output']>;
};

/** aggregated selection of "client_contact" */
export type Client_Contact_Aggregate = {
  __typename?: 'client_contact_aggregate';
  aggregate?: Maybe<Client_Contact_Aggregate_Fields>;
  nodes: Array<Client_Contact>;
};

export type Client_Contact_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<Client_Contact_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Client_Contact_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<Client_Contact_Aggregate_Bool_Exp_Count>;
};

export type Client_Contact_Aggregate_Bool_Exp_Bool_And = {
  arguments: Client_Contact_Select_Column_Client_Contact_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Client_Contact_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Client_Contact_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Client_Contact_Select_Column_Client_Contact_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Client_Contact_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Client_Contact_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Client_Contact_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Client_Contact_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "client_contact" */
export type Client_Contact_Aggregate_Fields = {
  __typename?: 'client_contact_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Client_Contact_Max_Fields>;
  min?: Maybe<Client_Contact_Min_Fields>;
};


/** aggregate fields of "client_contact" */
export type Client_Contact_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Client_Contact_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "client_contact" */
export type Client_Contact_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Client_Contact_Max_Order_By>;
  min?: InputMaybe<Client_Contact_Min_Order_By>;
};

/** input type for inserting array relation for remote table "client_contact" */
export type Client_Contact_Arr_Rel_Insert_Input = {
  data: Array<Client_Contact_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Client_Contact_On_Conflict>;
};

/** Boolean expression to filter rows from the table "client_contact". All fields are combined with a logical 'AND'. */
export type Client_Contact_Bool_Exp = {
  _and?: InputMaybe<Array<Client_Contact_Bool_Exp>>;
  _not?: InputMaybe<Client_Contact_Bool_Exp>;
  _or?: InputMaybe<Array<Client_Contact_Bool_Exp>>;
  client?: InputMaybe<Client_Bool_Exp>;
  client_id?: InputMaybe<Uuid_Comparison_Exp>;
  email?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  is_main?: InputMaybe<Boolean_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  phone?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "client_contact" */
export enum Client_Contact_Constraint {
  /** unique or primary key constraint on columns "id" */
  ClientContactPkey = 'client_contact_pkey'
}

/** input type for inserting data into table "client_contact" */
export type Client_Contact_Insert_Input = {
  client?: InputMaybe<Client_Obj_Rel_Insert_Input>;
  client_id?: InputMaybe<Scalars['uuid']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  is_main?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Client_Contact_Max_Fields = {
  __typename?: 'client_contact_max_fields';
  client_id?: Maybe<Scalars['uuid']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
};

/** order by max() on columns of table "client_contact" */
export type Client_Contact_Max_Order_By = {
  client_id?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  phone?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Client_Contact_Min_Fields = {
  __typename?: 'client_contact_min_fields';
  client_id?: Maybe<Scalars['uuid']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
};

/** order by min() on columns of table "client_contact" */
export type Client_Contact_Min_Order_By = {
  client_id?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  phone?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "client_contact" */
export type Client_Contact_Mutation_Response = {
  __typename?: 'client_contact_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Client_Contact>;
};

/** on_conflict condition type for table "client_contact" */
export type Client_Contact_On_Conflict = {
  constraint: Client_Contact_Constraint;
  update_columns?: Array<Client_Contact_Update_Column>;
  where?: InputMaybe<Client_Contact_Bool_Exp>;
};

/** Ordering options when selecting data from "client_contact". */
export type Client_Contact_Order_By = {
  client?: InputMaybe<Client_Order_By>;
  client_id?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  is_main?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  phone?: InputMaybe<Order_By>;
};

/** primary key columns input for table: client_contact */
export type Client_Contact_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "client_contact" */
export enum Client_Contact_Select_Column {
  /** column name */
  ClientId = 'client_id',
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  IsMain = 'is_main',
  /** column name */
  Name = 'name',
  /** column name */
  Phone = 'phone'
}

/** select "client_contact_aggregate_bool_exp_bool_and_arguments_columns" columns of table "client_contact" */
export enum Client_Contact_Select_Column_Client_Contact_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  IsMain = 'is_main'
}

/** select "client_contact_aggregate_bool_exp_bool_or_arguments_columns" columns of table "client_contact" */
export enum Client_Contact_Select_Column_Client_Contact_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  IsMain = 'is_main'
}

/** input type for updating data in table "client_contact" */
export type Client_Contact_Set_Input = {
  client_id?: InputMaybe<Scalars['uuid']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  is_main?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "client_contact" */
export type Client_Contact_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Client_Contact_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Client_Contact_Stream_Cursor_Value_Input = {
  client_id?: InputMaybe<Scalars['uuid']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  is_main?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "client_contact" */
export enum Client_Contact_Update_Column {
  /** column name */
  ClientId = 'client_id',
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  IsMain = 'is_main',
  /** column name */
  Name = 'name',
  /** column name */
  Phone = 'phone'
}

export type Client_Contact_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Client_Contact_Set_Input>;
  /** filter the rows which have to be updated */
  where: Client_Contact_Bool_Exp;
};

/** many to many Клиент - Отрасль */
export type Client_Directory_Client_Industry = {
  __typename?: 'client_directory_client_industry';
  /** An object relationship */
  client: Client;
  client_id: Scalars['uuid']['output'];
  id: Scalars['uuid']['output'];
  /** An object relationship */
  industry: Directory_Client_Industry;
  industry_id: Scalars['uuid']['output'];
};

/** aggregated selection of "client_directory_client_industry" */
export type Client_Directory_Client_Industry_Aggregate = {
  __typename?: 'client_directory_client_industry_aggregate';
  aggregate?: Maybe<Client_Directory_Client_Industry_Aggregate_Fields>;
  nodes: Array<Client_Directory_Client_Industry>;
};

export type Client_Directory_Client_Industry_Aggregate_Bool_Exp = {
  count?: InputMaybe<Client_Directory_Client_Industry_Aggregate_Bool_Exp_Count>;
};

export type Client_Directory_Client_Industry_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Client_Directory_Client_Industry_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Client_Directory_Client_Industry_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "client_directory_client_industry" */
export type Client_Directory_Client_Industry_Aggregate_Fields = {
  __typename?: 'client_directory_client_industry_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Client_Directory_Client_Industry_Max_Fields>;
  min?: Maybe<Client_Directory_Client_Industry_Min_Fields>;
};


/** aggregate fields of "client_directory_client_industry" */
export type Client_Directory_Client_Industry_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Client_Directory_Client_Industry_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "client_directory_client_industry" */
export type Client_Directory_Client_Industry_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Client_Directory_Client_Industry_Max_Order_By>;
  min?: InputMaybe<Client_Directory_Client_Industry_Min_Order_By>;
};

/** input type for inserting array relation for remote table "client_directory_client_industry" */
export type Client_Directory_Client_Industry_Arr_Rel_Insert_Input = {
  data: Array<Client_Directory_Client_Industry_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Client_Directory_Client_Industry_On_Conflict>;
};

/** Boolean expression to filter rows from the table "client_directory_client_industry". All fields are combined with a logical 'AND'. */
export type Client_Directory_Client_Industry_Bool_Exp = {
  _and?: InputMaybe<Array<Client_Directory_Client_Industry_Bool_Exp>>;
  _not?: InputMaybe<Client_Directory_Client_Industry_Bool_Exp>;
  _or?: InputMaybe<Array<Client_Directory_Client_Industry_Bool_Exp>>;
  client?: InputMaybe<Client_Bool_Exp>;
  client_id?: InputMaybe<Uuid_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  industry?: InputMaybe<Directory_Client_Industry_Bool_Exp>;
  industry_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "client_directory_client_industry" */
export enum Client_Directory_Client_Industry_Constraint {
  /** unique or primary key constraint on columns "id" */
  ClientDirectoryClientIndustryPkey = 'client_directory_client_industry_pkey'
}

/** input type for inserting data into table "client_directory_client_industry" */
export type Client_Directory_Client_Industry_Insert_Input = {
  client?: InputMaybe<Client_Obj_Rel_Insert_Input>;
  client_id?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  industry?: InputMaybe<Directory_Client_Industry_Obj_Rel_Insert_Input>;
  industry_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type Client_Directory_Client_Industry_Max_Fields = {
  __typename?: 'client_directory_client_industry_max_fields';
  client_id?: Maybe<Scalars['uuid']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  industry_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "client_directory_client_industry" */
export type Client_Directory_Client_Industry_Max_Order_By = {
  client_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  industry_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Client_Directory_Client_Industry_Min_Fields = {
  __typename?: 'client_directory_client_industry_min_fields';
  client_id?: Maybe<Scalars['uuid']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  industry_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "client_directory_client_industry" */
export type Client_Directory_Client_Industry_Min_Order_By = {
  client_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  industry_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "client_directory_client_industry" */
export type Client_Directory_Client_Industry_Mutation_Response = {
  __typename?: 'client_directory_client_industry_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Client_Directory_Client_Industry>;
};

/** on_conflict condition type for table "client_directory_client_industry" */
export type Client_Directory_Client_Industry_On_Conflict = {
  constraint: Client_Directory_Client_Industry_Constraint;
  update_columns?: Array<Client_Directory_Client_Industry_Update_Column>;
  where?: InputMaybe<Client_Directory_Client_Industry_Bool_Exp>;
};

/** Ordering options when selecting data from "client_directory_client_industry". */
export type Client_Directory_Client_Industry_Order_By = {
  client?: InputMaybe<Client_Order_By>;
  client_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  industry?: InputMaybe<Directory_Client_Industry_Order_By>;
  industry_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: client_directory_client_industry */
export type Client_Directory_Client_Industry_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "client_directory_client_industry" */
export enum Client_Directory_Client_Industry_Select_Column {
  /** column name */
  ClientId = 'client_id',
  /** column name */
  Id = 'id',
  /** column name */
  IndustryId = 'industry_id'
}

/** input type for updating data in table "client_directory_client_industry" */
export type Client_Directory_Client_Industry_Set_Input = {
  client_id?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  industry_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** Streaming cursor of the table "client_directory_client_industry" */
export type Client_Directory_Client_Industry_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Client_Directory_Client_Industry_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Client_Directory_Client_Industry_Stream_Cursor_Value_Input = {
  client_id?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  industry_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** update columns of table "client_directory_client_industry" */
export enum Client_Directory_Client_Industry_Update_Column {
  /** column name */
  ClientId = 'client_id',
  /** column name */
  Id = 'id',
  /** column name */
  IndustryId = 'industry_id'
}

export type Client_Directory_Client_Industry_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Client_Directory_Client_Industry_Set_Input>;
  /** filter the rows which have to be updated */
  where: Client_Directory_Client_Industry_Bool_Exp;
};

/** input type for inserting data into table "client" */
export type Client_Insert_Input = {
  contacts?: InputMaybe<Client_Contact_Arr_Rel_Insert_Input>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  employee_id?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  industries?: InputMaybe<Client_Directory_Client_Industry_Arr_Rel_Insert_Input>;
  name?: InputMaybe<Scalars['String']['input']>;
  objects?: InputMaybe<Client_Object_Arr_Rel_Insert_Input>;
  responsible_employee?: InputMaybe<Employee_Obj_Rel_Insert_Input>;
  statuses?: InputMaybe<Client_Status_Arr_Rel_Insert_Input>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type Client_Max_Fields = {
  __typename?: 'client_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  employee_id?: Maybe<Scalars['uuid']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by max() on columns of table "client" */
export type Client_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  employee_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Client_Min_Fields = {
  __typename?: 'client_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  employee_id?: Maybe<Scalars['uuid']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by min() on columns of table "client" */
export type Client_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  employee_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "client" */
export type Client_Mutation_Response = {
  __typename?: 'client_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Client>;
};

/** input type for inserting object relation for remote table "client" */
export type Client_Obj_Rel_Insert_Input = {
  data: Client_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Client_On_Conflict>;
};

/** Таблица объектов клиента */
export type Client_Object = {
  __typename?: 'client_object';
  /** An object relationship */
  client: Client;
  client_id: Scalars['uuid']['output'];
  created_at: Scalars['timestamptz']['output'];
  id: Scalars['uuid']['output'];
  name: Scalars['String']['output'];
  updated_at: Scalars['timestamptz']['output'];
};

/** aggregated selection of "client_object" */
export type Client_Object_Aggregate = {
  __typename?: 'client_object_aggregate';
  aggregate?: Maybe<Client_Object_Aggregate_Fields>;
  nodes: Array<Client_Object>;
};

export type Client_Object_Aggregate_Bool_Exp = {
  count?: InputMaybe<Client_Object_Aggregate_Bool_Exp_Count>;
};

export type Client_Object_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Client_Object_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Client_Object_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "client_object" */
export type Client_Object_Aggregate_Fields = {
  __typename?: 'client_object_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Client_Object_Max_Fields>;
  min?: Maybe<Client_Object_Min_Fields>;
};


/** aggregate fields of "client_object" */
export type Client_Object_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Client_Object_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "client_object" */
export type Client_Object_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Client_Object_Max_Order_By>;
  min?: InputMaybe<Client_Object_Min_Order_By>;
};

/** input type for inserting array relation for remote table "client_object" */
export type Client_Object_Arr_Rel_Insert_Input = {
  data: Array<Client_Object_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Client_Object_On_Conflict>;
};

/** Boolean expression to filter rows from the table "client_object". All fields are combined with a logical 'AND'. */
export type Client_Object_Bool_Exp = {
  _and?: InputMaybe<Array<Client_Object_Bool_Exp>>;
  _not?: InputMaybe<Client_Object_Bool_Exp>;
  _or?: InputMaybe<Array<Client_Object_Bool_Exp>>;
  client?: InputMaybe<Client_Bool_Exp>;
  client_id?: InputMaybe<Uuid_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "client_object" */
export enum Client_Object_Constraint {
  /** unique or primary key constraint on columns "id" */
  ClientObjectPkey = 'client_object_pkey'
}

/** input type for inserting data into table "client_object" */
export type Client_Object_Insert_Input = {
  client?: InputMaybe<Client_Obj_Rel_Insert_Input>;
  client_id?: InputMaybe<Scalars['uuid']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type Client_Object_Max_Fields = {
  __typename?: 'client_object_max_fields';
  client_id?: Maybe<Scalars['uuid']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by max() on columns of table "client_object" */
export type Client_Object_Max_Order_By = {
  client_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Client_Object_Min_Fields = {
  __typename?: 'client_object_min_fields';
  client_id?: Maybe<Scalars['uuid']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by min() on columns of table "client_object" */
export type Client_Object_Min_Order_By = {
  client_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "client_object" */
export type Client_Object_Mutation_Response = {
  __typename?: 'client_object_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Client_Object>;
};

/** on_conflict condition type for table "client_object" */
export type Client_Object_On_Conflict = {
  constraint: Client_Object_Constraint;
  update_columns?: Array<Client_Object_Update_Column>;
  where?: InputMaybe<Client_Object_Bool_Exp>;
};

/** Ordering options when selecting data from "client_object". */
export type Client_Object_Order_By = {
  client?: InputMaybe<Client_Order_By>;
  client_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: client_object */
export type Client_Object_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "client_object" */
export enum Client_Object_Select_Column {
  /** column name */
  ClientId = 'client_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "client_object" */
export type Client_Object_Set_Input = {
  client_id?: InputMaybe<Scalars['uuid']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** Streaming cursor of the table "client_object" */
export type Client_Object_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Client_Object_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Client_Object_Stream_Cursor_Value_Input = {
  client_id?: InputMaybe<Scalars['uuid']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** update columns of table "client_object" */
export enum Client_Object_Update_Column {
  /** column name */
  ClientId = 'client_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Client_Object_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Client_Object_Set_Input>;
  /** filter the rows which have to be updated */
  where: Client_Object_Bool_Exp;
};

/** on_conflict condition type for table "client" */
export type Client_On_Conflict = {
  constraint: Client_Constraint;
  update_columns?: Array<Client_Update_Column>;
  where?: InputMaybe<Client_Bool_Exp>;
};

/** Ordering options when selecting data from "client". */
export type Client_Order_By = {
  contacts_aggregate?: InputMaybe<Client_Contact_Aggregate_Order_By>;
  created_at?: InputMaybe<Order_By>;
  employee_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  industries_aggregate?: InputMaybe<Client_Directory_Client_Industry_Aggregate_Order_By>;
  name?: InputMaybe<Order_By>;
  objects_aggregate?: InputMaybe<Client_Object_Aggregate_Order_By>;
  responsible_employee?: InputMaybe<Employee_Order_By>;
  statuses_aggregate?: InputMaybe<Client_Status_Aggregate_Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: client */
export type Client_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "client" */
export enum Client_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  EmployeeId = 'employee_id',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "client" */
export type Client_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  employee_id?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** Статусная модель клиента */
export type Client_Status = {
  __typename?: 'client_status';
  /** An object relationship */
  client: Client;
  client_id: Scalars['uuid']['output'];
  id: Scalars['uuid']['output'];
  is_current: Scalars['Boolean']['output'];
  /** An object relationship */
  status: Directory_Client_Status;
  status_id: Scalars['uuid']['output'];
  updated_at: Scalars['timestamptz']['output'];
};

/** aggregated selection of "client_status" */
export type Client_Status_Aggregate = {
  __typename?: 'client_status_aggregate';
  aggregate?: Maybe<Client_Status_Aggregate_Fields>;
  nodes: Array<Client_Status>;
};

export type Client_Status_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<Client_Status_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Client_Status_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<Client_Status_Aggregate_Bool_Exp_Count>;
};

export type Client_Status_Aggregate_Bool_Exp_Bool_And = {
  arguments: Client_Status_Select_Column_Client_Status_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Client_Status_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Client_Status_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Client_Status_Select_Column_Client_Status_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Client_Status_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Client_Status_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Client_Status_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Client_Status_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "client_status" */
export type Client_Status_Aggregate_Fields = {
  __typename?: 'client_status_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Client_Status_Max_Fields>;
  min?: Maybe<Client_Status_Min_Fields>;
};


/** aggregate fields of "client_status" */
export type Client_Status_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Client_Status_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "client_status" */
export type Client_Status_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Client_Status_Max_Order_By>;
  min?: InputMaybe<Client_Status_Min_Order_By>;
};

/** input type for inserting array relation for remote table "client_status" */
export type Client_Status_Arr_Rel_Insert_Input = {
  data: Array<Client_Status_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Client_Status_On_Conflict>;
};

/** Boolean expression to filter rows from the table "client_status". All fields are combined with a logical 'AND'. */
export type Client_Status_Bool_Exp = {
  _and?: InputMaybe<Array<Client_Status_Bool_Exp>>;
  _not?: InputMaybe<Client_Status_Bool_Exp>;
  _or?: InputMaybe<Array<Client_Status_Bool_Exp>>;
  client?: InputMaybe<Client_Bool_Exp>;
  client_id?: InputMaybe<Uuid_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  is_current?: InputMaybe<Boolean_Comparison_Exp>;
  status?: InputMaybe<Directory_Client_Status_Bool_Exp>;
  status_id?: InputMaybe<Uuid_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "client_status" */
export enum Client_Status_Constraint {
  /** unique or primary key constraint on columns "id" */
  ClientStatusPkey = 'client_status_pkey'
}

/** input type for inserting data into table "client_status" */
export type Client_Status_Insert_Input = {
  client?: InputMaybe<Client_Obj_Rel_Insert_Input>;
  client_id?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  is_current?: InputMaybe<Scalars['Boolean']['input']>;
  status?: InputMaybe<Directory_Client_Status_Obj_Rel_Insert_Input>;
  status_id?: InputMaybe<Scalars['uuid']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type Client_Status_Max_Fields = {
  __typename?: 'client_status_max_fields';
  client_id?: Maybe<Scalars['uuid']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  status_id?: Maybe<Scalars['uuid']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by max() on columns of table "client_status" */
export type Client_Status_Max_Order_By = {
  client_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  status_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Client_Status_Min_Fields = {
  __typename?: 'client_status_min_fields';
  client_id?: Maybe<Scalars['uuid']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  status_id?: Maybe<Scalars['uuid']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by min() on columns of table "client_status" */
export type Client_Status_Min_Order_By = {
  client_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  status_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "client_status" */
export type Client_Status_Mutation_Response = {
  __typename?: 'client_status_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Client_Status>;
};

/** on_conflict condition type for table "client_status" */
export type Client_Status_On_Conflict = {
  constraint: Client_Status_Constraint;
  update_columns?: Array<Client_Status_Update_Column>;
  where?: InputMaybe<Client_Status_Bool_Exp>;
};

/** Ordering options when selecting data from "client_status". */
export type Client_Status_Order_By = {
  client?: InputMaybe<Client_Order_By>;
  client_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  is_current?: InputMaybe<Order_By>;
  status?: InputMaybe<Directory_Client_Status_Order_By>;
  status_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: client_status */
export type Client_Status_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "client_status" */
export enum Client_Status_Select_Column {
  /** column name */
  ClientId = 'client_id',
  /** column name */
  Id = 'id',
  /** column name */
  IsCurrent = 'is_current',
  /** column name */
  StatusId = 'status_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** select "client_status_aggregate_bool_exp_bool_and_arguments_columns" columns of table "client_status" */
export enum Client_Status_Select_Column_Client_Status_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  IsCurrent = 'is_current'
}

/** select "client_status_aggregate_bool_exp_bool_or_arguments_columns" columns of table "client_status" */
export enum Client_Status_Select_Column_Client_Status_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  IsCurrent = 'is_current'
}

/** input type for updating data in table "client_status" */
export type Client_Status_Set_Input = {
  client_id?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  is_current?: InputMaybe<Scalars['Boolean']['input']>;
  status_id?: InputMaybe<Scalars['uuid']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** Streaming cursor of the table "client_status" */
export type Client_Status_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Client_Status_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Client_Status_Stream_Cursor_Value_Input = {
  client_id?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  is_current?: InputMaybe<Scalars['Boolean']['input']>;
  status_id?: InputMaybe<Scalars['uuid']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** update columns of table "client_status" */
export enum Client_Status_Update_Column {
  /** column name */
  ClientId = 'client_id',
  /** column name */
  Id = 'id',
  /** column name */
  IsCurrent = 'is_current',
  /** column name */
  StatusId = 'status_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Client_Status_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Client_Status_Set_Input>;
  /** filter the rows which have to be updated */
  where: Client_Status_Bool_Exp;
};

/** Streaming cursor of the table "client" */
export type Client_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Client_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Client_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  employee_id?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** update columns of table "client" */
export enum Client_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  EmployeeId = 'employee_id',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Client_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Client_Set_Input>;
  /** filter the rows which have to be updated */
  where: Client_Bool_Exp;
};

/** ordering argument of a cursor */
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC'
}

/** Boolean expression to compare columns of type "date". All fields are combined with logical 'AND'. */
export type Date_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['date']['input']>;
  _gt?: InputMaybe<Scalars['date']['input']>;
  _gte?: InputMaybe<Scalars['date']['input']>;
  _in?: InputMaybe<Array<Scalars['date']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['date']['input']>;
  _lte?: InputMaybe<Scalars['date']['input']>;
  _neq?: InputMaybe<Scalars['date']['input']>;
  _nin?: InputMaybe<Array<Scalars['date']['input']>>;
};

/** Справочник отраслей клиента */
export type Directory_Client_Industry = {
  __typename?: 'directory_client_industry';
  color: Scalars['String']['output'];
  comment?: Maybe<Scalars['String']['output']>;
  id: Scalars['uuid']['output'];
  name: Scalars['String']['output'];
};

/** aggregated selection of "directory.client_industry" */
export type Directory_Client_Industry_Aggregate = {
  __typename?: 'directory_client_industry_aggregate';
  aggregate?: Maybe<Directory_Client_Industry_Aggregate_Fields>;
  nodes: Array<Directory_Client_Industry>;
};

/** aggregate fields of "directory.client_industry" */
export type Directory_Client_Industry_Aggregate_Fields = {
  __typename?: 'directory_client_industry_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Directory_Client_Industry_Max_Fields>;
  min?: Maybe<Directory_Client_Industry_Min_Fields>;
};


/** aggregate fields of "directory.client_industry" */
export type Directory_Client_Industry_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Directory_Client_Industry_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "directory.client_industry". All fields are combined with a logical 'AND'. */
export type Directory_Client_Industry_Bool_Exp = {
  _and?: InputMaybe<Array<Directory_Client_Industry_Bool_Exp>>;
  _not?: InputMaybe<Directory_Client_Industry_Bool_Exp>;
  _or?: InputMaybe<Array<Directory_Client_Industry_Bool_Exp>>;
  color?: InputMaybe<String_Comparison_Exp>;
  comment?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "directory.client_industry" */
export enum Directory_Client_Industry_Constraint {
  /** unique or primary key constraint on columns "name" */
  DirectoryClientIndustryNameKey = 'directory_client_industry_name_key',
  /** unique or primary key constraint on columns "id" */
  DirectoryClientIndustryPkey = 'directory_client_industry_pkey'
}

/** input type for inserting data into table "directory.client_industry" */
export type Directory_Client_Industry_Insert_Input = {
  color?: InputMaybe<Scalars['String']['input']>;
  comment?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Directory_Client_Industry_Max_Fields = {
  __typename?: 'directory_client_industry_max_fields';
  color?: Maybe<Scalars['String']['output']>;
  comment?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Directory_Client_Industry_Min_Fields = {
  __typename?: 'directory_client_industry_min_fields';
  color?: Maybe<Scalars['String']['output']>;
  comment?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "directory.client_industry" */
export type Directory_Client_Industry_Mutation_Response = {
  __typename?: 'directory_client_industry_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Directory_Client_Industry>;
};

/** input type for inserting object relation for remote table "directory.client_industry" */
export type Directory_Client_Industry_Obj_Rel_Insert_Input = {
  data: Directory_Client_Industry_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Directory_Client_Industry_On_Conflict>;
};

/** on_conflict condition type for table "directory.client_industry" */
export type Directory_Client_Industry_On_Conflict = {
  constraint: Directory_Client_Industry_Constraint;
  update_columns?: Array<Directory_Client_Industry_Update_Column>;
  where?: InputMaybe<Directory_Client_Industry_Bool_Exp>;
};

/** Ordering options when selecting data from "directory.client_industry". */
export type Directory_Client_Industry_Order_By = {
  color?: InputMaybe<Order_By>;
  comment?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
};

/** primary key columns input for table: directory.client_industry */
export type Directory_Client_Industry_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "directory.client_industry" */
export enum Directory_Client_Industry_Select_Column {
  /** column name */
  Color = 'color',
  /** column name */
  Comment = 'comment',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "directory.client_industry" */
export type Directory_Client_Industry_Set_Input = {
  color?: InputMaybe<Scalars['String']['input']>;
  comment?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "directory_client_industry" */
export type Directory_Client_Industry_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Directory_Client_Industry_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Directory_Client_Industry_Stream_Cursor_Value_Input = {
  color?: InputMaybe<Scalars['String']['input']>;
  comment?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "directory.client_industry" */
export enum Directory_Client_Industry_Update_Column {
  /** column name */
  Color = 'color',
  /** column name */
  Comment = 'comment',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

export type Directory_Client_Industry_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Directory_Client_Industry_Set_Input>;
  /** filter the rows which have to be updated */
  where: Directory_Client_Industry_Bool_Exp;
};

/** Статусная модель клиента */
export type Directory_Client_Status = {
  __typename?: 'directory_client_status';
  color: Scalars['String']['output'];
  id: Scalars['uuid']['output'];
  name: Scalars['String']['output'];
};

/** aggregated selection of "directory.client_status" */
export type Directory_Client_Status_Aggregate = {
  __typename?: 'directory_client_status_aggregate';
  aggregate?: Maybe<Directory_Client_Status_Aggregate_Fields>;
  nodes: Array<Directory_Client_Status>;
};

/** aggregate fields of "directory.client_status" */
export type Directory_Client_Status_Aggregate_Fields = {
  __typename?: 'directory_client_status_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Directory_Client_Status_Max_Fields>;
  min?: Maybe<Directory_Client_Status_Min_Fields>;
};


/** aggregate fields of "directory.client_status" */
export type Directory_Client_Status_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Directory_Client_Status_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "directory.client_status". All fields are combined with a logical 'AND'. */
export type Directory_Client_Status_Bool_Exp = {
  _and?: InputMaybe<Array<Directory_Client_Status_Bool_Exp>>;
  _not?: InputMaybe<Directory_Client_Status_Bool_Exp>;
  _or?: InputMaybe<Array<Directory_Client_Status_Bool_Exp>>;
  color?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "directory.client_status" */
export enum Directory_Client_Status_Constraint {
  /** unique or primary key constraint on columns "id" */
  DirectoryClientStatusPkey = 'directory_client_status_pkey'
}

/** input type for inserting data into table "directory.client_status" */
export type Directory_Client_Status_Insert_Input = {
  color?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Directory_Client_Status_Max_Fields = {
  __typename?: 'directory_client_status_max_fields';
  color?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Directory_Client_Status_Min_Fields = {
  __typename?: 'directory_client_status_min_fields';
  color?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "directory.client_status" */
export type Directory_Client_Status_Mutation_Response = {
  __typename?: 'directory_client_status_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Directory_Client_Status>;
};

/** input type for inserting object relation for remote table "directory.client_status" */
export type Directory_Client_Status_Obj_Rel_Insert_Input = {
  data: Directory_Client_Status_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Directory_Client_Status_On_Conflict>;
};

/** on_conflict condition type for table "directory.client_status" */
export type Directory_Client_Status_On_Conflict = {
  constraint: Directory_Client_Status_Constraint;
  update_columns?: Array<Directory_Client_Status_Update_Column>;
  where?: InputMaybe<Directory_Client_Status_Bool_Exp>;
};

/** Ordering options when selecting data from "directory.client_status". */
export type Directory_Client_Status_Order_By = {
  color?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
};

/** primary key columns input for table: directory.client_status */
export type Directory_Client_Status_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "directory.client_status" */
export enum Directory_Client_Status_Select_Column {
  /** column name */
  Color = 'color',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "directory.client_status" */
export type Directory_Client_Status_Set_Input = {
  color?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "directory_client_status" */
export type Directory_Client_Status_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Directory_Client_Status_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Directory_Client_Status_Stream_Cursor_Value_Input = {
  color?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "directory.client_status" */
export enum Directory_Client_Status_Update_Column {
  /** column name */
  Color = 'color',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

export type Directory_Client_Status_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Directory_Client_Status_Set_Input>;
  /** filter the rows which have to be updated */
  where: Directory_Client_Status_Bool_Exp;
};

/** Карточка сотрудника */
export type Employee = {
  __typename?: 'employee';
  created_at: Scalars['timestamptz']['output'];
  fullName?: Maybe<Scalars['String']['output']>;
  id: Scalars['uuid']['output'];
  /** An array relationship */
  responsible_clients: Array<Client>;
  /** An aggregate relationship */
  responsible_clients_aggregate: Client_Aggregate;
  updated_at: Scalars['timestamptz']['output'];
};


/** Карточка сотрудника */
export type EmployeeResponsible_ClientsArgs = {
  distinct_on?: InputMaybe<Array<Client_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Client_Order_By>>;
  where?: InputMaybe<Client_Bool_Exp>;
};


/** Карточка сотрудника */
export type EmployeeResponsible_Clients_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Client_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Client_Order_By>>;
  where?: InputMaybe<Client_Bool_Exp>;
};

/** aggregated selection of "employee" */
export type Employee_Aggregate = {
  __typename?: 'employee_aggregate';
  aggregate?: Maybe<Employee_Aggregate_Fields>;
  nodes: Array<Employee>;
};

/** aggregate fields of "employee" */
export type Employee_Aggregate_Fields = {
  __typename?: 'employee_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Employee_Max_Fields>;
  min?: Maybe<Employee_Min_Fields>;
};


/** aggregate fields of "employee" */
export type Employee_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Employee_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "employee". All fields are combined with a logical 'AND'. */
export type Employee_Bool_Exp = {
  _and?: InputMaybe<Array<Employee_Bool_Exp>>;
  _not?: InputMaybe<Employee_Bool_Exp>;
  _or?: InputMaybe<Array<Employee_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  fullName?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  responsible_clients?: InputMaybe<Client_Bool_Exp>;
  responsible_clients_aggregate?: InputMaybe<Client_Aggregate_Bool_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "employee" */
export enum Employee_Constraint {
  /** unique or primary key constraint on columns "id" */
  EmployeePkey = 'employee_pkey'
}

/** input type for inserting data into table "employee" */
export type Employee_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  fullName?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  responsible_clients?: InputMaybe<Client_Arr_Rel_Insert_Input>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type Employee_Max_Fields = {
  __typename?: 'employee_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  fullName?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** aggregate min on columns */
export type Employee_Min_Fields = {
  __typename?: 'employee_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  fullName?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** response of any mutation on the table "employee" */
export type Employee_Mutation_Response = {
  __typename?: 'employee_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Employee>;
};

/** input type for inserting object relation for remote table "employee" */
export type Employee_Obj_Rel_Insert_Input = {
  data: Employee_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Employee_On_Conflict>;
};

/** Таблица занятости */
export type Employee_Occupancy = {
  __typename?: 'employee_occupancy';
  date: Scalars['date']['output'];
  deal_id: Scalars['bigint']['output'];
  employee_id: Scalars['uuid']['output'];
  id: Scalars['uuid']['output'];
};

/** aggregated selection of "employee_occupancy" */
export type Employee_Occupancy_Aggregate = {
  __typename?: 'employee_occupancy_aggregate';
  aggregate?: Maybe<Employee_Occupancy_Aggregate_Fields>;
  nodes: Array<Employee_Occupancy>;
};

/** aggregate fields of "employee_occupancy" */
export type Employee_Occupancy_Aggregate_Fields = {
  __typename?: 'employee_occupancy_aggregate_fields';
  avg?: Maybe<Employee_Occupancy_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Employee_Occupancy_Max_Fields>;
  min?: Maybe<Employee_Occupancy_Min_Fields>;
  stddev?: Maybe<Employee_Occupancy_Stddev_Fields>;
  stddev_pop?: Maybe<Employee_Occupancy_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Employee_Occupancy_Stddev_Samp_Fields>;
  sum?: Maybe<Employee_Occupancy_Sum_Fields>;
  var_pop?: Maybe<Employee_Occupancy_Var_Pop_Fields>;
  var_samp?: Maybe<Employee_Occupancy_Var_Samp_Fields>;
  variance?: Maybe<Employee_Occupancy_Variance_Fields>;
};


/** aggregate fields of "employee_occupancy" */
export type Employee_Occupancy_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Employee_Occupancy_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Employee_Occupancy_Avg_Fields = {
  __typename?: 'employee_occupancy_avg_fields';
  deal_id?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "employee_occupancy". All fields are combined with a logical 'AND'. */
export type Employee_Occupancy_Bool_Exp = {
  _and?: InputMaybe<Array<Employee_Occupancy_Bool_Exp>>;
  _not?: InputMaybe<Employee_Occupancy_Bool_Exp>;
  _or?: InputMaybe<Array<Employee_Occupancy_Bool_Exp>>;
  date?: InputMaybe<Date_Comparison_Exp>;
  deal_id?: InputMaybe<Bigint_Comparison_Exp>;
  employee_id?: InputMaybe<Uuid_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "employee_occupancy" */
export enum Employee_Occupancy_Constraint {
  /** unique or primary key constraint on columns "id" */
  EmployeeOccupancyPkey = 'employee_occupancy_pkey'
}

/** input type for incrementing numeric columns in table "employee_occupancy" */
export type Employee_Occupancy_Inc_Input = {
  deal_id?: InputMaybe<Scalars['bigint']['input']>;
};

/** input type for inserting data into table "employee_occupancy" */
export type Employee_Occupancy_Insert_Input = {
  date?: InputMaybe<Scalars['date']['input']>;
  deal_id?: InputMaybe<Scalars['bigint']['input']>;
  employee_id?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type Employee_Occupancy_Max_Fields = {
  __typename?: 'employee_occupancy_max_fields';
  date?: Maybe<Scalars['date']['output']>;
  deal_id?: Maybe<Scalars['bigint']['output']>;
  employee_id?: Maybe<Scalars['uuid']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
};

/** aggregate min on columns */
export type Employee_Occupancy_Min_Fields = {
  __typename?: 'employee_occupancy_min_fields';
  date?: Maybe<Scalars['date']['output']>;
  deal_id?: Maybe<Scalars['bigint']['output']>;
  employee_id?: Maybe<Scalars['uuid']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
};

/** response of any mutation on the table "employee_occupancy" */
export type Employee_Occupancy_Mutation_Response = {
  __typename?: 'employee_occupancy_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Employee_Occupancy>;
};

/** on_conflict condition type for table "employee_occupancy" */
export type Employee_Occupancy_On_Conflict = {
  constraint: Employee_Occupancy_Constraint;
  update_columns?: Array<Employee_Occupancy_Update_Column>;
  where?: InputMaybe<Employee_Occupancy_Bool_Exp>;
};

/** Ordering options when selecting data from "employee_occupancy". */
export type Employee_Occupancy_Order_By = {
  date?: InputMaybe<Order_By>;
  deal_id?: InputMaybe<Order_By>;
  employee_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: employee_occupancy */
export type Employee_Occupancy_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "employee_occupancy" */
export enum Employee_Occupancy_Select_Column {
  /** column name */
  Date = 'date',
  /** column name */
  DealId = 'deal_id',
  /** column name */
  EmployeeId = 'employee_id',
  /** column name */
  Id = 'id'
}

/** input type for updating data in table "employee_occupancy" */
export type Employee_Occupancy_Set_Input = {
  date?: InputMaybe<Scalars['date']['input']>;
  deal_id?: InputMaybe<Scalars['bigint']['input']>;
  employee_id?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate stddev on columns */
export type Employee_Occupancy_Stddev_Fields = {
  __typename?: 'employee_occupancy_stddev_fields';
  deal_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Employee_Occupancy_Stddev_Pop_Fields = {
  __typename?: 'employee_occupancy_stddev_pop_fields';
  deal_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Employee_Occupancy_Stddev_Samp_Fields = {
  __typename?: 'employee_occupancy_stddev_samp_fields';
  deal_id?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "employee_occupancy" */
export type Employee_Occupancy_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Employee_Occupancy_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Employee_Occupancy_Stream_Cursor_Value_Input = {
  date?: InputMaybe<Scalars['date']['input']>;
  deal_id?: InputMaybe<Scalars['bigint']['input']>;
  employee_id?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate sum on columns */
export type Employee_Occupancy_Sum_Fields = {
  __typename?: 'employee_occupancy_sum_fields';
  deal_id?: Maybe<Scalars['bigint']['output']>;
};

/** update columns of table "employee_occupancy" */
export enum Employee_Occupancy_Update_Column {
  /** column name */
  Date = 'date',
  /** column name */
  DealId = 'deal_id',
  /** column name */
  EmployeeId = 'employee_id',
  /** column name */
  Id = 'id'
}

export type Employee_Occupancy_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Employee_Occupancy_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Employee_Occupancy_Set_Input>;
  /** filter the rows which have to be updated */
  where: Employee_Occupancy_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Employee_Occupancy_Var_Pop_Fields = {
  __typename?: 'employee_occupancy_var_pop_fields';
  deal_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Employee_Occupancy_Var_Samp_Fields = {
  __typename?: 'employee_occupancy_var_samp_fields';
  deal_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Employee_Occupancy_Variance_Fields = {
  __typename?: 'employee_occupancy_variance_fields';
  deal_id?: Maybe<Scalars['Float']['output']>;
};

/** on_conflict condition type for table "employee" */
export type Employee_On_Conflict = {
  constraint: Employee_Constraint;
  update_columns?: Array<Employee_Update_Column>;
  where?: InputMaybe<Employee_Bool_Exp>;
};

/** Ordering options when selecting data from "employee". */
export type Employee_Order_By = {
  created_at?: InputMaybe<Order_By>;
  fullName?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  responsible_clients_aggregate?: InputMaybe<Client_Aggregate_Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: employee */
export type Employee_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "employee" */
export enum Employee_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  FullName = 'fullName',
  /** column name */
  Id = 'id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "employee" */
export type Employee_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  fullName?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** Streaming cursor of the table "employee" */
export type Employee_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Employee_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Employee_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  fullName?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** update columns of table "employee" */
export enum Employee_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  FullName = 'fullName',
  /** column name */
  Id = 'id',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Employee_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Employee_Set_Input>;
  /** filter the rows which have to be updated */
  where: Employee_Bool_Exp;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "client" */
  delete_client?: Maybe<Client_Mutation_Response>;
  /** delete single row from the table: "client" */
  delete_client_by_pk?: Maybe<Client>;
  /** delete data from the table: "client_contact" */
  delete_client_contact?: Maybe<Client_Contact_Mutation_Response>;
  /** delete single row from the table: "client_contact" */
  delete_client_contact_by_pk?: Maybe<Client_Contact>;
  /** delete data from the table: "client_directory_client_industry" */
  delete_client_directory_client_industry?: Maybe<Client_Directory_Client_Industry_Mutation_Response>;
  /** delete single row from the table: "client_directory_client_industry" */
  delete_client_directory_client_industry_by_pk?: Maybe<Client_Directory_Client_Industry>;
  /** delete data from the table: "client_object" */
  delete_client_object?: Maybe<Client_Object_Mutation_Response>;
  /** delete single row from the table: "client_object" */
  delete_client_object_by_pk?: Maybe<Client_Object>;
  /** delete data from the table: "client_status" */
  delete_client_status?: Maybe<Client_Status_Mutation_Response>;
  /** delete single row from the table: "client_status" */
  delete_client_status_by_pk?: Maybe<Client_Status>;
  /** delete data from the table: "directory.client_industry" */
  delete_directory_client_industry?: Maybe<Directory_Client_Industry_Mutation_Response>;
  /** delete single row from the table: "directory.client_industry" */
  delete_directory_client_industry_by_pk?: Maybe<Directory_Client_Industry>;
  /** delete data from the table: "directory.client_status" */
  delete_directory_client_status?: Maybe<Directory_Client_Status_Mutation_Response>;
  /** delete single row from the table: "directory.client_status" */
  delete_directory_client_status_by_pk?: Maybe<Directory_Client_Status>;
  /** delete data from the table: "employee" */
  delete_employee?: Maybe<Employee_Mutation_Response>;
  /** delete single row from the table: "employee" */
  delete_employee_by_pk?: Maybe<Employee>;
  /** delete data from the table: "employee_occupancy" */
  delete_employee_occupancy?: Maybe<Employee_Occupancy_Mutation_Response>;
  /** delete single row from the table: "employee_occupancy" */
  delete_employee_occupancy_by_pk?: Maybe<Employee_Occupancy>;
  /** insert data into the table: "client" */
  insert_client?: Maybe<Client_Mutation_Response>;
  /** insert data into the table: "client_contact" */
  insert_client_contact?: Maybe<Client_Contact_Mutation_Response>;
  /** insert a single row into the table: "client_contact" */
  insert_client_contact_one?: Maybe<Client_Contact>;
  /** insert data into the table: "client_directory_client_industry" */
  insert_client_directory_client_industry?: Maybe<Client_Directory_Client_Industry_Mutation_Response>;
  /** insert a single row into the table: "client_directory_client_industry" */
  insert_client_directory_client_industry_one?: Maybe<Client_Directory_Client_Industry>;
  /** insert data into the table: "client_object" */
  insert_client_object?: Maybe<Client_Object_Mutation_Response>;
  /** insert a single row into the table: "client_object" */
  insert_client_object_one?: Maybe<Client_Object>;
  /** insert a single row into the table: "client" */
  insert_client_one?: Maybe<Client>;
  /** insert data into the table: "client_status" */
  insert_client_status?: Maybe<Client_Status_Mutation_Response>;
  /** insert a single row into the table: "client_status" */
  insert_client_status_one?: Maybe<Client_Status>;
  /** insert data into the table: "directory.client_industry" */
  insert_directory_client_industry?: Maybe<Directory_Client_Industry_Mutation_Response>;
  /** insert a single row into the table: "directory.client_industry" */
  insert_directory_client_industry_one?: Maybe<Directory_Client_Industry>;
  /** insert data into the table: "directory.client_status" */
  insert_directory_client_status?: Maybe<Directory_Client_Status_Mutation_Response>;
  /** insert a single row into the table: "directory.client_status" */
  insert_directory_client_status_one?: Maybe<Directory_Client_Status>;
  /** insert data into the table: "employee" */
  insert_employee?: Maybe<Employee_Mutation_Response>;
  /** insert data into the table: "employee_occupancy" */
  insert_employee_occupancy?: Maybe<Employee_Occupancy_Mutation_Response>;
  /** insert a single row into the table: "employee_occupancy" */
  insert_employee_occupancy_one?: Maybe<Employee_Occupancy>;
  /** insert a single row into the table: "employee" */
  insert_employee_one?: Maybe<Employee>;
  /** update data of the table: "client" */
  update_client?: Maybe<Client_Mutation_Response>;
  /** update single row of the table: "client" */
  update_client_by_pk?: Maybe<Client>;
  /** update data of the table: "client_contact" */
  update_client_contact?: Maybe<Client_Contact_Mutation_Response>;
  /** update single row of the table: "client_contact" */
  update_client_contact_by_pk?: Maybe<Client_Contact>;
  /** update multiples rows of table: "client_contact" */
  update_client_contact_many?: Maybe<Array<Maybe<Client_Contact_Mutation_Response>>>;
  /** update data of the table: "client_directory_client_industry" */
  update_client_directory_client_industry?: Maybe<Client_Directory_Client_Industry_Mutation_Response>;
  /** update single row of the table: "client_directory_client_industry" */
  update_client_directory_client_industry_by_pk?: Maybe<Client_Directory_Client_Industry>;
  /** update multiples rows of table: "client_directory_client_industry" */
  update_client_directory_client_industry_many?: Maybe<Array<Maybe<Client_Directory_Client_Industry_Mutation_Response>>>;
  /** update multiples rows of table: "client" */
  update_client_many?: Maybe<Array<Maybe<Client_Mutation_Response>>>;
  /** update data of the table: "client_object" */
  update_client_object?: Maybe<Client_Object_Mutation_Response>;
  /** update single row of the table: "client_object" */
  update_client_object_by_pk?: Maybe<Client_Object>;
  /** update multiples rows of table: "client_object" */
  update_client_object_many?: Maybe<Array<Maybe<Client_Object_Mutation_Response>>>;
  /** update data of the table: "client_status" */
  update_client_status?: Maybe<Client_Status_Mutation_Response>;
  /** update single row of the table: "client_status" */
  update_client_status_by_pk?: Maybe<Client_Status>;
  /** update multiples rows of table: "client_status" */
  update_client_status_many?: Maybe<Array<Maybe<Client_Status_Mutation_Response>>>;
  /** update data of the table: "directory.client_industry" */
  update_directory_client_industry?: Maybe<Directory_Client_Industry_Mutation_Response>;
  /** update single row of the table: "directory.client_industry" */
  update_directory_client_industry_by_pk?: Maybe<Directory_Client_Industry>;
  /** update multiples rows of table: "directory.client_industry" */
  update_directory_client_industry_many?: Maybe<Array<Maybe<Directory_Client_Industry_Mutation_Response>>>;
  /** update data of the table: "directory.client_status" */
  update_directory_client_status?: Maybe<Directory_Client_Status_Mutation_Response>;
  /** update single row of the table: "directory.client_status" */
  update_directory_client_status_by_pk?: Maybe<Directory_Client_Status>;
  /** update multiples rows of table: "directory.client_status" */
  update_directory_client_status_many?: Maybe<Array<Maybe<Directory_Client_Status_Mutation_Response>>>;
  /** update data of the table: "employee" */
  update_employee?: Maybe<Employee_Mutation_Response>;
  /** update single row of the table: "employee" */
  update_employee_by_pk?: Maybe<Employee>;
  /** update multiples rows of table: "employee" */
  update_employee_many?: Maybe<Array<Maybe<Employee_Mutation_Response>>>;
  /** update data of the table: "employee_occupancy" */
  update_employee_occupancy?: Maybe<Employee_Occupancy_Mutation_Response>;
  /** update single row of the table: "employee_occupancy" */
  update_employee_occupancy_by_pk?: Maybe<Employee_Occupancy>;
  /** update multiples rows of table: "employee_occupancy" */
  update_employee_occupancy_many?: Maybe<Array<Maybe<Employee_Occupancy_Mutation_Response>>>;
};


/** mutation root */
export type Mutation_RootDelete_ClientArgs = {
  where: Client_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Client_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Client_ContactArgs = {
  where: Client_Contact_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Client_Contact_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Client_Directory_Client_IndustryArgs = {
  where: Client_Directory_Client_Industry_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Client_Directory_Client_Industry_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Client_ObjectArgs = {
  where: Client_Object_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Client_Object_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Client_StatusArgs = {
  where: Client_Status_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Client_Status_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Directory_Client_IndustryArgs = {
  where: Directory_Client_Industry_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Directory_Client_Industry_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Directory_Client_StatusArgs = {
  where: Directory_Client_Status_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Directory_Client_Status_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_EmployeeArgs = {
  where: Employee_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Employee_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Employee_OccupancyArgs = {
  where: Employee_Occupancy_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Employee_Occupancy_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootInsert_ClientArgs = {
  objects: Array<Client_Insert_Input>;
  on_conflict?: InputMaybe<Client_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Client_ContactArgs = {
  objects: Array<Client_Contact_Insert_Input>;
  on_conflict?: InputMaybe<Client_Contact_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Client_Contact_OneArgs = {
  object: Client_Contact_Insert_Input;
  on_conflict?: InputMaybe<Client_Contact_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Client_Directory_Client_IndustryArgs = {
  objects: Array<Client_Directory_Client_Industry_Insert_Input>;
  on_conflict?: InputMaybe<Client_Directory_Client_Industry_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Client_Directory_Client_Industry_OneArgs = {
  object: Client_Directory_Client_Industry_Insert_Input;
  on_conflict?: InputMaybe<Client_Directory_Client_Industry_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Client_ObjectArgs = {
  objects: Array<Client_Object_Insert_Input>;
  on_conflict?: InputMaybe<Client_Object_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Client_Object_OneArgs = {
  object: Client_Object_Insert_Input;
  on_conflict?: InputMaybe<Client_Object_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Client_OneArgs = {
  object: Client_Insert_Input;
  on_conflict?: InputMaybe<Client_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Client_StatusArgs = {
  objects: Array<Client_Status_Insert_Input>;
  on_conflict?: InputMaybe<Client_Status_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Client_Status_OneArgs = {
  object: Client_Status_Insert_Input;
  on_conflict?: InputMaybe<Client_Status_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Directory_Client_IndustryArgs = {
  objects: Array<Directory_Client_Industry_Insert_Input>;
  on_conflict?: InputMaybe<Directory_Client_Industry_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Directory_Client_Industry_OneArgs = {
  object: Directory_Client_Industry_Insert_Input;
  on_conflict?: InputMaybe<Directory_Client_Industry_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Directory_Client_StatusArgs = {
  objects: Array<Directory_Client_Status_Insert_Input>;
  on_conflict?: InputMaybe<Directory_Client_Status_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Directory_Client_Status_OneArgs = {
  object: Directory_Client_Status_Insert_Input;
  on_conflict?: InputMaybe<Directory_Client_Status_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_EmployeeArgs = {
  objects: Array<Employee_Insert_Input>;
  on_conflict?: InputMaybe<Employee_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Employee_OccupancyArgs = {
  objects: Array<Employee_Occupancy_Insert_Input>;
  on_conflict?: InputMaybe<Employee_Occupancy_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Employee_Occupancy_OneArgs = {
  object: Employee_Occupancy_Insert_Input;
  on_conflict?: InputMaybe<Employee_Occupancy_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Employee_OneArgs = {
  object: Employee_Insert_Input;
  on_conflict?: InputMaybe<Employee_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_ClientArgs = {
  _set?: InputMaybe<Client_Set_Input>;
  where: Client_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Client_By_PkArgs = {
  _set?: InputMaybe<Client_Set_Input>;
  pk_columns: Client_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Client_ContactArgs = {
  _set?: InputMaybe<Client_Contact_Set_Input>;
  where: Client_Contact_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Client_Contact_By_PkArgs = {
  _set?: InputMaybe<Client_Contact_Set_Input>;
  pk_columns: Client_Contact_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Client_Contact_ManyArgs = {
  updates: Array<Client_Contact_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Client_Directory_Client_IndustryArgs = {
  _set?: InputMaybe<Client_Directory_Client_Industry_Set_Input>;
  where: Client_Directory_Client_Industry_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Client_Directory_Client_Industry_By_PkArgs = {
  _set?: InputMaybe<Client_Directory_Client_Industry_Set_Input>;
  pk_columns: Client_Directory_Client_Industry_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Client_Directory_Client_Industry_ManyArgs = {
  updates: Array<Client_Directory_Client_Industry_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Client_ManyArgs = {
  updates: Array<Client_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Client_ObjectArgs = {
  _set?: InputMaybe<Client_Object_Set_Input>;
  where: Client_Object_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Client_Object_By_PkArgs = {
  _set?: InputMaybe<Client_Object_Set_Input>;
  pk_columns: Client_Object_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Client_Object_ManyArgs = {
  updates: Array<Client_Object_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Client_StatusArgs = {
  _set?: InputMaybe<Client_Status_Set_Input>;
  where: Client_Status_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Client_Status_By_PkArgs = {
  _set?: InputMaybe<Client_Status_Set_Input>;
  pk_columns: Client_Status_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Client_Status_ManyArgs = {
  updates: Array<Client_Status_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Directory_Client_IndustryArgs = {
  _set?: InputMaybe<Directory_Client_Industry_Set_Input>;
  where: Directory_Client_Industry_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Directory_Client_Industry_By_PkArgs = {
  _set?: InputMaybe<Directory_Client_Industry_Set_Input>;
  pk_columns: Directory_Client_Industry_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Directory_Client_Industry_ManyArgs = {
  updates: Array<Directory_Client_Industry_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Directory_Client_StatusArgs = {
  _set?: InputMaybe<Directory_Client_Status_Set_Input>;
  where: Directory_Client_Status_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Directory_Client_Status_By_PkArgs = {
  _set?: InputMaybe<Directory_Client_Status_Set_Input>;
  pk_columns: Directory_Client_Status_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Directory_Client_Status_ManyArgs = {
  updates: Array<Directory_Client_Status_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_EmployeeArgs = {
  _set?: InputMaybe<Employee_Set_Input>;
  where: Employee_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Employee_By_PkArgs = {
  _set?: InputMaybe<Employee_Set_Input>;
  pk_columns: Employee_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Employee_ManyArgs = {
  updates: Array<Employee_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Employee_OccupancyArgs = {
  _inc?: InputMaybe<Employee_Occupancy_Inc_Input>;
  _set?: InputMaybe<Employee_Occupancy_Set_Input>;
  where: Employee_Occupancy_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Employee_Occupancy_By_PkArgs = {
  _inc?: InputMaybe<Employee_Occupancy_Inc_Input>;
  _set?: InputMaybe<Employee_Occupancy_Set_Input>;
  pk_columns: Employee_Occupancy_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Employee_Occupancy_ManyArgs = {
  updates: Array<Employee_Occupancy_Updates>;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "client" */
  client: Array<Client>;
  /** fetch aggregated fields from the table: "client" */
  client_aggregate: Client_Aggregate;
  /** fetch data from the table: "client" using primary key columns */
  client_by_pk?: Maybe<Client>;
  /** fetch data from the table: "client_contact" */
  client_contact: Array<Client_Contact>;
  /** fetch aggregated fields from the table: "client_contact" */
  client_contact_aggregate: Client_Contact_Aggregate;
  /** fetch data from the table: "client_contact" using primary key columns */
  client_contact_by_pk?: Maybe<Client_Contact>;
  /** fetch data from the table: "client_directory_client_industry" */
  client_directory_client_industry: Array<Client_Directory_Client_Industry>;
  /** fetch aggregated fields from the table: "client_directory_client_industry" */
  client_directory_client_industry_aggregate: Client_Directory_Client_Industry_Aggregate;
  /** fetch data from the table: "client_directory_client_industry" using primary key columns */
  client_directory_client_industry_by_pk?: Maybe<Client_Directory_Client_Industry>;
  /** fetch data from the table: "client_object" */
  client_object: Array<Client_Object>;
  /** fetch aggregated fields from the table: "client_object" */
  client_object_aggregate: Client_Object_Aggregate;
  /** fetch data from the table: "client_object" using primary key columns */
  client_object_by_pk?: Maybe<Client_Object>;
  /** fetch data from the table: "client_status" */
  client_status: Array<Client_Status>;
  /** fetch aggregated fields from the table: "client_status" */
  client_status_aggregate: Client_Status_Aggregate;
  /** fetch data from the table: "client_status" using primary key columns */
  client_status_by_pk?: Maybe<Client_Status>;
  /** fetch data from the table: "directory.client_industry" */
  directory_client_industry: Array<Directory_Client_Industry>;
  /** fetch aggregated fields from the table: "directory.client_industry" */
  directory_client_industry_aggregate: Directory_Client_Industry_Aggregate;
  /** fetch data from the table: "directory.client_industry" using primary key columns */
  directory_client_industry_by_pk?: Maybe<Directory_Client_Industry>;
  /** fetch data from the table: "directory.client_status" */
  directory_client_status: Array<Directory_Client_Status>;
  /** fetch aggregated fields from the table: "directory.client_status" */
  directory_client_status_aggregate: Directory_Client_Status_Aggregate;
  /** fetch data from the table: "directory.client_status" using primary key columns */
  directory_client_status_by_pk?: Maybe<Directory_Client_Status>;
  /** fetch data from the table: "employee" */
  employee: Array<Employee>;
  /** fetch aggregated fields from the table: "employee" */
  employee_aggregate: Employee_Aggregate;
  /** fetch data from the table: "employee" using primary key columns */
  employee_by_pk?: Maybe<Employee>;
  /** fetch data from the table: "employee_occupancy" */
  employee_occupancy: Array<Employee_Occupancy>;
  /** fetch aggregated fields from the table: "employee_occupancy" */
  employee_occupancy_aggregate: Employee_Occupancy_Aggregate;
  /** fetch data from the table: "employee_occupancy" using primary key columns */
  employee_occupancy_by_pk?: Maybe<Employee_Occupancy>;
};


export type Query_RootClientArgs = {
  distinct_on?: InputMaybe<Array<Client_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Client_Order_By>>;
  where?: InputMaybe<Client_Bool_Exp>;
};


export type Query_RootClient_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Client_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Client_Order_By>>;
  where?: InputMaybe<Client_Bool_Exp>;
};


export type Query_RootClient_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootClient_ContactArgs = {
  distinct_on?: InputMaybe<Array<Client_Contact_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Client_Contact_Order_By>>;
  where?: InputMaybe<Client_Contact_Bool_Exp>;
};


export type Query_RootClient_Contact_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Client_Contact_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Client_Contact_Order_By>>;
  where?: InputMaybe<Client_Contact_Bool_Exp>;
};


export type Query_RootClient_Contact_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootClient_Directory_Client_IndustryArgs = {
  distinct_on?: InputMaybe<Array<Client_Directory_Client_Industry_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Client_Directory_Client_Industry_Order_By>>;
  where?: InputMaybe<Client_Directory_Client_Industry_Bool_Exp>;
};


export type Query_RootClient_Directory_Client_Industry_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Client_Directory_Client_Industry_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Client_Directory_Client_Industry_Order_By>>;
  where?: InputMaybe<Client_Directory_Client_Industry_Bool_Exp>;
};


export type Query_RootClient_Directory_Client_Industry_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootClient_ObjectArgs = {
  distinct_on?: InputMaybe<Array<Client_Object_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Client_Object_Order_By>>;
  where?: InputMaybe<Client_Object_Bool_Exp>;
};


export type Query_RootClient_Object_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Client_Object_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Client_Object_Order_By>>;
  where?: InputMaybe<Client_Object_Bool_Exp>;
};


export type Query_RootClient_Object_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootClient_StatusArgs = {
  distinct_on?: InputMaybe<Array<Client_Status_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Client_Status_Order_By>>;
  where?: InputMaybe<Client_Status_Bool_Exp>;
};


export type Query_RootClient_Status_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Client_Status_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Client_Status_Order_By>>;
  where?: InputMaybe<Client_Status_Bool_Exp>;
};


export type Query_RootClient_Status_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootDirectory_Client_IndustryArgs = {
  distinct_on?: InputMaybe<Array<Directory_Client_Industry_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Directory_Client_Industry_Order_By>>;
  where?: InputMaybe<Directory_Client_Industry_Bool_Exp>;
};


export type Query_RootDirectory_Client_Industry_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Directory_Client_Industry_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Directory_Client_Industry_Order_By>>;
  where?: InputMaybe<Directory_Client_Industry_Bool_Exp>;
};


export type Query_RootDirectory_Client_Industry_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootDirectory_Client_StatusArgs = {
  distinct_on?: InputMaybe<Array<Directory_Client_Status_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Directory_Client_Status_Order_By>>;
  where?: InputMaybe<Directory_Client_Status_Bool_Exp>;
};


export type Query_RootDirectory_Client_Status_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Directory_Client_Status_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Directory_Client_Status_Order_By>>;
  where?: InputMaybe<Directory_Client_Status_Bool_Exp>;
};


export type Query_RootDirectory_Client_Status_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootEmployeeArgs = {
  distinct_on?: InputMaybe<Array<Employee_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Employee_Order_By>>;
  where?: InputMaybe<Employee_Bool_Exp>;
};


export type Query_RootEmployee_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Employee_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Employee_Order_By>>;
  where?: InputMaybe<Employee_Bool_Exp>;
};


export type Query_RootEmployee_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootEmployee_OccupancyArgs = {
  distinct_on?: InputMaybe<Array<Employee_Occupancy_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Employee_Occupancy_Order_By>>;
  where?: InputMaybe<Employee_Occupancy_Bool_Exp>;
};


export type Query_RootEmployee_Occupancy_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Employee_Occupancy_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Employee_Occupancy_Order_By>>;
  where?: InputMaybe<Employee_Occupancy_Bool_Exp>;
};


export type Query_RootEmployee_Occupancy_By_PkArgs = {
  id: Scalars['uuid']['input'];
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "client" */
  client: Array<Client>;
  /** fetch aggregated fields from the table: "client" */
  client_aggregate: Client_Aggregate;
  /** fetch data from the table: "client" using primary key columns */
  client_by_pk?: Maybe<Client>;
  /** fetch data from the table: "client_contact" */
  client_contact: Array<Client_Contact>;
  /** fetch aggregated fields from the table: "client_contact" */
  client_contact_aggregate: Client_Contact_Aggregate;
  /** fetch data from the table: "client_contact" using primary key columns */
  client_contact_by_pk?: Maybe<Client_Contact>;
  /** fetch data from the table in a streaming manner: "client_contact" */
  client_contact_stream: Array<Client_Contact>;
  /** fetch data from the table: "client_directory_client_industry" */
  client_directory_client_industry: Array<Client_Directory_Client_Industry>;
  /** fetch aggregated fields from the table: "client_directory_client_industry" */
  client_directory_client_industry_aggregate: Client_Directory_Client_Industry_Aggregate;
  /** fetch data from the table: "client_directory_client_industry" using primary key columns */
  client_directory_client_industry_by_pk?: Maybe<Client_Directory_Client_Industry>;
  /** fetch data from the table in a streaming manner: "client_directory_client_industry" */
  client_directory_client_industry_stream: Array<Client_Directory_Client_Industry>;
  /** fetch data from the table: "client_object" */
  client_object: Array<Client_Object>;
  /** fetch aggregated fields from the table: "client_object" */
  client_object_aggregate: Client_Object_Aggregate;
  /** fetch data from the table: "client_object" using primary key columns */
  client_object_by_pk?: Maybe<Client_Object>;
  /** fetch data from the table in a streaming manner: "client_object" */
  client_object_stream: Array<Client_Object>;
  /** fetch data from the table: "client_status" */
  client_status: Array<Client_Status>;
  /** fetch aggregated fields from the table: "client_status" */
  client_status_aggregate: Client_Status_Aggregate;
  /** fetch data from the table: "client_status" using primary key columns */
  client_status_by_pk?: Maybe<Client_Status>;
  /** fetch data from the table in a streaming manner: "client_status" */
  client_status_stream: Array<Client_Status>;
  /** fetch data from the table in a streaming manner: "client" */
  client_stream: Array<Client>;
  /** fetch data from the table: "directory.client_industry" */
  directory_client_industry: Array<Directory_Client_Industry>;
  /** fetch aggregated fields from the table: "directory.client_industry" */
  directory_client_industry_aggregate: Directory_Client_Industry_Aggregate;
  /** fetch data from the table: "directory.client_industry" using primary key columns */
  directory_client_industry_by_pk?: Maybe<Directory_Client_Industry>;
  /** fetch data from the table in a streaming manner: "directory.client_industry" */
  directory_client_industry_stream: Array<Directory_Client_Industry>;
  /** fetch data from the table: "directory.client_status" */
  directory_client_status: Array<Directory_Client_Status>;
  /** fetch aggregated fields from the table: "directory.client_status" */
  directory_client_status_aggregate: Directory_Client_Status_Aggregate;
  /** fetch data from the table: "directory.client_status" using primary key columns */
  directory_client_status_by_pk?: Maybe<Directory_Client_Status>;
  /** fetch data from the table in a streaming manner: "directory.client_status" */
  directory_client_status_stream: Array<Directory_Client_Status>;
  /** fetch data from the table: "employee" */
  employee: Array<Employee>;
  /** fetch aggregated fields from the table: "employee" */
  employee_aggregate: Employee_Aggregate;
  /** fetch data from the table: "employee" using primary key columns */
  employee_by_pk?: Maybe<Employee>;
  /** fetch data from the table: "employee_occupancy" */
  employee_occupancy: Array<Employee_Occupancy>;
  /** fetch aggregated fields from the table: "employee_occupancy" */
  employee_occupancy_aggregate: Employee_Occupancy_Aggregate;
  /** fetch data from the table: "employee_occupancy" using primary key columns */
  employee_occupancy_by_pk?: Maybe<Employee_Occupancy>;
  /** fetch data from the table in a streaming manner: "employee_occupancy" */
  employee_occupancy_stream: Array<Employee_Occupancy>;
  /** fetch data from the table in a streaming manner: "employee" */
  employee_stream: Array<Employee>;
};


export type Subscription_RootClientArgs = {
  distinct_on?: InputMaybe<Array<Client_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Client_Order_By>>;
  where?: InputMaybe<Client_Bool_Exp>;
};


export type Subscription_RootClient_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Client_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Client_Order_By>>;
  where?: InputMaybe<Client_Bool_Exp>;
};


export type Subscription_RootClient_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootClient_ContactArgs = {
  distinct_on?: InputMaybe<Array<Client_Contact_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Client_Contact_Order_By>>;
  where?: InputMaybe<Client_Contact_Bool_Exp>;
};


export type Subscription_RootClient_Contact_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Client_Contact_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Client_Contact_Order_By>>;
  where?: InputMaybe<Client_Contact_Bool_Exp>;
};


export type Subscription_RootClient_Contact_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootClient_Contact_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Client_Contact_Stream_Cursor_Input>>;
  where?: InputMaybe<Client_Contact_Bool_Exp>;
};


export type Subscription_RootClient_Directory_Client_IndustryArgs = {
  distinct_on?: InputMaybe<Array<Client_Directory_Client_Industry_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Client_Directory_Client_Industry_Order_By>>;
  where?: InputMaybe<Client_Directory_Client_Industry_Bool_Exp>;
};


export type Subscription_RootClient_Directory_Client_Industry_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Client_Directory_Client_Industry_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Client_Directory_Client_Industry_Order_By>>;
  where?: InputMaybe<Client_Directory_Client_Industry_Bool_Exp>;
};


export type Subscription_RootClient_Directory_Client_Industry_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootClient_Directory_Client_Industry_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Client_Directory_Client_Industry_Stream_Cursor_Input>>;
  where?: InputMaybe<Client_Directory_Client_Industry_Bool_Exp>;
};


export type Subscription_RootClient_ObjectArgs = {
  distinct_on?: InputMaybe<Array<Client_Object_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Client_Object_Order_By>>;
  where?: InputMaybe<Client_Object_Bool_Exp>;
};


export type Subscription_RootClient_Object_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Client_Object_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Client_Object_Order_By>>;
  where?: InputMaybe<Client_Object_Bool_Exp>;
};


export type Subscription_RootClient_Object_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootClient_Object_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Client_Object_Stream_Cursor_Input>>;
  where?: InputMaybe<Client_Object_Bool_Exp>;
};


export type Subscription_RootClient_StatusArgs = {
  distinct_on?: InputMaybe<Array<Client_Status_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Client_Status_Order_By>>;
  where?: InputMaybe<Client_Status_Bool_Exp>;
};


export type Subscription_RootClient_Status_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Client_Status_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Client_Status_Order_By>>;
  where?: InputMaybe<Client_Status_Bool_Exp>;
};


export type Subscription_RootClient_Status_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootClient_Status_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Client_Status_Stream_Cursor_Input>>;
  where?: InputMaybe<Client_Status_Bool_Exp>;
};


export type Subscription_RootClient_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Client_Stream_Cursor_Input>>;
  where?: InputMaybe<Client_Bool_Exp>;
};


export type Subscription_RootDirectory_Client_IndustryArgs = {
  distinct_on?: InputMaybe<Array<Directory_Client_Industry_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Directory_Client_Industry_Order_By>>;
  where?: InputMaybe<Directory_Client_Industry_Bool_Exp>;
};


export type Subscription_RootDirectory_Client_Industry_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Directory_Client_Industry_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Directory_Client_Industry_Order_By>>;
  where?: InputMaybe<Directory_Client_Industry_Bool_Exp>;
};


export type Subscription_RootDirectory_Client_Industry_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootDirectory_Client_Industry_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Directory_Client_Industry_Stream_Cursor_Input>>;
  where?: InputMaybe<Directory_Client_Industry_Bool_Exp>;
};


export type Subscription_RootDirectory_Client_StatusArgs = {
  distinct_on?: InputMaybe<Array<Directory_Client_Status_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Directory_Client_Status_Order_By>>;
  where?: InputMaybe<Directory_Client_Status_Bool_Exp>;
};


export type Subscription_RootDirectory_Client_Status_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Directory_Client_Status_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Directory_Client_Status_Order_By>>;
  where?: InputMaybe<Directory_Client_Status_Bool_Exp>;
};


export type Subscription_RootDirectory_Client_Status_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootDirectory_Client_Status_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Directory_Client_Status_Stream_Cursor_Input>>;
  where?: InputMaybe<Directory_Client_Status_Bool_Exp>;
};


export type Subscription_RootEmployeeArgs = {
  distinct_on?: InputMaybe<Array<Employee_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Employee_Order_By>>;
  where?: InputMaybe<Employee_Bool_Exp>;
};


export type Subscription_RootEmployee_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Employee_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Employee_Order_By>>;
  where?: InputMaybe<Employee_Bool_Exp>;
};


export type Subscription_RootEmployee_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootEmployee_OccupancyArgs = {
  distinct_on?: InputMaybe<Array<Employee_Occupancy_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Employee_Occupancy_Order_By>>;
  where?: InputMaybe<Employee_Occupancy_Bool_Exp>;
};


export type Subscription_RootEmployee_Occupancy_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Employee_Occupancy_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Employee_Occupancy_Order_By>>;
  where?: InputMaybe<Employee_Occupancy_Bool_Exp>;
};


export type Subscription_RootEmployee_Occupancy_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootEmployee_Occupancy_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Employee_Occupancy_Stream_Cursor_Input>>;
  where?: InputMaybe<Employee_Occupancy_Bool_Exp>;
};


export type Subscription_RootEmployee_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Employee_Stream_Cursor_Input>>;
  where?: InputMaybe<Employee_Bool_Exp>;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamptz']['input']>;
  _gt?: InputMaybe<Scalars['timestamptz']['input']>;
  _gte?: InputMaybe<Scalars['timestamptz']['input']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['timestamptz']['input']>;
  _lte?: InputMaybe<Scalars['timestamptz']['input']>;
  _neq?: InputMaybe<Scalars['timestamptz']['input']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']['input']>>;
};

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['uuid']['input']>;
  _gt?: InputMaybe<Scalars['uuid']['input']>;
  _gte?: InputMaybe<Scalars['uuid']['input']>;
  _in?: InputMaybe<Array<Scalars['uuid']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['uuid']['input']>;
  _lte?: InputMaybe<Scalars['uuid']['input']>;
  _neq?: InputMaybe<Scalars['uuid']['input']>;
  _nin?: InputMaybe<Array<Scalars['uuid']['input']>>;
};

export type ClientQueryVariables = Exact<{
  id: Scalars['uuid']['input'];
}>;


export type ClientQuery = { __typename?: 'query_root', client_by_pk?: { __typename?: 'client', id: any, created_at: any, updated_at: any, name: string, contacts: Array<{ __typename?: 'client_contact', id: any, name: string, email?: string | null, phone?: string | null, is_main: boolean }>, responsible_employee?: { __typename?: 'employee', fullName?: string | null } | null, statuses: Array<{ __typename?: 'client_status', updated_at: any, is_current: boolean, status: { __typename?: 'directory_client_status', name: string, color: string } }> } | null };

export type CreateClientMutationVariables = Exact<{
  employee_id: Scalars['uuid']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
}>;


export type CreateClientMutation = { __typename?: 'mutation_root', insert_client?: { __typename?: 'client_mutation_response', returning: Array<{ __typename?: 'client', id: any }> } | null };

export type CreateRelationshipClientMutationVariables = Exact<{
  clientId?: InputMaybe<Scalars['uuid']['input']>;
  status_id?: InputMaybe<Scalars['uuid']['input']>;
  industries: Array<Client_Directory_Client_Industry_Insert_Input> | Client_Directory_Client_Industry_Insert_Input;
  skipIndustry: Scalars['Boolean']['input'];
}>;


export type CreateRelationshipClientMutation = { __typename?: 'mutation_root', insert_client_status?: { __typename?: 'client_status_mutation_response', returning: Array<{ __typename?: 'client_status', id: any }> } | null, insert_client_directory_client_industry?: { __typename?: 'client_directory_client_industry_mutation_response', returning: Array<{ __typename?: 'client_directory_client_industry', id: any }> } | null };

export type InitialClientFormQueryVariables = Exact<{
  id: Scalars['uuid']['input'];
}>;


export type InitialClientFormQuery = { __typename?: 'query_root', client_by_pk?: { __typename?: 'client', id: any, name: string, responsible_employee?: { __typename?: 'employee', id: any, fullName?: string | null } | null, industries: Array<{ __typename?: 'client_directory_client_industry', industry_id: any, industry: { __typename?: 'directory_client_industry', id: any, name: string } }>, statuses: Array<{ __typename?: 'client_status', status: { __typename?: 'directory_client_status', id: any, name: string } }> } | null };

export type UpdateClientMutationVariables = Exact<{
  clientId: Scalars['uuid']['input'];
  client_set_input?: InputMaybe<Client_Set_Input>;
}>;


export type UpdateClientMutation = { __typename?: 'mutation_root', update_client_by_pk?: { __typename?: 'client', id: any } | null };

export type ClientsTableFilterQueryVariables = Exact<{
  where?: InputMaybe<Client_Bool_Exp>;
}>;


export type ClientsTableFilterQuery = { __typename?: 'query_root', client_aggregate: { __typename?: 'client_aggregate', aggregate?: { __typename?: 'client_aggregate_fields', count: number } | null } };

export type ClientsQueryVariables = Exact<{
  offset?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  distinct_on?: InputMaybe<Array<Client_Select_Column> | Client_Select_Column>;
  order_by?: InputMaybe<Array<Client_Order_By> | Client_Order_By>;
  where?: InputMaybe<Client_Bool_Exp>;
}>;


export type ClientsQuery = { __typename?: 'query_root', client_aggregate: { __typename?: 'client_aggregate', aggregate?: { __typename?: 'client_aggregate_fields', count: number } | null }, client: Array<{ __typename?: 'client', id: any, created_at: any, updated_at: any, name: string, statuses: Array<{ __typename?: 'client_status', status: { __typename?: 'directory_client_status', name: string, color: string } }>, contacts: Array<{ __typename?: 'client_contact', phone?: string | null }>, responsible_employee?: { __typename?: 'employee', fullName?: string | null } | null, industries: Array<{ __typename?: 'client_directory_client_industry', industry: { __typename?: 'directory_client_industry', name: string, color: string } }> }> };

export type DirectoryClientIndustrySelectQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Directory_Client_Industry_Bool_Exp>;
}>;


export type DirectoryClientIndustrySelectQuery = { __typename?: 'query_root', directory_client_industry: Array<{ __typename?: 'directory_client_industry', id: any, name: string }> };

export type DirectoryClientStatusSelectQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Directory_Client_Status_Bool_Exp>;
}>;


export type DirectoryClientStatusSelectQuery = { __typename?: 'query_root', directory_client_status: Array<{ __typename?: 'directory_client_status', id: any, name: string }> };

export type EmployeeSelectQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Employee_Bool_Exp>;
}>;


export type EmployeeSelectQuery = { __typename?: 'query_root', employee: Array<{ __typename?: 'employee', fullName?: string | null, id: any }> };


export const ClientDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Client"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"client_by_pk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"contacts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"is_main"}}]}},{"kind":"Field","name":{"kind":"Name","value":"responsible_employee"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fullName"}}]}},{"kind":"Field","name":{"kind":"Name","value":"statuses"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"status"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}},{"kind":"Field","name":{"kind":"Name","value":"is_current"}}]}}]}}]}}]} as unknown as DocumentNode<ClientQuery, ClientQueryVariables>;
export const CreateClientDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateClient"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"employee_id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"insert_client"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"objects"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"employee_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"employee_id"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"returning"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<CreateClientMutation, CreateClientMutationVariables>;
export const CreateRelationshipClientDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateRelationshipClient"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"clientId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"status_id"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"industries"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"client_directory_client_industry_insert_input"}}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"skipIndustry"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"insert_client_status"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"objects"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"client_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"clientId"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"status_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"status_id"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"returning"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"insert_client_directory_client_industry"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"objects"},"value":{"kind":"Variable","name":{"kind":"Name","value":"industries"}}}],"directives":[{"kind":"Directive","name":{"kind":"Name","value":"skip"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"skipIndustry"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"returning"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<CreateRelationshipClientMutation, CreateRelationshipClientMutationVariables>;
export const InitialClientFormDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"InitialClientForm"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"client_by_pk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"responsible_employee"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"fullName"}}]}},{"kind":"Field","name":{"kind":"Name","value":"industries"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"industry_id"}},{"kind":"Field","name":{"kind":"Name","value":"industry"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"statuses"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"is_current"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"BooleanValue","value":true}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"status"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]}}]} as unknown as DocumentNode<InitialClientFormQuery, InitialClientFormQueryVariables>;
export const UpdateClientDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateClient"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"clientId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"client_set_input"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"client_set_input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"update_client_by_pk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"pk_columns"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"clientId"}}}]}},{"kind":"Argument","name":{"kind":"Name","value":"_set"},"value":{"kind":"Variable","name":{"kind":"Name","value":"client_set_input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<UpdateClientMutation, UpdateClientMutationVariables>;
export const ClientsTableFilterDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ClientsTableFilter"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"client_bool_exp"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"client_aggregate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}}]}}]}}]}}]} as unknown as DocumentNode<ClientsTableFilterQuery, ClientsTableFilterQueryVariables>;
export const ClientsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Clients"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"offset"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"distinct_on"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"client_select_column"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"order_by"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"client_order_by"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"client_bool_exp"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"client_aggregate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"client"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"offset"},"value":{"kind":"Variable","name":{"kind":"Name","value":"offset"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}},{"kind":"Argument","name":{"kind":"Name","value":"distinct_on"},"value":{"kind":"Variable","name":{"kind":"Name","value":"distinct_on"}}},{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"Variable","name":{"kind":"Name","value":"order_by"}}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"statuses"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"is_current"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"BooleanValue","value":true}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"status"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"contacts"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"is_main"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"BooleanValue","value":true}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"phone"}}]}},{"kind":"Field","name":{"kind":"Name","value":"responsible_employee"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fullName"}}]}},{"kind":"Field","name":{"kind":"Name","value":"industries"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"industry"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}}]}}]}}]}}]} as unknown as DocumentNode<ClientsQuery, ClientsQueryVariables>;
export const DirectoryClientIndustrySelectDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"DirectoryClientIndustrySelect"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"offset"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"directory_client_industry_bool_exp"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"directory_client_industry"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}},{"kind":"Argument","name":{"kind":"Name","value":"offset"},"value":{"kind":"Variable","name":{"kind":"Name","value":"offset"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<DirectoryClientIndustrySelectQuery, DirectoryClientIndustrySelectQueryVariables>;
export const DirectoryClientStatusSelectDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"DirectoryClientStatusSelect"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"offset"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"directory_client_status_bool_exp"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"directory_client_status"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}},{"kind":"Argument","name":{"kind":"Name","value":"offset"},"value":{"kind":"Variable","name":{"kind":"Name","value":"offset"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<DirectoryClientStatusSelectQuery, DirectoryClientStatusSelectQueryVariables>;
export const EmployeeSelectDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"EmployeeSelect"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"offset"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"employee_bool_exp"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"employee"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}},{"kind":"Argument","name":{"kind":"Name","value":"offset"},"value":{"kind":"Variable","name":{"kind":"Name","value":"offset"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<EmployeeSelectQuery, EmployeeSelectQueryVariables>;