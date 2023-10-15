import { useQuery } from "@apollo/client";

import { GET_REPOSITORY } from "../graphql/queries";

const useRepository = ({ first, variables, fetchPolicy }) => {
  const { data, loading, fetchMore, ...result } = useQuery(GET_REPOSITORY, {
    first,
    variables,
    fetchPolicy,
  });

  const handleFetchMore = () => {
    const canFetchMore =
      !loading && data?.repository.reviews.pageInfo.hasNextPage;

    if (!canFetchMore) {
      return;
    }

    fetchMore({
      variables: {
        after: data.repository.reviews.pageInfo.endCursor,
        ...variables,
      },
    });
  };

  return {
    repository: data?.repository,
    reviews: data?.repository.reviews,
    fetchMore: handleFetchMore,
    loading,
    ...result,
  };
};

export default useRepository;
