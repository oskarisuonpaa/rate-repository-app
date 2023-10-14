import { View, StyleSheet, ScrollView } from "react-native";
import Constants from "expo-constants";
import theme from "../theme";
import AppBarTab from "./AppBarTab";

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
  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <AppBarTab text="Repositories" target="/" />
        <AppBarTab
          text="Sign in"
          target="/signin"
          style={{ paddingStart: 10 }}
        />
      </ScrollView>
    </View>
  );
};

export default AppBar;
