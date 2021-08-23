import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';


const NewTask = (props) => {

  return (
    <View >
        <TextInput
          style={styles.itemText}
          placeholder="Category"
        />
    </View>
  )
}

const styles = StyleSheet.create({
  itemText: {
    maxWidth: '80%',
    borderRadius: 10,
    marginBottom: 20,
    marginLeft:20,
    marginRight:20,
    marginTop:20,
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
