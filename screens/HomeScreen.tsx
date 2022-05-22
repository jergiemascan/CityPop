import { NativeStackHeaderProps } from "@react-navigation/native-stack";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "../library/Style";

export default function HomeScreen({ navigation }: NativeStackHeaderProps) {
  return (
    <View style={styles.screenContainer}>
      <Text style={styles.h2}>CityPop</Text>

      <View style={styles.btnContainer}>
        <TouchableOpacity onPress={() => navigation.navigate("Search City")}>
          <Text style={styles.customizedBtn}>Search by City</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("Search Country")}>
          <Text style={styles.customizedBtn}>Search by Country</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
