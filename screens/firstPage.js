import React from 'react';
import { Button, TextInput, SafeAreaView, Text, StyleSheet } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import SignInScreen from './SignInScreen';
import SignUpScreen from './SignUpScreen';

function FirstPage(props) {
    return (
        <SafeAreaView>
            <Text style={styles.appName}>Reminder App Name</Text>
            
            <Button
                title='Sign In'
            />

            <Button
                title='Sign Up'
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    appName: {
        fontWeight: 'bold',
        fontSize:60,
        marginBottom:100,
        textAlign: 'center'
    },

})

export default FirstPage;
