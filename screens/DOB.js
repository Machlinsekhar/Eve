import React, { useState } from 'react';
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

export default function DOB() {
  const navigation = useNavigation();
  function onSubmit() {
    const formData = new FormData();
    formData.append('date', date);

    console.log("Test main")
    // axios
    //   .post('http://172.22.58.1:5000/signup', formData)
    //   .then(resp => {
    //     console.log(resp.data);
    //   })
    //   .catch(error => console.err(error));
    fetch(APIs.setEntries, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      credentials: "include", // include, *same-origin, omit
      headers: {
        "Content-Type": "multipart/form-data",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: "follow", // manual, *follow, error
      body: formData, // body data type must match "Content-Type" header
    }).then((res) => {
      return res.text()
    }).then((response) => {
      console.log(response)
    });
    navigation.navigate('Cycle')
  }
  const [date, setDate] = useState(new Date());
  return (
    <SafeAreaView style={styles.sectionContainer} >
      <ImageBackground source={require('../assests/background.png')} style={styles.sectionimage}>
        <Text style={styles.sectiontitle}>What year were you born?</Text>
        <Text style={styles.sectioncode}>Enter your {'\n'} Date of birth</Text>
        <View style={styles.form}>

          <TextInput
            style={styles.input}
            placeholder="Ex: DD-MM-YYYY"
          />

        </View>

        <View style={styles.sectionbutton}>
          <TouchableOpacity onPress={onSubmit} style={styles.button}>
            <Text style={styles.buttonText}>Continue</Text>
          </TouchableOpacity>
        </View>

        <TextInput></TextInput>

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
  sectiontitle: {
    fontSize: 21,
    color: '#0F2F5B',
    textAlign: 'center',
    fontWeight: '700',
    paddingBottom: 20,
    paddingTop: 220,
    letterSpacing: 1.25
  },
  sectioncode: {
    fontSize: 21,
    color: '#0F2F5B',
    textAlign: 'center',
    fontWeight: '700',
    paddingBottom: 20,
    paddingTop: 30,
    letterSpacing: 1.25
  },

  sectionview: {
    paddingBottom: 20,
  },

  form: {
    paddingHorizontal: 20,
  },

  input: {
    backgroundColor: `#c0d1da`,
    borderRadius: 6,
    width: 360,
    marginBottom: 15,
    borderColor: "#BEDCE6",
    borderWidth: 2,
    fontSize: 17,
    paddingHorizontal: 20,
  },

  label: {
    color: '#0F2F5B',
    fontWeight: '600',
    fontSize: 20,
    paddingTop: 10,
    paddingBottom: 10
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