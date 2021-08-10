import React, { useState } from "react";
import { TextInput } from 'react-native';
import { Container, Switch, Dimensions, Image, ScrollView, TouchableOpacity, View, Button, SafeAreaView, Text, StyleSheet, Pressable } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { useNavigation } from '@react-navigation/native';
import { Icon } from 'react-native-elements'
import DropDownPicker from 'react-native-dropdown-picker';

//Note: Not offering text type and font size right?

function AppearanceScreen() {
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
          <Text style={styles.title}>Appearance</Text>
        </View>

        <Pressable style={styles.button}>
        <View style={styles.view}>
        <Text style={styles.text}>Dark Mode</Text>
        <Switch
            trackColor={{ false: "#cccccc", true: "#79d279" }}
            ios_backgroundColor="#cccccc"
            onValueChange={toggleSwitch}
            value={isEnabled}
            style={{marginLeft: 70}}
          />
         </View>
        </Pressable> 

        <Pressable style={styles.button}>
        <View style={styles.view}>
        <Text style={styles.text}>Label Priority Colors</Text>
        {/* <SafeAreaView style={styles.textBox}>
          <SafeAreaView style={styles.dropdown}>
              <DropDownPicker
                  open={open}
                  value={value}
                  items={items}
                  setOpen={setOpen}
                  setValue={setValue}
                  setItems={setItems}
                  style={styles.dropdown}
              />
        </SafeAreaView>
        </SafeAreaView> */}
        </View>
        </Pressable> 
      </SafeAreaView>
    );
}

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

const styles = StyleSheet.create({
    textBox: {
      paddingHorizontal: 2,
      width: width*0.39,
      height: height*0.06,
//      backgroundColor: '#557a52',
    },

    dropdown: {
 //     backgroundColor: '#557a52',
      borderWidth: 0.5,
      flexDirection: "row",
      flex:1,
      paddingBottom: 10,
      paddingRight: 4,
      paddingLeft: 20,
      borderColor: "white",
    },

     icon:{
      paddingLeft:25
    },

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

    background:{
        backgroundColor: '#557a52',
        flex:1,
    },

    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center"
    },

    title:{
      fontSize: 30,
      fontWeight: '400',
      color: 'white',
      paddingHorizontal: width*0.05,
      paddingBottom: 30,
      paddingTop: 25,
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
export default AppearanceScreen;