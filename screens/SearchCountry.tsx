import { AntDesign } from "@expo/vector-icons";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";
import axios from "axios";
import { useState } from "react";
import { TextInput, TouchableOpacity, View, Text } from "react-native";
import ErrorMessage from "../components/ErrorMessage";
import Loading from "../components/Loading";
import { styles } from "../library/Style";

const SearchCountry = ({ navigation }: NativeStackHeaderProps) => {
  const [country, setCountry] = useState([]);
  const [value, setValue] = useState("");

  const [loading, setLoading] = useState<boolean>();
  const [error, setError] = useState<string>(String);

  const getCountry = async () => {
    setLoading(true);
    try {
      const res = await axios.post(
        "https://countriesnow.space/api/v0.1/countries/population/cities/filter",
        { country: value, order: "asc" }
      );

      setCountry(
        res?.data?.data
          ?.sort(
            (a, b) => b.populationCounts[0]?.value < a.populationCounts[0].value
          )
          .splice(0, 3)
      );

      // console.log(
      //   res?.data?.data
      //     ?.sort(
      //       (a, b) => b.populationCounts[0]?.value - a.populationCounts[0].value
      //     )
      //     .splice(0, 3),
      //   "data"
      // );
      // console.log(res?.data?.data);
      if (res.data.data.length === 0) {
        setError("No country found with that name");
      } else if (!res?.data?.data.error) {
        navigation.navigate("Cities", {
          city: res?.data?.data
            ?.sort(
              (a, b) =>
                b.populationCounts[0]?.value - a.populationCounts[0].value
            )
            .splice(0, 3),
        });
      }
    } catch (error) {
      setError("No country found with that name");
      console.log(error);
    }
    setLoading(false);
  };

  // displaying error message
  if (error && !loading) {
    return <ErrorMessage message={error} />;
  }

  // show loading status
  if (loading) {
    return <Loading />;
  }

  const showCountry = () => {
    if (!value) {
      setError("Please enter a country");
    } else {
      getCountry();
    }
  };

  return (
    <View style={styles.screenContainer}>
      <Text style={styles.h2}>Search by Country</Text>

      <View style={styles.searchContainer}>
        <TextInput
          style={styles.search}
          placeholder="Enter a country"
          value={value}
          placeholderTextColor={"blue"}
          onChangeText={(inputText) => {
            setValue(inputText.trim());
          }}
        />

        <TouchableOpacity onPress={() => showCountry()}>
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

export default SearchCountry;
