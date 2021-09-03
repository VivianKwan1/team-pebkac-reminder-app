import React, { useState } from "react";
import { TextInput } from 'react-native';
import { Container, Switch, Dimensions, Image, ScrollView, TouchableOpacity, View, Button, SafeAreaView, Text, StyleSheet, Pressable } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { useNavigation } from '@react-navigation/native';
import { Icon } from 'react-native-elements'
import DropDownPicker from 'react-native-dropdown-picker';


function AccountScreen() {
    const navigation = useNavigation(); 
    return (
        <SafeAreaView style={styles.background}> 
        <Image source={require('../assets/leaves.png')} style = {styles.backImage}/>         
        <View style={styles.view}>
          <Pressable onPress={() => navigation.goBack('MenuScreen')}>
          <Icon
              name='arrow-left'
              type='material-community'
              color="#faf0e6"
              size={30}
              style={styles.backButton}/>
          </Pressable>
          <Text style={styles.title}>Account</Text>
        </View>

        <Pressable style={styles.button}>
        <View style={styles.view}>
        <Text style={styles.text}>Name</Text>
         </View>
        </Pressable> 

        <Pressable style={styles.button}>
        <View style={styles.view}>
        <Text style={styles.text}>Username</Text>
         </View>
        </Pressable> 

        <Pressable style={styles.button}>
        <View style={styles.view}>
        <Text style={styles.text}>Email</Text>
         </View>
        </Pressable> 

        <Pressable style={styles.button}>
        <View style={styles.view}>
        <Text style={styles.text}>Country/Region</Text>
         </View>
        </Pressable> 

        <Pressable style={styles.button}>
        <View style={styles.view}>
        <Text style={styles.text}>Delete Account</Text>
         </View>
        </Pressable> 

        </SafeAreaView>
    );
}

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

const styles = StyleSheet.create({
    backButton:{
        paddingHorizontal: 20,
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

      text: {
        fontSize: 17,
        color: "#faf0e6",
        fontWeight: '500',
        paddingHorizontal: 40,
        paddingBottom: 20,
        paddingTop: 20,
      },  
  
      background:{
        backgroundColor: '#406c34',
        flex:1,
    },

      title:{
        fontSize: 30,
        fontWeight: '400',
        color: "#faf0e6",
        paddingHorizontal: width*0.05,
        paddingBottom: 30,
        paddingTop: 25,
      },

      backImage: {
        width: width, 
        height: height,
        flex:1, 
        opacity:0.2,
        position:'absolute',
      },
})

export default AccountScreen;
