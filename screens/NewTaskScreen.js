import React, {useState} from 'react';
import ReactDOM from "react-dom";
import { View } from 'react-native';
import { TextInput } from 'react-native';
import { Button, SafeAreaView, Text, StyleSheet, Alert, KeyboardAvoidingView,TouchableOpacity, Dimensions, Keyboard, ScrollView, Platform, Image } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { useNavigation } from '@react-navigation/native';
import NewTask from '../components/NewTask'
import TaskCategory from './TaskCategory';
import Task from '../components/Task';
import { Audio } from 'expo-av';
import SignIn from './SignInScreen';


export default function NewTaskScreen() {

  const [recording, setRecording] = useState();

  startRecording = async () => {
    try {
      Alert.alert('Requesting permissions..');
      await Audio.requestPermissionsAsync();
      await Audio.setAudioModeAsync({
        allowsRecordingIOS: true,
        playsInSilentModeIOS: true,
      }); 
      Alert.alert('Starting recording..')
      const recording = new Audio.Recording();
      await recording.prepareToRecordAsync(Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY);
      await recording.startAsync();
      setRecording(recording);
    } catch (err) {
      Alert.alert('Recording failed to start', err);
    }
  }

  stopRecording = async () => {
    setRecording(undefined);
    await recording.stopAndUnloadAsync();
    const uri = recording.getURI();
    
  }

  return (
    <View style={styles.container}>
    <View style={{ flexDirection:"row" }}>
      <TouchableOpacity style={styles.button} activeOpacity={0.5} onPress={() => startRecording()}>
          <Text style={styles.texts}>Record</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} activeOpacity={0.5} onPress={() => stopRecording()}>
          <Text style={styles.texts}>Stop</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
}
const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: '#756EDC',
  },
  button: {
    marginTop: height*0.1,
    marginBottom: height*0.01,
    marginHorizontal: width*0.05,
    height: 30,
    borderRadius:10,
    backgroundColor: '#ff0000',
    borderColor: '#000000',
    borderWidth: 2
  },
  texts: {
    fontSize:20,
    marginHorizontal: width*0.05,
    color: '#FFFFFF',
  },
}); 

