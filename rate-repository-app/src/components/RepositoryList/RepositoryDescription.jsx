import { Image, StyleSheet, View } from "react-native";
import Text from "../Text";
import theme from "../../theme";

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

const RepostoryDescription = ({ repository }) => {
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

export default RepostoryDescription;
