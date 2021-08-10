import React from "react";
import {SafeAreaView,Text,StyleSheet,Pressable,Image,Dimensions,View} from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import SignInScreen from "./SignInScreen";
import SignUpScreen from "./SignUpScreen";
// import HomeScreen from "./HomeScreen";
import firebase from "firebase";

function FirstPage({ navigation }) {
  // checkIfLoggedIn = () => {
  //   firebase.auth().onAuthStateChanged((user) => {
  //     if (user) {
  //       navigation.navigate("HomeScreen");
  //     }
  //   });
  // };

  return (
    <SafeAreaView style={styles.page}>
      <Image
        source={require("../assets/firstPage1.png")}
        style={styles.backImage1}
      />
      <Image
        source={require("../assets/firstPage2.png")}
        style={styles.backImage2}
      />
      <Text style={styles.appName}>Mind / Matter</Text>

      <View style={styles.parent}>
        <Pressable
          style={styles.signInbutton}
          onPress={() => navigation.navigate("SignInScreen")}
        >
          <Text style={styles.text}>Sign In</Text>
        </Pressable>

        <Pressable
          style={styles.signUpbutton}
          onPress={() => navigation.navigate("SignUpScreen")}
        >
          <Text style={styles.text}>Sign Up</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const styles = StyleSheet.create({
  appName: {
    fontWeight: "bold",
    fontSize: height * 0.07,
    marginBottom: height * 0.43,
    marginTop: height * 0.07,
    textAlign: "center",
    color: "white",
    marginHorizontal: width * 0.01,
  },

  signInbutton: {
    alignItems: "center",
    justifyContent: "center",
    height: height * 0.06,
    backgroundColor: "#FAF9C7",
    marginBottom: height * 0.02,
    marginHorizontal: width * 0.05,
    borderRadius: 50,
    width: width * 0.25,
  },

  signUpbutton: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FAF9C7",
    marginBottom: height * 0.02,
    //marginHorizontal: width*0.35,
    borderRadius: 50,
    height: height * 0.06,
    width: width * 0.25,
  },

  text: {
    fontSize: 20,
    lineHeight: 27,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "gray",
  },
  page: {
    backgroundColor: "green",
    width: width,
    height: height,
  },
  backImage1: {
    width: "100%",
    height: "60%",
    flex: 1,
    resizeMode: "stretch",
    position: "absolute",
    marginTop: height * 0.3,
    marginHorizontal: width * 0.1,
  },
  parent: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
    marginTop: height * 0.19,
  },
  backImage2: {
    width: "40%",
    height: "50%",
    flex: 1,
    resizeMode: "stretch",
    position: "absolute",
    marginTop: height * 0.07,
  },
});

export default FirstPage;
