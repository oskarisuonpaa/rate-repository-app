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

const SignInForm = ({ onSubmit }) => {
  return (
    <View style={styles.parent}>
      <FormikTextInput name="username" placeholder="Username" />
      <FormikTextInput name="password" placeholder="Password" secureTextEntry />
      <Button onPress={onSubmit} text={"Sign in"} />
    </View>
  );
};

export default SignInForm;
