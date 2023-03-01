import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
  TextInput,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Home from './Home';
import { ImageBackground } from 'react-native';
import { APIs } from '../config/APIs';

export default function SignIn() {
  const navigation = useNavigation();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [name, setName] = useState();

  function handleUsernameChange(text) {
    setUsername(text)
  }

  function handlePasswordChange(text) {
    setPassword(text);
  }
  
  function handleNameChange(text) {
    setName(text);
  }

  function onSubmit() {
    // const formData = new FormData();
    // formData.append('name', name);
    // formData.append('password', password);
    // formData.append('username', username);
    // console.log("Test main")
    // axios
    //   .post('http://172.22.58.1:5000/signup', formData)
    //   .then(resp => {
    //     console.log(resp.data);
    //   })
    //   .catch(error => console.err(error));
    // navigation.navigate('Register')
  }

  useEffect(() => {
    console.log("axios  ", axios)
    axios.get('http://172.22.58.1:5000/get-entries').then(resp => {
        console.log(resp.data);
      })
      .catch(error => console.err(error));
      console.log("hola");
  }, [])

  return (
    <SafeAreaView style={styles.sectionContainer}>
      <ImageBackground
        source={require('../assests/signin.png')}
        style={styles.sectionimage}>
        <View style={styles.sectionview}>
          <Text style={styles.sectionTitle}>Welcome Back !</Text>
          {/* <Text style= {styles.sectioncode}>Sign In</Text> */}
        </View>
        <View style={styles.form}>
          <Text style={styles.label}>Username</Text>
          <TextInput
            style={styles.input}
            placeholder="Ex: abc@gmail.com"
            onChangeText={handleUsernameChange}
          />
          <Text style={styles.label}>Name</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your name"
            onChangeText={handlePasswordChange}
          />
          <Text style={styles.label}>Password</Text>
          <TextInput
            secureTextEntry={true}
            style={styles.input}
            placeholder="Max 8 characters"
            onChangeText={handlePasswordChange}
          />
        </View>
        <View style={styles.sectionbutton}>
          <TouchableOpacity
            onPress={onSubmit}
            style={styles.button}>
            <Text style={styles.buttonText}>Sign In</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.sectionend}>
          <Text style={styles.endline}>Don't have an account?</Text>
          <Text
            style={styles.link}
            onPress={onSubmit}>
            Register
          </Text>
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
    fontSize: 45,
    fontWeight: '900',
    color: `#0F2F5B`,
    fontStyle: 'italic',
    textAlign: 'center',
    paddingTop: 180,
    paddingBottom: 30,
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
  sectionend: {
    flexDirection: "row"
  },
  endline: {
    fontSize: 17,
    color: '#0F2F5B',
    textAlign: 'center',
    fontWeight: '800',
    paddingBottom: 20,
    paddingTop: 20,
    letterSpacing: 1,
    flex: 1.2
  },
  link: {
    fontSize: 17,
    color: '#07BB9C',
    fontWeight: '900',
    paddingBottom: 20,
    paddingTop: 20,
    letterSpacing: 1,
    flex: 0.5
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
    // fontWeight: 200,
  },

  label: {
    color: '#0F2F5B',
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
    fontSize: 20,
    color: '#ffffff',
    paddingTop: 10,
    fontWeight: '600'
  },

});