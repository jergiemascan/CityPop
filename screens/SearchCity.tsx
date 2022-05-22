import { NativeStackHeaderProps } from "@react-navigation/native-stack";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import { APIKey } from "../library/Types";
import { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import ErrorMessage from "../components/ErrorMessage";
import Loading from "../components/Loading";
import { styles } from "../library/Style";

const SearchCity = ({ navigation }: NativeStackHeaderProps) => {
  const [city, setCity] = useState([]);
  const [input, setInput] = useState("");

  const [loading, setLoading] = useState<boolean>();
  const [error, setError] = useState<string>(String);

  const getCity = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://api.api-ninjas.com/v1/city?name=${input}`,
        {
          method: "GET",
          headers: { "X-Api-Key": APIKey },
        }
      );
      const res = await response.json();
      setCity(res);
      // console.log(res);

      if (res.length === 0) {
        setError("No city found with that name");
      } else if (!res?.error) {
        navigation.navigate("City Population", { city: res[0] });
      }
    } catch (error) {
      setError("Failed to fetch city");
      console.log(error);
    }
    setLoading(false);
  };

  // render error message
  if (error && !loading) {
    return <ErrorMessage message={error} />;
  }

  // show loading status
  if (loading) {
    return <Loading />;
  }

  const DisplayPopulation = () => {
    if (!input) {
      setError("Please enter a city");
    } else {
      getCity();
    }
  };

  return (
    <View style={styles.screenContainer}>
      <Text style={styles.h2}>Search by city</Text>

      <View style={styles.searchContainer}>
        <TextInput
          style={styles.search}
          value={input}
          placeholder="Enter a city"
          placeholderTextColor={"blue"}
          onChangeText={(inputText) => {
            setInput(inputText);
          }}
        />
        <TouchableOpacity onPress={() => DisplayPopulation()}>
          <AntDesign
            name="search1"
            size={28}
            color="black"
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SearchCity;
