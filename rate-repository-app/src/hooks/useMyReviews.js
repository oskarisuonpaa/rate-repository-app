import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { ME } from "../graphql/queries";

const useMyReviews = () => {
  const [user, setUser] = useState();
  const { data, error, loading } = useQuery(ME, {
    variables: { reviews: true },
  });

  useEffect(() => {
    if (!loading) {
      setUser(data.me);
    }
  }, [loading]);

  return { user, loading };
};

export default useMyReviews;
