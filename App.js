import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import Header from "./components/header.js";
import Selection from "./components/selection.js";
import Footer from "./components/footer.js";

export default function App() {
  return (
    <View style={styles.container}>
      <Header title="pick your coffee" />

      <Selection items={a} />

      <Footer
        hinttext="Your delivery address please"
        buttontext="ORDER"
        items={a}
        posturl={posturl}
      ></Footer>

      <StatusBar style="auto" />
    </View>
  );
}

global.a = [
  { id: 0, name: "Espresso", price: 10, qty: 0 },
  { id: 1, name: "Cappucino", price: 20, qty: 0 },
  { id: 2, name: "Latte", price: 30, qty: 0 },
  { id: 3, name: "Irish", price: 40, qty: 0 },
  { id: 4, name: "Americano", price: 50, qty: 0 },
  { id: 5, name: "Milkshake", price: 60, qty: 0 },
];

global.posturl =
  "https://api.telegram.org/bot5581032695:AAHWkxotWwXv9wIM2pdkHbuSaZgbEjPI7-I/sendMessage?chat_id=@rncstest1&parse_mode=HTML&text=";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 25,
    paddingBottom: 15,
    backgroundColor: "antiquewhite",
    alignItems: "center",
    justifyContent: "center",
  },
});
