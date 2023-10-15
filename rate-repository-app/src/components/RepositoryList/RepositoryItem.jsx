import { Image, StyleSheet, View } from "react-native";
import * as Linking from "expo-linking";

import Text from "../Text";
import theme from "../../theme";
import Button from "../Button";

const Description = ({ repository }) => {
  const styles = StyleSheet.create({
    language: {
      padding: 5,
      backgroundColor: theme.colors.languageColor,
      width: "auto",
      alignSelf: "flex-start",
      borderRadius: 5,
    },
    image: {
      width: 50,
      height: 50,
      borderRadius: 5,
    },
    parent: {
      flexDirection: "row",
      padding: 10,
    },
    child: {
      paddingStart: 10,
      flexDirection: "column",
      flexShrink: 1,
    },
    description: {
      paddingBottom: 5,
    },
    fullName: {
      paddingBottom: 5,
    },
  });

  return (
    <View style={styles.parent}>
      <Image style={styles.image} source={{ uri: repository.ownerAvatarUrl }} />
      <View style={styles.child}>
        <Text
          fontSize={"subheading"}
          fontWeight={"bold"}
          style={styles.fullName}>
          {repository.fullName}
        </Text>
        <Text style={styles.description} color={"textSecondary"}>
          {repository.description}
        </Text>
        <View style={styles.language}>
          <Text color={"white"}>{repository.language}</Text>
        </View>
      </View>
    </View>
  );
};

const formatValue = (value) => {
  if (value > 999) {
    return `${(value / 1000).toFixed(1)}k`;
  }
  return `${value}`;
};

const Stats = ({ repository }) => {
  const styles = StyleSheet.create({
    parent: {
      flexDirection: "row",
      padding: 10,
      justifyContent: "space-around",
    },
    child: {
      flexDirection: "column",
    },
    text: {
      textAlign: "center",
    },
  });

  return (
    <View style={styles.parent}>
      <View style={styles.child}>
        <Text fontSize={"subheading"} fontWeight={"bold"} style={styles.text}>
          {formatValue(repository.stargazersCount)}
        </Text>
        <Text color={"textSecondary"} style={styles.text}>
          Stars
        </Text>
      </View>
      <View style={styles.child}>
        <Text fontSize={"subheading"} fontWeight={"bold"} style={styles.text}>
          {formatValue(repository.forksCount)}
        </Text>
        <Text color={"textSecondary"} style={styles.text}>
          Forks
        </Text>
      </View>
      <View style={styles.child}>
        <Text fontSize={"subheading"} fontWeight={"bold"} style={styles.text}>
          {formatValue(repository.reviewCount)}
        </Text>
        <Text color={"textSecondary"} style={styles.text}>
          Reviews
        </Text>
      </View>
      <View style={styles.child}>
        <Text fontSize={"subheading"} fontWeight={"bold"} style={styles.text}>
          {formatValue(repository.ratingAverage)}
        </Text>
        <Text color={"textSecondary"} style={styles.text}>
          Rating
        </Text>
      </View>
    </View>
  );
};

const RepositoryItem = ({ repository }) => {
  return (
    <View
      testID="repositoryItem"
      style={{ backgroundColor: theme.colors.white }}>
      <Description repository={repository} />
      <Stats repository={repository} />
      {repository.url && (
        <View style={{ paddingLeft: 10, paddingRight: 10, paddingBottom: 10 }}>
          <Button
            onPress={() => Linking.openURL(repository.url)}
            text={"Open in GitHub"}
          />
        </View>
      )}
    </View>
  );
};

export default RepositoryItem;
