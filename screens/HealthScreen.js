import React from 'react';
import {Button, TextInput, SafeAreaView, Text, StyleSheet, ScrollView, Pressable, Image, Dimensions, View} from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import {LineChart} from "react-native-chart-kit";
import ActivityRings from "react-native-activity-rings";  

/* current progress is tracked weekly. currently includes 4 categories: water, exercise
  sleep and work. right now, random values are used as placeholders for user data.  */

// data for the water line chart
// replace with user's water completion data for an entire week 
// i.e. completed water tasks/all water tasks
const waterData = {
  labels: ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"],
  datasets: [
    {
      data: [0.7, 0.6, 0.7, 0.8, 0.7, 0.5],
      color: (opacity = 1) => `rgba(0, 128, 255, ${opacity})`,
    }
  ],
  legend: ["Water"],
};

// data for the exercise line chart
// replace with user's exercise completion data for an entire week 
// i.e. completed exercise tasks/all exercise tasks
const exerciseData = {
  labels: ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"],
  datasets: [
    {
      data: [0.7, 0.6, 0.7, 0.8, 0.7, 0.5],
      color: (opacity = 1) => `rgba(153, 255, 51, ${opacity})`,
    }
  ],
  legend: ["Exercise"],
};

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

// data for the work line chart
// replace with user's work completion data for an entire week 
// i.e. completed work tasks/all work tasks
const workData = {
  labels: ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"],
  datasets: [
    {
      data: [0.7, 0.6, 0.7, 0.8, 0.7, 0.5],
      color: (opacity = 1) => `rgba(255, 51, 51, ${opacity})`,
    }
  ],
  legend: ["Work"],
};

// activity rings data, color selection and label
const activityData = [
  {
    label: "Water",
    value: 0.8,
    color: "#0080FF",
  },
  {
    label: "Exercise",
    value: 0.6,
    color: "#99FF33",
  },
  {
    label: "Sleep",
    value: 0.2,
    color: "#86040f",
  },
  {
    label: "Work",
    value: 0.2,
    color: "#FF3333",
  }
];
 
 // sizing of the activity rings
 const activityConfig = {
  width: 180,
  height: 200,
  radius: 20,
  ringSize: 15,
}

function HealthTrack({navigation}) {
  return (
    <SafeAreaView style={styles.page}>
    <ScrollView>
      <View style={styles.container}>
        <ActivityRings 
        legend={true} 
        theme={"light"}
        data={activityData} 
        config={activityConfig}
        />
        <LineChart
        data={waterData}
        marginTop={100}
        width={width*0.9}
        height={height*0.3}
        chartConfig={lineConfig}
        bezier
        style = {{
          marginTop: height*0.05,
        }}
        />
        <LineChart
        data={exerciseData}
        marginTop={100}
        width={width*0.9}
        height={height*0.3}
        chartConfig={lineConfig}
        bezier
        style = {{
          marginTop: height*0.05,
        }}
        />
        <LineChart
        data={sleepData}
        marginTop={100}
        width={width*0.9}
        height={height*0.3}
        chartConfig={lineConfig}
        bezier
        style = {{
          marginTop: height*0.05,
        }}
        />
        <LineChart
        data={workData}
        marginTop={100}
        width={width*0.9}
        height={height*0.3}
        chartConfig={lineConfig}
        bezier
        style = {{
          marginTop: height*0.05,
        }}
        />
      </View>
      </ScrollView>
    </SafeAreaView>
  );
}

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

const styles = StyleSheet.create({
  page: {
    backgroundColor: '#FFFFE2'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFE2',
    marginBottom: height*0.1,
  }
});


export default HealthTrack;
