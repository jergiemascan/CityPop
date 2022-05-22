import { NativeStackHeaderProps } from "@react-navigation/native-stack";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import { cityAndCountryInfo } from "../library/Types";
import { styles } from "../library/Style";

export default function Cities(props: any) {
  const renderCities = ({ item }: { item: cityAndCountryInfo }) => {
    return (
      <View>
        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate("City Population", { city: item });
          }}
        >
          <Text style={styles.customizedBtn}>{item.city}</Text>
        </TouchableOpacity>
      </View>
    );
  };

  console.log(props?.route?.params.city);

  return (
    <View style={styles.screenContainer}>
      <Text style={styles.h2}>{props?.route?.params.city[0].country}</Text>
      <View style={styles.btnContainer}>
        <FlatList
          data={props.route.params.city}
          renderItem={renderCities}
          keyExtractor={(item) => item.city}
        />
      </View>
    </View>
  );
}
