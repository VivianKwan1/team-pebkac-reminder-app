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
  Pressable,
} from "react-native";
import { Icon } from 'react-native-elements';
import { createStackNavigator, createAppContainer } from "react-navigation";
import { useNavigation } from "@react-navigation/native";
import NewTask from "../components/NewTask";
import TaskCategory from "./TaskCategory";
import Task from "../components/Task";
import { Audio } from "expo-av";
import firebase from "firebase";
import DropDownPicker from "react-native-dropdown-picker";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import * as Location from "expo-location";

const NewTaskScreen = (props) => {
  const navigation = useNavigation();
  const [task, setTask] = useState();
  const [taskLocation, setTaskLocation] = useState();
  const [taskNotes, setTaskNotes] = useState();
  const [taskItems, setTaskItems] = useState([]);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState();
  const [items, setItems] = useState([
    {
      label: 'Work', value: 'work',
      icon: () => <Icon name='circle' size={20}
        type='material-community' color='purple' />
    }, //set colors to the labels color
    {
      label: 'School', value: 'school',
      icon: () => <Icon name='circle' size={20}
        type='material-community' color='blue' />
    },
    {
      label: 'Social', value: 'social',
      icon: () => <Icon name='circle' size={20}
        type='material-community' color='green' />
    },
    {
      label: 'Personal', value: 'personal',
      icon: () => <Icon name='circle' size={20}
        type='material-community' color='red' />
    }
  ]);

  let storageRef = firebase.storage().ref();

  const [recording, setRecording] = useState();
  const [show, setShow] = useState();

  startRecording = async () => {
    try {
      await Audio.requestPermissionsAsync();
      await Audio.setAudioModeAsync({
        allowsRecordingIOS: true,
        playsInSilentModeIOS: true,
      });
      const recording = new Audio.Recording();
      await recording.prepareToRecordAsync(Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY);
      await recording.startAsync();
      setRecording(recording);
      setShow(true);
    } catch (err) {
      Alert.alert('Recording failed to start', err);
    }
  }

  stopRecording = async () => {
    setRecording(undefined);
    await recording.stopAndUnloadAsync();
    const uri = recording.getURI();
    // const res = await fetch(uri);
    // const recordBlob = await res.blob();
    const clientuid = firebase.auth().currentUser.uid
    const audioName = `${Date.now}.m4a`;
    // const ref = firebase.storage().ref().child('audio/test.m4a');
    // ref.put(blob)
    // blob.close()
    const extension = uri.split('.').pop();
    const ref = firebase.storage().ref(`${clientuid}`).child('testing.mp3');
    try {
      const response = await fetch(uri);
      const blob = await response.blob();
      await ref.put(blob, { contentType: "audio/mp3" });
      setShow(false);
    } catch (e) {
      console.log(e);
    }

  }

  cancelRecording = async () => {
    setRecording(undefined);
    await recording.stopAndUnloadAsync();
    setShow(false);
  }


  const handleAddTask = () => {
    let today = new Date();
    let todayString =
      today.getMonth() + 1 + "/" + today.getDate() + "/" + today.getFullYear();
    let todayTime = today.getHours();

    let tempPersonal = false;
    let tempWork = false;
    let tempSocial = false;
    let tempSchool = false;
    if (value == 'personal') {
      tempPersonal = true;
    } else if (value == 'work') {
      tempWork = true;
    } else if (value == 'social') {
      tempSocial = true;
    } else if (value == 'school') {
      tempSchool = true;
    }

    const tempTask = {
      date: todayString,
      time: todayTime,
      done: false,
      labels: {
        personal: tempPersonal,
        work: tempWork,
        social: tempSocial,
        school: tempSchool
      },
    };

    firebase
      .database()
      .ref("users/" + userId + "/tasks/" + task)
      .update(tempTask)
      .then(() => {
        console.log("added task " + task);
      });
  }


  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  };

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  return (
    <View style={styles.container}>
      {/* <Image
          source={require("../assets/newTask.png")}
          style={styles.backImage}
        /> */}
      {/* <Image
        source={require("../assets/newtaskicon.png")}
        style={styles.ImageIconStyle}
      /> */}
      <View style={[styles.iconAndText, styles.topRow]}>
        <Icon name='format-list-checkbox' size={40}
          type='material-community' color="#b59c83" />
        <TextInput
          style={styles.inputTask}
          placeholder={"Task Name"}
          value={task}
          onChangeText={(text) => setTask(text)}
        />
      </View>
      {/*Location  */}
      <View style={styles.iconAndText}>
        <Icon name='map-marker' size={40}
          type='material-community' color="#b59c83" />
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
              borderBottomColor: "#b59c83",
              borderBottomWidth: 2,
              backgroundColor: "#fffdf9",
              marginLeft: "2%",
              marginRight: "5%",
              marginTop: "11%",
              width: 260,
              // top: -480,
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
      </View>
      {/*Notes  */}
      {/* <Text style={styles.notes}> Notes </Text> */}
      <View style={styles.iconAndText}>
        <Icon name='file-text' size={35}
          type='feather' color="#b59c83"
          style={{ marginLeft: "1%" }} />
        <TextInput
          style={styles.inputNotes}
          placeholder={"Notes"}
          value={taskNotes}
          onChangeText={(text) => setTaskNotes(text)}
        />
      </View>

      {/*Switch All Day  */}
      {/* <SafeAreaView>
          <Text style={styles.switchtext}>All Day</Text>
          <Switch
            style={styles.switch}
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </SafeAreaView> */}
 <View style={styles.iconAndText}>
        <Icon name='tag-outline' size={35}
          type='material-community' color="#b59c83"
          style={{ marginLeft: "1%", paddingTop: 20 }} />
      <View style={styles.dropdownContainer}>
        <DropDownPicker
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
          placeholder="Select label"
          style={styles.dropdown}
          placeholderStyle={{ color: "grey" }}
          dropDownContainerStyle={{ borderColor: "#b59c83" }}
        />
      </View>
      </View>

      {/*Category */}
      {/* <SafeAreaView>
          <TextInput style={styles.categoryStyle} placeholder={"Category"} />
        </SafeAreaView> */}

      {/*today tomorro/ Another Day */}
      {/* <SafeAreaView>
          <TextInput style={styles.dateToday}> Today </TextInput>
          <TextInput style={styles.dateTomorrow}>Tomorrow</TextInput>
          <TextInput style={styles.dateAnotherDay}>AnotherDay</TextInput>
        </SafeAreaView> */}

      {/* <Text style = {styles.sectionTitle}> New Tasks</Text> */}
      {/* <NewTask></NewTask> */}
      {taskItems.map((item, index) => {
        return (
          <TouchableOpacity key={index} onPress={() => completeTask(index)}>
            <Task text={item} />
          </TouchableOpacity>
        );
      })}

      {/* <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding " : "height"}
        > */}



      {/* </KeyboardAvoidingView> */}

      <View style={styles.recordingContainer}>
        <Icon name='volume-high' size={35}
          type='material-community' color="#b59c83"
          style={{ marginLeft: "1%", paddingTop: 15 }} />
        {!show ? <TouchableOpacity style={[styles.recordingButtons, styles.buttons]} activeOpacity={0.5} onPress={() => startRecording()}>
          <Text style={styles.recordingButtonsText}>Record</Text>
        </TouchableOpacity> : null}

        {show ? <TouchableOpacity style={[styles.recordingButtons, styles.buttons]} activeOpacity={0.5} onPress={() => stopRecording()}>
          <Text style={styles.recordingButtonsText}>Stop</Text>
        </TouchableOpacity> : null}

        {show ? <TouchableOpacity style={[styles.recordingButtons, styles.buttons]} activeOpacity={0.5} onPress={() => cancelRecording()}>
          <Text style={styles.recordingButtonsText}>Cancel</Text>
        </TouchableOpacity> : null}

      </View>
      <View style={styles.buttonsContainer}>
        <Pressable style={[styles.confirmButton, styles.buttons]} onPress={() => handleAddTask()}>
          {/* <View style={styles.addWrapper}> */}
          <Text style={styles.addText}>Create</Text>
          {/* </View> */}
        </Pressable>
        <Pressable
          style={[styles.cancelButton, styles.buttons]}
          activeOpacity={0.5}
          onPress={() => navigation.navigate("GroupTasksScreen")}>

          <Text style={styles.addText}> Cancel {props.text}</Text>
        </Pressable>
      </View>


    </View>
  );
};

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#faf0e6",
  },
  iconAndText: {
    flexDirection: "row",
    marginLeft: "2%",
    // marginTop: "20%",
    alignItems: "center"
  },
  topRow: {
    marginTop: "20%",
  },
  inputTask: {
    fontSize: 25,
    fontWeight: "bold",
    // top: "8%",
    // position: "absolute",
    // marginTop: "20%",
    borderBottomColor: "#b59c83",
    borderBottomWidth: 2,
    // backgroundColor: "#d6c4b3",
    backgroundColor: "#fffdf9",
    borderRadius: 3,
    // borderColor: "#a88ec0",
    // borderWidth: 1,
    // width: 320,
    marginLeft: "2%",
    marginRight: "5%",
    flex: 1,
    padding: 8,
  },
  inputNotes: {
    borderBottomColor: "#b59c83",
    borderBottomWidth: 2,
    marginLeft: "2%",
    marginRight: "5%",
    marginTop: "5%",
    // width: 260,
    // top: -480,
    fontSize: 20,
    marginBottom: 20,
    paddingLeft: 5,
    flex: 1,
    borderRadius: 3,
  },
  dropdown: {
    borderWidth: 1,
    borderColor: "#b59c83",
  },
  dropdownContainer: {
    // flex: 0.8,
    marginLeft: "2%",
    marginRight: "50%",
    marginTop: "7%",
  },
  ImageIconStyle: {
    // top: -833,
    // position: "absolute",
    marginLeft: 20,
    color: "#b59c83",
  },
  recordingContainer: {
    flexDirection: "row",
    marginLeft: "2%",
    marginTop: "7%",
  },
  recordingButtons: {
    backgroundColor: '#b59c83',
  },
  buttons: {
    margin: 15,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 18,
    paddingVertical: 8,
    borderRadius: 5
  },
  recordingButtonsText: {
    color: "#fffdf9",
  },
  buttonsContainer: {
    marginTop: "2%",
    flexDirection: "row",
    justifyContent: "center"
  },
  confirmButton: {
    backgroundColor: '#80b58c',
  },
  cancelButton: {
    backgroundColor: '#fe9a9a',
  },
  addText: {
    color: '#fffdf9',
  },
  // ends here
  accountInput: {
    margin: 12,
    borderWidth: 1,
  },
  sectionTitle: {
    fontSize: 24,
    color: "#fff",
    fontWeight: "bold",
    paddingLeft: 60,
    // paddingTop: 30,
  },
  accountText: {
    margin: 5,
    fontWeight: "bold",
  },
  writeTaskWrapper: {
    // position: "absolute",
    // bottom: 10,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  cancelBox: {
    width: 110,
    height: 50,
    backgroundColor: "#ef224b",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#F35E5E",
    borderWidth: 1,
    // position: "absolute",
    // top: -200,
    // left: 280,
  },
  input: {
    // position: "absolute",
    // top: 100,
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: "#FFF",
    borderRadius: 10,
    borderColor: "#C0C0C0",
    borderWidth: 1,
    width: 360,
    marginLeft: 20,
  },
  addWrapper: {
    width: 110,
    height: 50,
    backgroundColor: "#56941e",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#759873",
    borderWidth: 1,
    // position: "absolute",
    // top: -200,
    left: 20,
  },
  switch: {
    // top: -160,
    // position: "absolute",
    marginLeft: 160,
  },

  switchtext: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#fff",
    // top: -160,
    // position: "absolute",
    marginLeft: 80,
  },

  notes: {
    marginLeft: 80,
    width: 260,
    // top: -475,
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
    // position: "absolute",
    // top: -480,
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
    // position: "absolute",
    // top: -480,
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
    // position: "absolute",
    // top: -430,
    marginLeft: 80,
  },
  ImageIconStyle: {
    // top: -833,
    // position: "absolute",
    marginLeft: 20,
  },
  backImage: {
    right: 450,
    // top: 120,
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
    // position: "absolute",
    // top: -320,
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
    // position: "absolute",
    // top: -375,
    marginLeft: "10%",
  },


});

export default NewTaskScreen;