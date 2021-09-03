import React, {useState, Fragment} from 'react';
import { Alert } from 'react-native';
import { TextInput } from 'react-native';
import { Button, SafeAreaView, Text, Dimensions, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { createStackNavigator, createAppContainer } from "react-navigation";
import { useNavigation } from "@react-navigation/native";
import firebase from "firebase";

var today = new Date();
var todayString = today.getMonth()+1 +"/"+today.getDate()+"/"+ today.getFullYear();
today = new Date(todayString)
var yesterday = new Date(today);
yesterday.setDate(yesterday.getDate()-1)
var tomorrow = new Date(today);
tomorrow.setDate(tomorrow.getDate()+1);
const bgColor = '#406c34';
var myTasks = [];
var tmpTask = {};
var colorHex = '';

function TasksScreen({ navigation }) {
  const userId = firebase.auth().currentUser.uid;
  firebase
      .database()
      .ref("users/" + userId + "/tasks")
      .on("value", (tasks) => {
        tasks.forEach((childTask) =>{
  
          //finding out which label it has
          //personal
          if (childTask.child('labels').child('personal').toJSON().toString() ==='true') {
              colorHex = '#BFD0CA';
          } //work
          else if (childTask.child('labels').child('work').toJSON().toString() === 'true') {
              colorHex = '#84ad75';
          } //school
          else if (childTask.child('labels').child('school').toJSON().toString() ==='true') {
              colorHex = '#FF0000';
          } //social
          else if (childTask.child('labels').child('social').toJSON().toString() ==='true') {
              colorHex = '#0F4C81';
          }
  
          //
          tmpTask = {
              Task: childTask.child('taskName').val(),
              Label: colorHex,
              Date: childTask.child('date').val(),
              Time: childTask.child('time').val()
          }
  
          myTasks.push(tmpTask)
  
        });
        
      });
  
      var markedDatesArray = [];

      function setMarkedDatesArray(){
          if(myTasks === []){
              return [];
          }
          else{
              for(x in myTasks){
  
                  var temp = {
                                  date: myTasks[x].Date,
                                  dots: [
                                        {
                                        color: myTasks[x].Label
                                        }
                                        ]
                              };
  
                  markedDatesArray.push(temp);
              }
          }
      }
  
      function combineLabels(){
          var date = [];
          var tags = [];
          //for each task, find out if there is another task with the same day. Tag/Day is pushed to tags if there are.
          for(x in myTasks){
              if(date.includes(myTasks[x].Date)){
                  tags.push([myTasks[x].Label,myTasks[x].Date]);
              }else{
                  date.push(myTasks[x].Date);
              }
          }
          //for each task with the same day, adjust the tag in the colors array.
          for( i in tags){
              for(j in markedDatesArray){
                  if(markedDatesArray[j].date == tags[i][1]){
  
                      if(markedDatesArray[j].dots[0].color == tags[i][0]){
                          continue;
                      }else{
                          markedDatesArray[j].dots.push({color: tags[i][0]});
                      }
                  }
              }
          }
      }
  
      setMarkedDatesArray();
      combineLabels();
  
  function pastTasks() {
      var tempTasks = [];
      for(const x of myTasks){
          if (new Date(x.Date).getTime() < today.getTime()) {
              tempTasks.push(x);
          }
      }
      return tempTasks
  }
  
  function currTasks() {
      var tempTasks = [];
      for(const x of myTasks){
          if (new Date(x.Date).getTime() >= today.getTime())  {
            if (new Date(x.Date).getTime() < tomorrow.getTime()) {
              tempTasks.push(x);
            }
          }
      }
      return tempTasks
  }
  
  function futureTasks() {
      var tempTasks = [];
      for(const x of myTasks){
          if (new Date(x.Date).getTime() >= tomorrow.getTime()) {
              tempTasks.push(x);
          }
      }
      return tempTasks
  }
  
  var tempPast = pastTasks()
  
  var past = tempPast.sort((a,b) => {
      return new Date(a.Date+" "+ a.Time).getTime() - 
      new Date(b.Date+" "+b.Time).getTime()
  })
  
  var tempCurrent = currTasks()
  
  var current = tempCurrent.sort((a,b) => {
      return new Date(a.Date+" "+ a.Time).getTime() - 
      new Date(b.Date+" "+b.Time).getTime()
  })
  
  var tempFuture = futureTasks()
  
  var future = tempFuture.sort((a,b) => {
      return new Date(a.Date+" "+ a.Time).getTime() - 
      new Date(b.Date+" "+b.Time).getTime()
  })
    var dateReturned = [];
  return (
        <ScrollView style={styles.container}>
            <Text style = {styles.todayText}>Today</Text>
            {current.map((prop) => {
                return (
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.taskText}> {prop.Time}   {prop.Task}
                        </Text>
                    </TouchableOpacity>
                );
            })}
            {future.map((prop) => {
                if (dateReturned.indexOf(prop.Date) > -1) {
                    return (
                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.taskText}> {prop.Time}  {prop.Task}
                            </Text>
                        </TouchableOpacity>   
                    );
                }
                else {
                    dateReturned.push(prop.Date)
                    return (
                        <Fragment>
                            <Text style = {styles.dateText}>{prop.Date}</Text>
                            <TouchableOpacity style={styles.button}>
                            <Text style={styles.taskText}> {prop.Time}  {prop.Task}
                            </Text>
                            </TouchableOpacity>
                        </Fragment>       
                    );
                }
                
            })}
            <Text style = {styles.todayText}>Past Tasks</Text>
            {past.map((prop) => {
                return (
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.taskText}> {prop.Date}   {prop.Task}
                        </Text>
                    </TouchableOpacity>
                );
            })}
        </ScrollView>
    );
}

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: bgColor,
  },
  button: {
    activeOpacity: 0.1,
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    borderRadius: 50,
  },
  taskText: {
    color: "#000000",
    fontSize: 15
  },
  todayText: {
    color: "#FFFFFF",
    fontSize: 20,
    marginTop: height*0.05,
    marginLeft: width*0.05
  },
  dateText: {
    color: "#FFFFFF",
    fontSize: 20,
    marginTop: height*0.03,
    marginLeft: width*0.05
  }
});

export default TasksScreen;
