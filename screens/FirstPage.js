import React from 'react';
import { Button, TextInput, SafeAreaView, Text, StyleSheet, Pressable } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import SignInScreen from './SignInScreen';
import SignUpScreen from './SignUpScreen';

function FirstPage(props) {
    return (
        <SafeAreaView style={styles.page}>
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
        marginBottom:200,
        textAlign: 'center'
    },
    
    signInbutton: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 15,
      elevation: 3,
      backgroundColor: '#0080FF',
      marginBottom: 20,
      marginHorizontal:110,
      borderRadius:10
    },

    signUpbutton: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 15,
      elevation: 3,
      backgroundColor: '#0080FF',
      marginBottom: 300,
      marginHorizontal:110,
      borderRadius:10
    },

    text: {
    fontSize:20,
    lineHeight: 27,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
    page: {
    backgroundColor: '#95FF80',
  },
})

export default FirstPage;
