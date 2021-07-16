import React from 'react';
import {Button, TextInput, SafeAreaView, Text, StyleSheet, Pressable, Image, Dimensions, View} from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { Radar } from 'react-native-pathjs-charts';
import {ProgressChart, ContributionGraph} from "react-native-chart-kit";

const data = [{
      "water": 74,
      "sleep": 29,
      "exercise": 40,
      "social": 40,
      "work": 30,
    }]

const data2 = {
  labels: ["Exercise", "Sleep", "Water", "Work"], 
  data: [0.4, 0.6, 0.8, 0.4]
};

const options = {
      r: 120,
      max: 100,
      rings: 4,
      fill: "#2980B9",
      stroke: "#2980B9",
      animate: {
        type: 'oneByOne',
        duration: 200
      },
      label: {
        fontSize: 20,
        fontWeight: 'bold',
        fill: '#34495E',
        onLabelPress: this.onLabelPress
      } }


function HealthTrack(props) {
  return (
    <SafeAreaView style={styles.page}>
      <View style={styles.container}>
        <Radar data={data} options={options} />
        <ProgressChart
        data={data2}
        width={width*0.9}
        height={height*0.3}
        strokeWidth={10}
        radius={25}
        chartConfig={chartConfig}
        hideLegend={false}
        />
      </View>
    </SafeAreaView>
  );
}

const chartConfig = {
  color: (opacity = 1) => `rgba(0, 204, 0, ${opacity})`,
  strokeWidth: 2,
  barPercentage: 0.5,
  backgroundGradientFrom: "#FFFFE2",
  backgroundGradientTo: "#FFFFE2",
};

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

const styles = StyleSheet.create({
  page: {
    backgroundColor: '#FFFFE2'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFE2',
    marginTop: height*0.3,
    marginBottom: height,
    marginRight:width*0.1
  },
});


export default HealthTrack;
