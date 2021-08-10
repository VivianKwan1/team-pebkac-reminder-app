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
  return (
      <SafeAreaView style={styles.background}>
        <Text style={styles.title}>Menu</Text>

        <MenuComponent
          screen="FriendsScreen"
          name="account-multiple-plus"
          text="Friends"
        />

        <MenuComponent
          screen="BirthdayScreen"
          name="cake-variant"
          text="Birthdays"
        />

        <MenuComponent
          screen="SettingsScreen"
          name="cog"
          text="Settings"
        />
        
        <MenuComponent
          screen="AboutScreen"
          name="account-group-outline"
          text="About us"
        />
      </SafeAreaView>
  );
}

const MenuComponent = (props) => {
  const navigation = useNavigation(); 
  return (
    <TouchableOpacity 
        onPress={() => navigation.navigate(props.screen)}
        style={styles.button}>
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
      backgroundColor: '#557a52',
      flex:1,
  },

  title:{
    fontSize: 35,
    fontWeight: '400',
    color: 'white',
    paddingHorizontal: width*0.15,
    paddingBottom: 30,
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