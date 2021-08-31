import React, { useState } from 'react';
import { TextInput } from 'react-native';
import { Dimensions, Image, Modal, ScrollView, TouchableOpacity, View, Button, SafeAreaView, Text, StyleSheet, Pressable } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { useNavigation } from '@react-navigation/native';
import { Icon } from 'react-native-elements';
import { getAuth, signOut, deleteUser } from 'firebase/auth';

function SettingsScreen() {
  const auth = getAuth();
  
const user = auth.currentUser;
  const navigation = useNavigation();
  const [isModalVisible, setModalVisible] = useState(false);

  const [inputValue, setInputValue] = useState("");
  const [displayInput, setDisplayInput] = useState(false);
  const [text, setText] = useState("");
  const [screen, setScreen] = useState("");

  const toggleModalVisibility = () => {
    setModalVisible(!isModalVisible);
  };

  const confirm = (prompt, nav, display) => {
    setText(prompt);
    setScreen(nav);
    setDisplayInput(display);
    setModalVisible(!isModalVisible);
  }

  const logOut = () => {
    confirm('log out?', 'FirstPage', false);
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    });
  }

  const deleteAccount = () => {
    confirm('delete your account? All data will be permanently deleted.', 'FirstPage', true)
    deleteUser(user).then(() => {
      // User deleted.
    }).catch((error) => {
      // An error ocurred
      // ...
    });
  }

  return (
    <SafeAreaView style={styles.background}>
      <ScrollView>
        <View style={styles.view}>
          <Pressable onPress={() => navigation.goBack('MenuScreen')}>
            <Icon
              name='arrow-left'
              type='material-community'
              color='white'
              size={30}
              style={styles.backButton} />
          </Pressable>
          <Text style={styles.title}>Settings</Text>
        </View>

        <TouchableOpacity style={styles.button}>
          <View style={styles.view}>
            <Icon
              name='emoticon-excited'
              type='material-community'
              color='white'
              size={30}
              style={styles.icon} />
            <Text style={styles.text}>Appearance</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <View style={styles.view}>
            <Icon
              name='bell'
              type='material-community'
              color='white'
              size={30}
              style={styles.icon} />
            <Text style={styles.text}>Notifications</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <View style={styles.view}>
            <Icon
              name='security'
              type='material-community'
              color='white'
              size={30}
              style={styles.icon} />
            <Text style={styles.text}>Security and Privacy</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <View style={styles.view}>
            <Icon
              name='transit-connection-variant'
              type='material-community'
              color='white'
              size={30}
              style={styles.icon} />
            <Text style={styles.text}>Connection</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <View style={styles.view}>
            <Icon
              name='account-box-outline'
              type='material-community'
              color='white'
              size={30}
              style={styles.icon} />
            <Text style={styles.text}>Account</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => confirm('delete all tasks? This action cannot be undone.', 'GroupTasksScreen', true)}>
          <View style={styles.view}>
            <Icon
              name='delete'
              type='material-community'
              color='white'
              size={30}
              style={styles.icon} />
            <Text style={styles.text}>Delete All Tasks</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => deleteAccount()}>
        {/* <TouchableOpacity style={styles.button} onPress={() => confirm('delete your account? All data will be permanently deleted.', 'FirstPage', true)}> */}
          <View style={styles.view}>
            <Icon
              name='account-cancel-outline'
              type='material-community'
              color='white'
              size={30}
              style={styles.icon} />
            <Text style={styles.text}>Delete Account</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => logOut()}>
        {/* <TouchableOpacity style={styles.button} onPress={() => confirm('log out?', 'FirstPage', false)}> */}
          <View style={styles.view}>
            <Icon
              name='logout'
              type='material-community'
              color='white'
              size={30}
              style={styles.icon} />
            <Text style={styles.text}>Logout</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
      <Modal animationType="slide"
        transparent visible={isModalVisible}
        presentationStyle="overFullScreen"
        onDismiss={() => toggleModalVisibility}>
        <View style={styles.viewWrapper}>
          <View style={styles.modalView}>
          {/* <View style={[styles.modalView, displayInput ? styles.modalWithInput : styles.modalNoInput]}> */}
            <Text style={styles.modalText}>
              Are you sure you want to {text}
            </Text>
            <Conditional displayInput={displayInput} inputValue={inputValue} />
            <View style={styles.buttonContainer}>
              <Pressable onPress={() => setModalVisible(!isModalVisible)} style={[styles.buttons, styles.cancelButton]}>
                <Text>Cancel</Text>
              </Pressable>
              <Pressable onPress={() => navigation.navigate(screen)} style={[styles.buttons, styles.confirmButton]}>
                <Text>Confirm</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

function Conditional(props) {
  if (props.displayInput == true) {
    return (
      <TextInput placeholder="Enter your password to confirm."
        value={props.inputValue} style={styles.textInput}
        onChangeText={(value) => setInputValue(value)} />
    )
  }
  return null;
}

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

const styles = StyleSheet.create({

  icon: {
    paddingLeft: 25
  },

  backButton: {
    paddingHorizontal: 20,
    paddingTop: 5,
  },

  button: {
    borderWidth: 1.5,
    borderRadius: 25,
    marginBottom: 10,
    marginHorizontal: width * 0.05,
    paddingVertical: 2,
    borderColor: "white",
    alignItems: "stretch"
  },

  view: {
    flexDirection: "row",
    alignItems: "center",
    alignContent: 'flex-start'
  },

  background: {
    backgroundColor: '#709c6c',
    flex: 1,
  },

  title: {
    fontSize: 25,
    fontWeight: '600',
    color: 'white',
    paddingHorizontal: 20,
    paddingBottom: 35,
    paddingTop: 30,
  },

  text: {
    fontSize: 17,
    color: 'white',
    fontWeight: '500',
    paddingHorizontal: 40,
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
  },
  buttonContainer: {
    flexDirection: 'row'
  },
  buttons: {
    margin: 10,
    backgroundColor: '#709C6C',
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 5
  },
  confirmButton: {
    backgroundColor: '#80bc8c',
  },
  cancelButton: {
    backgroundColor: '#feaeae',
  },
  modalText: {
    marginBottom: 10,
    padding: 10,
    // paddingTop: 15,
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: 20,
  },
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  viewWrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0, 0, 0, 0.2)",
  },
  modalView: {
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: "50%",
    left: "50%",
    elevation: 5,
    transform: [{ translateX: -(width * 0.4) },
    { translateY: -90 }],
    // height: 210,
    width: width * 0.8,
    backgroundColor: "#fff",
    borderRadius: 7,
    paddingVertical: 20,
  },
  textInput: {
    width: "80%",
    borderRadius: 5,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderColor: "rgba(0, 0, 0, 0.2)",
    borderWidth: 1,
    marginBottom: 8,
  },
})

export default SettingsScreen;