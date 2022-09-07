import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import Header from "./components/header.js";
import Selection from "./components/selection.js";
import Footer from "./components/footer.js";

export default function App() {
  return (
    <View style={styles.container}>
      <Header title="YOUR FAVOURITE COFFEESHOP" />

      <Selection items={a} />

      <Footer
        hinttext="Your delivery address please"
        buttontext="ORDER"
      ></Footer>

      <StatusBar style="auto" />
    </View>
  );
}

const a = ["Expresso", "Cappucino", "Latte", "Machianto", "Frap", "Milkshake"];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 25,
    paddingBottom: 15,
    backgroundColor: "teal",
    alignItems: "center",
    justifyContent: "center",
  },
});
