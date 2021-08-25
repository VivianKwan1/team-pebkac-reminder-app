import React from 'react';
import { TextInput } from 'react-native';
import { Button, SafeAreaView, Text, StyleSheet } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

var Tasks = [
    {
        Task: 'Walk the dog',
        Label: '#0000FF',
        Date: '08/19/2021',
        Time: '8:00 AM',
    },
    {
        Task: 'Midterm Paper, ',
        Label: '#FF0000',
        Date: '08/20/2021',
        Time: '8:00 AM',
    },
    {
        Task: 'Call Grandma, ',
        Label: '#800080',
        Date: '08/20/2021',
        Time: '8:00 AM',
    },
    {
        Task: 'Party Hard',
        Label: '#74ee15',
        Date: '08/20/2021',
        Time: '9:00 PM',
    },
    {
        Task: 'Throw trash out',
        Label: '#74ee15',
        Date: '08/17/2021',
        Time: '8:00 AM',
    },

];

function TasksScreen({ navigation }) {
    return (
        <SafeAreaView>
            <Text>Tasks Page!!!</Text>
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

export default TasksScreen;