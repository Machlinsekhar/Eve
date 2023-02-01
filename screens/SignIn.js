import React from 'react';
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

  export default function SignIn(){
    return (
      <SafeAreaView style= {styles.sectionContainer} >
         <View style={styles.sectionview}>
          <Text style= {styles.sectionTitle}>Sign In</Text>
          <Text style= {styles.sectioncode}>Sign In</Text>
         </View>
         <View style={styles.form}>
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
 <TouchableOpacity  onPress={() => Alert.alert('Yet to build :o')} style={styles.button}>
   <Text style={styles.buttonText}>Sign In</Text>
 </TouchableOpacity>
 
 </View>
 <View style ={styles.sectionimage}>
 <Image source={require('siginin.png')} />
 </View>
     </SafeAreaView>
   );
 };
 
 const styles = StyleSheet.create({
   sectionContainer: {
     paddingVertical: 65,
     paddingHorizontal: 24,
     backgroundColor: '#ffffff',
   },
   sectionTitle: {
     fontSize: 50,
     fontWeight: '900',
     color: `#008080`,
     fontStyle: 'italic',
     paddingHorizontal: 85,
   },
   sectioncode: {
     fontSize: 15,
     color: '#ffffff',
     textAlign: 'center',
     fontWeight: '500'
   },

   sectionview: {
       paddingBottom: 50,
   },

   form: {
    paddingHorizontal: 20
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
    fontWeight: 200
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
   },
     
 });