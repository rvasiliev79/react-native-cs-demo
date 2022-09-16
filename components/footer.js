import { useState } from "react";
import { View, StyleSheet, TextInput, Button, Alert } from "react-native";

const Footer = (props) => {
  const [AddressValue, setAddressValue] = useState("");
  let msg = "";

  function AddressHandler(enteredValue) {
    setAddressValue(enteredValue);
  }

  function OrderButtonHandler() {
    console.log(props.countofitems.length);

    if (AddressValue.toLowerCase().indexOf("москва") < 0) {
      //Alert.alert("Oops", "We only accept orders within Moscow");
      //return;
    }
    countofitems.forEach(appendtomessage);

    Alert.alert("Your order details", msg, [
      {
        text: "Confirm",
        onPress: () => Alert.alert("OK Pressed"),
        style: "default",
      },
      {
        text: "Cancel",
        style: "cancel",
      },
    ]);
  }

  function appendtomessage(item, pos) {
    console.log(item);
    if (item > 0) {
      msg += a[pos].name + " " + item + " cups at " + a[pos].price + "р. /n";
      console.log(a[pos].name, item, a[pos].price);
    }
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
