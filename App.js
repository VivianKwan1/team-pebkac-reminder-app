import 'react-native-gesture-handler';
import React, { useState, useEffect, useRef } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as Notifications from 'expo-notifications';
import SignInScreen from './screens/SignInScreen';
import FirstPage from './screens/FirstPage';
import SignUpScreen from './screens/SignUpScreen';
import HomeScreen from'./screens/HomeScreen';
import SettingsScreen from'./screens/SettingsScreen';

const Stack = createStackNavigator();

export default function App() {

  // const [expoPushToken, setExpoPushToken] = useState('');

  // useEffect(() => {
  //   (async() => {
  //     if(Platform.OS === 'ios'){
  //       const {status} = Notifications.requestPermissionsAsync();
  //       if(status !== 'granted'){
  //         alert('not granted notification permissions');
  //         return (
  //           <View>
  //             <Text>thing</Text>
  //           </View>
  //         )
  //       }
  //     }
  //   })();
  // }, []);

  return (
    <NavigationContainer>
    {
      <Stack.Navigator initialRouteName="FirstPage">
        <Stack.Screen name="FirstPage" component={FirstPage} options={{ headerShown: false }}/>
        <Stack.Screen name="SignInScreen" component={SignInScreen} options={{ headerShown: false }} />
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} options={{ headerShown: false }} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="SettingsScreen" component={SettingsScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
    }
    </NavigationContainer>

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