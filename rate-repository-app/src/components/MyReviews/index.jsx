import { FlatList, StyleSheet, View } from "react-native";

import useMyReviews from "../../hooks/useMyReviews";
import MyReview from "./MyReview";

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const MyReviews = () => {
  const { user } = useMyReviews();

  if (!user) {
    return;
  }

  const reviews = user.reviews.edges.map((edge) => edge.node);

  return (
    <FlatList
      data={reviews}
      renderItem={({ item }) => <MyReview review={item} />}
      keyExtractor={({ id }) => id}
      ItemSeparatorComponent={ItemSeparator}
    />
  );
};

export default MyReviews;
