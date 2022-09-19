import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import Header from "./components/header.js";
import Selection from "./components/selection.js";
import Footer from "./components/footer.js";

export default function App() {
  return (
    <View style={styles.container}>
      <Header title="YOUR FAVOURITE COFFEESHOP" />

      <Selection items={a} countofitems={countofitems} />

      <Footer
        hinttext="Your delivery address please"
        buttontext="ORDER"
        items={a}
        countofitems={countofitems}
        posturl={posturl}
      ></Footer>

      <StatusBar style="auto" />
    </View>
  );
}

global.a = [
  { id: 0, name: "Espresso", price: 10, icon: "iconespresso.png", qty: 0 },
  { id: 1, name: "Cappucino", price: 20, icon: "cafe-black-48dp.png", qty: 0 },
  { id: 2, name: "Latte", price: 30, icon: "cafe-black-48dp.png", qty: 0 },
  { id: 3, name: "Frap", price: 40, icon: "cafe-black-48dp.png", qty: 0 },
  { id: 4, name: "Americano", price: 50, icon: "cafe-black-48dp.png", qty: 0 },
  { id: 5, name: "Milkshake", price: 60, icon: "cafe-black-48dp.png", qty: 0 },
];
global.countofitems = [0, 0, 0, 0, 0, 0];
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
