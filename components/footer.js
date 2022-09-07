import { View, StyleSheet, TextInput, Button } from "react-native";

const Footer = (props) => {
  return (
    <View style={styles.footerview}>
      <TextInput style={styles.inputtext} placeholder={props.hinttext} />
      <Button title={props.buttontext} />
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
