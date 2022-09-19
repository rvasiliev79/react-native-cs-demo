import { useState } from "react";
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";

const Selection = (props) => {
  const [countofitems, countofitemshandler] = useState(props.countofitems);

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
            {console.log("../assets/" + item.icon)};
            <Image source={require("../assets/" + item.icon)}></Image>
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

    width: "90%",
    justifyContent: "center",
  },

  item: {
    padding: 10,
    width: "40%",
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
