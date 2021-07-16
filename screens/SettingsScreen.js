import React from 'react';
import { TextInput } from 'react-native';
import { Button, SafeAreaView, Text, StyleSheet } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

function SettingsScreen({ navigation }) {
    return (
        <SafeAreaView>
            <Text>Settings Page!!!</Text>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
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