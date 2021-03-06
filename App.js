import "react-native-gesture-handler";
import React, { useState, useEffect, useRef } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Platform, StyleSheet, Text, View } from "react-native";
import { Notifications } from "expo";
import * as Permissions from "expo-permissions";
import * as firebase from "firebase";
import { firebaseConfig } from "./config";
import SignInScreen from "./screens/SignInScreen";
import FirstPage from "./screens/FirstPage";
import SignUpScreen from "./screens/SignUpScreen";
import HomeScreen from "./screens/HomeScreen";
import TaskCategory from "./screens/TaskCategory";
import GroupTasksScreen from "./screens/GroupTasksScreen";
import HealthScreen from "./screens/HealthScreen";
import SettingsScreen from "./screens/SettingsScreen";
import MenuScreen from './screens/MenuScreen';
import FriendsScreen from './screens/FriendsScreen';
import BirthdayScreen from './screens/BirthdayScreen';
import AboutScreen from './screens/AboutScreen';
import WaterLine from './screens/WaterLine';
import StretchLine from './screens/StretchLine';
import BreatheLine from './screens/BreatheLine';
import AppearanceScreen from './screens/AppearanceScreen';
import NotificationsScreen from './screens/NotificationsScreen';
import SecurityScreen from './screens/SecurityScreen';
import ConnectionScreen from './screens/ConnectionScreen';
import AccountScreen from './screens/AccountScreen';
import NewTaskScreen from "./screens/NewTaskScreen";
import TasksScreen from "./screens/TasksScreen";


const Stack = createStackNavigator();

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app(); // if already initialized, use that one
}

firebase.auth().onAuthStateChanged((user) => {
  if (user) console.log("Logged in");
  else console.log("Not logged in");
});

export default function App() {
  // useEffect(() => {
  //   this.getPushNotificationPermissions();
  // });

  // getPushNotificationPermissions = async () => {
  //   const { status: existingStatus } = await Permissions.getAsync(
  //     Permissions.NOTIFICATIONS
  //   );
  //   let finalStatus = existingStatus;

  //   // only ask if permissions have not already been determined, because
  //   // iOS won't necessarily prompt the user a second time.
  //   if (existingStatus !== "granted") {
  //     // Android remote notification permissions are granted during the app
  //     // install, so this will only ask on iOS
  //     const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
  //     finalStatus = status;
  //   }

  //   // Stop here if the user did not grant permissions
  //   if (finalStatus !== "granted") {
  //     alert("did not grant permissions");
  //     return;
  //   }
  //   console.log(finalStatus);

  //   // Get the token that uniquely identifies this device
  //   console.log(
  //     "Notification Token: ",
  //     await Notifications.getExpoPushTokenAsync()
  //   );
  // };

  // checkIfLoggedIn = () => {
  //   firebase.auth().onAuthStateChanged((user) => {
  //     if (user) {
  //       return <HomeScreen></HomeScreen>;
  //     }
  //   });
  // };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="FirstPage">
        <Stack.Screen name="FirstPage" component={FirstPage} options={{ headerShown: false }}/>
        <Stack.Screen name="SignInScreen" component={SignInScreen} options={{ headerShown: false }} />
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} options={{ headerShown: false }} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="GroupTasksScreen" component={GroupTasksScreen} options={{ headerShown: false }} />
        <Stack.Screen name="TaskCategory" component={TaskCategory} options={{ headerShown: false }} />
        <Stack.Screen name="NewTaskScreen" component={NewTaskScreen} options={{ headerShown: false }} />


        <Stack.Screen name="MenuScreen" component={MenuScreen} options={{ headerShown: true }} />
        <Stack.Screen name="FriendsScreen" component={FriendsScreen} options={{ headerShown: false }} />
        <Stack.Screen name="BirthdayScreen" component={BirthdayScreen} options={{ headerShown: false }} />
        <Stack.Screen name="SettingsScreen" component={SettingsScreen} options={{ headerShown: false }} />
        <Stack.Screen name="AboutScreen" component={AboutScreen} options={{ headerShown: false }} />
        <Stack.Screen name="TasksScreen" component={TasksScreen} options={{ headerShown: false }} />

        <Stack.Screen name="HealthScreen" component={HealthScreen} options={{ headerShown: false }} />
        <Stack.Screen name="WaterLine" component={WaterLine} options={{ headerShown: false }} />
        <Stack.Screen name="StretchLine" component={StretchLine} options={{ headerShown: false }} />
        <Stack.Screen name="BreatheLine" component={BreatheLine} options={{ headerShown: false }} />

        <Stack.Screen name="AppearanceScreen" component={AppearanceScreen} options={{ headerShown: false }} />
        <Stack.Screen name="NotificationsScreen" component={NotificationsScreen} options={{ headerShown: false }} />
        <Stack.Screen name="SecurityScreen" component={SecurityScreen} options={{ headerShown: false }} />
        <Stack.Screen name="ConnectionScreen" component={ConnectionScreen} options={{ headerShown: false }} />
        <Stack.Screen name="AccountScreen" component={AccountScreen} options={{ headerShown: false }} />

      </Stack.Navigator>
    </NavigationContainer>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
