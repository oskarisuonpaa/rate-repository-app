import { StyleSheet, View } from "react-native";

import theme from "../../theme";
import FormikTextInput from "../FormikTextInput";
import Button from "../Button";

const styles = StyleSheet.create({
  parent: {
    backgroundColor: theme.colors.white,
    paddingRight: 20,
    paddingLeft: 20,
    paddingBottom: 20,
  },
});

const CreateReviewForm = ({ onSubmit }) => {
  return (
    <View style={styles.parent}>
      <FormikTextInput name="ownerName" placeholder="Repository owner name" />
      <FormikTextInput name="repositoryName" placeholder="Repository name" />
      <FormikTextInput name="rating" placeholder="Rating between 0 and 100" />
      <FormikTextInput name="text" placeholder="Review" multiline />
      <Button onPress={onSubmit} text={"Create a review"} />
    </View>
  );
};

export default CreateReviewForm;
