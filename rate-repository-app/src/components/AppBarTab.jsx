import Text from "./Text";
import { Link } from "react-router-native";

const AppBarTab = ({ text, target, style }) => {
  return (
    <Link to={target} style={style}>
      <Text color={"white"} fontSize={"subheading"} fontWeight={"bold"}>
        {text}
      </Text>
    </Link>
  );
};

export default AppBarTab;
