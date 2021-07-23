import React from 'react';
import { TextInput } from 'react-native';
import { Button, SafeAreaView, Text, StyleSheet } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import NewTask from '../components/NewTask'

function HealthScreen({ navigation }) {
  

    return (
        
        <SafeAreaView>
            <Text> Health Page! </Text>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    
})

export default HealthScreen;
