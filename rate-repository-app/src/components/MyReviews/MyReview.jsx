import { View, StyleSheet } from "react-native";
import { format } from "date-fns";

import Text from "../Text";
import theme from "../../theme";

const styles = StyleSheet.create({
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

const MyReview = ({ review }) => {
  return (
    <View>
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
            {review.repository.fullName}
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

export default MyReview;
