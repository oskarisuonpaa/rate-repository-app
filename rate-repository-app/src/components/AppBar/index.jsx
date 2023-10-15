import { View, StyleSheet, ScrollView, Pressable } from "react-native";
import Constants from "expo-constants";
import { ApolloClient, useApolloClient, useQuery } from "@apollo/client";

import theme from "../../theme";
import AppBarTab from "./AppBarTab";
import Text from "../Text";
import { ME } from "../../graphql/queries";
import { useState } from "react";
import useAuthStorage from "../../hooks/useAuthStorage";

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight + 10,
    paddingBottom: 10,
    paddingStart: 10,
    height: "auto",
    backgroundColor: theme.colors.appBarBackground,
    flexDirection: "row",
  },
});

const AppBar = () => {
  const result = useQuery(ME);
  const apolloClient = useApolloClient();
  const authStorage = useAuthStorage();

  if (result.loading) {
    return (
      <View>
        <Text>loading....</Text>
      </View>
    );
  }

  const user = result.data.me;

  const handleLogout = async () => {
    await authStorage.removeAccessToken();
    apolloClient.resetStore();
  };

  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <AppBarTab text="Repositories" target="/" />
        {!user && (
          <AppBarTab
            text="Sign in"
            target="/signIn"
            style={{ paddingStart: 10 }}
          />
        )}
        {user && (
          <AppBarTab
            text="Create a review"
            target="/createReview"
            style={{ paddingStart: 10 }}
          />
        )}
        {user && (
          <AppBarTab
            onPress={handleLogout}
            text="Log out"
            style={{ paddingStart: 10 }}
          />
        )}
      </ScrollView>
    </View>
  );
};

export default AppBar;
