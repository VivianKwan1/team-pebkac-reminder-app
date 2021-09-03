import React, { useState } from "react";
import { TextInput } from 'react-native';
import { Container, Switch, Dimensions, Image, ScrollView, TouchableOpacity, View, Button, SafeAreaView, Text, StyleSheet, Pressable } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { useNavigation } from '@react-navigation/native';
import { Icon } from 'react-native-elements'
import DropDownPicker from 'react-native-dropdown-picker';


function ConnectionScreen() {
    const navigation = useNavigation(); 

    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        { label: 'Default', value: 'Red/Yellow/Green' },
        { label: 'Custom', value: 'C1/C2/C3' }
    ])    

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
          <Text style={styles.title}>Connection</Text>
        </View>

        <Pressable style={styles.button}>
        <View style={styles.view}>
        <Text style={styles.text}>Login with Facebook</Text>
        <Switch
            trackColor={{ false: "#cccccc", true: "#79d279" }}
            ios_backgroundColor="#cccccc"
            onValueChange={toggleSwitch}
            value={isEnabled}
            style={{marginHorizontal: width*0.03}}
          />
         </View>
        </Pressable> 

        <Pressable style={styles.button}>
        <View style={styles.view}>
        <Text style={styles.text}>Login with Google</Text>
        <Switch
            trackColor={{ false: "#cccccc", true: "#79d279" }}
            ios_backgroundColor="#cccccc"
            onValueChange={toggleSwitch}
            value={isEnabled}
            style={{marginHorizontal: width*0.1}}
          />
         </View>
        </Pressable> 

        <Pressable style={styles.button}>
        <View style={styles.view}>
        <Text style={styles.text}>Link with Google Calendar</Text>
        <Switch
            trackColor={{ false: "#cccccc", true: "#79d279" }}
            ios_backgroundColor="#cccccc"
            onValueChange={toggleSwitch}
            value={isEnabled}
            style={{marginHorizontal: 0}}
          />
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
        marginHorizontal: width*0.04,
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
        fontSize: 35,
        fontWeight: '400',
        color: "#faf0e6",
        paddingHorizontal: width*0.03,
        paddingBottom: 30,
        paddingTop: 30,
      },

      backImage: {
        width: width, 
        height: height,
        flex:1, 
        opacity:0.2,
        position:'absolute',
      },
})

export default ConnectionScreen;
