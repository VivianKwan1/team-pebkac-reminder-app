import React, { useState, useEffect, useRef } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as Notifications from 'expo-notifications';

export default function App() {

  const [expoPushToken, setExpoPushToken] = useState('');

  useEffect(() => {
    (async() => {
      if(Platform.OS === 'ios'){
        const {status} = Notifications.requestPermissionsAsync();
        if(status !== 'granted'){
          alert('not granted notification permissions');
          return (
            <View>
              <Text>thing</Text>
            </View>
          )
        }
      }
    })();
  }, []);

  return (


  <View>
    <Text>Team PEBKAC's Reminder App!</Text>
  </View>
    

  )

}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
