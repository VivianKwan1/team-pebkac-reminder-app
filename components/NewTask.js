import React, {useState} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button, Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-navigation';


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

  

  const navigation = useNavigation();

  return (
    

    <View >
       
        <View style={styles.circular}></View>

        <View style={styles.circular}></View>

        <SafeAreaView>
          <Text style = {styles.startText}>Starts</Text>
        </SafeAreaView>

        <SafeAreaView>
          <Text style = {styles.endText}>Ends</Text>
        </SafeAreaView>

        <View style = {styles.dateBox}>
          <Button  onPress={showDatepicker} title="Date" />
        </View>
       
        <View style = {styles.dateBox1}>
         <Button  onPress={showDatepicker} title="Date" />
        </View>

        <View style = {styles.timeBox}>
          <Button onPress={showTimepicker} title="Time" />
        </View>

        <View style = {styles.timeBox1}>
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
    top: -250,
    left:130,
    position: "absolute",
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    marginLeft:20,
    marginRight:20,
    marginTop:30,
  },
  dateBox1: {
    backgroundColor: '#fff',
    top: -300,
    left:130,
    position: "absolute",
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    marginLeft:20,
    marginRight:20,
    marginTop:30,
  },
  timeBox:{
    backgroundColor: '#fff',
    paddingLeft: 10,
    paddingRight: 10,
    top: -250,
    left: 215,
    position: "absolute",
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    marginLeft:20,
    marginRight:20,
    marginTop:30,
  },
  timeBox1:{
    backgroundColor: '#fff',
    paddingLeft: 10,
    paddingRight: 10,
    top: -300,
    left: 215,
    position: "absolute",
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    marginLeft:20,
    marginRight:20,
    marginTop:30,
  },
  dateTimeBox:{
    backgroundColor: '#fff',
    paddingLeft: 10,
    paddingRight: 10,
    top: -300,
    left: 300,
    borderRadius: 10,
    position: "absolute",
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft:20,
    marginRight:20,
    marginTop:30,
    width: 80,
  },
  dateTimeBox1:{
    backgroundColor: '#fff',
    paddingLeft: 10,
    paddingRight: 10,
    top:-410,
    left: 300,
    borderRadius: 10,
    position: "absolute",
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft:20,
    marginRight:20,
    marginTop:30,
    width: 80,
  },
  startText:{
    fontSize: 20,
    fontWeight: 'bold',
    top: -300,
    left: 80,
    color: '#fff',
    marginTop: 35,
  },
  endText: {
    fontSize: 20,
    fontWeight: 'bold',
    top: -340,
    left: 80,
    color: '#fff',
    marginTop: 35,
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
