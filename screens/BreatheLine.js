import React from 'react';
import { TouchableOpacity, Button, TextInput, SafeAreaView, Text, StyleSheet, ScrollView, Pressable, Image, Dimensions, View} from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import * as Progress from 'react-native-progress';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from "react-native-chart-kit";
import { Icon } from 'react-native-elements'

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

const data = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  datasets: [
    {
      data: [20, 45, 28, 60, 64, 43], //hard coded in hours
    }
  ],
  legend: ["Breathe (in hours) From the Last 12 Months"]
};
const chartConfig = {
  backgroundGradientFromOpacity: 0,
  backgroundGradientToOpacity: 0,
  color: (opacity = 1) => 'rgb(204, 102, 0)',
};

function BreatheLine({navigation}) {
  const buttonClickedHandler = () => {
    console.log('You have clicked a button!');
    // add to global variable and then compute new percentage
  };
  return (
        <SafeAreaView style={styles.page}>
            <ScrollView>
            <Pressable style = {styles.cancelButton} onPress={() => navigation.goBack('HealthScreen')}>
              <Text style = {styles.cancelText}>X</Text>
            </Pressable>

            <View>
            <Text style={styles.mainText}>Breathe Tracking</Text>
            <Text style={styles.otherText}>
            Update your Breathe Progress and Goals!
            </Text>
            </View>

            <Progress.Pie progress={breatheProgress} color = {"#ffbf80"} size={150} style={styles.pie}/>
            <Text style={styles.percentText}>{breatheProgress*100}%</Text>

            <View style={styles.container1}>     
            <TouchableOpacity 
            onPress={buttonClickedHandler}
            style={styles.roundButton}>
            <Icon
              name='self-improvement'
              type='material-icons'
              color='black'
              size={35}/>
            <Text style={styles.text}>X Minutes</Text>
            </TouchableOpacity>
            </View>

            <LineChart
              data={data}
              width={width}
              height={220}
              chartConfig={chartConfig}
              style={styles.lineChart}
            /> 
          </ScrollView>
        </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 15,
    color: 'black',
  },

  roundButton: {
    width: 150,
    height: 90,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    backgroundColor: '#ffdab3',
  },

  lineChart:{
      paddingTop: 20
  },

  page: {
    backgroundColor: '#faf0e6',
    flex:1,
  },

  pie: {
    alignSelf: 'center',
    paddingTop: 30
  },

  percentText:{
    fontSize:25,
    alignSelf: "center",
  },

  cancelText: {
    fontSize:25,
    fontWeight: 'bold',
    color: 'black',
    },

    cancelButton: {
      alignItems: 'flex-end',
      paddingTop: 20,
      paddingHorizontal: 30
    },

    mainText: {
      fontWeight: "bold",
      fontSize: 30,
      textAlign: "center",
    },
  
    otherText: {
      opacity: 100,
      fontSize: 15,
      textAlign: "center",
    },

    container1: {
      paddingTop: 10,
      alignSelf: 'center',
    },

});

export default BreatheLine;