import React from 'react';
import {Button, TextInput, SafeAreaView, Text, StyleSheet, ScrollView, Pressable, Image, Dimensions, View} from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import {LineChart} from "react-native-chart-kit";

// styling for label color, dot size, and area under the plot color
const lineConfig = {
  color: (opacity = 1) => `rgba(255, 178, 102, ${opacity})`,
  width:width*0.8,
  fillShadowGradientOpacity: 1,
  labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
  propsForDots: {
        r: "5",
      },
};

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

// data for the sleep line chart
// replace with user's sleep completion data for an entire week 
// i.e. completed sleep tasks/all sleep tasks
const sleepData = {
  labels: ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"],
  datasets: [
    {
      data: [0.7, 0.6, 0.7, 0.8, 0.7, 0.5],
      color: (opacity = 1) => `rgba(134, 4, 15, ${opacity})`,
    }
  ],
  legend: ["Sleep"],
};

function SleepLine({navigation}) {
  return (
    <SafeAreaView style={styles.page}>
    <Pressable style = {styles.cancelButton} onPress = {() => navigation.navigate('HealthScreen')}>
              <Text style = {styles.cancelText}>X
              </Text>
            </Pressable>
      <LineChart
        data={sleepData}
        width={width*0.9}
        height={height*0.3}
        chartConfig={lineConfig}
        bezier
        style = {{
          marginTop: height*0.05,
          marginBottom: height,
          marginLeft: width*0.05
        }}
        />
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

export default SleepLine;