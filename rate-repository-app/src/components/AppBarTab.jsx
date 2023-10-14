import { Pressable } from "react-native";
import Text from "./Text";

const AppBarTab = ({ text }) => {
  return (
    <Pressable onPress={() => console.log("pressed...")}>
      <Text color={"white"} fontSize={"subheading"} fontWeight={"bold"}>
        {text}
      </Text>
    </Pressable>
  );
};

export default AppBarTab;
