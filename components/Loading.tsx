import { ActivityIndicator, View } from "react-native";

export default function loading() {
  return (
    <View>
      <ActivityIndicator size={"large"} color={"blue"} />
    </View>
  );
}
