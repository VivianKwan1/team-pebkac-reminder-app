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
      data: [20, 45, 28, 60, 64, 43], //hard coded in ounces
    }
  ],
  legend: ["Water Intake (in ounces) From the Last 12 Months"]
};
const chartConfig = {
  backgroundGradientFromOpacity: 0,
  backgroundGradientToOpacity: 0,
  color: (opacity = 1) => 'rgb(0, 102, 204)',
};

function WaterLine({navigation}) {
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
            <Text style={styles.mainText}>Water Tracking</Text>
            <Text style={styles.otherText}>
            Update your Water Progress and Goals!
            </Text>
            </View>

            <Progress.Pie progress={waterProgress} color = {"#80bfff"} size={150} style={styles.pie}/>
            <Text style={styles.percentText}>{waterProgress*100}%</Text>

            {/* We need to make this a variable and update it with functionality */}
            <Text style={styles.percentText}>X/64 Ounces</Text>
            <Text style={styles.percentText}>64-X Ounces to go</Text>

            <View style={styles.container1}>
            <TouchableOpacity 
            onPress={buttonClickedHandler}
            style={styles.roundButton}>
            <Icon
              name='cup-water'
              type='material-community'
              color='black'
              size={35}/>
            <Text style={styles.text}>+8 ounces</Text>
            </TouchableOpacity>

            <TouchableOpacity 
            onPress={buttonClickedHandler}
            style={styles.roundButton}>
            <Icon
              name='bottle-soda-classic'
              type='material-community'
              color='black'
              size={35}/>
            <Text style={styles.text}>+16.9 ounces</Text>
            </TouchableOpacity>

            <TouchableOpacity 
            onPress={buttonClickedHandler}
            style={styles.roundButton}>
            <Icon
              name='bottle-tonic'
              type='material-community'
              color='black'
              size={35}/>
            <Text style={styles.text}>+32 ounces</Text>
            </TouchableOpacity>

            <TouchableOpacity 
            onPress={buttonClickedHandler}
            style={styles.roundButton}>
            <Icon
              name='bottle-wine'
              type='material-community'
              color='black'
              size={35}/>
            <Text style={styles.text}>Other</Text>
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
    fontSize: 13,
    color: 'black',
  },

  roundButton: {
    width: 95,
    height: 95,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
    borderRadius: 100,
    backgroundColor: '#b3daff',
  },

  lineChart:{
      paddingTop: 30
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
    fontSize:20,
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
    paddingTop: 20,
    flexDirection:'row',
    alignSelf: 'center',
  },

});

export default WaterLine;
