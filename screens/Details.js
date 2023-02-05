import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    Alert,
    TextInput,
  } from 'react-native';
  import { useNavigation } from '@react-navigation/native';
  import SignIn from './SignIn';

  export default function Details(){
    const navigation = useNavigation();
    return (
      <ScrollView style= {styles.sectionContainer} >
        <View style={styles.sectionview}>
          <Text style= {styles.sectionTitle}>Register</Text>
          {/* <Text style= {styles.sectioncode}>Register</Text> */}
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
      <View style ={styles.sectionbutton}>
      <TouchableOpacity  onPress={() => navigation.navigate('SignIn')} style={styles.button}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>
      
      </View>
      <View style ={styles.sectionimage}>
 <Image source={require('../assests/register.png')} />
 </View>
     </ScrollView>

   );

 };
 
  const styles = StyleSheet.create({
   sectionContainer: {
     paddingVertical: 25,
     paddingHorizontal: 24,
     backgroundColor: '#ffffff',
   },
   sectionTitle: {
     fontSize: 50,
     fontWeight: '900',
     color: `#008080`,
     fontStyle: 'italic',
     textAlign: 'center',
    },
   sectioncode: {
     fontSize: 15,
     color: '#ffffff',
     textAlign: 'center',
     fontWeight: '500'
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
     paddingLeft: 70,
     
   },
 
   button: { 
       backgroundColor: '#368BC1',
       borderRadius: 20,
       width: 200,
       height: 50,
       marginTop: 10,
   },
 
   buttonText: {
     textAlign: 'center',
     fontSize: 22,
     color: '#ffffff',
     paddingTop: 8,
     fontWeight: '600'
   },
 
   sectionimage: {
     paddingTop:30,
     paddingHorizontal: 10,
     alignItems: 'center',
   },
     
  });