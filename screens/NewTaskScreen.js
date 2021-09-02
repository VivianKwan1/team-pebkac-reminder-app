import React, {useState, Fragment} from 'react';
import { Alert } from 'react-native';
import { TextInput } from 'react-native';
import { View,Button, SafeAreaView, Text, Dimensions, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { createStackNavigator, createAppContainer } from "react-navigation";
import { useNavigation } from "@react-navigation/native";

var date = new Date();
var time = new Date();

const onChange = (event, selectedDate) => {
  const currentDate = selectedDate || date;
  var tempHours = currentDate.getHours();
  var minutes = currentDate.getMinutes();
  date = currentDate.getMonth()+1+"/"+currentDate.getDate()+"/"+currentDate.getFullYear()
  var timeDay = "AM";
   var hours = tempHours;
   if (hours >= 12) {
     hours = tempHours - 12;
     timeDay = "PM";
   }
   if (hours == 0) {
     hours = 12;
   }
   minutes = minutes < 10 ? "0" + minutes : minutes;
   time = hours+":"+minutes+" "+timeDay
   // code to store date and time in db
 };

const NewTaskScreen = (props) => {

  return (
    <ScrollView style={styles.container}>
             <DateTimePicker
             style = {styles.dates}
         value={date}
         mode={"datetime"}
         onChange={onChange}
       />
    </ScrollView>
  );
};

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#406c34',
  },
  dates: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#faf0e6",
    marginTop: height * 0.02,
    borderRadius: 50,
    height: height * 0.06,
    width: width*0.6,
  },
});

export default NewTaskScreen;
