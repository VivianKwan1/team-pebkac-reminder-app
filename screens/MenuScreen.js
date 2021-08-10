import React from 'react';
import { TextInput } from 'react-native';
import { Dimensions, Image, ScrollView, TouchableOpacity, View, Button, SafeAreaView, Text, StyleSheet, Pressable } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { Icon } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native';

//Didn't know if I should leave this
//Could use it or another background if it looks too bland
//<Image source={require('../assets/leaves.png')} style = {styles.backImage}/>

function MenuScreen() {
  const navigation = useNavigation(); 
  return (
      <SafeAreaView style={styles.background}>
        <Text style={styles.title}>Menu</Text>
        <TouchableOpacity 
        onPress={() => navigation.navigate('FriendsScreen')}
        style={styles.button}>
        <View style={styles.view}>
        <Icon
              name='account-multiple-plus'
              type='material-community'
              color='white'
              size={35}
              style={styles.icon}/>
        <Text style={styles.text}>Friends</Text>
        </View>
        </TouchableOpacity>

        <TouchableOpacity 
        onPress={() => navigation.navigate('BirthdayScreen')}
        style={styles.button}>
        <View style={styles.view}>
        <Icon
              name='cake-variant'
              type='material-community'
              color='white'
              size={30}
              style={styles.icon}/>
        <Text style={styles.text}>Birthdays</Text>
        </View>
          </TouchableOpacity>

        <TouchableOpacity 
        onPress={() => navigation.navigate('SettingsScreen')}
        style={styles.button}>
        <View style={styles.view}>
        <Icon
              name='cog'
              type='material-community'
              color='white'
              size={30}
              style={styles.icon}/>
        <Text style={styles.text}>Settings</Text>
        </View>
          </TouchableOpacity>

        <TouchableOpacity 
        onPress={() => navigation.navigate('AboutScreen')}
        style={styles.button}>
        <View style={styles.view}>
        <Icon
              name='account-group-outline'
              type='material-community'
              color='white'
              size={30}
              style={styles.icon}/>
        <Text style={styles.text}>About us</Text>
        </View>
          </TouchableOpacity>  
      </SafeAreaView>
  );
}

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

const styles = StyleSheet.create({

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
    paddingHorizontal: 45,
    paddingBottom: 35,
    paddingTop: 20,
  },

  icon:{
      paddingLeft:25
  },

  text: {
    fontSize: 17,
    color: 'white',
    fontWeight: '500',
    paddingHorizontal: 40,
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
    width: '100%', 
    height: '100%',
    flex:1, 
    opacity:0.2,
    position:'absolute',
    marginTop: height*0.01,
    marginHorizontal: width*0.01
  },

})
export default MenuScreen;
