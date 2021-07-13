import React from 'react';
import { Button, TextInput, SafeAreaView, Text, StyleSheet, Pressable } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignInScreen from './SignInScreen';
import SignUpScreen from './SignUpScreen';

function FirstPage(props) {
    return (
        <SafeAreaView>
            <Text style={styles.appName}>Reminder App Name</Text>
            <Pressable style = {styles.signInbutton}>
              <Text style = {styles.text}>Sign In
              </Text>
            </Pressable>
            <Pressable style = {styles.signUpbutton}>
              <Text style = {styles.text}>Sign Up
              </Text>
            </Pressable>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    appName: {
        fontWeight: 'bold',
        fontSize:60,
        marginBottom:400,
        textAlign: 'center'
    },
    
    signInbutton: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 25,
      paddingHorizontal: 32,
      elevation: 3,
      backgroundColor: '#0080FF',
      marginBottom: 20,
      marginHorizontal:120,
      borderRadius:50
    },

    signUpbutton: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 25,
      paddingHorizontal: 32,
      elevation: 3,
      backgroundColor: '#0080FF',
      marginBottom: 20,
      marginHorizontal:110,
      borderRadius:50
    },

    text: {
    fontSize:25,
    lineHeight: 27,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
})

export default FirstPage;