import React from 'react';
import { TextInput } from 'react-native';
import { Image, Dimensions, Button, SafeAreaView, Text, StyleSheet } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

function FriendsScreen({ navigation }) {
    return (
        <SafeAreaView>
            <Image source={require('../assets/comingSoon.png')} style = {styles.backImage}/>
            {/* <Text style={styles.comingSoon}>Coming Soon!</Text> */}
        </SafeAreaView>
    );
}


const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

const styles = StyleSheet.create({
    comingSoon:{
        fontSize: 40,
        fontWeight: "400",
        textAlign: "center",
        paddingTop: 50
    },
    backImage: {
        width: '60%', 
        height: '50%',
        marginVertical: height*0.09,
        marginHorizontal: width*0.2,
        opacity:0.5,
      },
})

export default FriendsScreen;
