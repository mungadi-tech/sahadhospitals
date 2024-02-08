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
    "mutation InboxMutation($input: InboxMutationInput!) {\n  createInbox(input: $input) {\n    errors {\n      messages\n    }\n    inbox {\n      id\n    }\n  }\n}\n\nmutation AppointmentMutation($input: AppointmentMutationInput!) {\n  createAppointment(input: $input) {\n    errors {\n      messages\n    }\n    appointment {\n      id\n    }\n  }\n}": types.InboxMutationDocument,
    "query Specialization {\n  specialization {\n    id\n    title\n  }\n}\n\nquery Doctors {\n  doctors {\n    id\n    doctor\n  }\n}": types.SpecializationDocument,
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
export function graphql(source: "mutation InboxMutation($input: InboxMutationInput!) {\n  createInbox(input: $input) {\n    errors {\n      messages\n    }\n    inbox {\n      id\n    }\n  }\n}\n\nmutation AppointmentMutation($input: AppointmentMutationInput!) {\n  createAppointment(input: $input) {\n    errors {\n      messages\n    }\n    appointment {\n      id\n    }\n  }\n}"): (typeof documents)["mutation InboxMutation($input: InboxMutationInput!) {\n  createInbox(input: $input) {\n    errors {\n      messages\n    }\n    inbox {\n      id\n    }\n  }\n}\n\nmutation AppointmentMutation($input: AppointmentMutationInput!) {\n  createAppointment(input: $input) {\n    errors {\n      messages\n    }\n    appointment {\n      id\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query Specialization {\n  specialization {\n    id\n    title\n  }\n}\n\nquery Doctors {\n  doctors {\n    id\n    doctor\n  }\n}"): (typeof documents)["query Specialization {\n  specialization {\n    id\n    title\n  }\n}\n\nquery Doctors {\n  doctors {\n    id\n    doctor\n  }\n}"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;