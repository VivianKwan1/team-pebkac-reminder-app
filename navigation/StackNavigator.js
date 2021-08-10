import React from "react";
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';

import SignInScreen from '../screens/SignInScreen';
import FirstPage from '../screens/FirstPage';
import SignUpScreen from '../screens/SignUpScreen';
import HomeScreen from'../screens/HomeScreen';
import TaskCategory from '../screens/TaskCategory';
import GroupTasksScreen from '../screens/GroupTasksScreen';

import MenuScreen from '../screens/MenuScreen';
import FriendsScreen from '../screens/FriendsScreen';
import BirthdayScreen from '../screens/BirthdayScreen';
import SettingsScreen from '../screens/SettingsScreen';
import AboutScreen from '../screens/AboutScreen';

import AppearanceScreen from '../screens/settings/AppearanceScreen';
import NotificationsScreen from '../screens/settings/NotificationsScreen';
import SecurityScreen from '../screens/settings/SecurityScreen';
import ConnectionScreen from '../screens/settings/ConnectionScreen';
import AccountScreen from '../screens/settings/AccountScreen';

const Stack = createStackNavigator();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="FirstPage">
    <Stack.Screen name="FirstPage" component={FirstPage} options={{ headerShown: false }}/>
    <Stack.Screen name="SignInScreen" component={SignInScreen} options={{ headerShown: false }} />
    <Stack.Screen name="SignUpScreen" component={SignUpScreen} options={{ headerShown: false }} />
    <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} />
    <Stack.Screen name="GroupTasksScreen" component={GroupTasksScreen} options={{ headerShown: false }} />
    <Stack.Screen name="TaskCategory" component={TaskCategory} options={{ headerShown: false }} />

    <Stack.Screen name="MenuScreen" component={MenuScreen} options={{ headerShown: true }} />
    <Stack.Screen name="FriendsScreen" component={FriendsScreen} options={{ headerShown: true }} />
    <Stack.Screen name="BirthdayScreen" component={BirthdayScreen} options={{ headerShown: true }} />
    <Stack.Screen name="SettingsScreen" component={SettingsScreen} options={{ headerShown: false }} />
    <Stack.Screen name="AboutScreen" component={AboutScreen} options={{ headerShown: false }} />

    <Stack.Screen name="AppearanceScreen" component={AppearanceScreen} options={{ headerShown: false }} />
    <Stack.Screen name="NotificationsScreen" component={NotificationsScreen} options={{ headerShown: false }} />
    <Stack.Screen name="SecurityScreen" component={SecurityScreen} options={{ headerShown: false }} />
    <Stack.Screen name="ConnectionScreen" component={ConnectionScreen} options={{ headerShown: false }} />
    <Stack.Screen name="AccountScreen" component={AccountScreen} options={{ headerShown: false }} />
  </Stack.Navigator>
  );
}

export { MainStackNavigator };