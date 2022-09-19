import { Text, View, StyleSheet } from "react-native";

const Header = (props) => {
  return (
    <View style={styles.headerview}>
      <Text style={styles.headertext}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerview: {
    flex: 0.15,
    alignItems: "center",
    width: "90%",
    backgroundColor: "antiquewhite",
    elevation: 5,
    justifyContent: "center",
  },

  headertext: {
    fontFamily: "Roboto",
    fontSize: 26,
    fontWeight: "Bold",
    fontStyle: "italic",
    color: "darkslategrey",
    textshadowcolor: "saddlebrown",
    textShadowRadius: 5,
    textShadowOffset: { width: 4, height: 4 },
  },
});

export default Header;
