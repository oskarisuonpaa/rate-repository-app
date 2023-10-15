import { useParams } from "react-router-dom";
import { FlatList, StyleSheet, View } from "react-native";

import useRepository from "../../hooks/useRepository";
import RepositoryItem from "../RepositoryList/RepositoryItem";
import Review from "./Review";
import React from "react";

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryInfo = ({ repository }) => {
  return (
    <View style={{ marginBottom: 10 }}>
      <RepositoryItem repository={repository} />
    </View>
  );
};

export class RepositoryReviewListContainer extends React.Component {
  renderHeader = () => {
    const { repository } = this.props;

    return <RepositoryInfo repository={repository} />;
  };

  render() {
    const { reviews, onEndReach } = this.props;

    const reviewNodes = reviews ? reviews.edges.map((edge) => edge.node) : [];

    return (
      <FlatList
        data={reviewNodes}
        ItemSeparatorComponent={ItemSeparator}
        renderItem={({ item }) => <Review review={item} />}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={this.renderHeader}
        onEndReached={onEndReach}
        onEndReachedThreshold={0.5}
      />
    );
  }
}

const Repository = () => {
  const id = useParams().id;
  const { repository, reviews, fetchMore } = useRepository({
    first: 2,
    variables: { repositoryId: id },
    fetchPolicy: "cache-and-network",
  });

  const onEndReach = () => {
    fetchMore();
  };

  return (
    <RepositoryReviewListContainer
      repository={repository}
      reviews={reviews}
      onEndReach={onEndReach}
    />
  );
};

export default Repository;
