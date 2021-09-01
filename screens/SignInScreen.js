import React, { Component } from "react";
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
  Alert,
} from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import firebase from "firebase";
import * as Google from "expo-google-app-auth";
import * as GoogleSignIn from "expo-google-sign-in";
import * as Facebook from "expo-facebook";

export default class SignIn extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
    };
  }

  updateInputVal = (val, prop) => {
    const state = this.state;
    state[prop] = val;
    this.setState(state);
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
          result.idToken,
          result.accessToken
        );
        const googleProfileData = await firebase
          .auth()
          .signInWithCredential(credential)
          .then((result) => {
            firebase
              .database()
              .ref("/users/" + result.user.uid)
              .set({ gmail: result.user.email, name: result.user.displayName });
            this.props.navigation.navigate("HomeScreen");
          });

        // console.log(googleProfileData);
      }
    } catch (e) {
      alert("login: Error:" + e);
    }
  };

  signInWithFacebookAsync = async () => {
    try {
      const appId = { appId: "fb5996710610369778" };
      await Facebook.initializeAsync(appId);
      const { type, token } = await Facebook.logInWithReadPermissionsAsync(
        appId,
        {
          permissions: ["public_profile"],
        }
      );
      if (type === "success") {
        await firebase
          .auth()
          .setPersistence(firebase.auth.Auth.Persistence.LOCAL);
        const credential = firebase.auth.FacebookAuthProvider.credential(token);
        const facebookProfileData = await firebase
          .auth()
          .signInWithCredential(credential);
      }
    } catch ({ message }) {
      alert(`Facebook Login Error: ${message}`);
    }
  };

  emailLogin = async () => {
    try {
      if (this.state.email === "" || this.state.password === "") {
        Alert.alert("Enter your email and password to sign in!");
        return;
      }
      const resp = await firebase
        .auth()
        .signInWithEmailAndPassword(this.state.email, this.state.password);
      this.setState({
        email: "",
        password: "",
      });
      if (resp.user) {
        this.props.navigation.navigate("HomeScreen");
      } else {
        Alert.alert("The email or password is incorrect.");
      }
    } catch (e) {
      Alert.alert(e.message);
    }
  };

  handlePasswordReset = async () => {
    if (this.state.email === "") {
      Alert.alert("Please enter an email address to reset your password");
      return;
    }
    try {
      await firebase.auth().sendPasswordResetEmail(this.state.email);
      this.setState({
        email: "",
      });
      Alert.alert("We have sent you a password reset email");
      this.props.navigation.navigate("SignIn");
    } catch (error) {
      Alert.alert(`Reset Password Error: ${e}`);
    }
  };

  render() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        console.log("Logged in with user: ", user);
        this.props.navigation.navigate("HomeScreen");
      } else console.log("Not logged in");
    });
    return (
      <SafeAreaView style={styles.page}>
        <Image
          source={require("../assets/secondPage.png")}
          style={styles.backImage}
        />
        <Pressable
          style={styles.cancelButton}
          onPress={() => this.props.navigation.navigate("FirstPage")}
        >
          <Text style={styles.cancelText}>X</Text>
        </Pressable>
        <Pressable
          style={styles.signupButton}
          onPress={() => this.props.navigation.navigate("SignUpScreen")}
        >
          <Text style={styles.texts}>Don't have an account? Sign up here</Text>
        </Pressable>
        <Text style={styles.accountText}>Email</Text>
        <TextInput
          style={styles.accountInput}
          value={this.state.email}
          onChangeText={(val) => this.updateInputVal(val, "email")}
        />

        <Text style={styles.accountText}>Password</Text>
        <TextInput
          style={styles.accountInput}
          secureTextEntry={true}
          value={this.state.password}
          onChangeText={(val) => this.updateInputVal(val, "password")}
        />

        <Pressable
          style={styles.forgotPassword}
          onPress={() => this.handlePasswordReset()}
        >
          <Text style={styles.forgotText}>Forgot password?</Text>
        </Pressable>

        <Pressable style={styles.signButton} onPress={() => this.emailLogin()}>
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
}

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const styles = StyleSheet.create({
  texts: {
    fontSize: 18,
    fontWeight: "400",
    marginHorizontal: width * 0.05,
    marginTop: height * 0.01,
    marginBottom: height * 0.01,
    color: "#4E6A94",
  },
  signupButton: {
    marginBottom: 5,
    marginHorizontal: width * 0.05,
    borderRadius: 10,
  },
  forgotPassword: {
    marginLeft: width * 0.25,
  },
  forgotText: {
    fontWeight: "400",
    fontSize: 18,
    marginHorizontal: width * 0.045,
    marginTop: height * 0.01,
    color: "#4E6A94",
  },
  signButton: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 18,
    backgroundColor: "#6E8969",
    marginBottom: 15,
    marginHorizontal: width * 0.1,
    borderRadius: 10,
    marginTop: 30,
  },
  cancelButton: {
    alignItems: "flex-end",
    paddingVertical: 18,
    marginBottom: height * 0.0001,
    marginHorizontal: width * 0.1,
    borderRadius: 10,
  },
  googButton: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 18,
    elevation: 3,
    backgroundColor: "#6E8969",
    marginBottom: 15,
    marginHorizontal: width * 0.1,
    borderRadius: 10,
  },
  fbButton: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 18,
    elevation: 3,
    backgroundColor: "#6E8969",
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
    marginVertical: height * 0.005,
    borderWidth: 1,
    borderRadius:8,
    paddingVertical: height * 0.005,
    fontSize: 20,
  },
  accountText: {
    fontWeight: "400",
    fontSize: 18,
    marginHorizontal: width * 0.1,
  },
  cancelText: {
    fontSize: height * 0.035,
    fontWeight: "bold",
    color: "black",
  },
  page: {
    backgroundColor: "#faf0e6",
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
  accountText: {
    margin: 2,
    fontSize: 18,
    marginHorizontal: 10,
  },
});