import React from "react";
import { TextInput } from "react-native";
import { Button, SafeAreaView, Text, StyleSheet } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import NewTask from "../components/NewTask";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

function NewTaskScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.sectionTitle}> New Tasks</Text>
      <GooglePlacesAutocomplete
        placeholder="Search"
        minLength={2} // minimum length of text to search
        autoFocus={false}
        returnKeyType={"search"} // Can be left out for default return key https://facebook.github.io/react-native/docs/textinput.html#returnkeytype
        listViewDisplayed="auto" // true/false/undefined
        fetchDetails={true}
        renderDescription={(row) => row.description} // custom description render
        onPress={(data, details = null) => {
          console.log(data);
          console.log(details);
        }}
        getDefaultValue={() => {
          return ""; // text input default value
        }}
        query={{
          // available options: https://developers.google.com/places/web-service/autocomplete
          key: "AIzaSyAOpL4n5ZJvd49hitBFoqJKgeZl9rC00Ws",
          language: "en", // language of the results
          types: "(cities)", // default: 'geocode'
        }}
        styles={{
          description: {
            fontWeight: "bold",
          },
          predefinedPlacesDescription: {
            color: "#1faadb",
          },
        }}
        currentLocation={true} // Will add a 'Current location' button at the top of the predefined places list
        currentLocationLabel="Current location"
        nearbyPlacesAPI="GooglePlacesSearch" // Which API to use: GoogleReverseGeocoding or GooglePlacesSearch
        GoogleReverseGeocodingQuery={
          {
            // available options for GoogleReverseGeocoding API : https://developers.google.com/maps/documentation/geocoding/intro
          }
        }
        GooglePlacesSearchQuery={{
          // available options for GooglePlacesSearch API : https://developers.google.com/places/web-service/search
          rankby: "distance",
          types: "food",
        }}
        filterReverseGeocodingByTypes={[
          "locality",
          "administrative_area_level_3",
        ]} // filter the reverse geocoding results by types - ['locality', 'administrative_area_level_3'] if you want to display only cities
        debounce={200}
      />
      <NewTask></NewTask>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#756EDC",
  },
  accountInput: {
    margin: 12,
    borderWidth: 1,
  },
  sectionTitle: {
    fontSize: 24,
    color: "#fff",
    fontWeight: "bold",
    paddingLeft: 60,
    paddingTop: 30,
  },
  accountText: {
    margin: 5,
    fontWeight: "bold",
  },
});

export default NewTaskScreen;
