import { useParams } from "react-router-dom";
import { FlatList, StyleSheet, View } from "react-native";
import { format } from "date-fns";

import useRepository from "../../hooks/useRepository";
import RepositoryItem from "../RepositoryList/RepositoryItem";
import Text from "../Text";
import theme from "../../theme";

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
  parent: {
    backgroundColor: theme.colors.white,
    padding: 10,
    flexDirection: "row",
  },
  child: {
    flexDirection: "column",
    paddingLeft: 10,
    flexShrink: 1,
  },
  circle: {
    width: 50,
    height: 50,
    borderWidth: 2,
    borderRadius: 25,
    borderColor: theme.colors.languageColor,
  },
  rating: {
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "auto",
    marginBottom: "auto",
    color: theme.colors.languageColor,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryInfo = ({ repository }) => {
  return <RepositoryItem repository={repository} />;
};

const Review = ({ review }) => {
  return (
    <View>
      <ItemSeparator />
      <View style={styles.parent}>
        <View style={styles.circle}>
          <Text
            style={styles.rating}
            fontSize={"subheading"}
            fontWeight={"bold"}>
            {review.rating}
          </Text>
        </View>
        <View style={styles.child}>
          <Text fontSize={"subheading"} fontWeight={"bold"}>
            {review.user.username}
          </Text>
          <Text color={"textSecondary"}>
            {format(new Date(review.createdAt), "dd.MM.yyyy")}
          </Text>
          <Text>{review.text}</Text>
        </View>
      </View>
    </View>
  );
};

const Repository = () => {
  const id = useParams().id;
  const { repository, loading } = useRepository(id);

  if (!repository) {
    return;
  }

  const reviews = repository.reviews.edges.map((edge) => edge.node);

  return (
    <FlatList
      data={reviews}
      renderItem={({ item }) => <Review review={item} />}
      keyExtractor={({ id }) => id}
      ListHeaderComponent={() => <RepositoryInfo repository={repository} />}
    />
  );
};

export default Repository;
