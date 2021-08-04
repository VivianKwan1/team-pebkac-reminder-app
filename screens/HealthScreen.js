import React from 'react';
import {Button, TextInput, SafeAreaView, Text, StyleSheet, ScrollView, Pressable, Image, Dimensions, View} from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';


function HealthTrack({navigation}) {
  return (
    <SafeAreaView style={styles.page}>
    <ScrollView>
      <View style={styles.container}>
        <View>
          Health Page!!!
        </View>
      </View>
      </ScrollView>
    </SafeAreaView>
  );
}

// styling for label color, dot size, and area under the plot color
const lineConfig = {
  color: (opacity = 1) => `rgba(255, 178, 102, ${opacity})`,
  width:width*0.8,
  fillShadowGradientOpacity: 1,
  labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
  propsForDots: {
        r: "5",
      },
};


const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

const styles = StyleSheet.create({
  page: {
    backgroundColor: '#FFFFE2'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFE2',
    marginBottom: height*0.1,
  }
});


export default HealthTrack;