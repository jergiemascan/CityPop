import { NativeStackHeaderProps } from "@react-navigation/native-stack";
import { View, Text, TouchableOpacity } from "react-native";

export default function HomeScreen({ navigation }: NativeStackHeaderProps) {
  return (
    <View>
      <View>
        <Text>CityPop</Text>
      </View>
      <View>
        <TouchableOpacity onPress={() => navigation.navigate("Search City")}>
          <Text>Search by City</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("Search Country")}>
          <Text>Search by Country</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
