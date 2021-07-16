import React from "react";
import { View } from "react-native";
import { TouchableOpacity } from "react-native";
import { Button, SafeAreaView, Text, StyleSheet } from "react-native";

function GroupTasksScreen(props) {
  const labels = ["things", "things1"];
  const labelbuttons = labels.map(function (labels) {
    return (
      <TouchableOpacity style={styles.button} activeOpacity={0.5}>
        <Text style={styles.text}>{labels}</Text>
      </TouchableOpacity>
    );
  });

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.textContainer}>
        <Text style={styles.mainText}>Hello Person!</Text>
        <Text style={styles.otherText}>You are hardly working</Text>
        <Text style={styles.otherText}>You have x tasks for today</Text>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} activeOpacity={0.5}>
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
    backgroundColor: "#F5FCFF",
  },

  button: {
    backgroundColor: "green",
    borderRadius: 10,
    margin: 30,
    width: 100,
    height: 100,
    justifyContent: "center",
  },

  plusButton: {
    backgroundColor: "white",
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
  },

  text: {
    color: "white",
    textAlign: "center",
  },

  mainText: {
    fontWeight: "bold",
    fontSize: 50,
  },

  otherText: {
    opacity: 100,
    fontSize: 15,
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