import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { ME } from "../graphql/queries";

const useMyReviews = ({ includeReviews }) => {
  const [user, setUser] = useState();
  const { data, loading, ...result } = useQuery(ME, {
    variables: { reviews: includeReviews ? true : false },
    fetchPolicy: "cache-and-network",
  });

  useEffect(() => {
    if (!loading) {
      setUser(data.me);
    }
  }, [loading]);

  return { user, loading, ...result };
};

export default useMyReviews;
