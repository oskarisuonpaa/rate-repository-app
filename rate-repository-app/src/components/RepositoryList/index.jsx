import { FlatList, View, StyleSheet, Pressable } from "react-native";
import React, { useState } from "react";
import { Picker } from "@react-native-picker/picker";
import { Searchbar } from "react-native-paper";

import RepositoryItem from "./RepositoryItem";
import useRepositories from "../../hooks/useRepositories";
import { useNavigate } from "react-router-dom";
import theme from "../../theme";

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
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

const ItemSeparator = () => <View style={styles.separator} />;

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
    const { repositories, navigate } = this.props;

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
      />
    );
  }
}

const RepositoryList = () => {
  const [orderBy, setOrderBy] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const { repositories } = useRepositories(ORDER_BY[orderBy], searchQuery);

  return (
    <RepositoryListContainer
      repositories={repositories}
      orderBy={orderBy}
      setOrderBy={setOrderBy}
      searchQuery={searchQuery}
      setSearchQuery={setSearchQuery}
      navigate={navigate}
    />
  );
};

export default RepositoryList;
