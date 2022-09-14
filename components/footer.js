import { useState } from "react";
import { View, StyleSheet, TextInput, Button, Alert } from "react-native";

const Footer = (props) => {
  const [AddressValue, setAddressValue] = useState("");

  function calcamount() {}

  function AddressHandler(enteredValue) {
    setAddressValue(enteredValue);
  }

  function OrderButtonHandler() {
    Alert.alert(countofitems.length.toString());
  }

  return (
    <View style={styles.footerview}>
      <TextInput
        style={styles.inputtext}
        placeholder={props.hinttext}
        onChangeText={AddressHandler}
      />
      <Button title={props.buttontext} onPress={OrderButtonHandler} />
    </View>
  );
};

const styles = StyleSheet.create({
  footerview: {
    flex: 0.05,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "red",
    justifyContent: "space-between",
    width: "90%",
  },

  inputtext: {
    borderBottomColor: "black",
    borderBottomWidth: 1,
    padding: 3,
    width: "75%",
  },
});

export default Footer;
