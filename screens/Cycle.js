import React from 'react';
import InputSpinner from "react-native-input-spinner";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  Alert,
  TextInput,
  Pressable
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { APIs } from '../config/APIs';
import Utils from '../utils/Utils';

export default function Cycle() {
  const navigation = useNavigation();
  function NO() {
    console.log("Test main")
    axios.post(APIs.setEntries, {
      value: 'Got no clue'
    })
      .then(function (response) {
        console.log(response);

      })
      .catch(function (error) {
        console.log(error);
      });
    
  }
  function Reg() {
    console.log("Test main")
    axios.post(APIs.setEntries, {
      value: 'My cycle is regular'
    })
      .then(function (response) {
        console.log(response);

      })
      .catch(function (error) {
        console.log(error);
      });
    
  }
  function Irreg() {
    console.log("Test main")
    Utils.get(APIs.getEntries)
      .then(function (response) {
        if (response.status >= 400 && response.status < 500) {
          navigation.navigate('Start');
          return;
        }
        if (response.status >= 200 && response.status < 300) {
          navigation.navigate('Info');
        }
      })
      .catch(function (error) {
        console.log(error);
      });
    
  }
  function onSubmit() {
    // const formData = new FormData();
    // formData.append('date', date);

    // console.log("Test main")
    // // axios
    // //   .post('http://172.22.58.1:5000/signup', formData)
    // //   .then(resp => {
    // //     console.log(resp.data);
    // //   })
    // //   .catch(error => console.err(error));
    // fetch(APIs.setEntries, {
    //   method: "POST", // *GET, POST, PUT, DELETE, etc.
    //   mode: "cors", // no-cors, *cors, same-origin
    //   credentials: "include", // include, *same-origin, omit
    //   headers: {
    //     "Content-Type": "multipart/form-data",
    //     // 'Content-Type': 'application/x-www-form-urlencoded',
    //   },
    //   redirect: "follow", // manual, *follow, error
    //   body: formData, // body data type must match "Content-Type" header
    // }).then((res) => {
    //   return res.text()
    // }).then((response) => {
    //   console.log(response)

    // });
    navigation.navigate('PCOS')
  }

  return (
    <SafeAreaView style={styles.sectionContainer} >
      <ImageBackground source={require('../assests/background.png')} style={styles.sectionimage}>
        <Text style={styles.sectioncode}>Is your menstrual cycle regular
          (varies by no more than 7 days)?</Text>
        <View style={styles.sectionbutton}>
        <Pressable onPress={Reg} style={({ pressed }) => [{ backgroundColor: pressed ? 'black' : '#6359A6' },styles.button]}>
          <Text style={styles.buttonText}>My cycle is regular</Text>
          </Pressable>
        </View>
        <View style={styles.sectionbutton}>
          <Pressable onPress={Irreg} style={({ pressed }) => [{ backgroundColor: pressed ? 'black' : '#6359A6' },styles.button]}>
            <Text style={styles.buttonText}>My cycle is irregular</Text>
          </Pressable>
        </View>
        <View style={styles.sectionbutton}>
          <Pressable onPress={NO} style={({ pressed }) => [{ backgroundColor: pressed ? 'black' : '#6359A6' },styles.button]}>
            <Text style={styles.buttonText}>Got no clue</Text>
          </Pressable>
        </View>
        <Text style={styles.sectionend}>Wt's your cycle length?</Text>
        <View style={styles.form}>

          <TextInput
            style={styles.input}
            placeholder="Any length works 😉"
          />
          <View style={styles.sectionbutton}>
            <TouchableOpacity onPress={onSubmit} style={styles.button}>
              <Text style={styles.buttonText}>Continue</Text>
            </TouchableOpacity>
          </View>
        </View>

      </ImageBackground>
    </SafeAreaView>

  );

};

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    backgroundColor: '#BEDCE6',
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
    paddingTop: 150,
    letterSpacing: 1.25,
  },
  sectionend: {
    fontSize: 21,
    color: '#0F2F5B',
    textAlign: 'center',
    fontWeight: '700',
    paddingBottom: 20,
    paddingTop: 30,
    letterSpacing: 1.25,
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
    borderColor: '#BEDCE6',
    borderWidth: 2,
    fontSize: 17,
    paddingHorizontal: 20,
  },

  label: {
    color: '#008080',
    fontWeight: '600',
    fontSize: 20,
  },

  sectionbutton: {
    alignItems: 'center',
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
    fontWeight: '600',
  },
});