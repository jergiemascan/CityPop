import { View, Text } from "react-native";

export default function CityPopulation(props: any) {
  console.log(props?.route?.params, "yyyy");

  return (
    <View>
      {/* <View>
        <Text>{props?.route?.params.city?.city}</Text>
        <Text>{props?.route?.params.city?.populationCounts[0].value}</Text>
      </View> */}
      <View>
        <Text>{props?.route?.params.city?.name}</Text>
        <Text>{props?.route?.params.city?.population}</Text>
      </View>
    </View>
  );
}
