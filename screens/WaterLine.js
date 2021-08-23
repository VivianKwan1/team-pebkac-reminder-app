import React from 'react';
import {Button, TextInput, SafeAreaView, Text, StyleSheet, ScrollView, Pressable, Image, Dimensions, View} from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import {LineChart} from "react-native-chart-kit";

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height


function WaterLine({navigation}) {
  return (
        <SafeAreaView style={styles.page}>
            <Pressable style = {styles.cancelButton} onPress = {() => navigation.navigate('HealthScreen')}>
                    <Text style = {styles.cancelText}>X
                    </Text>
            </Pressable>
            <Text>Charts and stuff go here</Text>
        </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: '#FFFFE2',
  },
  cancelText: {
    fontSize:30,
    fontWeight: 'bold',
    color: 'red',
    },
    cancelButton: {
      alignItems: 'flex-end',
      paddingVertical: 18,
      elevation: 3,
      marginHorizontal: width*0.1,
    },
});

export default WaterLine;
