import React, { useState, useEffect } from 'react';
import { Button, Pressable, StatusBar, Image, SafeAreaView, Text, StyleSheet, ScrollView, TouchableOpacity , Dimensions, View} from 'react-native';
import ActivityRings from "react-native-activity-rings";
import * as Progress from 'react-native-progress';
import { useNavigation, useIsFocused} from '@react-navigation/native';
import Dialog from 'react-native-dialog';

global.waterOunces = .001;
global.stretchMinutes = .001;
global.breatheMinutes = .001;

//hard coded goals
global.waterGoalOunces = 64;
global.stretchGoalMinutes = 30;
global.breatheGoalMinutes = 30;

global.waterPercentProgress = (waterOunces/waterGoalOunces);
global.stretchPercentProgress = (stretchMinutes/stretchGoalMinutes);
global.breathePercentProgress = (breatheMinutes/breatheGoalMinutes);



var activityData = [
  {
    label: "Water",
    value: waterPercentProgress,
    color: "#80bfff",
  },
  {
    label: "Stretch",
    value: stretchPercentProgress,
    color: "#cc99ff",
  },
  {
    label: "Breathe",
    value: breathePercentProgress,
    color: "#ffbf80",
  },
];
 
const activityConfig = {
  width: 200,
  height: 200,
  radius: 20,
  ringSize: 20,
};


function HealthTrack(props) {
  const navigation = useNavigation();
  const [visible, setVisible] = useState(false);
  const showDialog = () => {
    setVisible(true);
  };
  const handleClose = () => {
    setVisible(false);
  };
  const [start, setStart] = useState();
  const refreshFunctionWater = () =>{
    console.log("refresh worked");
    activityData = [
      {
        label: "Water",
        value: waterPercentProgress,
        color: "#80bfff",
      },
      {
        label: "Stretch",
        value: stretchPercentProgress,
        color: "#cc99ff",
      },
      {
        label: "Breathe",
        value: breathePercentProgress,
        color: "#ffbf80",
      },
    ];
    setStart(waterOunces);
  };
  const refreshFunctionStretch = () =>{
    console.log("refresh worked");
    activityData = [
      {
        label: "Water",
        value: waterPercentProgress,
        color: "#80bfff",
      },
      {
        label: "Stretch",
        value: stretchPercentProgress,
        color: "#cc99ff",
      },
      {
        label: "Breathe",
        value: breathePercentProgress,
        color: "#ffbf80",
      },
    ];
    setStart(stretchMinutes);
  };
  const refreshFunctionBreathe = () =>{
    console.log("refresh worked");
    activityData = [
      {
        label: "Water",
        value: waterPercentProgress,
        color: "#80bfff",
      },
      {
        label: "Stretch",
        value: stretchPercentProgress,
        color: "#cc99ff",
      },
      {
        label: "Breathe",
        value: breathePercentProgress,
        color: "#ffbf80",
      },
    ];
    setStart(breatheMinutes);
  };

  return (
    <SafeAreaView style={styles.page}>
    <ScrollView>
      <View style={styles.textContainer}>
      <Text style={styles.mainText}>Health Tracking!</Text>
      <Text style={styles.otherText}>
        Check out your Progress & Daily Goals!
      </Text>
      </View>

      <View style={styles.container}>
        <ActivityRings 
        legend={true} 
        theme={"light"}
        data={activityData} 
        config={activityConfig}
        />

        <Text style={styles.otherText}> Click bars below to update daily progress and get detailed information</Text>
        {/* idk if it is intuitive to click the progress bars */}

        <Text style={styles.text}> Water Goal</Text>
        <TouchableOpacity style={styles.button} activeOpacity={0.5} onPress = {() => {navigation.navigate('WaterLine', {refresh: refreshFunctionWater})}}>
        <Progress.Bar progress={waterPercentProgress} color = {"#80bfff"} width={width*0.8} height={height*0.03} borderRadius={9} borderColor={'black'} borderWidth={0.3}/>
        </TouchableOpacity>

        <Text style={styles.text}> Stretch Goal</Text>
        <TouchableOpacity style={styles.button} activeOpacity={0.5} style = {styles.exerciseButton} onPress = {() => {navigation.navigate('StretchLine', {refresh: refreshFunctionStretch})}}>
        <Progress.Bar progress={stretchPercentProgress} color={"#cc99ff"} width={width*0.8} height={height*0.03} borderRadius={9} borderColor={'black'} borderWidth={0.3}/>
        </TouchableOpacity>

        <Text style={styles.text}> Breathe Goal</Text>
        <TouchableOpacity style={styles.button} activeOpacity={0.5} style = {styles.exerciseButton} onPress = {() => {navigation.navigate('BreatheLine', {refresh: refreshFunctionBreathe})}}>
        <Progress.Bar progress={breathePercentProgress} color = {"#ffbf80"}  width={width*0.8} height={height*0.03} borderRadius={9} borderColor={'black'} borderWidth={0.3}/>
        </TouchableOpacity>

        <View style={styles.container2}>
        <TouchableOpacity onPress={showDialog}>
        <Text style={styles.otherText1}>Click here for: What are we tracking and why?</Text>
        </TouchableOpacity>
        <Dialog.Container visible={visible}>
          <Dialog.Title>What and Why Track?</Dialog.Title>
            <Dialog.Description>
            <View style={styles.container1}>
            <Image
            style={styles.tinyLogo}
            source={require('../assets/glassWater.gif')}
            />
             <View style={styles.container3}>
            <Text style={styles.subtitle}>Water</Text>
            <Text style={styles.text1}>
                  The rule of thumb is the 8x8 rule! Try to drink
                  eight 8-ounce glasses of water per day, but feel
                  free to change this quantity to meet your personal goals and/or needs.
            </Text>
            </View>
            </View>

            <View style={styles.container1}>
            <Image
            style={styles.tinyLogo}
            source={require('../assets/stretchGif.gif')}
            />
            <View style={styles.container3}>
            <Text style={styles.subtitle}>Stretch</Text>
            <Text style={styles.text1}>
                Stretch just means MOVE! Staying active is very important 
                for physical health. Dr. Levine says "Sitting is the new smoking"!
                 Try to avoid being inactive for more than 30-60 mins at a time!
            </Text>
            </View>
            </View>

            <View style={styles.container1}>
            <Image
            style={styles.tinyLogo}
            source={require('../assets/breatheGid.gif')}
            />
            <View style={styles.container3}>
            <Text style={styles.subtitle}>Breathe</Text>
            <Text style={styles.text1}>
              Studies show that downtime is essential for mental health. 
              Take time off at least once a day! Rest, Meditate, Go Outside,
               Journal or just take time to do nothing at all!
            </Text>
            </View>
            </View>

            </Dialog.Description>
          <Dialog.Button label="Close" onPress={handleClose} />
        </Dialog.Container>
        </View>

      </View>
      </ScrollView>
    </SafeAreaView>
  );
}


const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

const styles = StyleSheet.create({
  container1: {
      paddingTop: 10,
      flexDirection:'row',
      alignSelf: 'flex-start',
  },

  container2: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  container3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  tinyLogo: {
    width: 55,
    height: 55,
  },

  text1: {
    fontSize: 11,
    alignSelf: 'flex-start',
    textAlign: "center",
    margin: width*0.03,
    textAlign: 'justify'
  },

  subtitle: {
    fontSize: 15,
    textAlign: "center",
    fontStyle: 'italic'
  },

  mainText: {
    fontWeight: "bold",
    fontSize: 45,
    textAlign: "center",
  },

  otherText: {
    opacity: 100,
    fontSize: 15,
    textAlign: "center",
  },

  otherText1: {
    opacity: 100,
    fontSize: 15,
    textAlign: "center",
    paddingTop: 15
  },

  page: {
    backgroundColor: '#faf0e6',
    flex:1,
  },

  text: {
    fontSize: 15,
    margin: height*0.025,
    alignSelf: 'flex-start',
    paddingLeft: 10
  },

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#faf0e6',
    marginBottom: height*0.1,
  },

  textContainer: {
    padding: 10,
    marginTop: 20,
  },

});


export default HealthTrack;
