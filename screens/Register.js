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
import SignIn from './SignIn';

export default function Register() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.sectionContainer} >
      <ImageBackground source={require('../assests/signin.png')} style={styles.sectionimage}>
        <View style={styles.sectionview}>
          <Text style={styles.sectionTitle}>Register</Text>
        </View>
        <View style={styles.form}>
          <Text style={styles.label}>Name</Text>
          <TextInput
            style={styles.input}
            placeholder="Ex: Machlin"
          />
          <Text style={styles.label}>Username</Text>
          <TextInput
            style={styles.input}
            placeholder="Ex: abc@gmail.com"
          />
          <Text style={styles.label}>Password</Text>
          <TextInput
            secureTextEntry={true}
            style={styles.input}
            placeholder="Max 8 characters"
          />
        </View>
        <View style={styles.sectionbutton}>
          <TouchableOpacity onPress={() => navigation.navigate('Hello')} style={styles.button}>
            <Text style={styles.buttonText}>Register</Text>
          </TouchableOpacity>
          <View style={styles.sectionend}>
            <Text style={styles.endline}>Already have an account?</Text>
            <Text style={styles.link} onPress={() => navigation.navigate('SignIn')}>Sign In</Text>
          </View>
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
    paddingTop: 90,
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
    flex: 1.3
  },
  link: {
    fontSize: 17,
    color: '#07BB9C',
    fontWeight: '900',
    paddingBottom: 20,
    paddingTop: 20,
    letterSpacing: 1,
    flex: 0.5
  }
});