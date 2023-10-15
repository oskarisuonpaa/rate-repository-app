import Text from "../Text";
import { Link } from "react-router-native";

const AppBarTab = ({ text, target, style, onPress }) => {
  return (
    <Link onPress={onPress} to={target} style={style}>
      <Text color={"white"} fontSize={"subheading"} fontWeight={"bold"}>
        {text}
      </Text>
    </Link>
  );
};

export default AppBarTab;
