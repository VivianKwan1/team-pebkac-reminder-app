
import React, {useState} from 'react';
import Lottie from 'lottie-react-native';
import { Button, KeyboardAvoidingView, StyleSheet, Text, Image, View, TextInput, TouchableOpacity, Keyboard, ScrollView, Platform, SafeAreaView } from 'react-native';
import Task from '../components/Task'
import GroupTasksScreen from './GroupTasksScreen';
import { useNavigation } from '@react-navigation/native';
import peas from '../assets/20587-peas-playground-of-love.json';



export default function TaskCategory({}) {
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
    <View style={styles.container}>
     <ScrollView
        contentContainerStyle={{
          flexGrow: 1
        }}
        keyboardShouldPersistTaps='handled'
      >

      {/* Today's Tasks */}
      <View style={styles.tasksWrapper}>
      <TouchableOpacity activeOpacity = {0.5} onPress = {() => navigation.navigate('GroupTasksScreen')}>
        <Image source = {require ('../assets/arrow.png')} style = {styles.ImageIconStyle}  />
        <Text style={styles.sectionTitle}>Today's tasks</Text>
      </TouchableOpacity>
        
        <View style={styles.items}>
          {/* This is where the tasks will go! */}
          {
            taskItems.map((item, index) => {
              return (
                <TouchableOpacity key={index}  onPress={() => completeTask(index)}>
                  <Task text={item} /> 
                </TouchableOpacity>
              )
            })
          }
        </View>
      </View>

      </ScrollView>
      <KeyboardAvoidingView behavior = {Platform.OS === "ios"? "padding ": "height"}
                            style ={styles.writeTaskWrapper} >
       <TextInput style = {styles.input} placeholder = {'Write '} value = {task} onChangeText= {text => setTask(text )}/>

      <TouchableOpacity onPress={() => handleAddTask()}>
        <View style = {styles.addWrapper}>
          <Text style = {styles.addText}>+</Text>
        </View>
      </TouchableOpacity>
      </KeyboardAvoidingView>

     
      <SafeAreaView style = {styles.gifstyle}>
        <Lottie resizeMode = "contain" autoSize source = {peas} autoPlay loop/>
      </SafeAreaView>
    

    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#51804E',
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  ImageIconStyle: {
    paddingLeft: 12,
    marginLeft: 10,
    height: 15,
    width: 10,
    resizeMode: 'stretch',
  },
  sectionTitle: {
    marginTop:-22,
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 40,
  },
  gifstyle:{
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center',
    top: -200,
    left: 100,
    width: '20%',
  },

  items: {
    marginTop: 30,
  },
  writeTaskWrapper: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#FFF',
    borderRadius: 60,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    width: 250,
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#FFF',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 1,
  },
  addText: {},
});
