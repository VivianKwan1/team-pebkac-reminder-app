import React from 'react';
import { TextInput } from 'react-native';
import { Button, SafeAreaView, Text, StyleSheet } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

function SignUpScreen({ navigation }) {
    return (
        <SafeAreaView>
            <Button
                title='X'
            // onPress={() => this.props.navigation.goBack()}
            />
            <Text>Have an Account? Sign In</Text>
            <Text style={styles.accountText}>First Name</Text>
            <TextInput
                style={styles.accountInput}
                placeholder='First Name'
            />

            <Text style={styles.accountText}>Last Name</Text>
            <TextInput
                style={styles.accountInput}
                placeholder='Last Name'
            />

            <Text style={styles.accountText}>Email</Text>
            <TextInput
                style={styles.accountInput}
                placeholder='Email Adress'
            />

            <Text style={styles.accountText}>Password</Text>
            <TextInput
                style={styles.accountInput}
                placeholder='Password'
                secureTextEntry={true}
            />

            <Text style={styles.accountText}>Re-enter Password</Text>
            <TextInput
                style={styles.accountInput}
                placeholder='Re-enter Password'
                secureTextEntry={true}
            />

            <Button
                title='Create Account'
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
    accountInput: {
        margin: 12,
        borderWidth: 1,
    },

    accountText: {
        margin: 5,
        fontWeight: 'bold',
    }

})

export default SignUpScreen;