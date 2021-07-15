import React from 'react';
import { Button, TextInput, SafeAreaView, Text, StyleSheet } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignInScreen from './SignInScreen';
import SignUpScreen from './SignUpScreen';

function FirstPage({ navigation }) {
    return (
        <SafeAreaView>
            <Text style={styles.appName}>Reminder App Name</Text>
            
            <Button
                title='Sign In'
                onPress={() => navigation.navigate('SignInScreen')}
            />

            <Button
                title='Sign Up'
                onPress={() => navigation.navigate('SignUpScreen')}
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