import React, { useState } from "react";
import { TextInput } from 'react-native';
import { Container, Switch, Dimensions, Image, ScrollView, TouchableOpacity, View, Button, SafeAreaView, Text, StyleSheet, Pressable } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { useNavigation } from '@react-navigation/native';
import { Icon } from 'react-native-elements'
import DropDownPicker from 'react-native-dropdown-picker';


function NotificationsScreen() {
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
          <Text style={styles.title}>Notifications</Text>
        </View>

        <Pressable style={styles.button}>
        <View style={styles.view}>
        <Text style={styles.text}>Push Notifications</Text>
        <Switch
            trackColor={{ false: "#cccccc", true: "#79d279" }}
            ios_backgroundColor="#cccccc"
            onValueChange={toggleSwitch}
            value={isEnabled}
            style={{marginLeft: 30}}
          />
         </View>
        </Pressable> 

        <Pressable style={styles.button}>
        <View style={styles.view}>
        <Text style={styles.text}>Frequency of Notifications</Text>
         </View>
        </Pressable> 

        <Pressable style={styles.button}>
        <View style={styles.view}>
        <Text style={styles.text}>Time without Notifications</Text>
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
        backgroundColor: '#6E8969',
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
        width: '100%', 
        height: '100%',
        flex:1, 
        opacity:0.2,
        position:'absolute',
        marginTop: height*0.05,
        marginHorizontal: 0
      },
})

export default NotificationsScreen;
