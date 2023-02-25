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
  } from 'react-native';
  import { useNavigation } from '@react-navigation/native';

  export default function Cycle(){
    const navigation = useNavigation();
    return (
      <SafeAreaView style= {styles.sectionContainer} >
        <ImageBackground source={require('../assests/background.png')} style ={styles.sectionimage}>
        <Text style={styles.sectioncode}>Do you have any reproductive health disorders (endometriosis
PCOS,etc)?</Text>
        <View style ={styles.sectionbutton}>
        <TouchableOpacity  onPress={() => navigation.navigate('Loading')} style={styles.button}>
        <Text style={styles.buttonText}>Yes</Text>
      </TouchableOpacity>
      </View>
      <View style ={styles.sectionbutton}>
      <TouchableOpacity  onPress={() => navigation.navigate('Loading')} style={styles.button}>
        <Text style={styles.buttonText}>No</Text>
      </TouchableOpacity>
      </View>
      <View style ={styles.sectionbutton}>
      <TouchableOpacity  onPress={() => navigation.navigate('Loading')} style={styles.button}>
        <Text style={styles.buttonText}>No, but I used to</Text>
      </TouchableOpacity>
      </View>
      <View style ={styles.sectionbutton}>
      <TouchableOpacity  onPress={() => navigation.navigate('Loading')} style={styles.button}>
        <Text style={styles.buttonText}>i don't know</Text>
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
    flex:1,
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
   sectionend: {
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