import React, {useState} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button, Platform,Switch } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useNavigation } from '@react-navigation/native';
import GroupTasksScreen from '../screens/GroupTasksScreen';


const NewTask = (props) => {
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);

  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
   
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const navigation = useNavigation();

  return (
    

    <View >
       
        <View style={styles.circular}></View>

        <View style={styles.circular}></View>


        <View style = {styles.dateBox}>
       

          <Button  onPress={showDatepicker} title="Date" />
        </View>

        <View style = {styles.timeBox}>
          <Button onPress={showTimepicker} title="Time" />
        </View>
        {show && (
          <DateTimePicker
          style = {styles.dateTimeBox}
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
        
        )}
<Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
      
    </View>
  )
}

const styles = StyleSheet.create({
  
  itemLeft:{
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap'

  },

  itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap'
  },
  square: {
    width: 24,
    height: 24,
    backgroundColor: '#fff',
    opacity: 0.8,
    borderRadius: 5,
    marginRight: 15,
  },
  itemText: {
    maxWidth: '80%',
  },
  text: {
   color:'#fff', 

  },
  dateBox: {
    backgroundColor: '#fff',
    top: 200,
    position: "absolute",
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    marginLeft:20,
    marginRight:20,
    marginTop:20,
  },
  timeBox:{
    backgroundColor: '#fff',
    paddingLeft: 10,
    paddingRight: 10,
    top: 200,
    left: 100,
    position: "absolute",
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    marginLeft:20,
    marginRight:20,
    marginTop:20,
  },
  dateTimeBox:{
    backgroundColor: '#fff',
    // padding: 40,
    top: 200,
    left: 200,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    marginLeft:20,
    marginRight:20,
    marginTop:20,
    width: 80,
  },
//   circular: {
//     width: 12,
//     height: 12,
//     borderColor: '#fff',
//     borderWidth: 2,
//     borderRadius: 5,
//   },
});

export default NewTask;