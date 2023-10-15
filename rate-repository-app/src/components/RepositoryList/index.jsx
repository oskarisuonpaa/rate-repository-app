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

const ItemSeparator = () => <View style={styles.separator} />;

const OrderByMenu = ({ orderBy, setOrderBy }) => {
  return (
    <Picker
      prompt="Select an item..."
      selectedValue={orderBy}
      onValueChange={(itemValue, itemIndex) => setOrderBy(itemValue)}>
      <Picker.Item
        label="Latest repositories"
        value={{
          orderBy: "CREATED_AT",
          orderDirection: "DESC",
        }}
      />
      <Picker.Item
        label="Highest rated repositories"
        value={{
          orderBy: "RATING_AVERAGE",
          orderDirection: "DESC",
        }}
      />
      <Picker.Item
        label="Lowest rated repositories"
        value={{
          orderBy: "RATING_AVERAGE",
          orderDirection: "ASC",
        }}
      />
    </Picker>
  );
};

const RepositoryList = () => {
  const navigate = useNavigate();
  const [orderBy, setOrderBy] = useState({
    orderBy: "CREATED_AT",
    orderDirection: "DESC",
  });
  const { repositories } = useRepositories(orderBy);

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
