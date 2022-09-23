import { Text, View, Image, StyleSheet, ImageBackground } from "react-native";
import imgbackground from "../assets/images/headerback-opacity.jpg";

const Header = (props) => {
  return (
    <View style={styles.headerview}>
      <ImageBackground source={imgbackground} style={styles.image}>
        <Text style={styles.headertext}>{props.title}</Text>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  headerview: {
    flex: 0.15,
    width: "90%",
    borderRadius: 10,
    elevation: 5,
  },

  image: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "flex-end",
    padding: 10,
  },

  headertext: {
    fontSize: 26,
    fontWeight: "Bold",
    fontStyle: "italic",
    color: "white",
    textshadowcolor: "white",
    textShadowRadius: 10,
    textShadowOffset: { width: 10, height: 10 },
  },
});

export default Header;
