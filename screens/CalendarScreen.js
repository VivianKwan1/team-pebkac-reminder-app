import React, { useState } from 'react';
import { ReactNative, TextInput } from 'react-native';
import { ScrollView, CheckBox, Button, Modal, Pressable, TouchableOpacity, View, Dimensions, SafeAreaView, Text, StyleSheet } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import { Icon } from 'react-native-elements';
import DropDownPicker from 'react-native-dropdown-picker';
import firebase from 'firebase';

function CalendarScreen({ navigation }) {

    const [isModalVisible, setModalVisible] = useState(false);

    const toggleModalVisibility = () => {
        setModalVisible(!isModalVisible);
    };

    const [isSelected, setSelection] = useState(false);

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
    ]); //replace with labels, how order? a-z? how is it sorted in the edit task screen?

    const filter = () => {
    }

    return (
        <SafeAreaView style={styles.bgColor}>
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
            <Calendar />
            <Modal animationType="slide"
                transparent visible={isModalVisible}
                presentationStyle="overFullScreen"
                onDismiss={() => toggleModalVisibility}>
                <View style={styles.viewWrapper}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>
                            Filter Labels
                        </Text>
                        {/* <ScrollView style={styles.checkboxContainer}>
                            <View style={styles.checkboxRow}>
                                <CheckBox
                                    value={isSelected}
                                    onValueChange={setSelection}
                                    style={styles.checkbox}
                                />
                                <Icon name='circle' size={20}
                                    type='material-community' color='blue' style = {styles.checkboxIcons}/>
                                <Text style={styles.label}>School</Text>
                            </View>
                            <View style={styles.checkboxRow}>

                                <CheckBox
                                    value={isSelected}
                                    onValueChange={setSelection}
                                    style={styles.checkbox}
                                />
                                <Icon name='circle' size={20}
                type='material-community' color='green' style = {styles.checkboxIcons}/>
                                <Text style={styles.label}>Social</Text>
                            </View>
                            <View style={styles.checkboxRow}>

                                <CheckBox
                                    value={isSelected}
                                    onValueChange={setSelection}
                                    style={styles.checkbox}
                                />
                                <Icon name='circle' size={20}
                type='material-community' color='purple' style = {styles.checkboxIcons}/>
                                <Text style={styles.label}>Work</Text>
                            </View>
                            <View style={styles.checkboxRow}>
                                <CheckBox
                                    value={isSelected}
                                    onValueChange={setSelection}
                                    style={styles.checkbox}
                                />
                                <Icon name='circle' size={20}
                type='material-community' color='red' style = {styles.checkboxIcons}/>
                                <Text style={styles.label}>idk what else</Text>
                            </View>
                        </ScrollView> */}
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
    accountInput: {
        margin: 12,
        borderWidth: 1,
    },

    accountText: {
        margin: 5,
        fontWeight: 'bold',
    },
    bgColor: {
        backgroundColor: '#709C6C'
    },
    filterButton: {
        marginBottom: 10,
        marginHorizontal: width * 0.05,
        paddingTop: 20,
        paddingBottom: 10,
        borderColor: "white",
        alignItems: "stretch",
        alignContent: 'flex-end'
    },

    view: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: 'flex-end',

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
    modalText: {
        fontSize: 15,
        fontWeight: "bold",
        marginBottom: 15,
        padding: 10,
    },
    screen: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fff",
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
    labelFilter: {
        paddingHorizontal: 20,
        flexDirection: "row",
    },
    dropdown: {
        borderWidth: 1,
        borderColor: 'grey'
    },
    dropdown2: {
        flex: 0.8,
        paddingLeft: 10
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
    }
})

export default CalendarScreen;