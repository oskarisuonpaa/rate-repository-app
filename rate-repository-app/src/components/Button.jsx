import { Pressable, StyleSheet } from "react-native";

import Text from "./Text";
import theme from "../theme";

const styles = StyleSheet.create({
  button: {
    backgroundColor: theme.colors.primary,
    borderRadius: 2,
    height: 50,
    marginTop: 20,
    minWidth: 150,
  },
  buttonText: {
    marginStart: "auto",
    marginEnd: "auto",
    marginTop: "auto",
    marginBottom: "auto",
    padding: 10,
  },
});

const Button = ({ onPress, text, color }) => {
  return (
    <Pressable
      style={{
        ...styles.button,
        backgroundColor: color ? color : styles.button.backgroundColor,
      }}
      onPress={onPress}>
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
