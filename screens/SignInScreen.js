import React from "react";
import { TextInput } from "react-native";
import {
  Button,
  SafeAreaView,
  Text,
  StyleSheet,
  Pressable,
  Dimensions,
  View,
  Image,
} from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import firebase from "firebase";

import * as Google from "expo-google-app-auth";
import * as GoogleSignIn from "expo-google-sign-in";
import * as Facebook from "expo-facebook";
// import auth from "@react-native-firebase/auth";
// import { LoginManager, AccessToken } from "react-native-fbsdk";

function SignInScreen({ navigation }) {
  // checkIfLoggedIn = () => {
  //   firebase.auth().onAuthStateChanged((user) => {
  //     if (user) {
  //       navigation.navigate("HomeScreen");
  //     }
  //   });
  // };

  onLoginSuccess = () => {
    navigation.navigate("FirstPage");
  };

  signInWithGoogleAsync = async () => {
    try {
      const result = await Google.logInAsync({
        androidClientId:
          "312108100120-5guu03vb7lm1hbkv6204k0d38skgm0t0.apps.googleusercontent.com",
        behavior: "web",
        iosClientId:
          "312108100120-g0fq8ie5tfgv0qbnudr189bf799qilrv.apps.googleusercontent.com",
        scopes: ["profile", "email"],
      });

      if (result.type === "success") {
        await firebase
          .auth()
          .setPersistence(firebase.auth.Auth.Persistence.LOCAL);
        const credential = firebase.auth.GoogleAuthProvider.credential(
          data.idToken,
          data.accessToken
        );
        const googleProfileData = await firebase
          .auth()
          .signInWithCredential(credential);
        this.onLoginSuccess.bind(this);
        console.log(googleProfileData);
      }
    } catch (e) {
      alert("login: Error:" + message);
    }
  };

  signInWithFacebookAsync = async () => {
    // try {
    //   await Facebook.initializeAsync({ appId: "5996710610369778" });
    //   const { type, token } = await Facebook.logInWithReadPermissionsAsync({
    //     permissions: ["public_profile"],
    //   });

    //   if (type === "success") {
    //     const credentials =
    //       firebase.auth.FacebookAuthProvider.credential(token);
    //     firebase
    //       .auth()
    //       .signInWithCredential(credentials)
    //       .catch((e) => {
    //         console.log(token);
    //         console.log(e);
    //       });
    //   }
    // } catch (e) {
    //   return { error: true };
    // }

    try {
      await Facebook.initializeAsync({ appId: "5996710610369778" });
      const { type, token } = await Facebook.logInWithReadPermissionsAsync({
        permissions: ["public_profile"],
      });
      if (type === "success") {
        await firebase
          .auth()
          .setPersistence(firebase.auth.Auth.Persistence.LOCAL);
        const credential = firebase.auth.FacebookAuthProvider.credential(token);
        const facebookProfileData = await firebase
          .auth()
          .signInWithCredential(credential);
        this.onLoginSuccess.bind(this);
      }
    } catch ({ message }) {
      alert(`Facebook Login Error: ${message}`);
    }

    // try {
    //   const provider = new firebase.auth.FacebookAuthProvider();
    //   firebase.auth().signInWithRedirect(provider);
    //   firebase
    //     .auth()
    //     .getRedirectResult()
    //     .then((result) => {
    //       if (result.credential) {
    //         const credential = result.credential;
    //         const accessToken = credential.accessToken;
    //       }
    //       const user = result.user;
    //     });
    //   // firebase.auth().signInWithPopup(provider).then((result) => {
    //   //   const credential = result.credential;
    //   //   const user = result.user;
    //   //   const accessToken = credential.accessToken;
    //   // })

    //   // const result = await LoginManager.logInWithPermissions([
    //   //   "public_profile",
    //   //   "email",
    //   // ]);
    //   // if (result.isCancelled) {
    //   //   throw "User cancelled the login process";
    //   // }

    //   // const data = await AccessToken.getCurrentAccessToken();
    //   // if (!data) {
    //   //   throw "something went wrong throwing access token";
    //   // }

    //   // const facebookCredential = auth.FacebookAuthProvider.credential(
    //   //   data.accessToken
    //   // );

    //   // return auth().signInWithCredential(facebookCredential);
    // } catch ({ message }) {
    //   alert(`Facebook Login Error: ${message}`);
    // }
  };

  return (
    <SafeAreaView style={styles.page}>
      <Image
        source={require("../assets/secondPage.png")}
        style={styles.backImage}
      />
      <Pressable
        style={styles.cancelButton}
        onPress={() => navigation.navigate("FirstPage")}
      >
        <Text style={styles.cancelText}>X</Text>
      </Pressable>
      <Text style={styles.texts}>Don't Have Account? Sign Up</Text>
      <Text style={styles.accountText}>Email Address</Text>
      <TextInput style={styles.accountInput} />

      <Text style={styles.accountText}>Password</Text>
      <TextInput style={styles.accountInput} secureTextEntry={true} />

      <Pressable
        style={styles.signButton}
        onPress={() => navigation.navigate("HomeScreen")}
      >
        <Text style={styles.text}>Sign In</Text>
      </Pressable>

      <Pressable
        style={styles.googButton}
        onPress={() => this.signInWithGoogleAsync()}
      >
        <Text style={styles.text}>Google</Text>
      </Pressable>

      <Pressable
        style={styles.fbButton}
        onPress={() => this.signInWithFacebookAsync()}
      >
        <Text style={styles.text}>Facebook</Text>
      </Pressable>
    </SafeAreaView>
  );
}

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const styles = StyleSheet.create({
  texts: {
    fontSize: 20,
    marginHorizontal: width * 0.1,
    marginTop: height * 0.1,
    marginBottom: height * 0.01,
  },
  signButton: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 18,
    elevation: 3,
    backgroundColor: "#8A873B",
    marginBottom: 15,
    marginHorizontal: width * 0.1,
    borderRadius: 10,
    marginTop: 30,
  },

  cancelButton: {
    alignItems: "flex-end",
    paddingVertical: 18,
    elevation: 3,
    marginBottom: 15,
    marginHorizontal: width * 0.1,
    borderRadius: 10,
  },

  googButton: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 18,
    elevation: 3,
    backgroundColor: "#8A873B",
    marginBottom: 15,
    marginHorizontal: width * 0.1,
    borderRadius: 10,
  },

  fbButton: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 18,
    elevation: 3,
    backgroundColor: "#8A873B",
    marginBottom: 300,
    marginHorizontal: width * 0.1,
    borderRadius: 10,
  },

  text: {
    fontSize: 18,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },

  accountInput: {
    marginHorizontal: width * 0.1,
    borderWidth: 1,
    //borderRadius:10,
    fontSize: 20,
  },

  accountText: {
    fontWeight: "bold",
    margin: 10,
    fontSize: 18,
    marginHorizontal: width * 0.1,
  },

  cancelText: {
    fontSize: 30,
    fontWeight: "bold",
    color: "red",
  },

  page: {
    backgroundColor: "#FFFFE2",
  },

  backImage: {
    width: "90%",
    height: "60%",
    flex: 1,
    resizeMode: "stretch",
    alignContent: "center",
    position: "absolute",
    marginTop: height * 0.3,
  },
});

export default SignInScreen;
