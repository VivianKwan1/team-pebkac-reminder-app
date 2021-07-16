import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';


const NewTask = (props) => {

  return (
    <View >
        <View style = {styles.item}>
        <Text style={styles.itemText}> ????? {props.text}</Text>
        </View>

        <View style={styles.box}></View>

        

      <View style={styles.circular}></View>

      <View style={styles.circular}></View>

      
    </View>
  )
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#fff',
    padding: 60,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
    marginLeft:20,
    marginRight:20,
    marginTop:20,

    
  },

  box: {
    backgroundColor: '#6F996C',
    padding: 40,
    paddingLeft: 80,
    paddingRight: 80,
    borderRadius: 10,
    flexDirection: 'row',
    position: 'absolute', left: '10%', top: '140%', bottom: '30%',
    justifyContent: 'space-between',
    marginBottom: 20,
    marginLeft:20,
    marginRight:20,
    marginTop:20,
  },

  itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap'
  },
  square: {
    width: 24,
    height: 24,
    backgroundColor: '#fff',
    opacity: 0.8,
    borderRadius: 5,
    marginRight: 15,
  },
  itemText: {
    maxWidth: '80%',
  },
//   circular: {
//     width: 12,
//     height: 12,
//     borderColor: '#fff',
//     borderWidth: 2,
//     borderRadius: 5,
//   },
});

export default NewTask;