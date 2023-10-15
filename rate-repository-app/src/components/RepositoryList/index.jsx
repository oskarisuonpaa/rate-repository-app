import { FlatList, View, StyleSheet, Pressable } from "react-native";
import { useEffect, useState } from "react";
import { Picker } from "@react-native-picker/picker";

import RepositoryItem from "./RepositoryItem";
import useRepositories from "../../hooks/useRepositories";
import { useNavigate } from "react-router-dom";

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const ORDER_BY = {
  0: {
    orderBy: "CREATED_AT",
    orderDirection: "DESC",
  },
  1: {
    orderBy: "RATING_AVERAGE",
    orderDirection: "DESC",
  },
  2: {
    orderBy: "RATING_AVERAGE",
    orderDirection: "ASC",
  },
};

const ItemSeparator = () => <View style={styles.separator} />;

const OrderByMenu = ({ orderBy, setOrderBy }) => {
  return (
    <Picker
      prompt="Select an item..."
      selectedValue={orderBy}
      onValueChange={(itemValue, itemIndex) => setOrderBy(itemValue)}>
      <Picker.Item label="Latest repositories" value={0} />
      <Picker.Item label="Highest rated repositories" value={1} />
      <Picker.Item label="Lowest rated repositories" value={2} />
    </Picker>
  );
};

const RepositoryList = () => {
  const navigate = useNavigate();
  const [orderBy, setOrderBy] = useState(0);
  const { repositories } = useRepositories(ORDER_BY[orderBy]);

  const repositoryNodes = repositories
    ? repositories.edges.map((edge) => edge.node)
    : [];

  return (
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) => (
        <Pressable onPress={() => navigate(`/repository/${item.id}`)}>
          <RepositoryItem repository={item} />
        </Pressable>
      )}
      keyExtractor={(item) => item.id}
      ListHeaderComponent={
        <OrderByMenu orderBy={orderBy} setOrderBy={setOrderBy} />
      }
    />
  );
};

export default RepositoryList;
