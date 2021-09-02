import React, {useState, Fragment} from 'react';
import { Alert } from 'react-native';
import { TextInput } from 'react-native';
import { Button, SafeAreaView, Text, Dimensions, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

var today = new Date();
var todayString = today.getMonth()+1 +"/"+today.getDate()+"/"+ today.getFullYear();
today = new Date(todayString);
var yesterday = new Date(today);
yesterday.setDate(yesterday.getDate()-1)
var tomorrow = new Date(today);
tomorrow.setDate(tomorrow.getDate()+1);
const bgColor = '#406c34';

var Tasks = [
    {
    Task: 'Walk the dog',
    Label: '#0000FF',
    Date: '08/27/2021',
    Time: '8:00 AM',
    },
    {
    Task: 'Midterm Paper',
    Label: '#FF0000',
    Date: '09/02/2021',
    Time: '10:00 AM',
    },
    {
    Task: 'Call Grandma',
    Label: '#800080',
    Date: '09/20/2021',
    Time: '8:00 AM',
    },
    {
    Task: 'Party Hard',
    Label: '#74ee15',
    Date: todayString,
    Time: '8:00 AM',
    },
    {
    Task: 'Throw trash out',
    Label: '#74ee15',
    Date: '09/02/2021',
    Time: '8:00 AM',
    },

];

function pastTasks() {
    var today = new Date();
    var tempTasks = [];
    for(const x of Tasks){
        if (new Date(x.Date+" "+ x.Time).getTime() <= yesterday.getTime()) {
            tempTasks.push(x);
        }
    }
    return tempTasks
}

function currTasks() {
    var today = new Date();
    var tempTasks = [];
    for(const x of Tasks){
        if (new Date(x.Date+" "+ x.Time).getTime() > yesterday.getTime())  {
            if (new Date(x.Date+" "+ x.Time).getTime() < tomorrow.getTime()) {
                tempTasks.push(x);
            }
        }
    }
    return tempTasks
}

function futureTasks() {
    var today = new Date();
    var tempTasks = [];
    for(const x of Tasks){
        if (new Date(x.Date+" "+ x.Time).getTime() > today.getTime()) {
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

function TasksScreen({ navigation }) {
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
    opacity: 0.1,
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
