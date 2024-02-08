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
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /**
   * The `DateTime` scalar type represents a DateTime
   * value as specified by
   * [iso8601](https://en.wikipedia.org/wiki/ISO_8601).
   */
  DateTime: { input: any; output: any; }
};

export type AppointmentMutationInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  date: Scalars['DateTime']['input'];
  doctor: Scalars['ID']['input'];
  email: Scalars['String']['input'];
  fullname: Scalars['String']['input'];
  id?: InputMaybe<Scalars['ID']['input']>;
  phoneNumber: Scalars['String']['input'];
  specialization: Scalars['ID']['input'];
};

export type AppointmentMutationPayload = {
  __typename?: 'AppointmentMutationPayload';
  appointment?: Maybe<AppointmentType>;
  clientMutationId?: Maybe<Scalars['String']['output']>;
  errors: Array<ErrorType>;
};

export type AppointmentType = {
  __typename?: 'AppointmentType';
  date: Scalars['DateTime']['output'];
  doctor: DoctorType;
  email: Scalars['String']['output'];
  fullname: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  phoneNumber: Scalars['String']['output'];
  specialization: SpecializationType;
};

export type DoctorType = {
  __typename?: 'DoctorType';
  appointmentSet: Array<AppointmentType>;
  doctor: Scalars['String']['output'];
  id: Scalars['ID']['output'];
};

export type ErrorType = {
  __typename?: 'ErrorType';
  field: Scalars['String']['output'];
  messages: Array<Scalars['String']['output']>;
};

export type InboxMutationInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  fullname: Scalars['String']['input'];
  id?: InputMaybe<Scalars['ID']['input']>;
  message: Scalars['String']['input'];
  phoneNumber: Scalars['String']['input'];
  subject: Scalars['String']['input'];
};

export type InboxMutationPayload = {
  __typename?: 'InboxMutationPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  errors: Array<ErrorType>;
  inbox?: Maybe<InboxType>;
};

export type InboxType = {
  __typename?: 'InboxType';
  date: Scalars['DateTime']['output'];
  email: Scalars['String']['output'];
  fullname: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  message: Scalars['String']['output'];
  phoneNumber: Scalars['String']['output'];
  subject: Scalars['String']['output'];
};

export type Mutations = {
  __typename?: 'Mutations';
  createAppointment?: Maybe<AppointmentMutationPayload>;
  createInbox?: Maybe<InboxMutationPayload>;
};


export type MutationsCreateAppointmentArgs = {
  input: AppointmentMutationInput;
};


export type MutationsCreateInboxArgs = {
  input: InboxMutationInput;
};

export type NewsType = {
  __typename?: 'NewsType';
  content: Scalars['String']['output'];
  date: Scalars['DateTime']['output'];
  headline: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  image: Scalars['String']['output'];
  publish: Scalars['Boolean']['output'];
};

export type Queries = {
  __typename?: 'Queries';
  News?: Maybe<Array<NewsType>>;
  appointments?: Maybe<Array<AppointmentType>>;
  doctors?: Maybe<Array<DoctorType>>;
  inbox?: Maybe<Array<InboxType>>;
  specialization?: Maybe<Array<SpecializationType>>;
};

export type SpecializationType = {
  __typename?: 'SpecializationType';
  appointmentSet: Array<AppointmentType>;
  id: Scalars['ID']['output'];
  title: Scalars['String']['output'];
};

export type InboxMutationMutationVariables = Exact<{
  input: InboxMutationInput;
}>;


export type InboxMutationMutation = { __typename?: 'Mutations', createInbox?: { __typename?: 'InboxMutationPayload', errors: Array<{ __typename?: 'ErrorType', messages: Array<string> }>, inbox?: { __typename?: 'InboxType', id: string } | null } | null };

export type AppointmentMutationMutationVariables = Exact<{
  input: AppointmentMutationInput;
}>;


export type AppointmentMutationMutation = { __typename?: 'Mutations', createAppointment?: { __typename?: 'AppointmentMutationPayload', errors: Array<{ __typename?: 'ErrorType', messages: Array<string> }>, appointment?: { __typename?: 'AppointmentType', id: string } | null } | null };

export type SpecializationQueryVariables = Exact<{ [key: string]: never; }>;


export type SpecializationQuery = { __typename?: 'Queries', specialization?: Array<{ __typename?: 'SpecializationType', id: string, title: string }> | null };

export type DoctorsQueryVariables = Exact<{ [key: string]: never; }>;


export type DoctorsQuery = { __typename?: 'Queries', doctors?: Array<{ __typename?: 'DoctorType', id: string, doctor: string }> | null };


export const InboxMutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"InboxMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"InboxMutationInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createInbox"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"errors"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"messages"}}]}},{"kind":"Field","name":{"kind":"Name","value":"inbox"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<InboxMutationMutation, InboxMutationMutationVariables>;
export const AppointmentMutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AppointmentMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"AppointmentMutationInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createAppointment"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"errors"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"messages"}}]}},{"kind":"Field","name":{"kind":"Name","value":"appointment"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<AppointmentMutationMutation, AppointmentMutationMutationVariables>;
export const SpecializationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Specialization"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"specialization"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]} as unknown as DocumentNode<SpecializationQuery, SpecializationQueryVariables>;
export const DoctorsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Doctors"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"doctors"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"doctor"}}]}}]}}]} as unknown as DocumentNode<DoctorsQuery, DoctorsQueryVariables>;