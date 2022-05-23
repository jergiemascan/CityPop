import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import Cities from "./screens/Cities";
import CityPopulation from "./screens/CityPopulation";
import HomeScreen from "./screens/HomeScreen";
import SearchCity from "./screens/SearchCity";
import SearchCountry from "./screens/SearchCountry";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Search Country" component={SearchCountry} />
        <Stack.Screen name="Search City" component={SearchCity} />
        <Stack.Screen name="Cities" component={Cities} />
        <Stack.Screen name="City Population" component={CityPopulation} />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
