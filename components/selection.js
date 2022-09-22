import { useState } from "react";
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";

//Below are the images with coffee import, make them 150x150 max
import imgcoffee1 from "../assets/images/espresso-1.png";
import imgcoffee2 from "../assets/images/cappuccino-2.png";
import imgcoffee3 from "../assets/images/latte-3.png";
import imgcoffee4 from "../assets/images/irish-4.png";
import imgcoffee5 from "../assets/images/americano-5.png";
import imgcoffee6 from "../assets/images/milkshake-6.png";

const Selection = (props) => {
  const [countofitems, countofitemshandler] = useState(props.countofitems);
  const icons = [
    imgcoffee1,
    imgcoffee2,
    imgcoffee3,
    imgcoffee4,
    imgcoffee5,
    imgcoffee6,
  ];

  function itemonpress(index) {
    const total = props.countofitems.reduce(
      (sum, currentval) => (sum = sum + currentval),
      0
    );
    if (total > 20) {
      Alert.alert("You cannot drink more then 20 cups %)");
    } else {
      props.countofitems[index]++;
      countofitemshandler(() => [...countofitems]);
    }
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
            <Image style={styles.image} source={icons[index]}></Image>
            <View style={styles.name}>
              <Text>{item.name}</Text>
              <Text>{item.price}р</Text>
            </View>
          </View>

          <View
            style={props.countofitems[index] > 0 ? styles.qty : styles.hide}
          >
            <Text style={styles.qtytext}>{props.countofitems[index]}</Text>
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
    alignContent: "center",
    width: "90%",
  },

  item: {
    marginHorizontal: 15,
    padding: 10,
    width: "40%",
  },

  image: {
    alignSelf: "center",
    height: 130,
    resizeMode: "contain",
  },

  qty: {
    backgroundColor: "red",
    borderRadius: 15,
    paddingHorizontal: 5,
    elevation: 15,
    position: "absolute",
  },
  qtytext: {
    Color: "white",
    fontSize: 20,
  },
  name: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  hide: {
    display: "none",
  },
});

export default Selection;
