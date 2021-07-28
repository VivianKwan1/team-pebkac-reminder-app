import React from 'react';
import { TextInput } from 'react-native';
import { Button, SafeAreaView, Text, StyleSheet, Pressable, Dimensions, View, Image } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

function SignInScreen({navigation}) {
    return (
        <SafeAreaView style = {styles.page}>
          <Image source={require('../assets/secondPage.png')} style = {styles.backImage}/>
            <Pressable style = {styles.cancelButton} onPress = {() => navigation.navigate('FirstPage')}>
              <Text style = {styles.cancelText}>X
              </Text>
            </Pressable>
            <Pressable style = {styles.signupButton} onPress = {() => navigation.navigate('SignUpScreen')}>
              <Text style = {styles.texts}>Don't have an account? Sign up
              </Text>
            </Pressable>

            <Text style={styles.accountText}>Email Address</Text>
            <TextInput
                style={styles.accountInput}
            />

            <Text style={styles.accountText}>Password</Text>
            <TextInput
                style={styles.accountInput}
                secureTextEntry={true}
            />

            <Pressable style = {styles.signButton} onPress = {() => navigation.navigate('HomeScreen')}>
              <Text style = {styles.text}>Sign In
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

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

const styles = StyleSheet.create({
    texts: {
        fontSize:20,
        marginHorizontal: width*0.1,
        marginTop: height*0.1,
        marginBottom: height*0.01
    },
    signupButton: {
      marginBottom: 5,
      marginHorizontal: width*0.05,
      borderRadius:10
    },
    signButton: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 18,
      elevation: 3,
      backgroundColor: '#8A873B',
      marginBottom: 15,
      marginHorizontal: width*0.1,
      borderRadius:10,
      marginTop: 30
    },

    cancelButton: {
      alignItems: 'flex-end',
      paddingVertical: 18,
      elevation: 3,
      marginBottom: 15,
      marginHorizontal: width*0.1,
      borderRadius:10
    },
    
    googButton: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 18,
      elevation: 3,
      backgroundColor: '#8A873B',
      marginBottom: 15,
      marginHorizontal: width*0.1,
      borderRadius:10
    },

    fbButton: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 18,
      elevation: 3,
      backgroundColor: '#8A873B',
      marginBottom: 300,
      marginHorizontal: width*0.1,
      borderRadius:10
    },

    text: {
    fontSize:18,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
    },

    accountInput: {
        marginHorizontal: width*0.1,
        borderWidth: 1,
        //borderRadius:10,
        fontSize:20
    },

    accountText: {
        fontWeight: 'bold',
        margin: 10, 
        fontSize:18,
        marginHorizontal: width*0.1,
    },

    cancelText: {
    fontSize:30,
    fontWeight: 'bold',
    color: 'red',
    },
    
    page: {
    backgroundColor: '#FFFFE2'
    },

    backImage: {
    width: '90%', height: '60%', flex: 1, resizeMode: 'stretch', 
    alignContent:'center',
    position:'absolute',
    marginTop: height*0.3
  },

})

export default SignInScreen;
