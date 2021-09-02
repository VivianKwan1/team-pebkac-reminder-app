import React from 'react';
import { TouchableOpacity, Dimensions } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import {
  Button,
  SafeAreaView,
  Text,
  StyleSheet,
  Pressable,
  View,
} from 'react-native';
import TaskCategory from './TaskCategory';
import FirstPage from './FirstPage';
import { useNavigation } from '@react-navigation/native';
import firebase from 'firebase';
import { ScrollView } from 'react-native';
import NewTask from '../components/NewTask';
import { Image } from 'react-native';

function GroupTasksScreen(props) {
  const navigation = useNavigation();
  const labels = ['Work', 'Personal', 'School', 'Social'];

  // const dailyLabels = ["Yesterday", "Today", "Tomorrow"];
  // const dailyButtons = dailyLabels.map(function (dailyLabels) {
  //   return (
  //     <TouchableOpacity style={styles.button} activeOpacity={0.5}>
  //       <Text style={styles.text}>{dailyLabels}</Text>
  //     </TouchableOpacity>
  //   );
  // });

  const userId = firebase.auth().currentUser.uid;
  const name = firebase.auth().currentUser.displayName;

  // addTempData = () => {
  //   const tempTask = {
  //     task1: {
  //       date: "date created",
  //       done: true,
  //       label1: false,
  //     },
  //   };
  //   firebase
  //     .database()
  //     .ref("users/" + userId + "/tasks")
  //     .update(tempTask);
  // };

  var taskNum = 0;
  const getTaskNum = firebase
    .database()
    .ref('users/' + userId + '/tasks')
    .on('value', (tasks) => {
      taskNum = tasks.numChildren();
      if (!taskNum) {
        taskNum = 0;
      }
      console.log(tasks.numChildren());
      console.log(taskNum);
    });

  let labeledTasks = {
    personal: [],
    work: [],
    school: [],
    social: [],
  };
  firebase
    .database()
    .ref('users/' + userId + '/tasks')
    .once('value', (tasks) => {
      // console.log(tasks);
      tasks.forEach((childTask) => {
        if (
          childTask.child('labels').child('personal').toJSON().toString() ===
          'true'
        ) {
          labeledTasks['personal'].push(childTask);
        } else if (
          childTask.child('labels').child('work').toJSON().toString() === 'true'
        ) {
          labeledTasks['work'].push(childTask);
        } else if (
          childTask.child('labels').child('school').toJSON().toString() ===
          'true'
        ) {
          labeledTasks['school'].push(childTask);
        } else if (
          childTask.child('labels').child('social').toJSON().toString() ===
          'true'
        ) {
          labeledTasks['social'].push(childTask);
        }
      });
      console.log(labeledTasks);
    });

  const labelbuttons = labels.map(function (labels) {
    return (
      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.5}
        onPress={() =>
          navigation.navigate('TaskScreen', {
            labelName: labels,
            tasks: labeledTasks[labels],
          })
        }
      >
        <Text style={styles.text}>{labels}</Text>
      </TouchableOpacity>
    );
  });
  return (
    <ScrollView style = {styles.mainContainer}>
      <SafeAreaView style={styles.mainContainer}>
      <Image source={require('../assets/image.png')} style = {styles.backImage}/>
        <View style={styles.textContainer}>
          <Text style={styles.mainText}>Hello {name}!</Text>
          <Text style={styles.otherText}>
            You are not very busy today are you?
          </Text>
          <Text style={styles.otherText}>
            You have {taskNum} tasks for today.
          </Text>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            activeOpacity={0.5}
            onPress={() => navigation.navigate('TaskCategory')}
          >
            <Text style={styles.text}>All Tasks</Text>
          </TouchableOpacity>

          {labelbuttons}

          <TouchableOpacity
            style={styles.plusButton}
            activeOpacity={0.5}
            onPress={() => navigation.navigate('NewTaskScreen')}
          >
            <Text style={styles.plusText}>+</Text>
          </TouchableOpacity>
        </View>

        {/* <Text style={styles.dailyTaskText}>Daily Tasks</Text>

        <View style={styles.dailyButtonContainer}>{dailyButtons}</View>

        <TouchableOpacity onPress={() => this.addTempData()}>
          <Text>addtemptask</Text>
        </TouchableOpacity> */}
      </SafeAreaView>
    </ScrollView>
  );
}

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#faf0e6',
  },
  button: {
    backgroundColor: '#406c34',
    borderRadius: 10,
    margin: 30,
    width: 100,
    height: 100,
    justifyContent: 'center',
  },

  plusButton: {
    backgroundColor: '#faf0e6',
    borderRadius: 10,
    margin: 30,
    width: 100,
    height: 100,
    justifyContent: 'center',
    borderColor: 'black',
    borderWidth: 1,
  },

  plusText: {
    color: 'black',
    textAlign: 'center',
    fontSize: 30,
  },

  text: {
    color: 'white',
    textAlign: 'center',
  },

  mainText: {
    fontWeight: 'bold',
    fontSize: 50,
    textAlign: 'center',
  },

  otherText: {
    opacity: 100,
    fontSize: 15,
    textAlign: 'center',
  },

  buttonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },

  dailyButtonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    paddingLeft: 50,
  },

  textContainer: {
    padding: 10,
    marginTop: 20,
  },

  dailyTaskText: {
    fontWeight: 'bold',
    fontSize: 30,
    paddingLeft: 10,
  },
  signButton: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 18,
    elevation: 3,
    backgroundColor: '#8A873B',
    marginBottom: 15,
    borderRadius: 10,
    marginTop: 30,
  },
  backImage: {
    width: '100%', height: '125%', flex: 1, resizeMode: 'contain',
    position:'absolute',
    alignContent:'center',
    marginTop: height*0.30,
    marginHorizontal: 0,
    opacity: .3
  },
});

export default GroupTasksScreen;
