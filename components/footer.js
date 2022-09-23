import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  Button,
  Alert,
  Keyboard,
} from "react-native";

const Footer = (props) => {
  const [AddressValue, setAddressValue] = useState("");
  let msg = "";
  let totalamount = 0;

  function AddressHandler(enteredValue) {
    setAddressValue(enteredValue);
  }

  function OrderButtonHandler() {
    Keyboard.dismiss();

    if (AddressValue.trim() == "") {
      Alert.alert("Oops", "Please specify where to deliver your order");
      return;
    }

    if (AddressValue.toLowerCase().indexOf("москва") < 0) {
      //Alert.alert("Oops", "We only accept orders within Moscow");
      //return;
    }
    msg = "";
    totalamount = 0;
    countofitems.forEach(appendtomessage);
    msg +=
      "------------------------------\n" +
      "Address: " +
      AddressValue +
      "\n" +
      "------------------------------\n" +
      "Checkout total: " +
      totalamount +
      " p.";

    if (totalamount == 0) {
      Alert.alert("Oops", "Please order something");
      return;
    }

    Alert.alert("Your order details", msg, [
      {
        text: "Confirm",
        onPress: sendtotelegram,
        style: "default",
      },
      {
        text: "Cancel",
        style: "cancel",
      },
    ]);
  }

  function appendtomessage(item, pos) {
    if (item > 0) {
      msg += a[pos].name + " " + item + " cup(s) at " + a[pos].price + "р. \n";
      totalamount += a[pos].price * props.countofitems[pos];
    }
  }

  function sendtotelegram() {
    const response = fetch(props.posturl + msg);
    console.log(response);
    Alert.alert(
      "Thank you",
      "You order was successfuly submitted to the shop. Selection will now reset"
    );
    props.countofitems.fill(0);
    refOfTextInput.clear();
    //countofitemshandler(() => [...countofitems]);
  }

  return (
    <View style={styles.footerview}>
      <TextInput
        style={styles.inputtext}
        placeholder={props.hinttext}
        onChangeText={AddressHandler}
        ref={(ref) => {
          this.refOfTextInput = ref;
        }}
      />
      <Button title={props.buttontext} onPress={OrderButtonHandler} />
    </View>
  );
};

const styles = StyleSheet.create({
  footerview: {
    flex: 0.06,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "moccasin",
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
