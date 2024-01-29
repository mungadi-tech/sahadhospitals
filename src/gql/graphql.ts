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
  /**
   * The `GenericScalar` scalar type represents a generic
   * GraphQL scalar value that could be:
   * String, Boolean, Int, Float, List or Object.
   */
  GenericScalar: { input: any; output: any; }
};

export type DeleteJsonWebTokenCookie = {
  __typename?: 'DeleteJSONWebTokenCookie';
  deleted: Scalars['Boolean']['output'];
};

export type DeleteRefreshTokenCookie = {
  __typename?: 'DeleteRefreshTokenCookie';
  deleted: Scalars['Boolean']['output'];
};

export type ErrorType = {
  __typename?: 'ErrorType';
  field: Scalars['String']['output'];
  messages: Array<Scalars['String']['output']>;
};

export type InterviewAnswerMutationInput = {
  answer: Scalars['String']['input'];
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  question: Scalars['ID']['input'];
  shouldDelete?: InputMaybe<Scalars['Boolean']['input']>;
  user: Scalars['ID']['input'];
};

export type InterviewAnswerMutationPayload = {
  __typename?: 'InterviewAnswerMutationPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  errors: Array<ErrorType>;
  interviewAnswers?: Maybe<InterviewAnswersType>;
};

export type InterviewAnswersType = {
  __typename?: 'InterviewAnswersType';
  answer: InterviewInterviewAnswersAnswerChoices;
  id: Scalars['ID']['output'];
  question: InterviewQuestionsType;
  user: UsersType;
};

export type InterviewAnswersTypeConnection = {
  __typename?: 'InterviewAnswersTypeConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<InterviewAnswersTypeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
};

/** A Relay edge containing a `InterviewAnswersType` and its cursor. */
export type InterviewAnswersTypeEdge = {
  __typename?: 'InterviewAnswersTypeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<InterviewAnswersType>;
};

/** An enumeration. */
export enum InterviewInterviewAnswersAnswerChoices {
  /** A */
  A = 'A',
  /** B */
  B = 'B',
  /** C */
  C = 'C',
  /** D */
  D = 'D'
}

/** An enumeration. */
export enum InterviewInterviewQuestionsAnswerChoices {
  /** A */
  A = 'A',
  /** B */
  B = 'B',
  /** C */
  C = 'C',
  /** D */
  D = 'D'
}

export type InterviewQuestionsMutationInput = {
  answer: Scalars['String']['input'];
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  job: Scalars['ID']['input'];
  optionA: Scalars['String']['input'];
  optionB: Scalars['String']['input'];
  optionC: Scalars['String']['input'];
  optionD: Scalars['String']['input'];
  question: Scalars['String']['input'];
  shouldDelete?: InputMaybe<Scalars['Boolean']['input']>;
};

export type InterviewQuestionsMutationPayload = {
  __typename?: 'InterviewQuestionsMutationPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  errors: Array<ErrorType>;
  interviewQuestions?: Maybe<InterviewQuestionsType>;
};

export type InterviewQuestionsType = {
  __typename?: 'InterviewQuestionsType';
  answer: InterviewInterviewQuestionsAnswerChoices;
  id: Scalars['ID']['output'];
  interviewanswersSet: InterviewAnswersTypeConnection;
  job: JobsType;
  optionA: Scalars['String']['output'];
  optionB: Scalars['String']['output'];
  optionC: Scalars['String']['output'];
  optionD: Scalars['String']['output'];
  question: Scalars['String']['output'];
};


export type InterviewQuestionsTypeInterviewanswersSetArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  user?: InputMaybe<Scalars['ID']['input']>;
};

export type InterviewQuestionsTypeConnection = {
  __typename?: 'InterviewQuestionsTypeConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<InterviewQuestionsTypeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
};

/** A Relay edge containing a `InterviewQuestionsType` and its cursor. */
export type InterviewQuestionsTypeEdge = {
  __typename?: 'InterviewQuestionsTypeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<InterviewQuestionsType>;
};

export type JobTypesMutationInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  shouldDelete?: InputMaybe<Scalars['Boolean']['input']>;
  type: Scalars['String']['input'];
};

export type JobTypesMutationPayload = {
  __typename?: 'JobTypesMutationPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  errors: Array<ErrorType>;
  jobTypes?: Maybe<JobTypesType>;
};

export type JobTypesType = {
  __typename?: 'JobTypesType';
  id: Scalars['ID']['output'];
  jobsSet: JobsTypeConnection;
  type: Scalars['String']['output'];
};


export type JobTypesTypeJobsSetArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  isClosed?: InputMaybe<Scalars['Boolean']['input']>;
  isCompleted?: InputMaybe<Scalars['Boolean']['input']>;
  isOpen?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  publish?: InputMaybe<Scalars['Boolean']['input']>;
};

export type JobTypesTypeConnection = {
  __typename?: 'JobTypesTypeConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<JobTypesTypeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
};

/** A Relay edge containing a `JobTypesType` and its cursor. */
export type JobTypesTypeEdge = {
  __typename?: 'JobTypesTypeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<JobTypesType>;
};

export type JobsMutationInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  description: Scalars['String']['input'];
  id?: InputMaybe<Scalars['ID']['input']>;
  isClosed?: InputMaybe<Scalars['Boolean']['input']>;
  isCompleted?: InputMaybe<Scalars['Boolean']['input']>;
  isOpen?: InputMaybe<Scalars['Boolean']['input']>;
  jobType: Array<InputMaybe<Scalars['ID']['input']>>;
  location: Scalars['String']['input'];
  publish?: InputMaybe<Scalars['Boolean']['input']>;
  role: Array<InputMaybe<Scalars['ID']['input']>>;
  shouldDelete?: InputMaybe<Scalars['Boolean']['input']>;
  staffQuantity: Scalars['Int']['input'];
  title: Scalars['String']['input'];
};

export type JobsMutationPayload = {
  __typename?: 'JobsMutationPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  errors: Array<ErrorType>;
  jobs?: Maybe<JobsType>;
};

export type JobsType = {
  __typename?: 'JobsType';
  dateCreated: Scalars['DateTime']['output'];
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  interviewquestionsSet: InterviewQuestionsTypeConnection;
  isClosed: Scalars['Boolean']['output'];
  isCompleted: Scalars['Boolean']['output'];
  isOpen: Scalars['Boolean']['output'];
  jobType: JobTypesTypeConnection;
  location: Scalars['String']['output'];
  publish: Scalars['Boolean']['output'];
  recruitedSet: RecruitedTypeConnection;
  role: RolesTypeConnection;
  staffQuantity: Scalars['Int']['output'];
  title: Scalars['String']['output'];
};


export type JobsTypeInterviewquestionsSetArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  job?: InputMaybe<Scalars['ID']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type JobsTypeJobTypeArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};


export type JobsTypeRecruitedSetArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  job?: InputMaybe<Scalars['ID']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type JobsTypeRoleArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  role?: InputMaybe<Scalars['String']['input']>;
};

export type JobsTypeConnection = {
  __typename?: 'JobsTypeConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<JobsTypeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
};

/** A Relay edge containing a `JobsType` and its cursor. */
export type JobsTypeEdge = {
  __typename?: 'JobsTypeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<JobsType>;
};

export type Mutation = {
  __typename?: 'Mutation';
  deleteRefreshTokenCookie?: Maybe<DeleteRefreshTokenCookie>;
  deleteTokenCookie?: Maybe<DeleteJsonWebTokenCookie>;
  /** Obtain JSON Web Token mutation */
  login?: Maybe<ObtainJsonWebToken>;
  newUser?: Maybe<NewUserMutationPayload>;
  refreshToken?: Maybe<Refresh>;
  updateInterviewAnswer?: Maybe<InterviewAnswerMutationPayload>;
  updateInterviewQuestion?: Maybe<InterviewQuestionsMutationPayload>;
  updateJobTypes?: Maybe<JobTypesMutationPayload>;
  updateJobs?: Maybe<JobsMutationPayload>;
  updateRecruited?: Maybe<RecruitedMutationPayload>;
  updateRoles?: Maybe<RolesMutationPayload>;
  updateUser?: Maybe<UpdateUserMutationPayload>;
  verifyToken?: Maybe<Verify>;
};


export type MutationLoginArgs = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};


export type MutationNewUserArgs = {
  input: NewUserMutationInput;
};


export type MutationRefreshTokenArgs = {
  token?: InputMaybe<Scalars['String']['input']>;
};


export type MutationUpdateInterviewAnswerArgs = {
  input: InterviewAnswerMutationInput;
};


export type MutationUpdateInterviewQuestionArgs = {
  input: InterviewQuestionsMutationInput;
};


export type MutationUpdateJobTypesArgs = {
  input: JobTypesMutationInput;
};


export type MutationUpdateJobsArgs = {
  input: JobsMutationInput;
};


export type MutationUpdateRecruitedArgs = {
  input: RecruitedMutationInput;
};


export type MutationUpdateRolesArgs = {
  input: RolesMutationInput;
};


export type MutationUpdateUserArgs = {
  input: UpdateUserMutationInput;
};


export type MutationVerifyTokenArgs = {
  token?: InputMaybe<Scalars['String']['input']>;
};

export type NewUserMutationInput = {
  avatar?: InputMaybe<Scalars['String']['input']>;
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  firstName?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  middleName?: InputMaybe<Scalars['String']['input']>;
  /** <ul><li>Your password can’t be too similar to your other personal information.</li><li>Your password must contain at least 8 characters.</li><li>Your password can’t be a commonly used password.</li><li>Your password can’t be entirely numeric.</li></ul> */
  password1: Scalars['String']['input'];
  /** Enter the same password as before, for verification. */
  password2: Scalars['String']['input'];
  resume?: InputMaybe<Scalars['String']['input']>;
  /** Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only. */
  username: Scalars['String']['input'];
};

export type NewUserMutationPayload = {
  __typename?: 'NewUserMutationPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  errors: Array<ErrorType>;
  users?: Maybe<UsersType>;
};

/** Obtain JSON Web Token mutation */
export type ObtainJsonWebToken = {
  __typename?: 'ObtainJSONWebToken';
  payload: Scalars['GenericScalar']['output'];
  refreshExpiresIn: Scalars['Int']['output'];
  token: Scalars['String']['output'];
};

/** The Relay compliant `PageInfo` type, containing data necessary to paginate this connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']['output']>;
};

export type Query = {
  __typename?: 'Query';
  authUser?: Maybe<UsersType>;
  interviewAnswers?: Maybe<InterviewAnswersTypeConnection>;
  interviewQuestions?: Maybe<InterviewQuestionsTypeConnection>;
  jobTypes?: Maybe<JobTypesTypeConnection>;
  jobs?: Maybe<JobsTypeConnection>;
  recruited?: Maybe<RecruitedTypeConnection>;
  roles?: Maybe<RolesTypeConnection>;
  users?: Maybe<UsersTypeConnection>;
};


export type QueryInterviewAnswersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  user?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryInterviewQuestionsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  job?: InputMaybe<Scalars['ID']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryJobTypesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};


export type QueryJobsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  isClosed?: InputMaybe<Scalars['Boolean']['input']>;
  isCompleted?: InputMaybe<Scalars['Boolean']['input']>;
  isOpen?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  publish?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryRecruitedArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  job?: InputMaybe<Scalars['ID']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryRolesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  role?: InputMaybe<Scalars['String']['input']>;
};


export type QueryUsersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};

export type RecruitedMutationInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  job: Scalars['ID']['input'];
  note: Scalars['String']['input'];
  shouldDelete?: InputMaybe<Scalars['Boolean']['input']>;
  user: Scalars['ID']['input'];
};

export type RecruitedMutationPayload = {
  __typename?: 'RecruitedMutationPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  errors: Array<ErrorType>;
  recruited?: Maybe<RecruitedType>;
};

export type RecruitedType = {
  __typename?: 'RecruitedType';
  date: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  job: JobsType;
  note: Scalars['String']['output'];
  user: UsersType;
};

export type RecruitedTypeConnection = {
  __typename?: 'RecruitedTypeConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<RecruitedTypeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
};

/** A Relay edge containing a `RecruitedType` and its cursor. */
export type RecruitedTypeEdge = {
  __typename?: 'RecruitedTypeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<RecruitedType>;
};

export type Refresh = {
  __typename?: 'Refresh';
  payload: Scalars['GenericScalar']['output'];
  refreshExpiresIn: Scalars['Int']['output'];
  token: Scalars['String']['output'];
};

export type RolesMutationInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  role: Scalars['String']['input'];
  shouldDelete?: InputMaybe<Scalars['Boolean']['input']>;
};

export type RolesMutationPayload = {
  __typename?: 'RolesMutationPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  errors: Array<ErrorType>;
  roles?: Maybe<RolesType>;
};

export type RolesType = {
  __typename?: 'RolesType';
  id: Scalars['ID']['output'];
  jobsSet: JobsTypeConnection;
  role: Scalars['String']['output'];
};


export type RolesTypeJobsSetArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  isClosed?: InputMaybe<Scalars['Boolean']['input']>;
  isCompleted?: InputMaybe<Scalars['Boolean']['input']>;
  isOpen?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  publish?: InputMaybe<Scalars['Boolean']['input']>;
};

export type RolesTypeConnection = {
  __typename?: 'RolesTypeConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<RolesTypeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
};

/** A Relay edge containing a `RolesType` and its cursor. */
export type RolesTypeEdge = {
  __typename?: 'RolesTypeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<RolesType>;
};

export type UpdateUserMutationInput = {
  avatar?: InputMaybe<Scalars['String']['input']>;
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  firstName?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** Designates whether this user should be treated as active. Unselect this instead of deleting accounts. */
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  /** Designates whether the user can log into this admin site. */
  isStaff?: InputMaybe<Scalars['Boolean']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  middleName?: InputMaybe<Scalars['String']['input']>;
  resume?: InputMaybe<Scalars['String']['input']>;
  shouldDelete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only. */
  username: Scalars['String']['input'];
};

export type UpdateUserMutationPayload = {
  __typename?: 'UpdateUserMutationPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  errors: Array<ErrorType>;
  users?: Maybe<UsersType>;
};

export type UsersType = {
  __typename?: 'UsersType';
  avatar: Scalars['String']['output'];
  dateJoined: Scalars['DateTime']['output'];
  email: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  interviewanswersSet: InterviewAnswersTypeConnection;
  /** Designates whether this user should be treated as active. Unselect this instead of deleting accounts. */
  isActive: Scalars['Boolean']['output'];
  /** Designates whether the user can log into this admin site. */
  isStaff: Scalars['Boolean']['output'];
  /** Designates that this user has all permissions without explicitly assigning them. */
  isSuperuser: Scalars['Boolean']['output'];
  lastLogin?: Maybe<Scalars['DateTime']['output']>;
  lastName: Scalars['String']['output'];
  middleName: Scalars['String']['output'];
  password: Scalars['String']['output'];
  recruitedSet: RecruitedTypeConnection;
  resume: Scalars['String']['output'];
  /** Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only. */
  username: Scalars['String']['output'];
};


export type UsersTypeInterviewanswersSetArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  user?: InputMaybe<Scalars['ID']['input']>;
};


export type UsersTypeRecruitedSetArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  job?: InputMaybe<Scalars['ID']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};

export type UsersTypeConnection = {
  __typename?: 'UsersTypeConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<UsersTypeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
};

/** A Relay edge containing a `UsersType` and its cursor. */
export type UsersTypeEdge = {
  __typename?: 'UsersTypeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<UsersType>;
};

export type Verify = {
  __typename?: 'Verify';
  payload: Scalars['GenericScalar']['output'];
};

export type NewUserMutationVariables = Exact<{
  input: NewUserMutationInput;
}>;


export type NewUserMutation = { __typename?: 'Mutation', newUser?: { __typename?: 'NewUserMutationPayload', errors: Array<{ __typename?: 'ErrorType', messages: Array<string> }>, users?: { __typename?: 'UsersType', id: string } | null } | null };

export type UpdateUserMutationVariables = Exact<{
  input: UpdateUserMutationInput;
}>;


export type UpdateUserMutation = { __typename?: 'Mutation', updateUser?: { __typename?: 'UpdateUserMutationPayload', errors: Array<{ __typename?: 'ErrorType', messages: Array<string> }>, users?: { __typename?: 'UsersType', id: string } | null } | null };

export type NewInterviewQuestionsMutationVariables = Exact<{
  input: InterviewQuestionsMutationInput;
}>;


export type NewInterviewQuestionsMutation = { __typename?: 'Mutation', updateInterviewQuestion?: { __typename?: 'InterviewQuestionsMutationPayload', errors: Array<{ __typename?: 'ErrorType', messages: Array<string> }>, interviewQuestions?: { __typename?: 'InterviewQuestionsType', id: string } | null } | null };

export type NewInterviewAnswersMutationVariables = Exact<{
  input: InterviewAnswerMutationInput;
}>;


export type NewInterviewAnswersMutation = { __typename?: 'Mutation', updateInterviewAnswer?: { __typename?: 'InterviewAnswerMutationPayload', errors: Array<{ __typename?: 'ErrorType', messages: Array<string> }>, interviewAnswers?: { __typename?: 'InterviewAnswersType', id: string } | null } | null };

export type NewJobsMutationVariables = Exact<{
  input: JobsMutationInput;
}>;


export type NewJobsMutation = { __typename?: 'Mutation', updateJobs?: { __typename?: 'JobsMutationPayload', errors: Array<{ __typename?: 'ErrorType', messages: Array<string> }>, jobs?: { __typename?: 'JobsType', id: string } | null } | null };

export type NewJobTypesMutationVariables = Exact<{
  input: JobTypesMutationInput;
}>;


export type NewJobTypesMutation = { __typename?: 'Mutation', updateJobTypes?: { __typename?: 'JobTypesMutationPayload', errors: Array<{ __typename?: 'ErrorType', messages: Array<string> }>, jobTypes?: { __typename?: 'JobTypesType', id: string } | null } | null };

export type NewRolesMutationVariables = Exact<{
  input: RolesMutationInput;
}>;


export type NewRolesMutation = { __typename?: 'Mutation', updateRoles?: { __typename?: 'RolesMutationPayload', errors: Array<{ __typename?: 'ErrorType', messages: Array<string> }>, roles?: { __typename?: 'RolesType', id: string } | null } | null };

export type NewRecruitedMutationVariables = Exact<{
  input: RecruitedMutationInput;
}>;


export type NewRecruitedMutation = { __typename?: 'Mutation', updateRecruited?: { __typename?: 'RecruitedMutationPayload', errors: Array<{ __typename?: 'ErrorType', messages: Array<string> }>, recruited?: { __typename?: 'RecruitedType', id: string } | null } | null };

export type LoginMutationVariables = Exact<{
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
}>;


export type LoginMutation = { __typename?: 'Mutation', login?: { __typename?: 'ObtainJSONWebToken', token: string } | null };

export type VerifyTokenMutationVariables = Exact<{
  token?: InputMaybe<Scalars['String']['input']>;
}>;


export type VerifyTokenMutation = { __typename?: 'Mutation', verifyToken?: { __typename?: 'Verify', payload: any } | null };

export type UsersQueryVariables = Exact<{
  id?: InputMaybe<Scalars['ID']['input']>;
}>;


export type UsersQuery = { __typename?: 'Query', users?: { __typename?: 'UsersTypeConnection', edges: Array<{ __typename?: 'UsersTypeEdge', node?: { __typename?: 'UsersType', id: string, username: string, email: string, firstName: string, middleName: string, avatar: string, resume: string, lastName: string, lastLogin?: any | null, isSuperuser: boolean, isStaff: boolean, isActive: boolean } | null } | null> } | null };

export type AuthUserQueryVariables = Exact<{ [key: string]: never; }>;


export type AuthUserQuery = { __typename?: 'Query', authUser?: { __typename?: 'UsersType', id: string, username: string, email: string, firstName: string, lastName: string, middleName: string, avatar: string, resume: string, lastLogin?: any | null, isSuperuser: boolean, isStaff: boolean, isActive: boolean } | null };

export type JobsQueryVariables = Exact<{
  id?: InputMaybe<Scalars['ID']['input']>;
  publish?: InputMaybe<Scalars['Boolean']['input']>;
  isOpen?: InputMaybe<Scalars['Boolean']['input']>;
  isClosed?: InputMaybe<Scalars['Boolean']['input']>;
  isCompleted?: InputMaybe<Scalars['Boolean']['input']>;
}>;


export type JobsQuery = { __typename?: 'Query', jobs?: { __typename?: 'JobsTypeConnection', edges: Array<{ __typename?: 'JobsTypeEdge', node?: { __typename?: 'JobsType', id: string, dateCreated: any, title: string, staffQuantity: number, description: string, location: string, publish: boolean, isOpen: boolean, isClosed: boolean, isCompleted: boolean, jobType: { __typename?: 'JobTypesTypeConnection', edges: Array<{ __typename?: 'JobTypesTypeEdge', node?: { __typename?: 'JobTypesType', id: string, type: string } | null } | null> }, role: { __typename?: 'RolesTypeConnection', edges: Array<{ __typename?: 'RolesTypeEdge', node?: { __typename?: 'RolesType', id: string, role: string } | null } | null> } } | null } | null> } | null };

export type JobTypesQueryVariables = Exact<{
  id?: InputMaybe<Scalars['ID']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
}>;


export type JobTypesQuery = { __typename?: 'Query', jobTypes?: { __typename?: 'JobTypesTypeConnection', edges: Array<{ __typename?: 'JobTypesTypeEdge', node?: { __typename?: 'JobTypesType', id: string, type: string } | null } | null> } | null };

export type RolesQueryVariables = Exact<{
  id?: InputMaybe<Scalars['ID']['input']>;
  role?: InputMaybe<Scalars['String']['input']>;
}>;


export type RolesQuery = { __typename?: 'Query', roles?: { __typename?: 'RolesTypeConnection', edges: Array<{ __typename?: 'RolesTypeEdge', node?: { __typename?: 'RolesType', id: string, role: string } | null } | null> } | null };

export type InterviewAnswersQueryVariables = Exact<{
  id?: InputMaybe<Scalars['ID']['input']>;
  user?: InputMaybe<Scalars['ID']['input']>;
}>;


export type InterviewAnswersQuery = { __typename?: 'Query', interviewAnswers?: { __typename?: 'InterviewAnswersTypeConnection', edges: Array<{ __typename?: 'InterviewAnswersTypeEdge', node?: { __typename?: 'InterviewAnswersType', id: string, answer: InterviewInterviewAnswersAnswerChoices, question: { __typename?: 'InterviewQuestionsType', id: string, question: string, optionA: string, optionB: string, optionC: string, optionD: string, answer: InterviewInterviewQuestionsAnswerChoices } } | null } | null> } | null };

export type InterviewQuestionsQueryVariables = Exact<{
  id?: InputMaybe<Scalars['ID']['input']>;
  job?: InputMaybe<Scalars['ID']['input']>;
}>;


export type InterviewQuestionsQuery = { __typename?: 'Query', interviewQuestions?: { __typename?: 'InterviewQuestionsTypeConnection', edges: Array<{ __typename?: 'InterviewQuestionsTypeEdge', node?: { __typename?: 'InterviewQuestionsType', id: string, question: string, optionA: string, optionB: string, optionC: string, optionD: string, answer: InterviewInterviewQuestionsAnswerChoices, job: { __typename?: 'JobsType', id: string, isOpen: boolean, isClosed: boolean, isCompleted: boolean } } | null } | null> } | null };

export type RecruitedQueryVariables = Exact<{
  id?: InputMaybe<Scalars['ID']['input']>;
  job?: InputMaybe<Scalars['ID']['input']>;
}>;


export type RecruitedQuery = { __typename?: 'Query', recruited?: { __typename?: 'RecruitedTypeConnection', edges: Array<{ __typename?: 'RecruitedTypeEdge', node?: { __typename?: 'RecruitedType', id: string, date: any, note: string, user: { __typename?: 'UsersType', id: string, email: string }, job: { __typename?: 'JobsType', id: string, isClosed: boolean, isCompleted: boolean, publish: boolean, isOpen: boolean, dateCreated: any, title: string, location: string, staffQuantity: number, description: string, role: { __typename?: 'RolesTypeConnection', edges: Array<{ __typename?: 'RolesTypeEdge', node?: { __typename?: 'RolesType', id: string, role: string } | null } | null> }, jobType: { __typename?: 'JobTypesTypeConnection', edges: Array<{ __typename?: 'JobTypesTypeEdge', node?: { __typename?: 'JobTypesType', id: string, type: string } | null } | null> } } } | null } | null> } | null };


export const NewUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"NewUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"NewUserMutationInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"newUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"errors"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"messages"}}]}},{"kind":"Field","name":{"kind":"Name","value":"users"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<NewUserMutation, NewUserMutationVariables>;
export const UpdateUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateUserMutationInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"errors"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"messages"}}]}},{"kind":"Field","name":{"kind":"Name","value":"users"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<UpdateUserMutation, UpdateUserMutationVariables>;
export const NewInterviewQuestionsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"NewInterviewQuestions"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"InterviewQuestionsMutationInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateInterviewQuestion"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"errors"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"messages"}}]}},{"kind":"Field","name":{"kind":"Name","value":"interviewQuestions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<NewInterviewQuestionsMutation, NewInterviewQuestionsMutationVariables>;
export const NewInterviewAnswersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"NewInterviewAnswers"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"InterviewAnswerMutationInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateInterviewAnswer"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"errors"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"messages"}}]}},{"kind":"Field","name":{"kind":"Name","value":"interviewAnswers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<NewInterviewAnswersMutation, NewInterviewAnswersMutationVariables>;
export const NewJobsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"NewJobs"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"JobsMutationInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateJobs"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"errors"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"messages"}}]}},{"kind":"Field","name":{"kind":"Name","value":"jobs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<NewJobsMutation, NewJobsMutationVariables>;
export const NewJobTypesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"NewJobTypes"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"JobTypesMutationInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateJobTypes"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"errors"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"messages"}}]}},{"kind":"Field","name":{"kind":"Name","value":"jobTypes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<NewJobTypesMutation, NewJobTypesMutationVariables>;
export const NewRolesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"NewRoles"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"RolesMutationInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateRoles"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"errors"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"messages"}}]}},{"kind":"Field","name":{"kind":"Name","value":"roles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<NewRolesMutation, NewRolesMutationVariables>;
export const NewRecruitedDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"NewRecruited"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"RecruitedMutationInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateRecruited"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"errors"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"messages"}}]}},{"kind":"Field","name":{"kind":"Name","value":"recruited"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<NewRecruitedMutation, NewRecruitedMutationVariables>;
export const LoginDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Login"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"login"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}},{"kind":"Argument","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"token"}}]}}]}}]} as unknown as DocumentNode<LoginMutation, LoginMutationVariables>;
export const VerifyTokenDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"VerifyToken"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"token"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"verifyToken"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"token"},"value":{"kind":"Variable","name":{"kind":"Name","value":"token"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"payload"}}]}}]}}]} as unknown as DocumentNode<VerifyTokenMutation, VerifyTokenMutationVariables>;
export const UsersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Users"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"users"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"middleName"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}},{"kind":"Field","name":{"kind":"Name","value":"resume"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"lastLogin"}},{"kind":"Field","name":{"kind":"Name","value":"isSuperuser"}},{"kind":"Field","name":{"kind":"Name","value":"isStaff"}},{"kind":"Field","name":{"kind":"Name","value":"isActive"}}]}}]}}]}}]}}]} as unknown as DocumentNode<UsersQuery, UsersQueryVariables>;
export const AuthUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"AuthUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"authUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"middleName"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}},{"kind":"Field","name":{"kind":"Name","value":"resume"}},{"kind":"Field","name":{"kind":"Name","value":"lastLogin"}},{"kind":"Field","name":{"kind":"Name","value":"isSuperuser"}},{"kind":"Field","name":{"kind":"Name","value":"isStaff"}},{"kind":"Field","name":{"kind":"Name","value":"isActive"}}]}}]}}]} as unknown as DocumentNode<AuthUserQuery, AuthUserQueryVariables>;
export const JobsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Jobs"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"publish"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"isOpen"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"isClosed"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"isCompleted"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"jobs"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"publish"},"value":{"kind":"Variable","name":{"kind":"Name","value":"publish"}}},{"kind":"Argument","name":{"kind":"Name","value":"isOpen"},"value":{"kind":"Variable","name":{"kind":"Name","value":"isOpen"}}},{"kind":"Argument","name":{"kind":"Name","value":"isClosed"},"value":{"kind":"Variable","name":{"kind":"Name","value":"isClosed"}}},{"kind":"Argument","name":{"kind":"Name","value":"isCompleted"},"value":{"kind":"Variable","name":{"kind":"Name","value":"isCompleted"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"dateCreated"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"staffQuantity"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"location"}},{"kind":"Field","name":{"kind":"Name","value":"publish"}},{"kind":"Field","name":{"kind":"Name","value":"isOpen"}},{"kind":"Field","name":{"kind":"Name","value":"isClosed"}},{"kind":"Field","name":{"kind":"Name","value":"isCompleted"}},{"kind":"Field","name":{"kind":"Name","value":"jobType"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"role"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"role"}}]}}]}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<JobsQuery, JobsQueryVariables>;
export const JobTypesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"JobTypes"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"type"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"jobTypes"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"type"},"value":{"kind":"Variable","name":{"kind":"Name","value":"type"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]}}]}}]}}]} as unknown as DocumentNode<JobTypesQuery, JobTypesQueryVariables>;
export const RolesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Roles"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"role"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"roles"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"role"},"value":{"kind":"Variable","name":{"kind":"Name","value":"role"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"role"}}]}}]}}]}}]}}]} as unknown as DocumentNode<RolesQuery, RolesQueryVariables>;
export const InterviewAnswersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"InterviewAnswers"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"user"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"interviewAnswers"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"user"},"value":{"kind":"Variable","name":{"kind":"Name","value":"user"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"answer"}},{"kind":"Field","name":{"kind":"Name","value":"question"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"question"}},{"kind":"Field","name":{"kind":"Name","value":"optionA"}},{"kind":"Field","name":{"kind":"Name","value":"optionB"}},{"kind":"Field","name":{"kind":"Name","value":"optionC"}},{"kind":"Field","name":{"kind":"Name","value":"optionD"}},{"kind":"Field","name":{"kind":"Name","value":"answer"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<InterviewAnswersQuery, InterviewAnswersQueryVariables>;
export const InterviewQuestionsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"InterviewQuestions"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"job"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"interviewQuestions"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"job"},"value":{"kind":"Variable","name":{"kind":"Name","value":"job"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"question"}},{"kind":"Field","name":{"kind":"Name","value":"optionA"}},{"kind":"Field","name":{"kind":"Name","value":"optionB"}},{"kind":"Field","name":{"kind":"Name","value":"optionC"}},{"kind":"Field","name":{"kind":"Name","value":"optionD"}},{"kind":"Field","name":{"kind":"Name","value":"answer"}},{"kind":"Field","name":{"kind":"Name","value":"job"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"isOpen"}},{"kind":"Field","name":{"kind":"Name","value":"isClosed"}},{"kind":"Field","name":{"kind":"Name","value":"isCompleted"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<InterviewQuestionsQuery, InterviewQuestionsQueryVariables>;
export const RecruitedDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Recruited"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"job"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"recruited"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"job"},"value":{"kind":"Variable","name":{"kind":"Name","value":"job"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"note"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}}]}},{"kind":"Field","name":{"kind":"Name","value":"job"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"isClosed"}},{"kind":"Field","name":{"kind":"Name","value":"isCompleted"}},{"kind":"Field","name":{"kind":"Name","value":"publish"}},{"kind":"Field","name":{"kind":"Name","value":"isOpen"}},{"kind":"Field","name":{"kind":"Name","value":"dateCreated"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"location"}},{"kind":"Field","name":{"kind":"Name","value":"staffQuantity"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"role"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"role"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"jobType"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]}}]}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<RecruitedQuery, RecruitedQueryVariables>;