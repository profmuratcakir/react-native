import { StyleSheet } from "react-native";

//? Bir den fazla komponentte aynı stillendirmemiz
//? olacak ise bu stilleri global olarak tanimlamak
//? tekrar kod yazmaktan bizi kurtaracaktır.

export const globalStyles = StyleSheet.create({
  baslik: {
    textAlign: "center",
    color: "darkgreen",
    fontWeight: "700",
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  input: {
    width: "80%",
    borderWidth: 1,
    height: 40,
    marginRight: 10,
  },
  isKutu: {
    padding: 10,
    backgroundColor: "yellowgreen",
    marginVertical: 15,
    borderRadius: 5,
    shadowColor: "black",
    shadowOpacity: 0.5,
    elevation: 5,
  },
  isYazi: {
    fontSize: 20,
    fontWeight: "700",
  },
});
