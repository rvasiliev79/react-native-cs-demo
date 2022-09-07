import { StatusBar } from 'expo-status-bar';
import { Button, Image, StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View } from 'react-native';
import icon1 from './assets/cafe-black-48dp.png';

export default function App() {
  return (
  
    <View style={styles.container}>
      <View style={styles.headerview}>
        <Text style={styles.headertext}> 
          YOUR FAVOURITE COFFEESHOP
        </Text>
      </View>

      <View style={styles.mainview}>
        {a.map(item => (
          <TouchableOpacity style={styles.item}>
            <View key={item}>
              <Image source={icon1}></Image>
              <Text>{item}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.footerview}>
        <TextInput style={styles.inputtext} placeholder='Enter your delivery address here'/>
        <Button title='ORDER' />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const a = ['Expresso', 'Cappucino', 'Latte', 'Machianto', 'Frap', 'Milkshake']

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 25,
    paddingBottom: 15,
    backgroundColor: 'teal',
    alignItems: 'center',
    justifyContent: 'center',
  },

  headerview: {
    flex: 0.15,
    alignItems: 'center',
    width: '90%',
    backgroundColor: 'red',
    justifyContent: 'center'
  },

  mainview: {
    flex: 0.8,
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: 'yellow',
    width: '90%',
    justifyContent: 'center'
  },

  footerview: {
    flex: 0.05,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'red',
    justifyContent: 'center',
    
  },


  headertext: {
    fontFamily: 'Roboto',
    fontSize: 26,
    fontWeight: 'Bold',
    fontStyle: 'italic',
    color: 'seashell',
    textshadowcolor: 'saddlebrown',
    textShadowRadius: 5,
    textShadowOffset: {width: 4, height: 4}
  },

  inputtext: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    padding: 3,
    width: '75%',
    marginEnd: 10,
  },

  item: {
    padding: 10,
    width: '40%',

  }

});
