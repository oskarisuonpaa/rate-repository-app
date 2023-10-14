import { Pressable, StyleSheet, View } from "react-native";
import * as yup from "yup";

import Text from "./Text";
import FormikTextInput from "./FormikTextInput";
import { Formik } from "formik";
import theme from "../theme";
import useSignIn from "../hooks/useSignIn";

const validationSchema = yup.object().shape({
  username: yup.string().required("Username required"),
  password: yup.string().required("Password required"),
});

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

const initialValues = {
  username: "",
  password: "",
};

const SignIn = () => {
  const [signIn] = useSignIn();

  const onSubmit = async (values) => {
    const { username, password } = values;

    try {
      const { data } = await signIn({ username, password });
      console.log(data);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}>
      {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

export default SignIn;
