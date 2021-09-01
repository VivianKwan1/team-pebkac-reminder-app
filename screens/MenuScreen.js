import React from 'react';
import { TextInput } from 'react-native';
import { Dimensions, Image, ScrollView, TouchableOpacity, View, Button, SafeAreaView, Text, StyleSheet, Pressable } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { Icon } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native';



function MenuScreen() {
  const navigation = useNavigation(); 
  return (
      <SafeAreaView style={styles.background}>
        <Image source={require('../assets/leaves.png')} style = {styles.backImage}/>
        <Text style={styles.title}>Menu</Text>
        <TouchableOpacity 
        onPress={() => navigation.navigate('FriendsScreen')}
        style={styles.button}>
        <View style={styles.view}>
        <Icon
              name='account-multiple-plus'
              type='material-community'
              color='#faf0e6'
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
              color='#faf0e6'
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
              color='#faf0e6'
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
              color='#faf0e6'
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
    borderColor:"#faf0e6", 
    alignItems:"stretch"
  },

  view:{
    flexDirection: "row",
    alignItems: "center",
    alignContent: 'flex-start'
  },

  background:{
      backgroundColor: '#6E8969',
      flex:1,
  },

  title:{
    fontSize: 40,
    fontWeight: '400',
    color: "#faf0e6",
    paddingHorizontal: 45,
    paddingBottom: 30,
    paddingTop: 30,
    textAlign: "center",
  },

  icon:{
      paddingLeft:35
  },

  text: {
    fontSize: 17,
    color: '#faf0e6',
    fontWeight: '500',
    paddingHorizontal: 40,
    paddingBottom: 20,
    paddingTop: 20,
  },

  backImage: {
    width: '100%', 
    height: '100%',
    flex:1, 
    opacity:0.2,
    position:'absolute',
    marginTop: height*0.05,
    marginHorizontal: 0
  },

})
export default MenuScreen;
