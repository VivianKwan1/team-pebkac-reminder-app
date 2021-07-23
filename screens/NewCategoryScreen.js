import React, { useState } from 'react';
import { TextInput } from 'react-native';
import {SafeAreaView, Text, Pressable, Dimensions, StyleSheet } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

function HealthScreen({ navigation }) {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        { label: 'Work', value: 'work' },
        { label: 'Social', value: 'social' }
    ]);
    return (
        <SafeAreaView>
            <SafeAreaView style={styles.defaultSpacing}>
                <Text style={styles.title}>New Category</Text>
            </SafeAreaView>
            <SafeAreaView style={styles.rectangleShapeView}></SafeAreaView>
            <SafeAreaView style={styles.textBox}>
                {/* allows user to input name for a new category */}
                <Text style={styles.header}>Name</Text>
                <TextInput style={styles.input}></TextInput>
            </SafeAreaView>
            <SafeAreaView style={styles.textBox}>
                <Text style={styles.header}>Category</Text>
                {/* dropdown menu */}
                <SafeAreaView style={styles.dropdown2}>
                    <DropDownPicker
                        open={open}
                        value={value}
                        items={items}
                        setOpen={setOpen}
                        setValue={setValue}
                        setItems={setItems}
                        style={styles.dropdown}
                    />
                </SafeAreaView>
            </SafeAreaView>
            {/* buttons at the bottom */}
            <SafeAreaView style={styles.buttons}>
                <Pressable style={styles.createButton}>
                    <Text style={styles.buttonText}>Create</Text>
                </Pressable>
                <Pressable style={styles.cancelButton}>
                    <Text style={styles.buttonText}>Cancel</Text>
                </Pressable>
            </SafeAreaView>
        </SafeAreaView>
    );
}

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

const styles = StyleSheet.create({
    dropdown2: {
        // also the dropdown because for some reason flex doesnt work on the dropdown
        flex: 0.8,
    },
    dropdown: {
        // the dropdown
        backgroundColor: '#a89463',
        borderWidth: 0
    },
    defaultSpacing: {
        //spacing between different lines 
        marginTop: 50,
        paddingHorizontal: 24
    },
    createButton: {
        // its the create button i dont know what to tell you
        alignItems: 'center',
        justifyContent: 'center',
        height: height * 0.06,
        backgroundColor: '#709c6c',
        marginBottom: height * 0.02,
        marginHorizontal: width * 0.1,
        borderRadius: 15,
        width: width * 0.25,
    },
    cancelButton: {
        // cancel button
        alignItems: 'center',
        justifyContent: 'center',
        height: height * 0.06,
        backgroundColor: '#f35e5e',
        marginBottom: height * 0.02,
        marginHorizontal: width * 0.1,
        borderRadius: 15,
        width: width * 0.25,
    },
    buttonText: {
        // its the text on the button
        fontSize: 20,
        fontWeight: '600',
        color: '#efefef'
    },
    buttons: {
        marginTop: '50%',
        marginBottom: height * 0.05,
        justifyContent: 'center',
        paddingHorizontal: 24,
        flexDirection: "row"
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#709c6c'
    },
    header: {
        // contains name and category 
        fontSize: 28,
        fontWeight: 'bold',
        color: '#709c6c',
        flex: 0.6
    },
    textBox: {
        // text and textbox
        marginTop: 60,
        paddingHorizontal: 24,
        flexDirection: "row"
    },
    rectangleShapeView: {
        // the black rectangle
        marginTop: 8,
        width: width * 0.6,
        height: 4,
        backgroundColor: '#202020', //just a slightly lighter gray than black so it looks nice
    },
    input: {
        // input
        height: 40,
        flex: 1,
        borderRadius: 15,
        backgroundColor: '#a89463'
    },
    headerText: {
        //name and category
        fontSize: 20,
        margin: 0,
        fontWeight: "bold",
        backgroundColor: '#a89463',
        borderRadius: 15
    }
})

export default HealthScreen;