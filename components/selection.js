import { useState } from "react";
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";
import icon1 from "../assets/cafe-black-48dp.png";

const Selection = (props) => {
  const [countofitems, countofitemshandler] = useState([0, 0, 0, 0, 0, 0]);

  function itemonpress(index) {
    console.log(a[index].name);
    console.log(countofitems[index]);
    countofitems[index]++;

    countofitemshandler((prevarray) => [...prevarray, ...countofitems]);
  }

  return (
    <View style={styles.mainview}>
      {props.items.map((item, index) => (
        <TouchableOpacity
          key={index}
          style={styles.item}
          onPress={() => itemonpress(index)}
        >
          <View>
            <Image source={icon1}></Image>
            <Text>
              {item.name}
              {index}
            </Text>
          </View>
          <View style={styles.qty}>
            <Text>{countofitems[index]}</Text>
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
  qty: {
    backgroundColor: "red",
    fontSize: 18,
  },
});

export default Selection;
