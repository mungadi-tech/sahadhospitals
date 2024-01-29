import {
  AuthUserDocument,
  InterviewAnswersDocument,
  InterviewAnswersQueryVariables,
  InterviewQuestionsDocument,
  InterviewQuestionsQueryVariables,
  JobTypesDocument,
  JobTypesQueryVariables,
  JobsDocument,
  JobsQueryVariables,
  RecruitedDocument,
  RecruitedQueryVariables,
  RolesDocument,
  RolesQueryVariables,
  UsersDocument,
  UsersQueryVariables,
} from "@/gql/graphql";
import { useQuery } from "@apollo/client";

export const useUsers = ({ id }: UsersQueryVariables) => {
  const { loading, error, data } = useQuery(UsersDocument, {
    variables: { id },
  });
  const users = data?.users;
  return { users, loading, error };
};

export const useAuthUsers = () => {
  const { loading, error, data } = useQuery(AuthUserDocument);
  const authUser = data?.authUser;
  return { authUser, loading, error };
};

export const useJobs = ({
  id,
  isClosed,
  isCompleted,
  isOpen,
  publish,
}: JobsQueryVariables) => {
  const { loading, error, data } = useQuery(JobsDocument, {
    variables: { id, isClosed, isCompleted, isOpen, publish },
  });
  const jobs = data?.jobs;
  return { jobs, loading, error, isClosed, isCompleted, isOpen, publish };
};

export const useJobTypes = ({ id, type }: JobTypesQueryVariables) => {
  const { loading, error, data } = useQuery(JobTypesDocument, {
    variables: { id, type },
  });
  const jobTypes = data?.jobTypes;
  return { jobTypes, loading, error };
};

export const useRoles = ({ id, role }: RolesQueryVariables) => {
  const { loading, error, data } = useQuery(RolesDocument, {
    variables: { id, role },
  });
  const roles = data?.roles;
  return { roles, loading, error };
};

export const useInterviewQuestions = ({
  id,
  job,
}: InterviewQuestionsQueryVariables) => {
  const { loading, error, data } = useQuery(InterviewQuestionsDocument, {
    variables: { id, job },
  });
  const interviewQuestions = data?.interviewQuestions;
  return { interviewQuestions, loading, error };
};

export const useInterviewAnswers = ({
  id,
  user,
}: InterviewAnswersQueryVariables) => {
  const { loading, error, data } = useQuery(InterviewAnswersDocument, {
    variables: { id, user },
  });
  const interviewAnswers = data?.interviewAnswers;
  return { interviewAnswers, loading, error };
};

export const useRecruited = ({ id, job }: RecruitedQueryVariables) => {
  const { loading, error, data } = useQuery(RecruitedDocument, {
    variables: { id, job },
  });
  const recruited = data?.recruited;
  return { recruited, loading, error };
};
