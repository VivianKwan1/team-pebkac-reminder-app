import React from 'react';
import {SafeAreaView, Text, StyleSheet, ScrollView, Pressable, TouchableOpacity , Dimensions, View} from 'react-native';
import ActivityRings from "react-native-activity-rings";
import * as Progress from 'react-native-progress';
import { useNavigation } from '@react-navigation/native';


/* current progress is tracked weekly. currently includes 4 categories: water, exercise
  sleep and work. right now, random values are used as placeholders for user data.  */


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


function HealthTrack(props) {
  const navigation = useNavigation();
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
        <Text style={styles.text}> Water Goals </Text>
        <TouchableOpacity style={styles.button} activeOpacity={0.5} onPress = {() => navigation.navigate('WaterLine')}>
        <Progress.Bar progress={0.3} width={width*0.8} height={height*0.03} borderRadius={9} borderColor={'black'} borderWidth={4}/>
        </TouchableOpacity>
        <Text style={styles.text}> Exercise Goals </Text>
        <TouchableOpacity style={styles.button} activeOpacity={0.5} style = {styles.exerciseButton} onPress = {() => navigation.navigate('ExerciseLine')}>
        <Progress.Bar progress={0.3} color={"#99FF33"} width={width*0.8} height={height*0.03} borderRadius={9} borderColor={'black'} borderWidth={4}/>
        </TouchableOpacity>
        <Text style={styles.text}> Sleep Goals </Text>
        <TouchableOpacity style={styles.button} activeOpacity={0.5} style = {styles.exerciseButton} onPress = {() => navigation.navigate('SleepLine')}>
        <Progress.Bar progress={0.3} color = {"#86040f"}  width={width*0.8} height={height*0.03} borderRadius={9} borderColor={'black'} borderWidth={4}/>
        </TouchableOpacity>
        <Text style={styles.text}> Work Goals </Text>
        <TouchableOpacity style={styles.button} activeOpacity={0.5} style = {styles.exerciseButton} onPress = {() => navigation.navigate('WorkLine')}>
        <Progress.Bar progress={0.3} color = {"#FF3333"} width={width*0.8} height={height*0.03} borderRadius={9} borderColor={'black'} borderWidth={4} marginBottom={height*0.07}/>
        </TouchableOpacity>
      </View>
      </ScrollView>
    </SafeAreaView>
  );
}


const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

const styles = StyleSheet.create({
  page: {
    backgroundColor: '#faf0e6',
  },
  text: {
    fontSize: 20,
    margin: height*0.03
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#faf0e6',
    marginBottom: height*0.1,
  }
});


export default HealthTrack;