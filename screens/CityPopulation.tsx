import { View, Text } from "react-native";
import { styles } from "../library/Style";

export default function CityPopulation(props: any) {
  return (
    <View style={styles.screenContainer}>
      {props?.route?.params?.city?.city && (
        <View>
          <Text style={styles.h2}>{props?.route?.params?.city?.city}</Text>

          <View style={styles.populationContainer}>
            <Text>Population</Text>
            <Text>
              {props?.route?.params.city?.populationCounts[0].value
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, " ")}
            </Text>
          </View>
        </View>
      )}

      {props?.route?.params?.city?.name && (
        <View>
          <Text style={styles.h2}>{props?.route?.params?.city?.name}</Text>

          <View style={styles.populationContainer}>
            <Text>Population</Text>
            <Text style={styles.population}>
              {props?.route?.params?.city?.population
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, " ")}
            </Text>
          </View>
        </View>
      )}
    </View>
  );
}
