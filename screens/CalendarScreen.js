import React , {useState} from 'react';
import { ReactNative, TextInput } from 'react-native';
import { Button, Pressable, Modal, SafeAreaView, Text, StyleSheet, Dimensions, Image, View, TouchableOpacity } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import CalendarStrip from 'react-native-calendar-strip';
import { Icon } from 'react-native-elements';
import { render } from 'react-dom';
import CalendarTask from '../components/CalendarTask';
import DropDownPicker from 'react-native-dropdown-picker';


function CalendarScreen({ navigation }) {
    const [isModalVisible, setModalVisible] = useState(false);

    const toggleModalVisibility = () => {
        setModalVisible(!isModalVisible);
    };
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState([]);
    const [items, setItems] = useState([
        {
            label: 'Work', value: 'work',
            icon: () => <Icon name='circle' size={20}
                type='material-community' color='purple' />
        }, //set colors to the labels color
        {
            label: 'School', value: 'school',
            icon: () => <Icon name='circle' size={20}
                type='material-community' color='blue' />
        },
        {
            label: 'Social', value: 'social',
            icon: () => <Icon name='circle' size={20}
                type='material-community' color='green' />
        }
    ]);
    const [selectedDate,setSelectedDate] = useState(["No date selected"]);
    const [taskList,setTaskList] = useState([]);
    const [start,setStart] = useState();

    const pressed = () => {
        
    }

    const filter = () => {
        toggleModalVisibility();
    }

    const clickHandler = (date) => {
        var strDate = date.toISOString();
        var newDate = strDate.substring(0,10);
        var converted = convertDate(newDate);
        setSelectedDate(converted);
        console.log(selectedDate);
        var tempTasks = [];
        for(x in Tasks){
            if(converted == Tasks[x].Date){
                tempTasks.push(Tasks[x].Task);
            }
        }
        if(tempTasks.length==0){
            tempTasks = ["No tasks, just relax!"];
        }
        setTaskList(tempTasks);
        setStart(date);
    }

    var Tasks = [
        {
            Task: 'Walk the dog',
            Label: '#BFD0CA',
            Date: '08/26/2021',
            Time: '8:00 AM',
        },
        {
            Task: 'Midterm Paper',
            Label: '#FF0000',
            Date: '08/28/2021',
            Time: '8:00 AM',
        },
        {
            Task: 'Call Grandma',
            Label: '#0F4C81',
            Date: '08/28/2021',
            Time: '8:00 AM',
        },
        {
            Task: 'Party Hard',
            Label: '#84ad75',
            Date: '08/28/2021',
            Time: '9:00 PM',
        },
        {
            Task: 'Throw trash out',
            Label: '#84ad75',
            Date: '08/27/2021',
            Time: '8:00 AM',
        },

    ];

    var markedDatesArray = [];

    function setMarkedDatesArray(){
        if(Tasks === []){
            return [];
        }
        else{
            for(x in Tasks){

                var temp = {
                                date: Tasks[x].Date,
                                dots: [
                                      {
                                      color: Tasks[x].Label
                                      }
                                      ]
                            };

                markedDatesArray.push(temp);
            }
        }
    }

    function combineLabels(){
        var date = [];
        var tags = [];
        //for each task, find out if there is another task with the same day. Tag/Day is pushed to tags if there are.
        for(x in Tasks){
            if(date.includes(Tasks[x].Date)){
                tags.push([Tasks[x].Label,Tasks[x].Date]);
            }else{
                date.push(Tasks[x].Date);
            }
        }
        //for each task with the same day, adjust the tag in the colors array.
        for(i in tags){
            for(j in markedDatesArray){
                if(markedDatesArray[j].date == tags[i][1]){

                    if(markedDatesArray[j].dots[0].color == tags[i][0]){
                        continue;
                    }else{
                        markedDatesArray[j].dots.push({color: tags[i][0]});
                    }
                }
            }
        }
    }

    function convertDate(day){
        var toReturn = '';
        toReturn += day.substring(5,7);
        toReturn+="/";
        toReturn += day.substring(8);
        toReturn+="/";
        toReturn += day.substring(0,4);
        return toReturn;
    }

    setMarkedDatesArray();
    combineLabels();


    return (
        <SafeAreaView style = {styles.mainContainer}>
            <View style = {styles.bgColor}>
            <TouchableOpacity style={styles.filterButton}>
                <View style={styles.view}>
                    <Icon
                        name='tune'
                        type='material-community'
                        color='white'
                        size={30}
                        style={styles.icon}
                        onPress={() => toggleModalVisibility()} />
                </View>
            </TouchableOpacity>
            </View>
                <CalendarStrip
                scrollable
                daySelectionAnimation={{type: 'border', duration: 200, borderWidth: 1, borderHighlightColor: 'white'}}
                style={{height:75, paddingTop: 10, paddingBottom: 0}}
                calendarColor={'#faf0e6'}
                calendarHeaderStyle={{color: 'black'}}
                dateNumberStyle={{color: 'black'}}
                dateNameStyle={{color: 'black'}}
                iconContainer={{flex: 0.1}}
                markedDates = {markedDatesArray}
                onDateSelected={clickHandler}
                />
                <Text style = {styles.header}>{selectedDate}</Text>
                <View style={styles.items}>
                    {
                    taskList.map((item, index) => {
                    return (
                        <TouchableOpacity key={index}  onPress={() => pressed}>
                            <CalendarTask text={item} /> 
                        </TouchableOpacity>
                        )
                    })
                    }
                </View>
                <Modal animationType="slide"
                transparent visible={isModalVisible}
                presentationStyle="overFullScreen"
                onDismiss={() => toggleModalVisibility}>
                <View style={styles.viewWrapper}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>
                            Filter Labels
                        </Text>
                        <SafeAreaView style={styles.labelFilter}>
                            <SafeAreaView style={styles.dropdown2}>
                                <DropDownPicker
                                    arrow
                                    open={open}
                                    value={value}
                                    items={items}
                                    setOpen={setOpen}
                                    setValue={setValue}
                                    setItems={setItems}
                                    placeholder="Select labels"
                                    multiple={true}
                                    min={0}
                                    max={5} //replace with the number of labels they have -1
                                    maxHeight={120}
                                    dropDownDirection="AUTO"
                                    style={styles.dropdown}
                                    placeholderStyle={{ color: "grey" }}
                                    dropDownContainerStyle ={{borderColor: "grey"}} />
                            </SafeAreaView>
                        </SafeAreaView>
                        <View style={styles.buttonContainer}>
                            <Pressable onPress={() => setModalVisible(!isModalVisible)} style={[styles.buttons, styles.cancelButton]}>
                                <Text>Cancel</Text>
                            </Pressable>
                            <Pressable onPress={() => filter()} style={[styles.buttons, styles.applyButton]}>
                                <Text>Apply</Text>
                            </Pressable>
                        </View>
                    </View>
                </View>
            </Modal>
        </SafeAreaView>
    );
}

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: "#faf0e6",
    },
    accountInput: {
        margin: 12,
        borderWidth: 1,
    },
    header: {
        fontSize: 20,
        textAlign: 'center',
        marginTop: 15,
    },
    accountText: {
        margin: 5,
        fontWeight: 'bold',
    },  
    backImage: {
        width: '100%', height: '100%', flex: 1, resizeMode: 'stretch',
        position:'absolute',
        alignContent:'center',
        marginTop: height*0.10,
        marginHorizontal: 0,
        opacity: .3
      },
      items: {
        marginTop: 30,
      },
    bgColor: {
        backgroundColor: '#709C6C'
    },
      filterButton: {
        marginBottom: 10,
        marginHorizontal: width * 0.05,
        paddingTop: 18,
        paddingBottom: 8,
        borderColor: "white",
        alignItems: "stretch",
        alignContent: 'flex-end'
    },
    view: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: 'flex-end',
    },
    viewWrapper: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgba(0, 0, 0, 0.2)",
    },
    modalView: {
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        top: "45%",
        left: "50%",
        elevation: 5,
        transform: [{ translateX: -(width * 0.4) },
        { translateY: -90 }],
        width: width * 0.8,
        backgroundColor: "#fff",
        borderRadius: 7,
        paddingVertical: 20,
    },
    modalText: {
        fontSize: 15,
        fontWeight: "bold",
        marginBottom: 15,
        padding: 10,
    },
    labelFilter: {
        paddingHorizontal: 20,
        flexDirection: "row",
    },
    dropdown: {
        borderWidth: 1,
        borderColor: 'grey'
    },
    dropdown2: {
        flex: 0.8
    },
    labelsText: {
        paddingTop: 13,
    },
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    checkboxContainer: {
        flexDirection: "column",
    },
    checkboxRow: {
        flexDirection: "row",
    },
    checkbox: {
        alignSelf: "center",
    },
    label: {
        // margin: 8,
        paddingTop: 6,
        paddingLeft: 5
    },
    checkboxIcons: {
        marginTop: 6,
        // marginRight
    },
    buttonContainer: {
        flexDirection: 'row',
        paddingTop: 20
    },
    buttons: {
        margin: 15,
        backgroundColor: '#709C6C',
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 18,
        paddingVertical: 8,
        borderRadius: 5
    },
    confirmButton: {
        backgroundColor: '#80bc8c',
    },
    cancelButton: {
        backgroundColor: '#feaeae',
    },
    screen: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fff",
    },
})

export default CalendarScreen;