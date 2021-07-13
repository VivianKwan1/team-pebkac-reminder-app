import React from 'react';
import { TextInput } from 'react-native';
import { Button, SafeAreaView, Text, StyleSheet, Pressable } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

function SignUpScreen(props) {
    return (
        <SafeAreaView style = {styles.page}>
            <Pressable style = {styles.cancelButton}>
              <Text style = {styles.cancelText}>X
              </Text>
            </Pressable>
            <Text style={styles.texts}>Have an Account? Sign In</Text>
            <Text style={styles.accountText}>First Name</Text>
            <TextInput
                style={styles.accountInput}
                placeholder='  First Name'
            />

            <Text style={styles.accountText}>Last Name</Text>
            <TextInput
                style={styles.accountInput}
                placeholder='  Last Name'
            />

            <Text style={styles.accountText}>Email</Text>
            <TextInput
                style={styles.accountInput}
                placeholder='  Email Adress'
            />

            <Text style={styles.accountText}>Password</Text>
            <TextInput
                style={styles.accountInput}
                placeholder='  Password'
                secureTextEntry={true}
            />

            <Text style={styles.accountText}>Re-enter Password</Text>
            <TextInput
                style={styles.accountInput}
                placeholder='  Re-enter Password'
                secureTextEntry={true}
            />

            <Pressable style = {styles.createButton}>
              <Text style = {styles.text}>Create Account
              </Text>
            </Pressable>

            <Pressable style = {styles.googButton}>
              <Text style = {styles.text}>Google
              </Text>
            </Pressable>

            <Pressable style = {styles.fbButton}>
              <Text style = {styles.text}>Facebook
              </Text>
            </Pressable>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    texts: {
        fontSize:15,
        marginHorizontal: 10,
        fontWeight: 'bold'
    },
    createButton: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 15,
      elevation: 3,
      backgroundColor: '#0080FF',
      marginBottom: 10,
      marginHorizontal:90,
      borderRadius:10,
      marginTop: 20
    },
    
    googButton: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 18,
      elevation: 3,
      backgroundColor: '#0080FF',
      marginBottom: 15,
      marginHorizontal:110,
      borderRadius:10
    },

    fbButton: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 18,
      elevation: 3,
      backgroundColor: '#0080FF',
      marginBottom: 300,
      marginHorizontal:110,
      borderRadius:10
    },

    cancelButton: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 15,
      elevation: 3,
      marginBottom: 10,
      marginHorizontal:120,
      borderRadius:10
    },

    text: {
    fontSize:13,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
    },

    accountInput: {
        margin: 5,
        borderWidth: 2,
        borderRadius:10,
        fontSize:15,
        backgroundColor: '#E0E0E0'
    },

    accountText: {
        margin: 2,
        fontSize:13,
        marginHorizontal: 10
    }, 
    cancelText: {
    fontSize:25,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'red',
    },

    page: {
    backgroundColor: '#95FF80'
    },
})

export default SignUpScreen;
