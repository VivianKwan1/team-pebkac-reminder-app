import React from 'react';
import { TextInput } from 'react-native';
import { Dimensions, Image, ScrollView, TouchableOpacity, View, Button, SafeAreaView, Text, StyleSheet, Pressable } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { useNavigation } from '@react-navigation/native';
import { Icon } from 'react-native-elements'

function SettingsScreen() {
    const navigation = useNavigation(); 
    return (
    <SafeAreaView style={styles.background}>
        <ScrollView>
          
        <View style={styles.view}>
          <Pressable onPress={() => navigation.goBack('MenuScreen')}>
          <Icon
              name='arrow-left'
              type='material-community'
              color='white'
              size={30}
              style={styles.backButton}/>
          </Pressable>
          <Text style={styles.title}>Settings</Text>
        </View>

        <SettingsComponent 
          name="emoticon-excited" 
          text="Appearance"/>

        <SettingsComponent 
          name="bell" 
          text="Notifications"/>

        <SettingsComponent 
          name="security" 
          text="Security and Privacy"/>

        <SettingsComponent 
          name="transit-connection-variant" 
          text="Connection"/>

        <SettingsComponent 
          name="account-box-outline" 
          text="Account"/>

        <SettingsComponent 
          name="delete" 
          text="Delete All Tasks"/>

        <SettingsComponent 
          name="logout" 
          text="Logout"/>

        </ScrollView>
      </SafeAreaView>
    );
}

const SettingsComponent = (props) => {
  return (
    <TouchableOpacity style={styles.button}>
    <View style={styles.view}>
    <Icon
          name={props.name}
          type={"material-community"}
          color={"white"}
          size={30}
          style={styles.icon}/>
    <Text style={styles.text}>{props.text}</Text>
    </View>
    </TouchableOpacity> 
  );
}

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

const styles = StyleSheet.create({

     icon:{
      paddingLeft:25
    },

    backButton:{
      paddingHorizontal: 20,
      paddingTop: 5,
    },

    button:{
      borderWidth : 1.5,
      borderRadius: 50,
      marginBottom: 8,
      marginHorizontal: width*0.03,
      paddingVertical: 2,
      borderColor:"white",
      alignItems:"stretch"
    },

    view:{
      flexDirection: "row",
      alignItems: "center",
      alignContent: 'flex-start'
    },

    background:{
        backgroundColor: '#608a5c',
        flex:1,
    },

    title:{
      fontSize: 35,
      fontWeight: '400',
      color: 'white',
      paddingHorizontal: 20,
      paddingBottom: 30,
      paddingTop: 20,
    },

    text: {
      fontSize: 17,
      color: 'white',
      fontWeight: '500',
      paddingHorizontal: 40,
      paddingBottom: 20,
      paddingTop: 20,
    },
  

    optBorders: {
      paddingHorizontal: 45,
      paddingBottom: 20,
      paddingTop: 20,
    },

})

export default SettingsScreen;
