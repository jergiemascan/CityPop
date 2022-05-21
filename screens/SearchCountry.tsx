import { AntDesign } from "@expo/vector-icons";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";
import axios from "axios";
import { useState } from "react";
import { TextInput, TouchableOpacity, View, Text } from "react-native";

const SearchCountry = ({ navigation }: NativeStackHeaderProps) => {
  const [country, setCountry] = useState([]);
  const [value, setValue] = useState("");

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const getCountry = async () => {
    setLoading(true);
    try {
      const res = await axios.post(
        "https://countriesnow.space/api/v0.1/countries/population/cities/filter",
        { country: value, order: "asc", limit: 3 }
      );

      setCountry(res?.data?.data);
      // console.log(res?.data?.data)

      if (res?.data.length === 0) {
        setError("No country found with that name");
      } else if (!res?.error) {
        navigation.navigate("Cities", { city: res.data.data });
      }
    } catch (error) {
      setError("Failed to fetch country");
      console.log(error);
    }
    setLoading(false);
  };

  const showCountry = () => {
    getCountry();
  };

  return (
    <View>
      <View>
        <Text>Search by Country</Text>
      </View>
      <View>
        <TextInput
          placeholder="Enter a country"
          value={value}
          placeholderTextColor={"blue"}
          onChangeText={(inputText) => {
            setValue(inputText);
          }}
        />
        <TouchableOpacity onPress={() => showCountry()}>
          <AntDesign name="search1" size={28} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SearchCountry;
