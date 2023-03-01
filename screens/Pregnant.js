import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  Alert,
  TextInput,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { APIs } from '../config/APIs';

export default function Pregnant() {
  const navigation = useNavigation();
  function NO() {
    console.log("Test main")
    axios.post(APIs.setEntries, {
      value: 'No'
    })
      .then(function (response) {
        console.log(response);

      })
      .catch(function (error) {
        console.log(error);
      });
    navigation.navigate('DOB')
  }
  function Yes() {
    console.log("Test main")
    axios.post(APIs.setEntries, {
      value: 'Yes'
    })
      .then(function (response) {
        console.log(response);

      })
      .catch(function (error) {
        console.log(error);
      });
    navigation.navigate('DOB')
  }
  function NObut() {
    console.log("Test main")
    axios.post(APIs.getEntries, {
      value: 'No but yes i want to'
    })
      .then(function (response) {
        console.log(response);

      })
      .catch(function (error) {
        console.log(error);
      });
    navigation.navigate('DOB')
  }
  return (
    <SafeAreaView style={styles.sectionContainer} >
      <ImageBackground source={require('../assests/background.png')} style={styles.sectionimage}>
        <Text style={styles.sectioncode}>Are you pregnant?</Text>
        <View style={styles.sectionbutton}>
          <TouchableOpacity onPress={NO} style={styles.button}>
            <Text style={styles.buttonText}>No, I’m just here to understand my body better</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.sectionbutton}>
          <TouchableOpacity onPress={NObut} style={styles.button}>
            <Text style={styles.buttonText}>No, but i want to be</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.sectionbutton}>
          <TouchableOpacity onPress={Yes} style={styles.button}>
            <Text style={styles.buttonText}>Yes, I am</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </SafeAreaView>

  );

};

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    backgroundColor: '#BEDCE6'

  },
  sectionimage: {
    flex: 1,
  },
  sectionTitle: {
    fontSize: 50,
    fontWeight: '900',
    color: `#008080`,
    fontStyle: 'italic',
    textAlign: 'center',
  },
  sectioncode: {
    fontSize: 21,
    color: '#0F2F5B',
    textAlign: 'center',
    fontWeight: '700',
    paddingBottom: 20,
    paddingTop: 220,
    letterSpacing: 1.25
  },

  sectionview: {
    paddingBottom: 20,
  },

  form: {
    paddingHorizontal: 20,
  },

  input: {
    backgroundColor: `#add8e6`,
    borderRadius: 20,
    width: 300,
    marginBottom: 15,
    borderColor: "#368BC1",
    borderWidth: 2,
    fontSize: 17,
    paddingHorizontal: 20,
    // fontWeight: 200,
  },

  label: {
    color: '#008080',
    fontWeight: '600',
    fontSize: 20
  },

  sectionbutton: {
    alignItems: "center"

  },

  button: {
    backgroundColor: '#6359A6',
    borderRadius: 6,
    width: 360,
    height: 45,
    marginTop: 25,

  },

  buttonText: {
    textAlign: 'center',
    fontSize: 15,
    color: '#ffffff',
    paddingTop: 10,
    fontWeight: '600'
  },

});