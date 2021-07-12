import React from 'react';
import { TextInput } from 'react-native';
import { Button, SafeAreaView, Text, StyleSheet } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

function SignInScreen({ navigation }) {
    return (
        <SafeAreaView>
            <Button
                title='X'
            // onPress={() => this.props.navigation.goBack()}
            />
            <Text>Don't Have Account? Sign Up</Text>
            <Text style={styles.emailText}>Email</Text>
            <TextInput
                style={styles.emailInput}
                placeholder='Email Adress'
            />

            <Text style={styles.passwordText}>Password</Text>
            <TextInput
                style={styles.passwordInput}
                placeholder='Password'
                secureTextEntry={true}
            />

            <Button
                title='Sign In'
                onPress={() => navigation.navigate('HomeScreen')}
            />

            <Button
                title='Google'
            />
            <Button
                title='Facebook'
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    emailInput: {
        margin: 12,
        borderWidth: 1,
    },

    passwordInput: {
        margin: 12,
        borderWidth: 1,
    },

    emailText: {
        fontWeight: 'bold',
    },

    passwordText: {
        fontWeight: 'bold',
    },

})

export default SignInScreen;