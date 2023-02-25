import React, { useState }  from 'react';
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
  import DatePicker from 'react-native-date-picker'
  
  export default function DOB(){
    const navigation = useNavigation();
    const [date, setDate] = useState(new Date());
    return (
      <SafeAreaView style= {styles.sectionContainer} >
        <ImageBackground source={require('../assests/background.png')} style ={styles.sectionimage}>
        <Text style={styles.sectiontitle}>What year were you born?</Text>
        <Text style={styles.sectioncode}>Enter your {'\n'} Date of birth</Text>
        
        <View style ={styles.sectionbutton}>
        <TouchableOpacity  onPress={() => navigation.navigate('Cycle')} style={styles.button}>
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
    flex:1,
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