import { View, StyleSheet, Alert } from "react-native";
import { useNavigate } from "react-router-native";
import { format } from "date-fns";

import Text from "../Text";
import theme from "../../theme";
import Button from "../Button";
import useDeleteReview from "../../hooks/useDeleteReview";

const styles = StyleSheet.create({
  parent: {
    backgroundColor: theme.colors.white,
    paddingStart: 10,
    paddingEnd: 10,
    paddingTop: 10,
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
  buttons: {
    backgroundColor: theme.colors.white,
    flexDirection: "row",
    justifyContent: "space-evenly",
    paddingStart: 10,
    paddingEnd: 10,
    paddingBottom: 10,
  },
});

const MyReview = ({ review, refetch }) => {
  const navigate = useNavigate();
  const [deleteReview] = useDeleteReview();

  const alert = () =>
    Alert.alert(
      "Delete review",
      "Are you sure you want to delete this review?",
      [
        { text: "cancel", style: "cancel" },
        {
          text: "delete",
          onPress: async () => {
            await deleteReview(review.id);
            refetch();
          },
        },
      ]
    );

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
      <View style={styles.buttons}>
        <Button
          text="View repository"
          onPress={() => navigate(`/repository/${review.repository.id}`)}
        />
        <Button color="red" text="Delete review" onPress={alert} />
      </View>
    </View>
  );
};

export default MyReview;
