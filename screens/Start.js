import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    Alert,
  } from 'react-native';
  import { useNavigation } from '@react-navigation/native';
import { ImageBackground } from 'react-native';

  export default function Start(){
    const navigation = useNavigation();
    return (
      <SafeAreaView style= {styles.sectionContainer} >
        <ImageBackground source={require('../assests/login.png')} style ={styles.sectionimage}>
         <View style={styles.sectionview}>
          {/* <Text style= {styles.sectionTitle}>EVE</Text>
          <Text style= {styles.sectioncode}>Your body, your data, With Eve {'\n'} you're in control
          </Text> */}
         </View>
            <View style ={styles.sectionbutton}>
            <TouchableOpacity  onPress={() => navigation.navigate('SignIn')} style={styles.button}>
              <Text style={styles.buttonText}>Sign In</Text>
            </TouchableOpacity>

            <TouchableOpacity  onPress={() => navigation.navigate('Register')}style={styles.button}>
              <Text style={styles.buttonText}>Register</Text>
            </TouchableOpacity>
            </View>
            </ImageBackground>
                </SafeAreaView>
   );
 };
 
 const styles = StyleSheet.create({
   sectionContainer: {
     backgroundColor: '#BEDCE6',
     flex: 1,
   },
   sectionTitle: {
     fontSize: 80,
     fontWeight: '900',
     color: `#ffffff`,
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
       paddingBottom: 50,
   },
 
   sectionbutton: {
    alignItems: "center",
    marginTop: 560,
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
     fontSize: 22,
     color: '#ffffff',
     paddingTop: 8,
     fontWeight: '600'
   },
 
   sectionimage: {
    flex:1,
     
   },
     
 });