import React from "react";
import { View } from "react-native";
import { TouchableOpacity } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import {
  Button,
  SafeAreaView,
  Text,
  StyleSheet,
  Pressable,
} from "react-native";
import TaskCategory from "./TaskCategory";
import FirstPage from "./FirstPage";
import { useNavigation } from "@react-navigation/native";
import firebase from "firebase";

function GroupTasksScreen(props) {
  const navigation = useNavigation();
  const labels = ["Work", "Personal"];
  const labelbuttons = labels.map(function (labels) {
    return (
      <TouchableOpacity style={styles.button} activeOpacity={0.5}>
        <Text style={styles.text}>{labels}</Text>
      </TouchableOpacity>
    );
  });

  // const name = firebase.database().ref();

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.textContainer}>
        <Text style={styles.mainText}>Hello Person!</Text>
        <Text style={styles.otherText}>
          You are not very busy today are you?
        </Text>
        <Text style={styles.otherText}>You have 0 tasks for today.</Text>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.5}
          onPress={() => navigation.navigate("TaskCategory")}
        >
          <Text style={styles.text}>All Tasks</Text>
        </TouchableOpacity>

        {labelbuttons}

        <TouchableOpacity style={styles.plusButton} activeOpacity={0.5}>
          <Text style={styles.plusText}>+</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#faf0e6",
  },

  button: {
    backgroundColor: "#406c34",
    borderRadius: 10,
    margin: 30,
    width: 100,
    height: 100,
    justifyContent: "center",
  },

  plusButton: {
    backgroundColor: "#406c34",
    borderRadius: 10,
    margin: 30,
    width: 100,
    height: 100,
    justifyContent: "center",
    borderColor: "black",
    borderWidth: 1,
  },

  plusText: {
    color: "white",
    textAlign: "center",
  },

  text: {
    color: "white",
    textAlign: "center",
  },

  mainText: {
    fontWeight: "bold",
    fontSize: 50,
    fontWeight: "500",
    textAlign: "center",
  },

  otherText: {
    opacity: 100,
    fontSize: 15,
    textAlign: "center",
  },

  buttonContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },

  textContainer: {
    padding: 10,
    marginTop: 20,
  },
});

export default GroupTasksScreen;
