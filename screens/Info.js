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

  export default function Start(){
    const navigation = useNavigation();
    return (
      <SafeAreaView style= {styles.sectionContainer} >
         <View style={styles.sectionview}>
          <Text style= {styles.sectionTitle}>EVE</Text>
          <Text style= {styles.sectioncode}>Your body, your data, With Eve {'\n'} you're in control
          </Text>
          <Text style= {styles.love}>Made with Love {'\n'} 💙
          </Text>
          <Text style= {styles.sectioninfo}>  Mach  Car  Seb  Ben</Text>
         </View>
 <View style ={styles.sectionbutton}>
 <TouchableOpacity  onPress={() => navigation.navigate('Home')} style={styles.button}>
   <Text style={styles.buttonText}>Welcome</Text>
 </TouchableOpacity>
 
 </View>
 <View style ={styles.sectionimage}>
 <Image source={require('../assests/login.png')} />
 </View>
     </SafeAreaView>
   );
 };
 
 const styles = StyleSheet.create({
   sectionContainer: {
     paddingVertical: 65,
     paddingHorizontal: 24,
     backgroundColor: '#008080',
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
   love: {
    fontSize: 25,
    color: '#2110FF',
    textAlign: 'center',
    fontWeight: '500',
    paddingTop: 20,
  },
   sectioninfo: {
    fontSize: 20,
    color: '#ffffff',
    textAlign: 'center',
    fontWeight: '500',
    paddingTop: 10,
    
  },
  
   sectionview: {
       paddingBottom: 50,
   },
 
   sectionbutton: {
     paddingLeft: 70,
     
   },
 
   button: { 
       backgroundColor: '#368BC1',
       borderRadius: 20,
       width: 200,
       height: 50,
       marginTop: 30,
   },
 
   buttonText: {
     textAlign: 'center',
     fontSize: 22,
     color: '#ffffff',
     paddingTop: 8,
     fontWeight: '600'
   },
 
   sectionimage: {
     height: 293
     
   },
     
 });