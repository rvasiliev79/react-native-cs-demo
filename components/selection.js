import { Text, View, Image, TouchableOpacity, StyleSheet } from "react-native";
import icon1 from "../assets/cafe-black-48dp.png";

const Selection = (props) => {
  return (
    <View style={styles.mainview}>
      {props.items.map((item) => (
        <TouchableOpacity style={styles.item}>
          <View key={Math.random()}>
            <Image source={icon1}></Image>
            <Text>{item}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  mainview: {
    flex: 0.8,
    flexDirection: "row",
    flexWrap: "wrap",
    backgroundColor: "yellow",
    width: "90%",
    justifyContent: "center",
  },

  item: {
    padding: 10,
    width: "40%",
  },
});

export default Selection;
