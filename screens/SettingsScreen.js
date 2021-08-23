import React from 'react';
import { TextInput } from 'react-native';
import { Image, ScrollView, TouchableOpacity, View, Button, SafeAreaView, Text, StyleSheet, Pressable } from 'react-native';
import { createStackNavigator, createAppContainer, withNavigation } from 'react-navigation';
//import arrow from './assets/arrow.png';
import head from '../assets/head.png';
// import bell from './assets/bell.png';
// import shield from './assets/shield.png';
// import location from './assets/location.png';
// import connection from './assets/connection.png';
// import account from './assets/account.png';
// import trash from './assets/trash.png';
// import logout from './assets/logout.png';

const settingsOptions=[
  {title: 'Daily Reminders', OnPress: () => {}, image: {head}},
  {title: 'Appearance', OnPress: () => {}, image: {head}},
  {title: 'Notifications', OnPress: () => {}, image: {head}},
  {title: 'Security and Privacy', OnPress: () => {}, image: {head}},
  {title: 'Location', OnPress: () => {}, image: {head}},
  {title: 'Connection', OnPress: () => {}, image: {head}},
  {title: 'Account', OnPress: () => {}, image: {head}},
  {title: 'Delete All Tasks', OnPress: () => {}, image: {head}},
  {title: 'Logout', OnPress: () => {}, image: {head}},
]

function SettingsScreen({ navigation, settingOptions }) {
    return (
        <SafeAreaView style={styles.background}>
        {/* <Text>Settings Page!!!</Text> */}
        <ScrollView style={styles.options} endFillColor={'709c6c'}>
        <TouchableOpacity>
        {/* <Image source={head} style={{
              width: 20,
              height: 20,
              //tintColor:"transparent",
              paddingHorizontal: 100,
              paddingBottom: 100,
              paddingTop: 100

            }}></Image> */}
          <Text 
          style={styles.titleStyle}
          //onPress = {() => navigation.navigate('HomeScreen')}
          >
            Settings
            ____________________
            </Text>
        </TouchableOpacity>
        {settingsOptions.map(({title, onPress, image}, index) => (
          <TouchableOpacity key={title} onPress={onPress}>
            <View
              style={styles.optBorders}>
              <Text style={styles.text}>{title}</Text>
            </View>
          </TouchableOpacity>
        ))}
        </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({

    background:{
        backgroundColor: '#709c6c'
    },

    titleStyle:{
      fontSize: 25,
      color: 'white',
      fontWeight: 'bold',
      paddingHorizontal: 40,
      paddingBottom: 20,
      paddingTop: 20
    },

    text: {
      fontSize: 17,
      color: 'white',
      fontWeight: 'bold'
    },

    options:{
      backgroundColor: '#709c6c', //this is the exact color green of Subash's design
    },

    optBorders: {
      paddingHorizontal: 45,
      paddingBottom: 20,
      paddingTop: 20,
    },

    accountInput: {
        margin: 12,
        borderWidth: 1,
    },

    accountText: {
        margin: 5,
        fontWeight: 'bold',
    }

})

export default SettingsScreen;
