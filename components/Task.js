import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';


const Task = (props) => {

  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
        <View style={styles.square}></View>
        <Text style={styles.itemText}> hello {props.text}</Text>
      </View>
      <View style={styles.circular}></View>

      
    </View>
  )
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#A4B5A3',
    padding: 15,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
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

export default Task;