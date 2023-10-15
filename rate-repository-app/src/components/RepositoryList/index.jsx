import { FlatList, View, StyleSheet, Pressable } from "react-native";
import React, { useState } from "react";
import { Picker } from "@react-native-picker/picker";
import { Searchbar } from "react-native-paper";
import { useDebounce } from "use-debounce";

import RepositoryItem from "./RepositoryItem";
import useRepositories from "../../hooks/useRepositories";
import { useNavigate } from "react-router-dom";
import theme from "../../theme";
import ItemSeparator from "../ItemSeparator";

const styles = StyleSheet.create({
  searchbar: {
    marginTop: 10,
    backgroundColor: theme.colors.white,
    borderRadius: 5,
    marginHorizontal: 20,
  },
  selection: {
    backgroundColor: theme.colors.white,
    marginVertical: 10,
    borderRadius: 5,
    marginHorizontal: 20,
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

const RepositoryListHeader = ({
  orderBy,
  setOrderBy,
  searchQuery,
  setSearchQuery,
}) => {
  return (
    <View>
      <Searchbar
        style={styles.searchbar}
        placeholder="Search"
        onChangeText={(query) => setSearchQuery(query)}
        value={searchQuery}
      />
      <Picker
        style={styles.selection}
        prompt="Select an item..."
        selectedValue={orderBy}
        onValueChange={(itemValue) => setOrderBy(itemValue)}>
        <Picker.Item label="Latest repositories" value={0} />
        <Picker.Item label="Highest rated repositories" value={1} />
        <Picker.Item label="Lowest rated repositories" value={2} />
      </Picker>
    </View>
  );
};

export class RepositoryListContainer extends React.Component {
  renderHeader = () => {
    const { orderBy, setOrderBy, searchQuery, setSearchQuery } = this.props;

    return (
      <RepositoryListHeader
        orderBy={orderBy}
        setOrderBy={setOrderBy}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
    );
  };

  render() {
    const { repositories, navigate, onEndReach } = this.props;

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
        ListHeaderComponent={this.renderHeader}
        onEndReached={onEndReach}
        onEndReachedThreshold={0.5}
      />
    );
  }
}

const RepositoryList = () => {
  const [orderBy, setOrderBy] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [debouncedSearch] = useDebounce(searchQuery, 500);

  const navigate = useNavigate();

  const { repositories, fetchMore } = useRepositories({
    first: 8,
    variables: { ...ORDER_BY[orderBy], searchKeyword: debouncedSearch },
    fetchPolicy: "cache-and-network",
  });

  const onEndReach = () => {
    fetchMore();
  };

  return (
    <RepositoryListContainer
      repositories={repositories}
      orderBy={orderBy}
      setOrderBy={setOrderBy}
      searchQuery={searchQuery}
      setSearchQuery={setSearchQuery}
      navigate={navigate}
      onEndReach={onEndReach}
    />
  );
};

export default RepositoryList;
