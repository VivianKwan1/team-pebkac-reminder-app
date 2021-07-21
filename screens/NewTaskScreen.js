import React from 'react';
import { TextInput } from 'react-native';
import { Button, SafeAreaView, Text, StyleSheet } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import NewTask from '../components/NewTask'

function NewTaskScreen({ navigation }) {
  

    return (
        
        <SafeAreaView style = {styles.container}>
            <Text style = {styles.sectionTitle}> New Tasks</Text>
            <NewTask></NewTask>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#756EDC',

    },
    accountInput: {
        margin: 12,
        borderWidth: 1,
    },
    sectionTitle: {
        fontSize: 24,
        color: '#fff',
        fontWeight: 'bold',
        paddingLeft:60,
        paddingTop:30,
      },
    accountText: {
        margin: 5,
        fontWeight: 'bold',
    }

})

export default NewTaskScreen;
