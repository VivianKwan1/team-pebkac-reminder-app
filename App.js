import React from 'react';
import { SafeAreaView } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import SignInScreen from './Screens/SignInScreen';
import FirstPage from './Screens/firstPage';
import SignUpScreen from './Screens/SignUpScreen';
// import { createStackNavigator, createAppContainer } from 'react-navigation';

// const AppNavigator = createStackNavigator(
//   {
//     SignIn: SignInScreen,
//   },
//   {
//     initialRouteName: "SignIn"
//   }
// );

// const AppContainer = createAppContainer(AppNavigator);

export default function App() {
  return (



    // <div>
    //   <h3>
    //     Team PEBKAC's Reminder App!
    //   </h3>
    // </div>

    <FirstPage></FirstPage>
    //<SignUpScreen></SignUpScreen>
    //<SignInScreen></SignInScreen>

    // <AppContainer />
  )

}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
