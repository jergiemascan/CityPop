import { NativeStackHeaderProps } from "@react-navigation/native-stack";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import { cityAndCountryInfo } from "../library/Types";

export default function Cities(
  props: any,
  { navigation }: NativeStackHeaderProps
) {
  const renderCities = ({ item }: { item: cityAndCountryInfo }) => {
    return (
      <View>
        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate("City Population", { city: item });
          }}
        >
          <Text>{item.city}</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View>
      <Text>Countries</Text>
      <View>
        <Text>{props?.route?.params.city[0].country}</Text>
      </View>
      <FlatList
        data={props.route.params.city}
        renderItem={renderCities}
        keyExtractor={(item) => item.city}
      />
    </View>
  );
}
