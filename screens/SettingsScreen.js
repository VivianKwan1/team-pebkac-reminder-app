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
      <Image source={require('../assets/leaves.png')} style = {styles.backImage}/>
      <ScrollView>
      <View style={styles.view}>
        <Pressable onPress={() => navigation.goBack('MenuScreen')}>
        <Icon
            name='arrow-left'
            type='material-community'
            color='#faf0e6'
            size={30}
            style={styles.backButton}/>
        </Pressable>
        <Text style={styles.title}>Settings</Text>
      </View>

      <SettingsComponent 
        screen="AppearanceScreen"
        name="emoticon-excited" 
        text="Appearance"/>

      <SettingsComponent 
        screen="NotificationsScreen"
        name="bell" 
        text="Notifications"/>

      <SettingsComponent 
        screen="SecurityScreen"
        name="security" 
        text="Security and Privacy"/>

      <SettingsComponent 
        screen="ConnectionScreen"
        name="transit-connection-variant" 
        text="Connection"/>

      <SettingsComponent 
        screen="AccountScreen"
        name="account-box-outline" 
        text="Account"/>

      <TouchableOpacity style={styles.button}>
      <View style={styles.view}>
      <Icon
        name="delete"
        type="material-community"
        color='#faf0e6'
        size={30}
        style={styles.icon}/>
      <Text style={styles.text}>Delete All Tasks</Text>
       </View>
      </TouchableOpacity> 

      <TouchableOpacity style={styles.button}>
      <View style={styles.view}>
      <Icon
        name="logout"
        type="material-community"
        color='#faf0e6'
        size={30}
        style={styles.icon}/>
      <Text style={styles.text}>Logout</Text>
       </View>
      </TouchableOpacity> 

      </ScrollView>
    </SafeAreaView>
  );
}

const SettingsComponent = (props) => {
const navigation = useNavigation(); 
return (
  <TouchableOpacity 
      onPress={() => navigation.navigate(props.screen)}
      style={styles.button}>
  <View style={styles.view}>
  <Icon
        name={props.name}
        type={"material-community"}
        color={'#faf0e6'}
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
      borderRadius: 25,
      marginBottom: 10,
      marginHorizontal: width*0.05,
      paddingVertical: 2,
      borderColor:"#faf0e6",
      alignItems:"stretch"
    },
  
    view:{
      flexDirection: "row",
      alignItems: "center",
      alignContent: 'flex-start'
    },

    background:{
        backgroundColor: '#406c34',
        flex:1,
    },

    title:{
      fontSize: 40,
      fontWeight: '400',
      color: "#faf0e6",
      paddingHorizontal: width*0.01,
      paddingBottom: height*0.04,
      paddingTop: height*0.05,
  },

    text: {
      fontSize: 17,
      color: '#faf0e6',
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

    accountInput: {
        margin: 12,
        borderWidth: 1,
    },

    accountText: {
        margin: 5,
        fontWeight: 'bold',
    },

    backImage: {
      width: width, 
      height: height,
      flex:1, 
      opacity:0.2,
      position:'absolute',
    },

})

export default SettingsScreen;
