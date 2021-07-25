import React, {useState} from 'react';
import ReactDOM from "react-dom";
import { View } from 'react-native';
import { TextInput } from 'react-native';
import { Button, SafeAreaView, Text, StyleSheet, KeyboardAvoidingView,TouchableOpacity, Keyboard, ScrollView, Platform, Image } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { useNavigation } from '@react-navigation/native';
import NewTask from '../components/NewTask'
import TaskCategory from './TaskCategory';
import Task from '../components/Task'

const NewTaskScreen =(props) =>{

    const navigation = useNavigation();
    const [task, setTask] = useState();
    const [taskItems, setTaskItems] = useState([]);
  
    const handleAddTask = () => {
      Keyboard.dismiss();
      setTaskItems([...taskItems, task])
      setTask(null);
    }
  
    const completeTask = (index) => {
      let itemsCopy = [...taskItems];
      itemsCopy.splice(index, 1);
      setTaskItems(itemsCopy)
    }


    return (
        <View style = {styles.container}>
        <SafeAreaView >
            
            <Text style = {styles.sectionTitle}> New Tasks</Text>
            <NewTask></NewTask>
            {
            taskItems.map((item, index) => {
              return (
                <TouchableOpacity key={index}  onPress={() => completeTask(index)}>
                  <Task text={item} /> 
                </TouchableOpacity>
              )
            })
          }
           
        </SafeAreaView>

      <KeyboardAvoidingView behavior = {Platform.OS === "ios"? "padding ": "height"}
                             >
      <TextInput style = {styles.input} placeholder = {'Write '} value = {task} onChangeText= {text => setTask(text )}/>

      <TouchableOpacity onPress={() => handleAddTask()}>
        <View style = {styles.addWrapper}>
          <Text style = {styles.addText}>Create</Text>
          
        </View>
      </TouchableOpacity>

      <View style={styles.cancleBox}>
        <TouchableOpacity style={styles.button} activeOpacity={0.5} onPress={() => navigation.navigate('GroupTasksScreen')}>
        <Text > Cancle  {props.text}</Text>
        </TouchableOpacity>
         
        </View>

      </KeyboardAvoidingView>
   



        </View>

    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#756EDC',

    },
    accountInput: {
        margin: 12,
        borderWidth: 1,
    },
    sectionTitle: {
        fontSize: 24,
        color: '#fff',
        fontWeight: 'bold',
        paddingLeft:60,
        paddingTop:30,
      },
    accountText: {
        margin: 5,
        fontWeight: 'bold',
    }
    ,writeTaskWrapper: {
        position: 'absolute',
        bottom: 10,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    cancleBox: {
        width: 110,
        height: 50,
        backgroundColor: '#F35E5E',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#C0C0C0',
        borderWidth: 1,
        position: "absolute",
        top: 450,
        left: 280,
    },
    input: {
        position:"absolute",
        top: -100,
        paddingVertical: 15,
        paddingHorizontal: 15,
        backgroundColor: '#FFF',
        borderRadius: 10,
        borderColor: '#C0C0C0',
        borderWidth: 1,
        width: 360,
        marginLeft: 20,
    },
    addWrapper: {
        width: 110,
        height: 50,
        backgroundColor: '#759873',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#C0C0C0',
        borderWidth: 1,
        position: "absolute",
        top: 450,
        left: 20,
    },

})

export default NewTaskScreen;
