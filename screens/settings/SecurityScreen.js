import React, { useState } from "react";
import { TextInput } from 'react-native';
import { Container, Switch, Dimensions, Image, ScrollView, TouchableOpacity, View, Button, SafeAreaView, Text, StyleSheet, Pressable } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { useNavigation } from '@react-navigation/native';
import { Icon } from 'react-native-elements'
import DropDownPicker from 'react-native-dropdown-picker';


function SecurityScreen() {
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
        <View style={styles.view}>
          <Pressable onPress={() => navigation.goBack('MenuScreen')}>
          <Icon
              name='arrow-left'
              type='material-community'
              color='white'
              size={30}
              style={styles.backButton}/>
          </Pressable>
          <Text style={styles.title}>Security and Privacy</Text>
        </View> 

        <Pressable style={styles.button}>
        <View style={styles.view}>
        <Text style={styles.text}>Location Permission</Text>
        <Switch
            trackColor={{ false: "#cccccc", true: "#79d279" }}
            ios_backgroundColor="#cccccc"
            onValueChange={toggleSwitch}
            value={isEnabled}
            style={{marginLeft: 20}}
          />
         </View>
        </Pressable> 

        <Pressable style={styles.button}>
        <View style={styles.view}>
        <Text style={styles.text}>Audio Permission</Text>
        <Switch
            trackColor={{ false: "#cccccc", true: "#79d279" }}
            ios_backgroundColor="#cccccc"
            onValueChange={toggleSwitch}
            value={isEnabled}
            style={{marginLeft: 40}}
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

      text: {
        fontSize: 17,
        color: 'white',
        fontWeight: '500',
        paddingHorizontal: 40,
        paddingBottom: 20,
        paddingTop: 20,
      },  
  
      background:{
          backgroundColor: '#557a52',
          flex:1,
      },

      title:{
        fontSize: 30,
        fontWeight: '400',
        color: 'white',
        paddingBottom: 30,
        paddingTop: 25,
      },
})

export default SecurityScreen;