import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";

import { GET_REPOSITORY } from "../graphql/queries";

const useRepository = (id) => {
  const [repository, setRepository] = useState(null);
  const { data, error, loading } = useQuery(GET_REPOSITORY, {
    variables: { repositoryId: id },
  });

  useEffect(() => {
    if (!loading) {
      setRepository(data.repository);
    }
  }, [loading]);

  return { repository, loading };
};

export default useRepository;
