import { NativeStackHeaderProps } from "@react-navigation/native-stack";
import axios from "axios";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import { APIKey } from "../library/Types";
import { useState, useEffect } from "react";
import { AntDesign } from "@expo/vector-icons";

const SearchCity = ({ navigation }: NativeStackHeaderProps) => {
  const [city, setCity] = useState([]);
  const [input, setInput] = useState("");

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

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
      console.log(res);

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

  const DisplayPopulation = () => {
    getCity();
  };

  return (
    <View>
      <View>
        <Text>Search by city</Text>
      </View>
      <View>
        <TextInput
          value={input}
          placeholder="Enter a city"
          placeholderTextColor={"blue"}
          onChangeText={(inputText) => {
            setInput(inputText);
          }}
        />
        <TouchableOpacity onPress={() => DisplayPopulation()}>
          <AntDesign name="search1" size={28} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SearchCity;
