import React from 'react';
import { TextInput } from 'react-native';
import { PermissionsAndroid } from 'react-native';
import { Image, Alert, ScrollView, TouchableOpacity, View, Button, SafeAreaView, Text, StyleSheet, Pressable } from 'react-native';
import { createStackNavigator, createAppContainer, withNavigation } from 'react-navigation';
import FirstPage from "./FirstPage";
import GroupTasksScreen from "./GroupTasksScreen";
//import arrow from './assets/arrow.png';
import head from '../assets/head.png';
import { useNavigation } from '@react-navigation/native';
// import bell from './assets/bell.png';
// import shield from './assets/shield.png';
// import location from './assets/location.png';
// import connection from './assets/connection.png';
// import account from './assets/account.png';
// import trash from './assets/trash.png';
// import logout from './assets/logout.png';
function SettingsScreen(props) {
  
  const navigation = useNavigation();

  const settingsOptions=[
    {title: 'Daily Reminders', onPress: () => {}, image: {head}},
    {title: 'Appearance', onPress: () => {}, image: {head}},
    {title: 'Notifications', onPress: () => {}, image: {head}},
    {title: 'Security and Privacy', onPress: () => {}, image: {head}},
    {title: 'Location', onPress: () => {}, image: {head}},
    {title: 'Connection', onPress: () => {}, image: {head}},
    {title: 'Account', onPress: () => {}, image: {head}},
    {title: 'Delete All Tasks', onPress: () => {confirm('delete all tasks?', 'GroupTasksScreen')}, image: {head}},
    {title: 'Delete Account', onPress: () => {confirm('delete your account? All data will be permanently deleted.', 'FirstPage')}, image: {head}},
    {title: 'Logout', onPress: () => {confirm('log out?', 'FirstPage')}, image: {head}}
  ]

  const confirm = (procedure, nav) =>{
    return(
      Alert.alert(
        null, "Are you sure you want to " + procedure,
        [{text: "Cancel", onPress: () => console.log("Cancel Pressed"), style: "cancel"},
        {text: "Confirm" , onPress: () => navigation.navigate(nav)}]
      )
    );
  }

  return (
    <SafeAreaView style={styles.background}>
      {/* <Text>Settings Page!!!</Text> */}
      <ScrollView style={styles.options} endFillColor={'709c6c'}>
        <TouchableOpacity>
        {/* <Image source={head} style={{
              width: 20,
              height: 20,
              //tintColor:"transparent",
              paddingHorizontal: 100,
              paddingBottom: 100,
              paddingTop: 100
            }}></Image> */}
          <Text 
          style={styles.titleStyle}
          //onPress = {() => navigation.navigate('HomeScreen')}
          >
            Settings
            ____________________
            </Text>
        </TouchableOpacity>
        {settingsOptions.map(({title, onPress, image}, index) => (
          <TouchableOpacity key={title} onPress={onPress}>
            <View
              style={styles.optBorders}>
              <Text style={styles.text}>{title}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-end",
    marginTop: 22
  },
    background:{
        backgroundColor: '#709C6C'
    },
    titleStyle:{
      fontSize: 25,
      color: 'white',
      fontWeight: 'bold',
      paddingHorizontal: 40,
      paddingBottom: 20,
      paddingTop: 20
    },
    text: {
      fontSize: 17,
      color: 'white',
      fontWeight: 'bold'
    },
    options:{
      backgroundColor: '#709C6C', //this is the exact color green of Subash's design
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

// import React from 'react';
// import { TextInput } from 'react-native';
// import { PermissionsAndroid } from 'react-native';
// import { Image, Alert, ScrollView, TouchableOpacity, View, Button, SafeAreaView, Text, StyleSheet, Pressable } from 'react-native';
// import { createStackNavigator, createAppContainer, withNavigation } from 'react-navigation';
// import FirstPage from "./FirstPage";
// //import arrow from './assets/arrow.png';
// import head from '../assets/head.png';
// import { useNavigation } from '@react-navigation/native';
// // import bell from './assets/bell.png';
// // import shield from './assets/shield.png';
// // import location from './assets/location.png';
// // import connection from './assets/connection.png';
// // import account from './assets/account.png';
// // import trash from './assets/trash.png';
// // import logout from './assets/logout.png';

// const settingsOptions=[
//   {title: 'Daily Reminders', onPress: () => {}, image: {head}},
//   {title: 'Appearance', onPress: () => {}, image: {head}},
//   {title: 'Notifications', onPress: () => {}, image: {head}},
//   {title: 'Security and Privacy', onPress: () => {}, image: {head}},
//   {title: 'Location', onPress: () => {}, image: {head}},
//   {title: 'Connection', onPress: () => {}, image: {head}},
//   {title: 'Account', onPress: () => {}, image: {head}},
//   {title: 'Delete All Tasks', onPress: () => {}, image: {head}},
//   {title: 'Logout', onPress: () => {confirm()}}
// ]

// const navigation = useNavigation();

// function confirm() {
  
//   Alert.alert(
//     null,
//     "Are you sure you want to log out?",
//     [
//       {
//         text: "Cancel",
//         onPress: () => console.log("Cancel Pressed"),
//         style: "cancel"
//       },
//       { text: "Confirm", onPress: () => navigation.navigate('FirstPage') }
//     ],
//     { cancelable: true }
//   )
// }

// function SettingsScreen({ navigation, settingOptions }) {
//     return (
//         <SafeAreaView style={styles.background}>
          
//         {/* <Text>Settings Page!!!</Text> */}
//         <ScrollView style={styles.options} endFillColor={'709c6c'}>
//         <TouchableOpacity>
//         {/* <Image source={head} style={{
//               width: 20,
//               height: 20,
//               //tintColor:"transparent",
//               paddingHorizontal: 100,
//               paddingBottom: 100,
//               paddingTop: 100

//             }}></Image> */}
//           <Text 
//           style={styles.titleStyle}
//           //onPress = {() => navigation.navigate('HomeScreen')}
//           >
//             Settings
//             ____________________
//             </Text>
//         </TouchableOpacity>
//         {settingsOptions.map(({title, onPress, image}, index) => (
//           <TouchableOpacity key={title} onPress={onPress}>
//             <View
//               style={styles.optBorders}>
//               <Text style={styles.text}>{title}</Text>
//             </View>
//           </TouchableOpacity>
//         ))}
//         </ScrollView>
//         </SafeAreaView>
//     );
// }

// const styles = StyleSheet.create({
//   centeredView: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "flex-end",
//     marginTop: 22
//   },
//     background:{
//         backgroundColor: '#709c6c'
//     },

//     titleStyle:{
//       fontSize: 25,
//       color: 'white',
//       fontWeight: 'bold',
//       paddingHorizontal: 40,
//       paddingBottom: 20,
//       paddingTop: 20
//     },

//     text: {
//       fontSize: 17,
//       color: 'white',
//       fontWeight: 'bold'
//     },

//     options:{
//       backgroundColor: '#709c6c', //this is the exact color green of Subash's design
//     },

//     optBorders: {
//       paddingHorizontal: 45,
//       paddingBottom: 20,
//       paddingTop: 20,
//     },

//     accountInput: {
//         margin: 12,
//         borderWidth: 1,
//     },

//     accountText: {
//         margin: 5,
//         fontWeight: 'bold',
//     }

// })

// export default SettingsScreen;