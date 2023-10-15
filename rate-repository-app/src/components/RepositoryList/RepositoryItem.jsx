import { View } from "react-native";
import * as Linking from "expo-linking";

import theme from "../../theme";
import Button from "../Button";
import RepositoryStats from "./RepositoryStats";
import RepostoryDescription from "./RepositoryDescription";

const RepositoryItem = ({ repository }) => {
  return (
    <View
      testID="repositoryItem"
      style={{ backgroundColor: theme.colors.white }}>
      <RepostoryDescription repository={repository} />
      <RepositoryStats repository={repository} />
      {repository.url && (
        <View style={{ paddingLeft: 10, paddingRight: 10, paddingBottom: 10 }}>
          <Button
            onPress={() => Linking.openURL(repository.url)}
            text={"Open in GitHub"}
          />
        </View>
      )}
    </View>
  );
};

export default RepositoryItem;
