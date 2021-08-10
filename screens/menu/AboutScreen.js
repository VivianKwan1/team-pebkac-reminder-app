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
            Program. The project was managed by our PM Phillip Tan and built by our group of developers composed
            of Subash Katel, Tony Guan, Alice Lu, Mariana Villena, Vivian Kwan and our PO Isaiah Gama.
            We are all currently getting our undergraduate degrees at UC San Diego and UC Santa Barbara.
        </Text>
        <Text style={styles.p1}>
            What prompted us to start this app was our common interest in productivity and wellness.
            We noticed there were many apps focusing on different areas of these, but none that
            combined everything you needed into a single app. We wanted to make an app that we would use, which is why we decided to come up with [InsertNameofApp]!!
            Here you can receive reminders, make to-do lists, and take care of your health all wrapped up nicely 
            into a single app.
        </Text>
        <Image source={require('../screens/assets/us.png')} style = {styles.ourImage}/>
        </View>
        </ScrollView>
        </SafeAreaView>

    );
}

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

const styles = StyleSheet.create({

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
        backgroundColor: '#608a5c',
        flex:1,
    },

    p1:{
        fontSize: 12,
        fontWeight: '400',
        color: 'white',
        paddingHorizontal: 40,
        paddingTop: 20,
        fontFamily: 'Arial',
        textAlign:'justify',
        lineHeight: 18,
    },

    title:{
        fontSize: 35,
        fontWeight: '400',
        color: 'white',
        paddingHorizontal: 20,
        paddingTop: 20,
        textAlign:'center'
      },

      title1:{
        fontSize: 20,
        fontWeight: '500',
        color: 'white',
        paddingHorizontal: 20,
        paddingTop: 30,
      },

    ourImage: {
        width: '100%', 
        height: '35%',
        flex:1, 
        position:'absolute',
        marginTop: height*0.63,
        marginHorizontal: 0,
        justifyContent: 'center',
        alignItems:"stretch"
      }

})

export default AboutScreen;