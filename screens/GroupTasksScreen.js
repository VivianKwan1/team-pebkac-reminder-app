import React from "react";
import { TouchableOpacity } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import {
  Button,
  SafeAreaView,
  Text,
  StyleSheet,
  Pressable,
  View,
} from "react-native";
import TaskCategory from "./TaskCategory";
import FirstPage from "./FirstPage";
import { useNavigation } from "@react-navigation/native";
import firebase from "firebase";
import { ScrollView } from "react-native";
import NewTask from "../components/NewTask";
import { Image } from "react-native";

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

  const dailyLabels = ["Yesterday", "Today", "Tomorrow"];
  const dailyButtons = dailyLabels.map(function (dailyLabels) {
    return (
      <TouchableOpacity style={styles.button} activeOpacity={0.5}>
        <Text style={styles.text}>{dailyLabels}</Text>
      </TouchableOpacity>
    );
  });

  const userId = firebase.auth().currentUser.uid;
  const name = firebase.auth().currentUser.displayName;

  addTempData = () => {
    const tempTask = {
      task1: {
        date: "date created",
        done: true,
        label1: false,
      },
    };
    firebase
      .database()
      .ref("users/" + userId + "/tasks")
      .update(tempTask);
  };

  let taskNum;

  const getTaskNum = firebase
    .database()
    .ref("users/" + userId + "/tasks")
    .on("value", (tasks) => {
      taskNum = tasks.numChildren();
      // console.log(tasks.numChildren());
    });

  return (
    <ScrollView>
      <SafeAreaView style={styles.mainContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.mainText}>Hello {name}!</Text>
          <Text style={styles.otherText}>
            You are not very busy today are you?
          </Text>
          <Text style={styles.otherText}>
            You have {taskNum} tasks for today.
          </Text>
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

          <TouchableOpacity
            style={styles.plusButton}
            activeOpacity={0.5}
            onPress={() => navigation.navigate("NewTaskScreen")}
          >
            <Text style={styles.plusText}>+</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.dailyTaskText}>Daily Tasks</Text>

        <View style={styles.dailyButtonContainer}>{dailyButtons}</View>

        <TouchableOpacity onPress={() => this.addTempData()}>
          <Text>addtemptask</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#faf0e6",
  },
  button: {
    backgroundColor: "#709c6c",
    borderRadius: 10,
    margin: 30,
    width: 100,
    height: 100,
    justifyContent: "center",
  },

  plusButton: {
    backgroundColor: "#faf0e6",
    borderRadius: 10,
    margin: 30,
    width: 100,
    height: 100,
    justifyContent: "center",
    borderColor: "black",
    borderWidth: 1,
  },

  plusText: {
    color: "black",
    textAlign: "center",
    fontSize: 30,
  },

  text: {
    color: "white",
    textAlign: "center",
  },

  mainText: {
    fontWeight: "bold",
    fontSize: 50,
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

  dailyButtonContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    paddingLeft: 50,
  },

  textContainer: {
    padding: 10,
    marginTop: 20,
  },

  dailyTaskText: {
    fontWeight: "bold",
    fontSize: 30,
    paddingLeft: 10,
  },
  signButton: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 18,
    elevation: 3,
    backgroundColor: "#8A873B",
    marginBottom: 15,
    borderRadius: 10,
    marginTop: 30,
  },
});

export default GroupTasksScreen;
