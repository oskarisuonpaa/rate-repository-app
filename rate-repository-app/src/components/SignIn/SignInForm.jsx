import { Pressable, StyleSheet, View } from "react-native";

import theme from "../../theme";
import FormikTextInput from "../FormikTextInput";
import Text from "../Text";

const SignInForm = ({ onSubmit }) => {
  const styles = StyleSheet.create({
    parent: {
      backgroundColor: theme.colors.white,
      paddingRight: 20,
      paddingLeft: 20,
      paddingBottom: 20,
    },
    button: {
      backgroundColor: theme.colors.primary,
      borderRadius: 2,
      height: 50,
      marginTop: 20,
    },
    buttonText: {
      marginStart: "auto",
      marginEnd: "auto",
      marginTop: "auto",
      marginBottom: "auto",
    },
  });

  return (
    <View style={styles.parent}>
      <FormikTextInput name="username" placeholder="Username" />

      <FormikTextInput name="password" placeholder="Password" secureTextEntry />

      <Pressable style={styles.button} onPress={onSubmit}>
        <Text
          style={styles.buttonText}
          fontWeight={"bold"}
          fontSize={"subheader"}
          color={"white"}>
          Sign in
        </Text>
      </Pressable>
    </View>
  );
};

export default SignInForm;
