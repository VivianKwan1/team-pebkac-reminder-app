import React, { useState, Component } from "react";
import ReactDOM from "react-dom";
import { View } from "react-native";
import { TextInput } from "react-native";
import {
  Button,
  SafeAreaView,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  TouchableOpacity,
  Keyboard,
  Switch,
  ScrollView,
  Platform,
  Image,
  Dimensions,
} from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import { useNavigation } from "@react-navigation/native";
import NewTask from "../components/NewTask";
import TaskCategory from "./TaskCategory";
import Task from "../components/Task";
import { Audio } from "expo-av";
import firebase from "firebase";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import * as Location from "expo-location";

const NewTaskScreen = (props) => {
  const navigation = useNavigation();
  const [task, setTask] = useState();
  const [taskLocation, setTaskLocation] = useState();
  const [taskNotes, setTaskNotes] = useState();
  const [taskItems, setTaskItems] = useState([]);

  let storageRef = firebase.storage().ref();

  const [recording, setRecording] = useState();

  startRecording = async () => {
    try {
      await Audio.requestPermissionsAsync();
      await Audio.setAudioModeAsync({
        allowsRecordingIOS: true,
        playsInSilentModeIOS: true,
      });
      const recording = new Audio.Recording();
      await recording.prepareToRecordAsync(
        Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY
      );
      await recording.startAsync();
      setRecording(recording);
    } catch (err) {
      Alert.alert("Recording failed to start", err);
    }
  };

  stopRecording = async () => {
    setRecording(undefined);
    await recording.stopAndUnloadAsync();
    const uri = recording.getURI();
    // const res = await fetch(uri);
    // const recordBlob = await res.blob();
    const clientuid = firebase.auth().currentUser.uid;
    const audioName = `${Date.now}.m4a`;
    // const ref = firebase.storage().ref().child('audio/test.m4a');
    // ref.put(blob)
    // blob.close()
    const extension = uri.split(".").pop();
    const ref = firebase.storage().ref(`${clientuid}`).child("testing.mp3");

    try {
      const response = await fetch(uri);
      const blob = await response.blob();
      await ref.put(blob, { contentType: "audio/mp3" });
    } catch (e) {
      console.log(e);
    }
  };

  const handleAddTask = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems, task]);
    setTask(null);
  };

  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  };

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  return (
    <View style={styles.container}>
      <ScrollView>
        <Image
          source={require("../assets/newTask.png")}
          style={styles.backImage}
        />
        <SafeAreaView></SafeAreaView>

        {/*Location  */}
        <SafeAreaView>
          <GooglePlacesAutocomplete
            placeholder="Location"
            minLength={2} // minimum length of text to search
            autoFocus={false}
            returnKeyType={"search"} // Can be left out for default return key https://facebook.github.io/react-native/docs/textinput.html#returnkeytype
            listViewDisplayed="auto" // true/false/undefined
            fetchDetails={true}
            enablePoweredByContainer={false}
            renderDescription={(row) => row.description} // custom description render
            onPress={(data, details = null) => {
              console.log(data);
              console.log(details);
            }}
            getDefaultValue={() => {
              return ""; // text input default value
            }}
            query={{
              // available options: https://developers.google.com/places/web-service/autocomplete
              key: "AIzaSyCeY0yEUBWLbsXilFD3N3nIeuZV-SuIom8",
              language: "en", // language of the results
            }}
            styles={{
              textInput: {
                borderBottomColor: "#fff",
                borderBottomWidth: 2,
                marginLeft: 80,
                width: 260,
                top: -480,
                fontSize: 20,
                marginBottom: 20,
              },
            }}
            // currentLocation={true} // Will add a 'Current location' button at the top of the predefined places list
            // currentLocationLabel="Current location"
            nearbyPlacesAPI="GooglePlacesSearch" // Which API to use: GoogleReverseGeocoding or GooglePlacesSearch
            // GoogleReverseGeocodingQuery={
            //   {
            //     // available options for GoogleReverseGeocoding API : https://developers.google.com/maps/documentation/geocoding/intro
            //   }
            // }
            GooglePlacesSearchQuery={{
              // available options for GooglePlacesSearch API : https://developers.google.com/places/web-service/search
              rankby: "distance",
            }}
            debounce={200}
          />
        </SafeAreaView>

        {/*Notes  */}
        <SafeAreaView>
          <Text style={styles.notes}> Notes </Text>
          <TextInput
            style={styles.inputLocation}
            placeholder={"Your notes please"}
            value={taskNotes}
            onChangeText={(text) => setTaskNotes(text)}
          />
        </SafeAreaView>

        {/*Switch All Day  */}
        <SafeAreaView>
          <Text style={styles.switchtext}>All Day</Text>
          <Switch
            style={styles.switch}
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </SafeAreaView>

        {/* Drop down not done yet need to implement drop down for now is just a box */}
        <SafeAreaView>
          <TextInput style={styles.dropDownStyle} placeholder={"Drop Down"} />
        </SafeAreaView>

        {/*Category */}
        <SafeAreaView>
          <TextInput style={styles.categoryStyle} placeholder={"Category"} />
        </SafeAreaView>

        {/*today tomorro/ Another Day */}
        <SafeAreaView>
          <TextInput style={styles.dateToday}> Today </TextInput>
          <TextInput style={styles.dateTomorrow}>Tomorrow</TextInput>
          <TextInput style={styles.dateAnotherDay}>AnotherDay</TextInput>
        </SafeAreaView>

        <SafeAreaView>
          {/* <Text style = {styles.sectionTitle}> New Tasks</Text> */}
          <NewTask></NewTask>
          {taskItems.map((item, index) => {
            return (
              <TouchableOpacity key={index} onPress={() => completeTask(index)}>
                <Task text={item} />
              </TouchableOpacity>
            );
          })}
        </SafeAreaView>

        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding " : "height"}
        >
          <Image
            source={require("../assets/newtaskicon.png")}
            style={styles.ImageIconStyle}
          />
          <TextInput
            style={styles.inputTask}
            placeholder={"Task Name "}
            value={task}
            onChangeText={(text) => setTask(text)}
          />

          <TouchableOpacity onPress={() => handleAddTask()}>
            <View style={styles.addWrapper}>
              <Text style={styles.addText}>Create</Text>
            </View>
          </TouchableOpacity>

          <View style={styles.cancleBox}>
            <TouchableOpacity
              style={styles.button}
              activeOpacity={0.5}
              onPress={() => navigation.navigate("GroupTasksScreen")}
            >
              <Text> Cancel {props.text}</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>

        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity
            style={styles.button2}
            activeOpacity={0.5}
            onPress={() => startRecording()}
          >
            <Text style={styles.texts}>Record</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button2}
            activeOpacity={0.5}
            onPress={() => stopRecording()}
          >
            <Text style={styles.texts}>Stop</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#756EDC",
  },
  accountInput: {
    margin: 12,
    borderWidth: 1,
  },
  sectionTitle: {
    fontSize: 24,
    color: "#fff",
    fontWeight: "bold",
    paddingLeft: 60,
    paddingTop: 30,
  },
  accountText: {
    margin: 5,
    fontWeight: "bold",
  },
  writeTaskWrapper: {
    position: "absolute",
    bottom: 10,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  cancleBox: {
    width: 110,
    height: 50,
    backgroundColor: "#F35E5E",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#C0C0C0",
    borderWidth: 1,
    position: "absolute",
    top: -200,
    left: 280,
  },
  input: {
    position: "absolute",
    top: 100,
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: "#FFF",
    borderRadius: 10,
    borderColor: "#C0C0C0",
    borderWidth: 1,
    width: 360,
    marginLeft: 20,
  },
  inputTask: {
    fontSize: 28,
    fontWeight: "bold",
    top: -870,
    position: "absolute",
    paddingVertical: 10,
    paddingHorizontal: 0,
    backgroundColor: "#756EDC",
    borderRadius: 10,
    borderColor: "#756EDC",
    borderWidth: 1,
    width: 320,
    marginLeft: 80,
  },
  inputLocation: {
    borderBottomColor: "#fff",
    borderBottomWidth: 2,
    marginLeft: 80,
    width: 260,
    top: -480,
    fontSize: 20,
    marginBottom: 20,
  },

  inputNotes: {
    borderBottomColor: "#fff",
    borderBottomWidth: 2,
    marginLeft: 80,
    width: 260,
    top: 0,
    fontSize: 20,
    marginBottom: 20,
  },
  addWrapper: {
    width: 110,
    height: 50,
    backgroundColor: "#759873",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#C0C0C0",
    borderWidth: 1,
    position: "absolute",
    top: -200,
    left: 20,
  },
  switch: {
    top: -160,
    position: "absolute",
    marginLeft: 160,
  },

  switchtext: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#fff",
    top: -160,
    position: "absolute",
    marginLeft: 80,
  },

  notes: {
    marginLeft: 80,
    width: 260,
    top: -475,
    fontSize: 20,
    marginBottom: 20,
    color: "white",
    fontWeight: "bold",
  },
  dateToday: {
    width: 100,
    height: 40,
    paddingLeft: 20,
    backgroundColor: "#fff",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#C0C0C0",
    borderWidth: 1,
    position: "absolute",
    top: -480,
    marginLeft: 80,
  },
  dateTomorrow: {
    width: 100,
    height: 40,
    paddingLeft: 12,
    backgroundColor: "#fff",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#C0C0C0",
    borderWidth: 1,
    position: "absolute",
    top: -480,
    marginLeft: 190,
  },
  dateAnotherDay: {
    width: 100,
    height: 40,
    paddingLeft: 10,
    backgroundColor: "#fff",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#C0C0C0",
    borderWidth: 1,
    position: "absolute",
    top: -430,
    marginLeft: 80,
  },
  ImageIconStyle: {
    top: -833,
    position: "absolute",
    marginLeft: 20,
  },
  backImage: {
    right: 450,
    top: 120,
  },
  categoryStyle: {
    width: 140,
    height: 40,
    paddingLeft: 20,
    backgroundColor: "#fff",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#C0C0C0",
    borderWidth: 1,
    position: "absolute",
    top: -320,
    marginLeft: 80,
  },
  dropDownStyle: {
    width: 140,
    height: 40,
    paddingLeft: 20,
    backgroundColor: "#fff",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#C0C0C0",
    borderWidth: 1,
    position: "absolute",
    top: -375,
    marginLeft: 80,
  },
  button2: {
    marginTop: height * 0.1,
    marginBottom: height * 0.01,
    marginHorizontal: width * 0.05,
    height: 30,
    borderRadius: 10,
    backgroundColor: "#ff0000",
    borderColor: "#000000",
    borderWidth: 2,
  },
});

export default NewTaskScreen;
