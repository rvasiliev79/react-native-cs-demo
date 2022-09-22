import { Text, View, Image, StyleSheet, ImageBackground } from "react-native";
import imgbackground from "../assets/images/headerback.jpg";

const Header = (props) => {
  return (
    <View style={styles.headerview}>
      <ImageBackground source={imgbackground} style={{ opacity: 0.5 }}>
        <Text style={styles.headertext}>{props.title}</Text>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  headerview: {
    flex: 0.15,
    alignItems: "center",
    width: "90%",
    backgroundColor: "moccasin",
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
