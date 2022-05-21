import { View, Text } from "react-native";
import { errorMessage } from "../library/Types";

export default function ErrorMessage({ message }: errorMessage) {
  return (
    <View>
      <Text>{message}</Text>
    </View>
  );
}
