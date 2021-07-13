import React from 'react';
import { TextInput } from 'react-native';
import { Button, SafeAreaView, Text, StyleSheet, Pressable } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

function SignInScreen(props) {
    return (
        <SafeAreaView>
            <Button
                title='X'
            // onPress={() => this.props.navigation.goBack()}
            />
            <Text style={styles.texts}>Don't Have Account? Sign Up</Text>
            <Text style={styles.accountText}>Email Address</Text>
            <TextInput
                style={styles.accountInput}
                placeholder='  Email Address'
            />

            <Text style={styles.accountText}>Password</Text>
            <TextInput
                style={styles.accountInput}
                placeholder='  Password'
                secureTextEntry={true}
            />

            <Pressable style = {styles.signButton}>
              <Text style = {styles.text}>Sign In
              </Text>
            </Pressable>

            <Pressable style = {styles.googfbButton}>
              <Text style = {styles.text}>Google
              </Text>
            </Pressable>

            <Pressable style = {styles.googfbButton}>
              <Text style = {styles.text}>Facebook
              </Text>
            </Pressable>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    texts: {
        fontSize:20,
        marginHorizontal: 10,
        fontWeight: 'bold'
    },
    signButton: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 18,
      elevation: 3,
      backgroundColor: '#0080FF',
      marginBottom: 15,
      marginHorizontal:120,
      borderRadius:50,
      marginTop: 30
    },
    
    googfbButton: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 18,
      elevation: 3,
      backgroundColor: '#0080FF',
      marginBottom: 15,
      marginHorizontal:120,
      borderRadius:50
    },

    text: {
    fontSize:18,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
    },

    accountInput: {
        margin: 5,
        borderWidth: 2,
        borderRadius:10,
        fontSize:20,
        backgroundColor: '#E0E0E0'
    },

    accountText: {
        margin: 2,
        fontSize:18,
        marginHorizontal: 10
    }

})

export default SignInScreen;