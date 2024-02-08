import { DoctorsDocument, SpecializationDocument } from "@/gql/graphql";
import { useQuery } from "@apollo/client";

export const useDoctors = () => {
  const { loading, error, data } = useQuery(DoctorsDocument);
  const doctors = data?.doctors;
  return { doctors, loading, error };
};

export const useSpecialization = () => {
  const { loading, error, data } = useQuery(SpecializationDocument);
  const spec = data?.specialization;
  return { spec, loading, error };
};
