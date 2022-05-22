import { View, Text } from "react-native";
import { errorMessage } from "../library/Types";
import { styles } from "../library/Style";

export default function ErrorMessage({ message }: errorMessage) {
  return (
    <View style={styles.errorMessageContainer}>
      <Text style={styles.population}>{message}</Text>
    </View>
  );
}
