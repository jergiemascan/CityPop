import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",

    backgroundColor: "#f0f8ff",
  },

  h2: {
    fontSize: 22,
    fontWeight: "bold",
    textTransform: "uppercase",
    textAlign: "center",
  },
  btnContainer: {
    marginVertical: 30,
    textAlign: "center",
    justifyContent: "center",
    width: "100%",
    padding: 4,
    flex: 0.5,
  },
  customizedBtn: {
    marginVertical: 4,
    backgroundColor: "#009688",

    paddingVertical: 10,
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
    textTransform: "uppercase",
  },
  searchContainer: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    padding: 4,
    flex: 0.4,
  },
  search: {
    padding: 6,
    fontSize: 16,
    textAlign: "center",
    borderColor: "#000",
    borderWidth: 1,
    width: "100%",
  },
  icon: {
    marginVertical: 10,
  },
  populationContainer: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 120,
    borderColor: "#000",
    marginTop: 50,
    borderWidth: 1,
    flex: 0.4,
  },
  population: {
    fontSize: 18,
    marginTop: 5,
  },
  errorMessageContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: 100,
    padding: 4,
    flex: 1,
    backgroundColor: "#b0c4de",
  },
});
