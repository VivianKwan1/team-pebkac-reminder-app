import React, {Component} from 'react';
import { TextInput } from 'react-native';
import { Button, SafeAreaView, Text, StyleSheet, Pressable, Dimensions, View, Image, Alert } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import firebase from "firebase";

export default class SignIn extends Component {
  
  constructor() {
    super();
    this.state = {
      isLoading: false,
      email: '', 
      password: '',
      isLoading: false
    }
  }

  updateInputVal = (val, prop) => {
    const state = this.state;
    state[prop] = val;
    this.setState(state);
  }

  emailLogin = async () => {
    this.setState({
      isLoading: true,
    })
    try {
      if((this.state.email === '') || (this.state.password === '')) {
        Alert.alert('Enter your email and password to sign in!')
        return;
      }
        const resp = await firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password);
        this.setState({
          isLoading: false,
          email: '', 
          password: ''
        })
        if(resp.user) {
            this.props.navigation.navigate('HomeScreen');
        } else {
          Alert.alert('The email or password is incorrect.')
        }
    } catch (e) {
        Alert.alert(e.message);
    }
  };

  handlePasswordReset = async () => {
    if (this.state.email === '') {
      Alert.alert('Please enter an email address to reset your password')
      return;
    }
    this.setState({
      isLoading: true,
    })
    try {
      await firebase.auth().sendPasswordResetEmail(this.state.email)
      this.setState({
        isLoading: false,
      })
      Alert.alert('We have sent you a password reset email')
      this.props.navigation.navigate('SignIn')
    } catch (error) {
      this.setState({
        isLoading: false,
      })
      Alert.alert(`Reset Password Error: ${e}`);
    }
  };

  render() {
    return (
        <SafeAreaView style = {styles.page}>
          <Image source={require('../assets/secondPage.png')} style = {styles.backImage}/>
            <Pressable style = {styles.cancelButton} onPress = {() => this.props.navigation.navigate('FirstPage')}>
              <Text style = {styles.cancelText}>X
              </Text>
            </Pressable>
            <Pressable style = {styles.signupButton} onPress = {() => this.props.navigation.navigate('SignUpScreen')}>
              <Text style = {styles.texts}>Don't have an account? Sign up here
              </Text>
            </Pressable>

            <Text style={styles.accountText}>Email</Text>
            <TextInput
                style={styles.accountInput}
                value={this.state.email}
                onChangeText={(val) => this.updateInputVal(val, 'email')}
            />

            <Text style={styles.accountText}>Password</Text>
            <TextInput
                style={styles.accountInput}
                secureTextEntry={true}
                value={this.state.password}
                onChangeText={(val) => this.updateInputVal(val, 'password')}
            />

            <Pressable style = {styles.forgotPassword} onPress = {() => this.handlePasswordReset()}>
              <Text style = {styles.forgotText}>Forgot password?
              </Text>
            </Pressable>

            <Pressable style = {styles.signButton} onPress = {() => this.emailLogin()}>
              <Text style = {styles.text}>Sign In
              </Text>
            </Pressable>

            <Pressable style = {styles.googButton}>
              <Text style = {styles.text}>Google
              </Text>
            </Pressable>

            <Pressable style = {styles.fbButton}>
              <Text style = {styles.text}>Facebook
              </Text>
            </Pressable>

        </SafeAreaView>
    );
  }
}

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

const styles = StyleSheet.create({
    texts: {
        fontSize:15,
        marginHorizontal: width*0.05,
        marginTop: height*0.01,
        marginBottom: height*0.01,
        color: '#3399FF',
    },
    signupButton: {
      marginBottom: 5,
      marginHorizontal: width*0.05,
      borderRadius:10
    },
    forgotPassword: {
      marginLeft: width*0.25,
    },
    forgotText: {
      fontSize:18,
        marginHorizontal: width*0.045,
        marginTop: height*0.01,
        color: '#3399FF',
    },
    signButton: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 18,
      backgroundColor: '#8A873B',
      marginBottom: 15,
      marginHorizontal: width*0.1,
      borderRadius:10,
      marginTop: 30
    },

    cancelButton: {
      alignItems: 'flex-end',
      paddingVertical: 18,
      elevation: 3,
      marginBottom: 15,
      marginHorizontal: width*0.1,
      borderRadius:10
    },
    
    googButton: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 18,
      elevation: 3,
      backgroundColor: '#8A873B',
      marginBottom: 15,
      marginHorizontal: width*0.1,
      borderRadius:10
    },

    fbButton: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 18,
      elevation: 3,
      backgroundColor: '#8A873B',
      marginBottom: 300,
      marginHorizontal: width*0.1,
      borderRadius:10
    },

    text: {
    fontSize:18,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
    },

    accountInput: {
        marginHorizontal: width*0.1,
        borderWidth: 1,
        //borderRadius:10,
        fontSize:20
    },

    accountText: {
        fontWeight: 'bold',
        margin: 10, 
        fontSize:18,
        marginHorizontal: width*0.1,
    },

    cancelText: {
    fontSize:30,
    fontWeight: 'bold',
    color: 'red',
    },
    
    page: {
    backgroundColor: '#FFFFE2'
    },

    backImage: {
    width: '90%', height: '60%', flex: 1, resizeMode: 'stretch', 
    alignContent:'center',
    position:'absolute',
    marginTop: height*0.3
  },

    accountText: {
        margin: 2,
        fontSize:18,
        marginHorizontal: 10
    }

})

