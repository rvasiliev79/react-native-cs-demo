import { StatusBar } from "expo-status-bar";
import { useState } from "react";
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

global.a = [
  { id: 0, name: "Expresso", price: 10, qty: 0 },
  { id: 1, name: "Cappucino", price: 20, qty: 0 },
  { id: 2, name: "Latte", price: 30, qty: 0 },
  { id: 3, name: "Frap", price: 40, qty: 0 },
  { id: 4, name: "Americano", price: 50, qty: 0 },
  { id: 5, name: "Mikshake", price: 60, qty: 0 },
];

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
