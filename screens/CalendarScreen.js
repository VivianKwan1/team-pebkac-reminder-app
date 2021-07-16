import React from 'react';
import { ReactNative, TextInput } from 'react-native';
import { Button, SafeAreaView, Text, StyleSheet } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';



function CalendarScreen({ navigation }) {
    return (
        <SafeAreaView>
            <Calendar/>
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

export default CalendarScreen;