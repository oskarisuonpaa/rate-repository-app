import { FlatList } from "react-native";

import useMyReviews from "../../hooks/useMyReviews";
import MyReview from "./MyReview";
import ItemSeparator from "../ItemSeparator";

const MyReviews = () => {
  const { user, refetch } = useMyReviews({ includeReviews: true });

  if (!user) {
    return;
  }

  const reviews = user.reviews.edges.map((edge) => edge.node);

  return (
    <FlatList
      data={reviews}
      renderItem={({ item }) => <MyReview review={item} refetch={refetch} />}
      keyExtractor={({ id }) => id}
      ItemSeparatorComponent={ItemSeparator}
    />
  );
};

export default MyReviews;
