import React , {useState} from 'react';
import { ReactNative, TextInput } from 'react-native';
import { Button, SafeAreaView, Text, StyleSheet, Dimensions, Image, View, TouchableOpacity } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import CalendarStrip from 'react-native-calendar-strip';
import { render } from 'react-dom';
import CalendarTask from '../components/CalendarTask'
import firebase from "firebase";
import { watchPositionAsync } from 'expo-location';




function CalendarScreen({ navigation }) {

    const [selectedDate,setSelectedDate] = useState(["No date selected"]);
    const [taskList,setTaskList] = useState([]);
    const [start,setStart] = useState();
    const [myTasks, setMyTasks] = useState([]);

    const userId = firebase.auth().currentUser.uid;
    var tmpTask = {};
    var colorHex = '';
    
    const getTaskNum = firebase
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

        if(myTasks.length < tasks.numChildren()){
            myTasks.push(tmpTask)
        }

      });
      
    });


    const pressed = () => {
        
    }
    const clickHandler = (date) => {
        var strDate = date.toISOString();
        var newDate = strDate.substring(0,10);
        var converted = convertDate(newDate);
        setSelectedDate(converted);
        console.log(selectedDate);
        var tempTasks = [];
        for(x in myTasks){
            console.log(myTasks[x].Date, converted);
            if(converted == myTasks[x].Date){
                tempTasks.push(myTasks[x].Task);
            }
        }
        if(tempTasks.length==0){
            tempTasks = ["No tasks, just relax!"];
        }
        setTaskList(tempTasks);
        setStart(date);
    }

    // var Tasks = [
    //     {
    //         Task: 'Walk the dog',
    //         Label: '#BFD0CA',
    //         Date: '08/26/2021',
    //         Time: '8:00 AM',
    //     },
    //     {
    //         Task: 'Midterm Paper',
    //         Label: '#FF0000',
    //         Date: '08/28/2021',
    //         Time: '8:00 AM',
    //     },
    //     {
    //         Task: 'Call Grandma',
    //         Label: '#0F4C81',
    //         Date: '08/28/2021',
    //         Time: '8:00 AM',
    //     },
    //     {
    //         Task: 'Party Hard',
    //         Label: '#84ad75',
    //         Date: '08/28/2021',
    //         Time: '9:00 PM',
    //     },
    //     {
    //         Task: 'Throw trash out',
    //         Label: '#84ad75',
    //         Date: '08/27/2021',
    //         Time: '8:00 AM',
    //     },

    // ];
    // console.log(myTasks);

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

    function convertDate(day){
        var toReturn = '';
        if(day.substring(5,6)=='0'){
            toReturn += day.substring(6,7);
        }else{
            toReturn += day.substring(5,7);
        }
        toReturn+="/";
        if(day.substring(8,9)=='0'){
            toReturn += day.substring(9,10);
        }else{
            toReturn += day.substring(8);
        }
        toReturn+="/";
        toReturn += day.substring(0,4);
        return toReturn;
    }

    setMarkedDatesArray();
    combineLabels();


    return (
        <SafeAreaView style = {styles.mainContainer}>
            <Image source={require('../assets/thirdPage.png')} style = {styles.backImage}/>
                <CalendarStrip
                scrollable
                daySelectionAnimation={{type: 'border', duration: 200, borderWidth: 1, borderHighlightColor: 'white'}}
                style={{height:75, paddingTop: 0, paddingBottom: 0}}
                calendarColor={'#faf0e6'}
                calendarHeaderStyle={{color: 'black'}}
                dateNumberStyle={{color: 'black'}}
                dateNameStyle={{color: 'black'}}
                iconContainer={{flex: 0.1}}
                markedDates = {markedDatesArray}
                onDateSelected={clickHandler}
                />
                <Text style = {styles.header}>{selectedDate}</Text>
                <View style={styles.items}>
                    {
                    taskList.map((item, index) => {
                    return (
                        <TouchableOpacity key={index}  onPress={() => pressed}>
                            <CalendarTask text={item} /> 
                        </TouchableOpacity>
                        )
                    })
                    }
                </View>

        </SafeAreaView>
    );
}

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: "#faf0e6",
    },
    accountInput: {
        margin: 12,
        borderWidth: 1,
    },
    header: {
        fontSize: 20,
        textAlign: 'center',
        marginTop: 15,
    },
    accountText: {
        margin: 5,
        fontWeight: 'bold',
    },  
    backImage: {
        width: '100%', height: '100%', flex: 1, resizeMode: 'stretch',
        position:'absolute',
        alignContent:'center',
        marginTop: height*0.04,
        opacity: .5
      },
      items: {
        marginTop: 30,
      },

})

export default CalendarScreen;