import React, {Component} from 'react';
import { TextInput } from 'react-native';
import { Button, SafeAreaView, Text, StyleSheet, Pressable, Image, Dimensions, View, Alert, ActivityIndicator} from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import firebase from '../database/firebase';


export default class SignUp extends Component {
  
  constructor() {
    super();
    this.state = { 
      firstName: '',
      lastName: '',
      email: '', 
      password: '',
      confirmPassword: '',
      isLoading: false
    }
  }

  updateInputVal = (val, prop) => {
    const state = this.state;
    state[prop] = val;
    this.setState(state);
  }

  registerUser = () => {
    if((this.state.email === '') || (this.state.password === '')) {
      Alert.alert('Enter details to signup!')
      return;
    } else if (this.state.password !== this.state.confirmPassword) {
      Alert.alert('Passwords do not match')
      return;
    }
      this.setState({
        isLoading: true,
      })
      firebase
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then((res) => {
        res.user.updateProfile({
          firstName: this.state.firstName,
          lastName: this.state.lastName,
        })
        console.log('User registered successfully!')
        this.setState({
          isLoading: false,
          firstName: '',
          lastName: '',
          email: '', 
          password: ''
        })
        //  this.props.navigation.navigate('SignInScreen')
      })
      this.props.navigation.navigate('SignInScreen')
      .catch(error => this.setState({ errorMessage: error.message }))      
  }

  render() {
    if(this.state.isLoading){
      return(
        <View style={styles.preloader}>
          <ActivityIndicator size="large" color="#9E9E9E"/>
        </View>
      )
    }    
    return (
      <SafeAreaView style = {styles.page}>
      <Image source={require('../assets/thirdPage.png')} style = {styles.backImage}/>
          <Pressable style = {styles.cancelButton} onPress={() => this.props.navigation.navigate('FirstPage')}>
            <Text style = {styles.cancelText}>X
            </Text>
          </Pressable>
          <Pressable style = {styles.signinButton}>
            <Text style = {styles.texts} onPress = {() => this.props.navigation.navigate('SignInScreen')}>Have an account? Sign in here
            </Text>
          </Pressable>
        <Text style={styles.accountText}>First Name</Text>
        <TextInput
          style={styles.accountInput}
          value={this.state.firstName}
          onChangeText={(val) => this.updateInputVal(val, 'firstName')}
        />      
        <Text style={styles.accountText}>Last Name</Text>
        <TextInput
          style={styles.accountInput}
          value={this.state.lastName}
          onChangeText={(val) => this.updateInputVal(val, 'lastName')}
        />     
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
          secureTextEntry={true}
        />
        <Text style={styles.accountText}>Re-enter Password</Text>
          <TextInput
              style={styles.accountInput}
              secureTextEntry={true}
              value={this.state.confirmPassword}
              onChangeText={(val) => this.updateInputVal(val, 'confirmPassword')}
          />   
        <Pressable style = {styles.createButton} onPress={() => this.registerUser()}>
            <Text style = {styles.text}>Create Account
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
  fontSize:18,
  marginHorizontal: width*0.05,
  marginBottom: height*0.01,
  color: '#3399FF'
  },

  signinButton: {
    marginBottom: 5,
    marginHorizontal: width*0.05,
  },
  createButton: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: height*0.025,
    backgroundColor: '#8A873B',
    marginBottom: 15,
    marginHorizontal: width*0.1,
    borderRadius:10,
    marginTop: 30
  },
  
  googButton: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: height*0.025,
    backgroundColor: '#8A873B',
    marginBottom: 15,
    marginHorizontal: width*0.1,
    borderRadius:10
  },

  fbButton: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: height*0.025,
    backgroundColor: '#8A873B',
    marginBottom: height*0.2,
    marginHorizontal: width*0.1,
    borderRadius:10
  },

  cancelButton: {
    alignItems: 'flex-end',
    paddingVertical: 18,
    marginBottom: height*0.0001,
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
      fontSize:15,
  },

  accountText: {
      fontWeight: 'bold',
      margin: height*0.005, 
      fontSize:height*0.025,
      marginHorizontal: width*0.1,
  },

  cancelText: {
  fontSize:height*0.03,
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

  preloader: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff'
  }
})
