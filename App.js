import "react-native-gesture-handler";
import React, { useState, useEffect, useRef } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";
import { Platform, StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
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

const Stack = createStackNavigator();

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app(); // if already initialized, use that one
}

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    console.log("Logged in with user: ", user);
  } else console.log("Not logged in");
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
      {
        <Stack.Navigator initialRouteName="FirstPage">
          <Stack.Screen
            name="FirstPage"
            component={FirstPage}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="SignInScreen"
            component={SignInScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="SignUpScreen"
            component={SignUpScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="HomeScreen"
            component={HomeScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="GroupTasksScreen"
            component={GroupTasksScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="TaskCategory"
            component={TaskCategory}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      }
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
