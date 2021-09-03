import React from 'react';
import { TextInput } from 'react-native';
import { ScrollView, Dimensions, Image, View, Pressable, SafeAreaView, Text, StyleSheet } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { Icon } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native';

function AboutScreen() {
    const navigation = useNavigation(); 
    return (
        <SafeAreaView style={styles.background}>
        <Image source={require('../assets/leaves.png')} style = {styles.backImage}/>
        <ScrollView>
        <View style={styles.view}>
        <Pressable onPress={() => navigation.goBack('MenuScreen')}>
        <Icon
              name='arrow-left'
              type='material-community'
              color='white'
              size={30}
              style={styles.backButton}/>
        </Pressable>
        <Text style={styles.title}>About us</Text>
        </View>

        <View style={styles.view2}>
        <Text style={styles.title1}>
            Meet our Team!! 
        </Text>
        <Text style={styles.p1}>
            The app you are currently using was made by Team Pebkac during the 2021 SDSC Summer Internship 
            Program. The project was managed by Phillip Tan and built by our group of developers composed
            of Subash Katel, Tony Guan, Alice Lu, Mariana Villena, Vivian Kwan and our PO Isaiah Gama.
            We are all currently getting our undergraduate degrees at UC San Diego and UC Santa Barbara.
        </Text>
        <Text style={styles.p1}>
            What prompted us to start this app was our common interest in productivity and wellness.
            We noticed there were many apps focusing on different areas of these, but none that
            combined everything you needed into a single app. We wanted to make an app that we would use.
            That is why we decided to come up with MIND SPACE!!
            Here you can receive reminders, make to-do lists, and take care of your health all wrapped up nicely 
            into a single app.
        </Text>
        <Image source={require('../assets/us.png')} style = {styles.ourImage}/>
        </View>
        </ScrollView>
        </SafeAreaView>
    );
}

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

const styles = StyleSheet.create({

    backImage: {
        width: width, 
        height: height,
        flex:1, 
        opacity:0.2,
        position:'absolute',
      },

    backButton:{
        paddingHorizontal: 20,
        paddingTop: 20,
    },

    view:{
        flexDirection: "row",
        alignItems: "center",
        alignContent: 'flex-start',
      },

      view2:{
        flexDirection: "column",
        alignContent: 'flex-start',
      },

    background:{
        backgroundColor: '#406c34',
        flex:1,
    },

    p1:{
        fontSize: 12.5,
        fontWeight: '500',
        color: "#faf0e6",
        paddingHorizontal: 15,
        paddingHorizontal: width*0.1,
        textAlign:'justify',
        paddingTop: 20,
    },

    title:{
        fontSize: 40,
        fontWeight: '400',
        color: "#faf0e6",
        paddingHorizontal: width*0.01,
        paddingBottom: height*0.001,
        paddingTop: height*0.05,
        textAlign:'justify'
    },

      title1:{
        fontSize: 20,
        fontWeight: '500',
        color: "#faf0e6",
        paddingHorizontal: 25,
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

    ourImage: {
        width: '100%', 
        height: '38%',
        flex:1, 
        opacity:0.85,
        position:'absolute',
        marginTop: height*0.60,
        justifyContent: 'center',
        alignItems:"stretch"
      },

})

export default AboutScreen;