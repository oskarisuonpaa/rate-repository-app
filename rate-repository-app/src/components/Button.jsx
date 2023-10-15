import { Pressable, StyleSheet } from "react-native";

import Text from "./Text";
import theme from "../theme";

const styles = StyleSheet.create({
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

const Button = ({ onPress, text }) => {
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text
        style={styles.buttonText}
        fontWeight={"bold"}
        fontSize={"subheader"}
        color={"white"}>
        {text}
      </Text>
    </Pressable>
  );
};

export default Button;
