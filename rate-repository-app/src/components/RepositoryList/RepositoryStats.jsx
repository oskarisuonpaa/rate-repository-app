import { StyleSheet, View } from "react-native";
import Text from "../Text";

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

const formatValue = (value) => {
  if (value > 999) {
    return `${(value / 1000).toFixed(1)}k`;
  }
  return `${value}`;
};

const RepositoryStats = ({ repository }) => {
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

export default RepositoryStats;
