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

        <TouchableOpacity style={styles.button}>
        <View style={styles.view}>
        <Icon
              name='emoticon-excited'
              type='material-community'
              color='white'
              size={35}
              style={styles.icon}/>
        <Text style={styles.text}>Appearance</Text>
        </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
        <View style={styles.view}>
        <Icon
              name='bell'
              type='material-community'
              color='white'
              size={30}
              style={styles.icon}/>
        <Text style={styles.text}>Notifications</Text>
        </View>
          </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
        <View style={styles.view}>
        <Icon
              name='security'
              type='material-community'
              color='white'
              size={30}
              style={styles.icon}/>
        <Text style={styles.text}>Security and Privacy</Text>
        </View>
          </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
        <View style={styles.view}>
        <Icon
              name='transit-connection-variant'
              type='material-community'
              color='white'
              size={30}
              style={styles.icon}/>
        <Text style={styles.text}>Connection</Text>
        </View>
          </TouchableOpacity>  

        <TouchableOpacity style={styles.button}>
        <View style={styles.view}>
        <Icon
              name='account-box-outline'
              type='material-community'
              color='white'
              size={30}
              style={styles.icon}/>
        <Text style={styles.text}>Account</Text>
        </View>
        </TouchableOpacity>  

        <TouchableOpacity style={styles.button}>
        <View style={styles.view}>
        <Icon
              name='delete'
              type='material-community'
              color='white'
              size={30}
              style={styles.icon}/>
        <Text style={styles.text}>Delete All Tasks</Text>
        </View>
        </TouchableOpacity>  

        <TouchableOpacity style={styles.button}>
        <View style={styles.view}>
        <Icon
              name='logout'
              type='material-community'
              color='white'
              size={30}
              style={styles.icon}/>
        <Text style={styles.text}>Logout</Text>
        </View>
        </TouchableOpacity>  
        </ScrollView>
      </SafeAreaView>
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
      borderColor:"white",
      alignItems:"stretch"
    },
  
    view:{
      flexDirection: "row",
      alignItems: "center",
      alignContent: 'flex-start'
    },

    background:{
        backgroundColor: '#709c6c',
        flex:1,
    },

    title:{
      fontSize: 25,
      fontWeight: '600',
      color: 'white',
      paddingHorizontal: 20,
      paddingBottom: 35,
      paddingTop: 30,
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
