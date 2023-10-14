import { StyleSheet, View } from "react-native";
import { useField } from "formik";

import TextInput from "./TextInput";
import Text from "./Text";

const styles = StyleSheet.create({
  errorText: {
    marginTop: 5,
    color: "#d73a4a",
  },
  errorContainer: {
    borderColor: "#d73a4a",
  },
  container: {
    height: 50,
    borderStyle: "solid",
    borderWidth: 1,
    borderRadius: 2,
    marginTop: 20,
  },
  text: {
    marginTop: "auto",
    marginBottom: "auto",
    marginStart: 5,
  },
});

const FormikTextInput = ({ name, ...props }) => {
  const [field, meta, helpers] = useField(name);
  const showError = meta.touched && meta.error;

  return (
    <>
      <View
        style={[styles.container, showError ? styles.errorContainer : null]}>
        <TextInput
          onChangeText={(value) => helpers.setValue(value)}
          onBlur={() => helpers.setTouched(true)}
          value={field.value}
          error={showError}
          style={styles.text}
          {...props}
        />
      </View>
      {showError && <Text style={styles.errorText}>{meta.error}</Text>}
    </>
  );
};

export default FormikTextInput;
