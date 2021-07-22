import React from 'react';
import { TextInput } from 'react-native';
import { Button, SafeAreaView, Text, StyleSheet, Pressable, Image, Dimensions, View} from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

function SignUpScreen({navigation}) {
    return (
        <SafeAreaView style = {styles.page}>
        <Image source={require('../assets/thirdPage.png')} style = {styles.backImage}/>
            <Pressable style = {styles.cancelButton} onPress={() => navigation.navigate('FirstPage')}>
              <Text style = {styles.cancelText}>X
              </Text>
            </Pressable>
            <Pressable style = {styles.signinButton}>
              <Text style = {styles.texts} onPress = {() => navigation.navigate('SignInScreen')}>Have an account? Sign in here
              </Text>
            </Pressable>
            <Text style={styles.accountText}>First Name</Text>
            <TextInput
                style={styles.accountInput}
            />

            <Text style={styles.accountText}>Last Name</Text>
            <TextInput
                style={styles.accountInput}
            />

            <Text style={styles.accountText}>Email</Text>
            <TextInput
                style={styles.accountInput}
            />

            <Text style={styles.accountText}>Password</Text>
            <TextInput
                style={styles.accountInput}
                secureTextEntry={true}
            />

            <Text style={styles.accountText}>Re-enter Password</Text>
            <TextInput
                style={styles.accountInput}
                secureTextEntry={true}
            />

            <Pressable style = {styles.createButton} onPress={() => navigation.navigate('HomeScreen')}>
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

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

const styles = StyleSheet.create({
  texts: {
    fontSize:18,
    marginHorizontal: width*0.05,
    marginBottom: height*0.01,
    color: '#3399FF'
    },

    signinButton: {
      marginBottom: 5,
      marginHorizontal: width*0.05,
    },
    createButton: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: height*0.025,
      backgroundColor: '#8A873B',
      marginBottom: 15,
      marginHorizontal: width*0.1,
      borderRadius:10,
      marginTop: 30
    },
    
    googButton: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: height*0.025,
      backgroundColor: '#8A873B',
      marginBottom: 15,
      marginHorizontal: width*0.1,
      borderRadius:10
    },

    fbButton: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: height*0.025,
      backgroundColor: '#8A873B',
      marginBottom: height*0.2,
      marginHorizontal: width*0.1,
      borderRadius:10
    },

    cancelButton: {
      alignItems: 'flex-end',
      paddingVertical: 18,
      marginBottom: height*0.0001,
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
        fontSize:15,
    },

    accountText: {
        fontWeight: 'bold',
        margin: height*0.005, 
        fontSize:height*0.025,
        marginHorizontal: width*0.1,
    },

    cancelText: {
    fontSize:height*0.03,
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

export default SignUpScreen;