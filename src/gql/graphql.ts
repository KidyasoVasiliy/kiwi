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
  created_at: Scalars['timestamptz']['output'];
  fullName: Scalars['String']['output'];
  id: Scalars['uuid']['output'];
  /** An object relationship */
  objects?: Maybe<Client_Object>;
  updated_at: Scalars['timestamptz']['output'];
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
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  fullName?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  objects?: InputMaybe<Client_Object_Bool_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "client" */
export enum Client_Constraint {
  /** unique or primary key constraint on columns "id" */
  ClientPkey = 'client_pkey'
}

/** input type for inserting data into table "client" */
export type Client_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  fullName?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  objects?: InputMaybe<Client_Object_Obj_Rel_Insert_Input>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type Client_Max_Fields = {
  __typename?: 'client_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  fullName?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by max() on columns of table "client" */
export type Client_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  fullName?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** Таблица атрибутов Клиента */
export type Client_Meta = {
  __typename?: 'client_meta';
  client_id: Scalars['uuid']['output'];
  created_at: Scalars['timestamptz']['output'];
  id: Scalars['uuid']['output'];
  inn?: Maybe<Scalars['String']['output']>;
  updated_at: Scalars['timestamptz']['output'];
};

/** aggregated selection of "client_meta" */
export type Client_Meta_Aggregate = {
  __typename?: 'client_meta_aggregate';
  aggregate?: Maybe<Client_Meta_Aggregate_Fields>;
  nodes: Array<Client_Meta>;
};

/** aggregate fields of "client_meta" */
export type Client_Meta_Aggregate_Fields = {
  __typename?: 'client_meta_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Client_Meta_Max_Fields>;
  min?: Maybe<Client_Meta_Min_Fields>;
};


/** aggregate fields of "client_meta" */
export type Client_Meta_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Client_Meta_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "client_meta". All fields are combined with a logical 'AND'. */
export type Client_Meta_Bool_Exp = {
  _and?: InputMaybe<Array<Client_Meta_Bool_Exp>>;
  _not?: InputMaybe<Client_Meta_Bool_Exp>;
  _or?: InputMaybe<Array<Client_Meta_Bool_Exp>>;
  client_id?: InputMaybe<Uuid_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  inn?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "client_meta" */
export enum Client_Meta_Constraint {
  /** unique or primary key constraint on columns "id" */
  ClientMetaPkey = 'client_meta_pkey'
}

/** input type for inserting data into table "client_meta" */
export type Client_Meta_Insert_Input = {
  client_id?: InputMaybe<Scalars['uuid']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  inn?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type Client_Meta_Max_Fields = {
  __typename?: 'client_meta_max_fields';
  client_id?: Maybe<Scalars['uuid']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  inn?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** aggregate min on columns */
export type Client_Meta_Min_Fields = {
  __typename?: 'client_meta_min_fields';
  client_id?: Maybe<Scalars['uuid']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  inn?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** response of any mutation on the table "client_meta" */
export type Client_Meta_Mutation_Response = {
  __typename?: 'client_meta_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Client_Meta>;
};

/** on_conflict condition type for table "client_meta" */
export type Client_Meta_On_Conflict = {
  constraint: Client_Meta_Constraint;
  update_columns?: Array<Client_Meta_Update_Column>;
  where?: InputMaybe<Client_Meta_Bool_Exp>;
};

/** Ordering options when selecting data from "client_meta". */
export type Client_Meta_Order_By = {
  client_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  inn?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: client_meta */
export type Client_Meta_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "client_meta" */
export enum Client_Meta_Select_Column {
  /** column name */
  ClientId = 'client_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Inn = 'inn',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "client_meta" */
export type Client_Meta_Set_Input = {
  client_id?: InputMaybe<Scalars['uuid']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  inn?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** Streaming cursor of the table "client_meta" */
export type Client_Meta_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Client_Meta_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Client_Meta_Stream_Cursor_Value_Input = {
  client_id?: InputMaybe<Scalars['uuid']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  inn?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** update columns of table "client_meta" */
export enum Client_Meta_Update_Column {
  /** column name */
  ClientId = 'client_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Inn = 'inn',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Client_Meta_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Client_Meta_Set_Input>;
  /** filter the rows which have to be updated */
  where: Client_Meta_Bool_Exp;
};

/** aggregate min on columns */
export type Client_Min_Fields = {
  __typename?: 'client_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  fullName?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by min() on columns of table "client" */
export type Client_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  fullName?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
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
  /** An array relationship */
  client: Array<Client>;
  /** An aggregate relationship */
  client_aggregate: Client_Aggregate;
  client_id: Scalars['uuid']['output'];
  created_at: Scalars['timestamptz']['output'];
  id: Scalars['uuid']['output'];
  name: Scalars['String']['output'];
  updated_at: Scalars['timestamptz']['output'];
};


/** Таблица объектов клиента */
export type Client_ObjectClientArgs = {
  distinct_on?: InputMaybe<Array<Client_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Client_Order_By>>;
  where?: InputMaybe<Client_Bool_Exp>;
};


/** Таблица объектов клиента */
export type Client_ObjectClient_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Client_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Client_Order_By>>;
  where?: InputMaybe<Client_Bool_Exp>;
};

/** aggregated selection of "client_object" */
export type Client_Object_Aggregate = {
  __typename?: 'client_object_aggregate';
  aggregate?: Maybe<Client_Object_Aggregate_Fields>;
  nodes: Array<Client_Object>;
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

/** Boolean expression to filter rows from the table "client_object". All fields are combined with a logical 'AND'. */
export type Client_Object_Bool_Exp = {
  _and?: InputMaybe<Array<Client_Object_Bool_Exp>>;
  _not?: InputMaybe<Client_Object_Bool_Exp>;
  _or?: InputMaybe<Array<Client_Object_Bool_Exp>>;
  client?: InputMaybe<Client_Bool_Exp>;
  client_aggregate?: InputMaybe<Client_Aggregate_Bool_Exp>;
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
  client?: InputMaybe<Client_Arr_Rel_Insert_Input>;
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

/** aggregate min on columns */
export type Client_Object_Min_Fields = {
  __typename?: 'client_object_min_fields';
  client_id?: Maybe<Scalars['uuid']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** response of any mutation on the table "client_object" */
export type Client_Object_Mutation_Response = {
  __typename?: 'client_object_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Client_Object>;
};

/** input type for inserting object relation for remote table "client_object" */
export type Client_Object_Obj_Rel_Insert_Input = {
  data: Client_Object_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Client_Object_On_Conflict>;
};

/** on_conflict condition type for table "client_object" */
export type Client_Object_On_Conflict = {
  constraint: Client_Object_Constraint;
  update_columns?: Array<Client_Object_Update_Column>;
  where?: InputMaybe<Client_Object_Bool_Exp>;
};

/** Ordering options when selecting data from "client_object". */
export type Client_Object_Order_By = {
  client_aggregate?: InputMaybe<Client_Aggregate_Order_By>;
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
  created_at?: InputMaybe<Order_By>;
  fullName?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  objects?: InputMaybe<Client_Object_Order_By>;
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
  FullName = 'fullName',
  /** column name */
  Id = 'id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "client" */
export type Client_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  fullName?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
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
  fullName?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** update columns of table "client" */
export enum Client_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  FullName = 'fullName',
  /** column name */
  Id = 'id',
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

/** Таблица сделок */
export type Deal = {
  __typename?: 'deal';
  /** An object relationship */
  client?: Maybe<Client>;
  client_id: Scalars['uuid']['output'];
  /** An object relationship */
  client_object?: Maybe<Client_Object>;
  client_object_id: Scalars['uuid']['output'];
  created_at: Scalars['timestamptz']['output'];
  employee_count?: Maybe<Scalars['Int']['output']>;
  /** An array relationship */
  employees: Array<Deal_Employee>;
  /** An aggregate relationship */
  employees_aggregate: Deal_Employee_Aggregate;
  end_date?: Maybe<Scalars['date']['output']>;
  id: Scalars['bigint']['output'];
  shift_pattern?: Maybe<Scalars['String']['output']>;
  start_date?: Maybe<Scalars['date']['output']>;
  updated_at: Scalars['timestamptz']['output'];
};


/** Таблица сделок */
export type DealEmployeesArgs = {
  distinct_on?: InputMaybe<Array<Deal_Employee_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Deal_Employee_Order_By>>;
  where?: InputMaybe<Deal_Employee_Bool_Exp>;
};


/** Таблица сделок */
export type DealEmployees_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Deal_Employee_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Deal_Employee_Order_By>>;
  where?: InputMaybe<Deal_Employee_Bool_Exp>;
};

/** aggregated selection of "deal" */
export type Deal_Aggregate = {
  __typename?: 'deal_aggregate';
  aggregate?: Maybe<Deal_Aggregate_Fields>;
  nodes: Array<Deal>;
};

export type Deal_Aggregate_Bool_Exp = {
  count?: InputMaybe<Deal_Aggregate_Bool_Exp_Count>;
};

export type Deal_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Deal_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Deal_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "deal" */
export type Deal_Aggregate_Fields = {
  __typename?: 'deal_aggregate_fields';
  avg?: Maybe<Deal_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Deal_Max_Fields>;
  min?: Maybe<Deal_Min_Fields>;
  stddev?: Maybe<Deal_Stddev_Fields>;
  stddev_pop?: Maybe<Deal_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Deal_Stddev_Samp_Fields>;
  sum?: Maybe<Deal_Sum_Fields>;
  var_pop?: Maybe<Deal_Var_Pop_Fields>;
  var_samp?: Maybe<Deal_Var_Samp_Fields>;
  variance?: Maybe<Deal_Variance_Fields>;
};


/** aggregate fields of "deal" */
export type Deal_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Deal_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "deal" */
export type Deal_Aggregate_Order_By = {
  avg?: InputMaybe<Deal_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Deal_Max_Order_By>;
  min?: InputMaybe<Deal_Min_Order_By>;
  stddev?: InputMaybe<Deal_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Deal_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Deal_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Deal_Sum_Order_By>;
  var_pop?: InputMaybe<Deal_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Deal_Var_Samp_Order_By>;
  variance?: InputMaybe<Deal_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "deal" */
export type Deal_Arr_Rel_Insert_Input = {
  data: Array<Deal_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Deal_On_Conflict>;
};

/** aggregate avg on columns */
export type Deal_Avg_Fields = {
  __typename?: 'deal_avg_fields';
  employee_count?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "deal" */
export type Deal_Avg_Order_By = {
  employee_count?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "deal". All fields are combined with a logical 'AND'. */
export type Deal_Bool_Exp = {
  _and?: InputMaybe<Array<Deal_Bool_Exp>>;
  _not?: InputMaybe<Deal_Bool_Exp>;
  _or?: InputMaybe<Array<Deal_Bool_Exp>>;
  client?: InputMaybe<Client_Bool_Exp>;
  client_id?: InputMaybe<Uuid_Comparison_Exp>;
  client_object?: InputMaybe<Client_Object_Bool_Exp>;
  client_object_id?: InputMaybe<Uuid_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  employee_count?: InputMaybe<Int_Comparison_Exp>;
  employees?: InputMaybe<Deal_Employee_Bool_Exp>;
  employees_aggregate?: InputMaybe<Deal_Employee_Aggregate_Bool_Exp>;
  end_date?: InputMaybe<Date_Comparison_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  shift_pattern?: InputMaybe<String_Comparison_Exp>;
  start_date?: InputMaybe<Date_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "deal" */
export enum Deal_Constraint {
  /** unique or primary key constraint on columns "id" */
  DealPkey = 'deal_pkey'
}

/** Таблица для many-to-many сделка-сотрудник */
export type Deal_Employee = {
  __typename?: 'deal_employee';
  deal_id: Scalars['bigint']['output'];
  /** An array relationship */
  deals: Array<Deal>;
  /** An aggregate relationship */
  deals_aggregate: Deal_Aggregate;
  employee_id: Scalars['uuid']['output'];
  /** An array relationship */
  employees: Array<Employee>;
  /** An aggregate relationship */
  employees_aggregate: Employee_Aggregate;
  id: Scalars['uuid']['output'];
};


/** Таблица для many-to-many сделка-сотрудник */
export type Deal_EmployeeDealsArgs = {
  distinct_on?: InputMaybe<Array<Deal_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Deal_Order_By>>;
  where?: InputMaybe<Deal_Bool_Exp>;
};


/** Таблица для many-to-many сделка-сотрудник */
export type Deal_EmployeeDeals_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Deal_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Deal_Order_By>>;
  where?: InputMaybe<Deal_Bool_Exp>;
};


/** Таблица для many-to-many сделка-сотрудник */
export type Deal_EmployeeEmployeesArgs = {
  distinct_on?: InputMaybe<Array<Employee_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Employee_Order_By>>;
  where?: InputMaybe<Employee_Bool_Exp>;
};


/** Таблица для many-to-many сделка-сотрудник */
export type Deal_EmployeeEmployees_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Employee_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Employee_Order_By>>;
  where?: InputMaybe<Employee_Bool_Exp>;
};

/** aggregated selection of "deal_employee" */
export type Deal_Employee_Aggregate = {
  __typename?: 'deal_employee_aggregate';
  aggregate?: Maybe<Deal_Employee_Aggregate_Fields>;
  nodes: Array<Deal_Employee>;
};

export type Deal_Employee_Aggregate_Bool_Exp = {
  count?: InputMaybe<Deal_Employee_Aggregate_Bool_Exp_Count>;
};

export type Deal_Employee_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Deal_Employee_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Deal_Employee_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "deal_employee" */
export type Deal_Employee_Aggregate_Fields = {
  __typename?: 'deal_employee_aggregate_fields';
  avg?: Maybe<Deal_Employee_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Deal_Employee_Max_Fields>;
  min?: Maybe<Deal_Employee_Min_Fields>;
  stddev?: Maybe<Deal_Employee_Stddev_Fields>;
  stddev_pop?: Maybe<Deal_Employee_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Deal_Employee_Stddev_Samp_Fields>;
  sum?: Maybe<Deal_Employee_Sum_Fields>;
  var_pop?: Maybe<Deal_Employee_Var_Pop_Fields>;
  var_samp?: Maybe<Deal_Employee_Var_Samp_Fields>;
  variance?: Maybe<Deal_Employee_Variance_Fields>;
};


/** aggregate fields of "deal_employee" */
export type Deal_Employee_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Deal_Employee_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "deal_employee" */
export type Deal_Employee_Aggregate_Order_By = {
  avg?: InputMaybe<Deal_Employee_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Deal_Employee_Max_Order_By>;
  min?: InputMaybe<Deal_Employee_Min_Order_By>;
  stddev?: InputMaybe<Deal_Employee_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Deal_Employee_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Deal_Employee_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Deal_Employee_Sum_Order_By>;
  var_pop?: InputMaybe<Deal_Employee_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Deal_Employee_Var_Samp_Order_By>;
  variance?: InputMaybe<Deal_Employee_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "deal_employee" */
export type Deal_Employee_Arr_Rel_Insert_Input = {
  data: Array<Deal_Employee_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Deal_Employee_On_Conflict>;
};

/** aggregate avg on columns */
export type Deal_Employee_Avg_Fields = {
  __typename?: 'deal_employee_avg_fields';
  deal_id?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "deal_employee" */
export type Deal_Employee_Avg_Order_By = {
  deal_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "deal_employee". All fields are combined with a logical 'AND'. */
export type Deal_Employee_Bool_Exp = {
  _and?: InputMaybe<Array<Deal_Employee_Bool_Exp>>;
  _not?: InputMaybe<Deal_Employee_Bool_Exp>;
  _or?: InputMaybe<Array<Deal_Employee_Bool_Exp>>;
  deal_id?: InputMaybe<Bigint_Comparison_Exp>;
  deals?: InputMaybe<Deal_Bool_Exp>;
  deals_aggregate?: InputMaybe<Deal_Aggregate_Bool_Exp>;
  employee_id?: InputMaybe<Uuid_Comparison_Exp>;
  employees?: InputMaybe<Employee_Bool_Exp>;
  employees_aggregate?: InputMaybe<Employee_Aggregate_Bool_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "deal_employee" */
export enum Deal_Employee_Constraint {
  /** unique or primary key constraint on columns "id" */
  DealEmployeePkey = 'deal_employee_pkey'
}

/** input type for incrementing numeric columns in table "deal_employee" */
export type Deal_Employee_Inc_Input = {
  deal_id?: InputMaybe<Scalars['bigint']['input']>;
};

/** input type for inserting data into table "deal_employee" */
export type Deal_Employee_Insert_Input = {
  deal_id?: InputMaybe<Scalars['bigint']['input']>;
  deals?: InputMaybe<Deal_Arr_Rel_Insert_Input>;
  employee_id?: InputMaybe<Scalars['uuid']['input']>;
  employees?: InputMaybe<Employee_Arr_Rel_Insert_Input>;
  id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type Deal_Employee_Max_Fields = {
  __typename?: 'deal_employee_max_fields';
  deal_id?: Maybe<Scalars['bigint']['output']>;
  employee_id?: Maybe<Scalars['uuid']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "deal_employee" */
export type Deal_Employee_Max_Order_By = {
  deal_id?: InputMaybe<Order_By>;
  employee_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Deal_Employee_Min_Fields = {
  __typename?: 'deal_employee_min_fields';
  deal_id?: Maybe<Scalars['bigint']['output']>;
  employee_id?: Maybe<Scalars['uuid']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "deal_employee" */
export type Deal_Employee_Min_Order_By = {
  deal_id?: InputMaybe<Order_By>;
  employee_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "deal_employee" */
export type Deal_Employee_Mutation_Response = {
  __typename?: 'deal_employee_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Deal_Employee>;
};

/** on_conflict condition type for table "deal_employee" */
export type Deal_Employee_On_Conflict = {
  constraint: Deal_Employee_Constraint;
  update_columns?: Array<Deal_Employee_Update_Column>;
  where?: InputMaybe<Deal_Employee_Bool_Exp>;
};

/** Ordering options when selecting data from "deal_employee". */
export type Deal_Employee_Order_By = {
  deal_id?: InputMaybe<Order_By>;
  deals_aggregate?: InputMaybe<Deal_Aggregate_Order_By>;
  employee_id?: InputMaybe<Order_By>;
  employees_aggregate?: InputMaybe<Employee_Aggregate_Order_By>;
  id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: deal_employee */
export type Deal_Employee_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "deal_employee" */
export enum Deal_Employee_Select_Column {
  /** column name */
  DealId = 'deal_id',
  /** column name */
  EmployeeId = 'employee_id',
  /** column name */
  Id = 'id'
}

/** input type for updating data in table "deal_employee" */
export type Deal_Employee_Set_Input = {
  deal_id?: InputMaybe<Scalars['bigint']['input']>;
  employee_id?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate stddev on columns */
export type Deal_Employee_Stddev_Fields = {
  __typename?: 'deal_employee_stddev_fields';
  deal_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "deal_employee" */
export type Deal_Employee_Stddev_Order_By = {
  deal_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Deal_Employee_Stddev_Pop_Fields = {
  __typename?: 'deal_employee_stddev_pop_fields';
  deal_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "deal_employee" */
export type Deal_Employee_Stddev_Pop_Order_By = {
  deal_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Deal_Employee_Stddev_Samp_Fields = {
  __typename?: 'deal_employee_stddev_samp_fields';
  deal_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "deal_employee" */
export type Deal_Employee_Stddev_Samp_Order_By = {
  deal_id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "deal_employee" */
export type Deal_Employee_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Deal_Employee_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Deal_Employee_Stream_Cursor_Value_Input = {
  deal_id?: InputMaybe<Scalars['bigint']['input']>;
  employee_id?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate sum on columns */
export type Deal_Employee_Sum_Fields = {
  __typename?: 'deal_employee_sum_fields';
  deal_id?: Maybe<Scalars['bigint']['output']>;
};

/** order by sum() on columns of table "deal_employee" */
export type Deal_Employee_Sum_Order_By = {
  deal_id?: InputMaybe<Order_By>;
};

/** update columns of table "deal_employee" */
export enum Deal_Employee_Update_Column {
  /** column name */
  DealId = 'deal_id',
  /** column name */
  EmployeeId = 'employee_id',
  /** column name */
  Id = 'id'
}

export type Deal_Employee_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Deal_Employee_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Deal_Employee_Set_Input>;
  /** filter the rows which have to be updated */
  where: Deal_Employee_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Deal_Employee_Var_Pop_Fields = {
  __typename?: 'deal_employee_var_pop_fields';
  deal_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "deal_employee" */
export type Deal_Employee_Var_Pop_Order_By = {
  deal_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Deal_Employee_Var_Samp_Fields = {
  __typename?: 'deal_employee_var_samp_fields';
  deal_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "deal_employee" */
export type Deal_Employee_Var_Samp_Order_By = {
  deal_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Deal_Employee_Variance_Fields = {
  __typename?: 'deal_employee_variance_fields';
  deal_id?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "deal_employee" */
export type Deal_Employee_Variance_Order_By = {
  deal_id?: InputMaybe<Order_By>;
};

/** input type for incrementing numeric columns in table "deal" */
export type Deal_Inc_Input = {
  employee_count?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
};

/** input type for inserting data into table "deal" */
export type Deal_Insert_Input = {
  client?: InputMaybe<Client_Obj_Rel_Insert_Input>;
  client_id?: InputMaybe<Scalars['uuid']['input']>;
  client_object?: InputMaybe<Client_Object_Obj_Rel_Insert_Input>;
  client_object_id?: InputMaybe<Scalars['uuid']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  employee_count?: InputMaybe<Scalars['Int']['input']>;
  employees?: InputMaybe<Deal_Employee_Arr_Rel_Insert_Input>;
  end_date?: InputMaybe<Scalars['date']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  shift_pattern?: InputMaybe<Scalars['String']['input']>;
  start_date?: InputMaybe<Scalars['date']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type Deal_Max_Fields = {
  __typename?: 'deal_max_fields';
  client_id?: Maybe<Scalars['uuid']['output']>;
  client_object_id?: Maybe<Scalars['uuid']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  employee_count?: Maybe<Scalars['Int']['output']>;
  end_date?: Maybe<Scalars['date']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  shift_pattern?: Maybe<Scalars['String']['output']>;
  start_date?: Maybe<Scalars['date']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by max() on columns of table "deal" */
export type Deal_Max_Order_By = {
  client_id?: InputMaybe<Order_By>;
  client_object_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  employee_count?: InputMaybe<Order_By>;
  end_date?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  shift_pattern?: InputMaybe<Order_By>;
  start_date?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Deal_Min_Fields = {
  __typename?: 'deal_min_fields';
  client_id?: Maybe<Scalars['uuid']['output']>;
  client_object_id?: Maybe<Scalars['uuid']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  employee_count?: Maybe<Scalars['Int']['output']>;
  end_date?: Maybe<Scalars['date']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  shift_pattern?: Maybe<Scalars['String']['output']>;
  start_date?: Maybe<Scalars['date']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by min() on columns of table "deal" */
export type Deal_Min_Order_By = {
  client_id?: InputMaybe<Order_By>;
  client_object_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  employee_count?: InputMaybe<Order_By>;
  end_date?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  shift_pattern?: InputMaybe<Order_By>;
  start_date?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "deal" */
export type Deal_Mutation_Response = {
  __typename?: 'deal_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Deal>;
};

/** input type for inserting object relation for remote table "deal" */
export type Deal_Obj_Rel_Insert_Input = {
  data: Deal_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Deal_On_Conflict>;
};

/** on_conflict condition type for table "deal" */
export type Deal_On_Conflict = {
  constraint: Deal_Constraint;
  update_columns?: Array<Deal_Update_Column>;
  where?: InputMaybe<Deal_Bool_Exp>;
};

/** Ordering options when selecting data from "deal". */
export type Deal_Order_By = {
  client?: InputMaybe<Client_Order_By>;
  client_id?: InputMaybe<Order_By>;
  client_object?: InputMaybe<Client_Object_Order_By>;
  client_object_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  employee_count?: InputMaybe<Order_By>;
  employees_aggregate?: InputMaybe<Deal_Employee_Aggregate_Order_By>;
  end_date?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  shift_pattern?: InputMaybe<Order_By>;
  start_date?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: deal */
export type Deal_Pk_Columns_Input = {
  id: Scalars['bigint']['input'];
};

/** select columns of table "deal" */
export enum Deal_Select_Column {
  /** column name */
  ClientId = 'client_id',
  /** column name */
  ClientObjectId = 'client_object_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  EmployeeCount = 'employee_count',
  /** column name */
  EndDate = 'end_date',
  /** column name */
  Id = 'id',
  /** column name */
  ShiftPattern = 'shift_pattern',
  /** column name */
  StartDate = 'start_date',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "deal" */
export type Deal_Set_Input = {
  client_id?: InputMaybe<Scalars['uuid']['input']>;
  client_object_id?: InputMaybe<Scalars['uuid']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  employee_count?: InputMaybe<Scalars['Int']['input']>;
  end_date?: InputMaybe<Scalars['date']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  shift_pattern?: InputMaybe<Scalars['String']['input']>;
  start_date?: InputMaybe<Scalars['date']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate stddev on columns */
export type Deal_Stddev_Fields = {
  __typename?: 'deal_stddev_fields';
  employee_count?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "deal" */
export type Deal_Stddev_Order_By = {
  employee_count?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Deal_Stddev_Pop_Fields = {
  __typename?: 'deal_stddev_pop_fields';
  employee_count?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "deal" */
export type Deal_Stddev_Pop_Order_By = {
  employee_count?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Deal_Stddev_Samp_Fields = {
  __typename?: 'deal_stddev_samp_fields';
  employee_count?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "deal" */
export type Deal_Stddev_Samp_Order_By = {
  employee_count?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "deal" */
export type Deal_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Deal_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Deal_Stream_Cursor_Value_Input = {
  client_id?: InputMaybe<Scalars['uuid']['input']>;
  client_object_id?: InputMaybe<Scalars['uuid']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  employee_count?: InputMaybe<Scalars['Int']['input']>;
  end_date?: InputMaybe<Scalars['date']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  shift_pattern?: InputMaybe<Scalars['String']['input']>;
  start_date?: InputMaybe<Scalars['date']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate sum on columns */
export type Deal_Sum_Fields = {
  __typename?: 'deal_sum_fields';
  employee_count?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
};

/** order by sum() on columns of table "deal" */
export type Deal_Sum_Order_By = {
  employee_count?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** update columns of table "deal" */
export enum Deal_Update_Column {
  /** column name */
  ClientId = 'client_id',
  /** column name */
  ClientObjectId = 'client_object_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  EmployeeCount = 'employee_count',
  /** column name */
  EndDate = 'end_date',
  /** column name */
  Id = 'id',
  /** column name */
  ShiftPattern = 'shift_pattern',
  /** column name */
  StartDate = 'start_date',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Deal_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Deal_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Deal_Set_Input>;
  /** filter the rows which have to be updated */
  where: Deal_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Deal_Var_Pop_Fields = {
  __typename?: 'deal_var_pop_fields';
  employee_count?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "deal" */
export type Deal_Var_Pop_Order_By = {
  employee_count?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Deal_Var_Samp_Fields = {
  __typename?: 'deal_var_samp_fields';
  employee_count?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "deal" */
export type Deal_Var_Samp_Order_By = {
  employee_count?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Deal_Variance_Fields = {
  __typename?: 'deal_variance_fields';
  employee_count?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "deal" */
export type Deal_Variance_Order_By = {
  employee_count?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** Карточка сотрудника */
export type Employee = {
  __typename?: 'employee';
  created_at: Scalars['timestamptz']['output'];
  /** An array relationship */
  deals: Array<Deal_Employee>;
  /** An aggregate relationship */
  deals_aggregate: Deal_Employee_Aggregate;
  fullName?: Maybe<Scalars['String']['output']>;
  id: Scalars['uuid']['output'];
  /** An array relationship */
  occupancy: Array<Employee_Occupancy>;
  /** An aggregate relationship */
  occupancy_aggregate: Employee_Occupancy_Aggregate;
  updated_at: Scalars['timestamptz']['output'];
};


/** Карточка сотрудника */
export type EmployeeDealsArgs = {
  distinct_on?: InputMaybe<Array<Deal_Employee_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Deal_Employee_Order_By>>;
  where?: InputMaybe<Deal_Employee_Bool_Exp>;
};


/** Карточка сотрудника */
export type EmployeeDeals_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Deal_Employee_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Deal_Employee_Order_By>>;
  where?: InputMaybe<Deal_Employee_Bool_Exp>;
};


/** Карточка сотрудника */
export type EmployeeOccupancyArgs = {
  distinct_on?: InputMaybe<Array<Employee_Occupancy_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Employee_Occupancy_Order_By>>;
  where?: InputMaybe<Employee_Occupancy_Bool_Exp>;
};


/** Карточка сотрудника */
export type EmployeeOccupancy_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Employee_Occupancy_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Employee_Occupancy_Order_By>>;
  where?: InputMaybe<Employee_Occupancy_Bool_Exp>;
};

/** aggregated selection of "employee" */
export type Employee_Aggregate = {
  __typename?: 'employee_aggregate';
  aggregate?: Maybe<Employee_Aggregate_Fields>;
  nodes: Array<Employee>;
};

export type Employee_Aggregate_Bool_Exp = {
  count?: InputMaybe<Employee_Aggregate_Bool_Exp_Count>;
};

export type Employee_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Employee_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Employee_Bool_Exp>;
  predicate: Int_Comparison_Exp;
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

/** order by aggregate values of table "employee" */
export type Employee_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Employee_Max_Order_By>;
  min?: InputMaybe<Employee_Min_Order_By>;
};

/** input type for inserting array relation for remote table "employee" */
export type Employee_Arr_Rel_Insert_Input = {
  data: Array<Employee_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Employee_On_Conflict>;
};

/** Boolean expression to filter rows from the table "employee". All fields are combined with a logical 'AND'. */
export type Employee_Bool_Exp = {
  _and?: InputMaybe<Array<Employee_Bool_Exp>>;
  _not?: InputMaybe<Employee_Bool_Exp>;
  _or?: InputMaybe<Array<Employee_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  deals?: InputMaybe<Deal_Employee_Bool_Exp>;
  deals_aggregate?: InputMaybe<Deal_Employee_Aggregate_Bool_Exp>;
  fullName?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  occupancy?: InputMaybe<Employee_Occupancy_Bool_Exp>;
  occupancy_aggregate?: InputMaybe<Employee_Occupancy_Aggregate_Bool_Exp>;
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
  deals?: InputMaybe<Deal_Employee_Arr_Rel_Insert_Input>;
  fullName?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  occupancy?: InputMaybe<Employee_Occupancy_Arr_Rel_Insert_Input>;
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

/** order by max() on columns of table "employee" */
export type Employee_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  fullName?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Employee_Min_Fields = {
  __typename?: 'employee_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  fullName?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by min() on columns of table "employee" */
export type Employee_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  fullName?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
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
  /** An object relationship */
  deal?: Maybe<Deal>;
  deal_id: Scalars['bigint']['output'];
  /** An object relationship */
  employee?: Maybe<Employee>;
  employee_id: Scalars['uuid']['output'];
  id: Scalars['uuid']['output'];
};

/** aggregated selection of "employee_occupancy" */
export type Employee_Occupancy_Aggregate = {
  __typename?: 'employee_occupancy_aggregate';
  aggregate?: Maybe<Employee_Occupancy_Aggregate_Fields>;
  nodes: Array<Employee_Occupancy>;
};

export type Employee_Occupancy_Aggregate_Bool_Exp = {
  count?: InputMaybe<Employee_Occupancy_Aggregate_Bool_Exp_Count>;
};

export type Employee_Occupancy_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Employee_Occupancy_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Employee_Occupancy_Bool_Exp>;
  predicate: Int_Comparison_Exp;
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

/** order by aggregate values of table "employee_occupancy" */
export type Employee_Occupancy_Aggregate_Order_By = {
  avg?: InputMaybe<Employee_Occupancy_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Employee_Occupancy_Max_Order_By>;
  min?: InputMaybe<Employee_Occupancy_Min_Order_By>;
  stddev?: InputMaybe<Employee_Occupancy_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Employee_Occupancy_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Employee_Occupancy_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Employee_Occupancy_Sum_Order_By>;
  var_pop?: InputMaybe<Employee_Occupancy_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Employee_Occupancy_Var_Samp_Order_By>;
  variance?: InputMaybe<Employee_Occupancy_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "employee_occupancy" */
export type Employee_Occupancy_Arr_Rel_Insert_Input = {
  data: Array<Employee_Occupancy_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Employee_Occupancy_On_Conflict>;
};

/** aggregate avg on columns */
export type Employee_Occupancy_Avg_Fields = {
  __typename?: 'employee_occupancy_avg_fields';
  deal_id?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "employee_occupancy" */
export type Employee_Occupancy_Avg_Order_By = {
  deal_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "employee_occupancy". All fields are combined with a logical 'AND'. */
export type Employee_Occupancy_Bool_Exp = {
  _and?: InputMaybe<Array<Employee_Occupancy_Bool_Exp>>;
  _not?: InputMaybe<Employee_Occupancy_Bool_Exp>;
  _or?: InputMaybe<Array<Employee_Occupancy_Bool_Exp>>;
  date?: InputMaybe<Date_Comparison_Exp>;
  deal?: InputMaybe<Deal_Bool_Exp>;
  deal_id?: InputMaybe<Bigint_Comparison_Exp>;
  employee?: InputMaybe<Employee_Bool_Exp>;
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
  deal?: InputMaybe<Deal_Obj_Rel_Insert_Input>;
  deal_id?: InputMaybe<Scalars['bigint']['input']>;
  employee?: InputMaybe<Employee_Obj_Rel_Insert_Input>;
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

/** order by max() on columns of table "employee_occupancy" */
export type Employee_Occupancy_Max_Order_By = {
  date?: InputMaybe<Order_By>;
  deal_id?: InputMaybe<Order_By>;
  employee_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Employee_Occupancy_Min_Fields = {
  __typename?: 'employee_occupancy_min_fields';
  date?: Maybe<Scalars['date']['output']>;
  deal_id?: Maybe<Scalars['bigint']['output']>;
  employee_id?: Maybe<Scalars['uuid']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "employee_occupancy" */
export type Employee_Occupancy_Min_Order_By = {
  date?: InputMaybe<Order_By>;
  deal_id?: InputMaybe<Order_By>;
  employee_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
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
  deal?: InputMaybe<Deal_Order_By>;
  deal_id?: InputMaybe<Order_By>;
  employee?: InputMaybe<Employee_Order_By>;
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

/** order by stddev() on columns of table "employee_occupancy" */
export type Employee_Occupancy_Stddev_Order_By = {
  deal_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Employee_Occupancy_Stddev_Pop_Fields = {
  __typename?: 'employee_occupancy_stddev_pop_fields';
  deal_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "employee_occupancy" */
export type Employee_Occupancy_Stddev_Pop_Order_By = {
  deal_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Employee_Occupancy_Stddev_Samp_Fields = {
  __typename?: 'employee_occupancy_stddev_samp_fields';
  deal_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "employee_occupancy" */
export type Employee_Occupancy_Stddev_Samp_Order_By = {
  deal_id?: InputMaybe<Order_By>;
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

/** order by sum() on columns of table "employee_occupancy" */
export type Employee_Occupancy_Sum_Order_By = {
  deal_id?: InputMaybe<Order_By>;
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

/** order by var_pop() on columns of table "employee_occupancy" */
export type Employee_Occupancy_Var_Pop_Order_By = {
  deal_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Employee_Occupancy_Var_Samp_Fields = {
  __typename?: 'employee_occupancy_var_samp_fields';
  deal_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "employee_occupancy" */
export type Employee_Occupancy_Var_Samp_Order_By = {
  deal_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Employee_Occupancy_Variance_Fields = {
  __typename?: 'employee_occupancy_variance_fields';
  deal_id?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "employee_occupancy" */
export type Employee_Occupancy_Variance_Order_By = {
  deal_id?: InputMaybe<Order_By>;
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
  deals_aggregate?: InputMaybe<Deal_Employee_Aggregate_Order_By>;
  fullName?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  occupancy_aggregate?: InputMaybe<Employee_Occupancy_Aggregate_Order_By>;
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
  /** delete data from the table: "client_meta" */
  delete_client_meta?: Maybe<Client_Meta_Mutation_Response>;
  /** delete single row from the table: "client_meta" */
  delete_client_meta_by_pk?: Maybe<Client_Meta>;
  /** delete data from the table: "client_object" */
  delete_client_object?: Maybe<Client_Object_Mutation_Response>;
  /** delete single row from the table: "client_object" */
  delete_client_object_by_pk?: Maybe<Client_Object>;
  /** delete data from the table: "deal" */
  delete_deal?: Maybe<Deal_Mutation_Response>;
  /** delete single row from the table: "deal" */
  delete_deal_by_pk?: Maybe<Deal>;
  /** delete data from the table: "deal_employee" */
  delete_deal_employee?: Maybe<Deal_Employee_Mutation_Response>;
  /** delete single row from the table: "deal_employee" */
  delete_deal_employee_by_pk?: Maybe<Deal_Employee>;
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
  /** insert data into the table: "client_meta" */
  insert_client_meta?: Maybe<Client_Meta_Mutation_Response>;
  /** insert a single row into the table: "client_meta" */
  insert_client_meta_one?: Maybe<Client_Meta>;
  /** insert data into the table: "client_object" */
  insert_client_object?: Maybe<Client_Object_Mutation_Response>;
  /** insert a single row into the table: "client_object" */
  insert_client_object_one?: Maybe<Client_Object>;
  /** insert a single row into the table: "client" */
  insert_client_one?: Maybe<Client>;
  /** insert data into the table: "deal" */
  insert_deal?: Maybe<Deal_Mutation_Response>;
  /** insert data into the table: "deal_employee" */
  insert_deal_employee?: Maybe<Deal_Employee_Mutation_Response>;
  /** insert a single row into the table: "deal_employee" */
  insert_deal_employee_one?: Maybe<Deal_Employee>;
  /** insert a single row into the table: "deal" */
  insert_deal_one?: Maybe<Deal>;
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
  /** update multiples rows of table: "client" */
  update_client_many?: Maybe<Array<Maybe<Client_Mutation_Response>>>;
  /** update data of the table: "client_meta" */
  update_client_meta?: Maybe<Client_Meta_Mutation_Response>;
  /** update single row of the table: "client_meta" */
  update_client_meta_by_pk?: Maybe<Client_Meta>;
  /** update multiples rows of table: "client_meta" */
  update_client_meta_many?: Maybe<Array<Maybe<Client_Meta_Mutation_Response>>>;
  /** update data of the table: "client_object" */
  update_client_object?: Maybe<Client_Object_Mutation_Response>;
  /** update single row of the table: "client_object" */
  update_client_object_by_pk?: Maybe<Client_Object>;
  /** update multiples rows of table: "client_object" */
  update_client_object_many?: Maybe<Array<Maybe<Client_Object_Mutation_Response>>>;
  /** update data of the table: "deal" */
  update_deal?: Maybe<Deal_Mutation_Response>;
  /** update single row of the table: "deal" */
  update_deal_by_pk?: Maybe<Deal>;
  /** update data of the table: "deal_employee" */
  update_deal_employee?: Maybe<Deal_Employee_Mutation_Response>;
  /** update single row of the table: "deal_employee" */
  update_deal_employee_by_pk?: Maybe<Deal_Employee>;
  /** update multiples rows of table: "deal_employee" */
  update_deal_employee_many?: Maybe<Array<Maybe<Deal_Employee_Mutation_Response>>>;
  /** update multiples rows of table: "deal" */
  update_deal_many?: Maybe<Array<Maybe<Deal_Mutation_Response>>>;
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
export type Mutation_RootDelete_Client_MetaArgs = {
  where: Client_Meta_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Client_Meta_By_PkArgs = {
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
export type Mutation_RootDelete_DealArgs = {
  where: Deal_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Deal_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Deal_EmployeeArgs = {
  where: Deal_Employee_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Deal_Employee_By_PkArgs = {
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
export type Mutation_RootInsert_Client_MetaArgs = {
  objects: Array<Client_Meta_Insert_Input>;
  on_conflict?: InputMaybe<Client_Meta_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Client_Meta_OneArgs = {
  object: Client_Meta_Insert_Input;
  on_conflict?: InputMaybe<Client_Meta_On_Conflict>;
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
export type Mutation_RootInsert_DealArgs = {
  objects: Array<Deal_Insert_Input>;
  on_conflict?: InputMaybe<Deal_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Deal_EmployeeArgs = {
  objects: Array<Deal_Employee_Insert_Input>;
  on_conflict?: InputMaybe<Deal_Employee_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Deal_Employee_OneArgs = {
  object: Deal_Employee_Insert_Input;
  on_conflict?: InputMaybe<Deal_Employee_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Deal_OneArgs = {
  object: Deal_Insert_Input;
  on_conflict?: InputMaybe<Deal_On_Conflict>;
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
export type Mutation_RootUpdate_Client_ManyArgs = {
  updates: Array<Client_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Client_MetaArgs = {
  _set?: InputMaybe<Client_Meta_Set_Input>;
  where: Client_Meta_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Client_Meta_By_PkArgs = {
  _set?: InputMaybe<Client_Meta_Set_Input>;
  pk_columns: Client_Meta_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Client_Meta_ManyArgs = {
  updates: Array<Client_Meta_Updates>;
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
export type Mutation_RootUpdate_DealArgs = {
  _inc?: InputMaybe<Deal_Inc_Input>;
  _set?: InputMaybe<Deal_Set_Input>;
  where: Deal_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Deal_By_PkArgs = {
  _inc?: InputMaybe<Deal_Inc_Input>;
  _set?: InputMaybe<Deal_Set_Input>;
  pk_columns: Deal_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Deal_EmployeeArgs = {
  _inc?: InputMaybe<Deal_Employee_Inc_Input>;
  _set?: InputMaybe<Deal_Employee_Set_Input>;
  where: Deal_Employee_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Deal_Employee_By_PkArgs = {
  _inc?: InputMaybe<Deal_Employee_Inc_Input>;
  _set?: InputMaybe<Deal_Employee_Set_Input>;
  pk_columns: Deal_Employee_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Deal_Employee_ManyArgs = {
  updates: Array<Deal_Employee_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Deal_ManyArgs = {
  updates: Array<Deal_Updates>;
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
  /** An array relationship */
  client: Array<Client>;
  /** An aggregate relationship */
  client_aggregate: Client_Aggregate;
  /** fetch data from the table: "client" using primary key columns */
  client_by_pk?: Maybe<Client>;
  /** fetch data from the table: "client_meta" */
  client_meta: Array<Client_Meta>;
  /** fetch aggregated fields from the table: "client_meta" */
  client_meta_aggregate: Client_Meta_Aggregate;
  /** fetch data from the table: "client_meta" using primary key columns */
  client_meta_by_pk?: Maybe<Client_Meta>;
  /** fetch data from the table: "client_object" */
  client_object: Array<Client_Object>;
  /** fetch aggregated fields from the table: "client_object" */
  client_object_aggregate: Client_Object_Aggregate;
  /** fetch data from the table: "client_object" using primary key columns */
  client_object_by_pk?: Maybe<Client_Object>;
  /** fetch data from the table: "deal" */
  deal: Array<Deal>;
  /** fetch aggregated fields from the table: "deal" */
  deal_aggregate: Deal_Aggregate;
  /** fetch data from the table: "deal" using primary key columns */
  deal_by_pk?: Maybe<Deal>;
  /** fetch data from the table: "deal_employee" */
  deal_employee: Array<Deal_Employee>;
  /** fetch aggregated fields from the table: "deal_employee" */
  deal_employee_aggregate: Deal_Employee_Aggregate;
  /** fetch data from the table: "deal_employee" using primary key columns */
  deal_employee_by_pk?: Maybe<Deal_Employee>;
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


export type Query_RootClient_MetaArgs = {
  distinct_on?: InputMaybe<Array<Client_Meta_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Client_Meta_Order_By>>;
  where?: InputMaybe<Client_Meta_Bool_Exp>;
};


export type Query_RootClient_Meta_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Client_Meta_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Client_Meta_Order_By>>;
  where?: InputMaybe<Client_Meta_Bool_Exp>;
};


export type Query_RootClient_Meta_By_PkArgs = {
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


export type Query_RootDealArgs = {
  distinct_on?: InputMaybe<Array<Deal_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Deal_Order_By>>;
  where?: InputMaybe<Deal_Bool_Exp>;
};


export type Query_RootDeal_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Deal_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Deal_Order_By>>;
  where?: InputMaybe<Deal_Bool_Exp>;
};


export type Query_RootDeal_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Query_RootDeal_EmployeeArgs = {
  distinct_on?: InputMaybe<Array<Deal_Employee_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Deal_Employee_Order_By>>;
  where?: InputMaybe<Deal_Employee_Bool_Exp>;
};


export type Query_RootDeal_Employee_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Deal_Employee_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Deal_Employee_Order_By>>;
  where?: InputMaybe<Deal_Employee_Bool_Exp>;
};


export type Query_RootDeal_Employee_By_PkArgs = {
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
  /** An array relationship */
  client: Array<Client>;
  /** An aggregate relationship */
  client_aggregate: Client_Aggregate;
  /** fetch data from the table: "client" using primary key columns */
  client_by_pk?: Maybe<Client>;
  /** fetch data from the table: "client_meta" */
  client_meta: Array<Client_Meta>;
  /** fetch aggregated fields from the table: "client_meta" */
  client_meta_aggregate: Client_Meta_Aggregate;
  /** fetch data from the table: "client_meta" using primary key columns */
  client_meta_by_pk?: Maybe<Client_Meta>;
  /** fetch data from the table in a streaming manner: "client_meta" */
  client_meta_stream: Array<Client_Meta>;
  /** fetch data from the table: "client_object" */
  client_object: Array<Client_Object>;
  /** fetch aggregated fields from the table: "client_object" */
  client_object_aggregate: Client_Object_Aggregate;
  /** fetch data from the table: "client_object" using primary key columns */
  client_object_by_pk?: Maybe<Client_Object>;
  /** fetch data from the table in a streaming manner: "client_object" */
  client_object_stream: Array<Client_Object>;
  /** fetch data from the table in a streaming manner: "client" */
  client_stream: Array<Client>;
  /** fetch data from the table: "deal" */
  deal: Array<Deal>;
  /** fetch aggregated fields from the table: "deal" */
  deal_aggregate: Deal_Aggregate;
  /** fetch data from the table: "deal" using primary key columns */
  deal_by_pk?: Maybe<Deal>;
  /** fetch data from the table: "deal_employee" */
  deal_employee: Array<Deal_Employee>;
  /** fetch aggregated fields from the table: "deal_employee" */
  deal_employee_aggregate: Deal_Employee_Aggregate;
  /** fetch data from the table: "deal_employee" using primary key columns */
  deal_employee_by_pk?: Maybe<Deal_Employee>;
  /** fetch data from the table in a streaming manner: "deal_employee" */
  deal_employee_stream: Array<Deal_Employee>;
  /** fetch data from the table in a streaming manner: "deal" */
  deal_stream: Array<Deal>;
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


export type Subscription_RootClient_MetaArgs = {
  distinct_on?: InputMaybe<Array<Client_Meta_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Client_Meta_Order_By>>;
  where?: InputMaybe<Client_Meta_Bool_Exp>;
};


export type Subscription_RootClient_Meta_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Client_Meta_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Client_Meta_Order_By>>;
  where?: InputMaybe<Client_Meta_Bool_Exp>;
};


export type Subscription_RootClient_Meta_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootClient_Meta_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Client_Meta_Stream_Cursor_Input>>;
  where?: InputMaybe<Client_Meta_Bool_Exp>;
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


export type Subscription_RootClient_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Client_Stream_Cursor_Input>>;
  where?: InputMaybe<Client_Bool_Exp>;
};


export type Subscription_RootDealArgs = {
  distinct_on?: InputMaybe<Array<Deal_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Deal_Order_By>>;
  where?: InputMaybe<Deal_Bool_Exp>;
};


export type Subscription_RootDeal_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Deal_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Deal_Order_By>>;
  where?: InputMaybe<Deal_Bool_Exp>;
};


export type Subscription_RootDeal_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Subscription_RootDeal_EmployeeArgs = {
  distinct_on?: InputMaybe<Array<Deal_Employee_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Deal_Employee_Order_By>>;
  where?: InputMaybe<Deal_Employee_Bool_Exp>;
};


export type Subscription_RootDeal_Employee_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Deal_Employee_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Deal_Employee_Order_By>>;
  where?: InputMaybe<Deal_Employee_Bool_Exp>;
};


export type Subscription_RootDeal_Employee_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootDeal_Employee_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Deal_Employee_Stream_Cursor_Input>>;
  where?: InputMaybe<Deal_Employee_Bool_Exp>;
};


export type Subscription_RootDeal_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Deal_Stream_Cursor_Input>>;
  where?: InputMaybe<Deal_Bool_Exp>;
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

export type ClientsQueryVariables = Exact<{
  offset?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
}>;


export type ClientsQuery = { __typename?: 'query_root', client: Array<{ __typename?: 'client', id: any, created_at: any, updated_at: any, fullName: string, objects?: { __typename?: 'client_object', name: string } | null }> };


export const ClientsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Clients"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"offset"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"client"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"offset"},"value":{"kind":"Variable","name":{"kind":"Name","value":"offset"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}},{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"objects"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<ClientsQuery, ClientsQueryVariables>;