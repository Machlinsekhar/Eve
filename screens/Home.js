import React from "react";
import { SafeAreaView,TouchableHighlight, Text, StyleSheet, View, TouchableOpacity, Image, Alert, TextInput, Button } from "react-native";
import { useNavigation } from '@react-navigation/native';

  export default function Home(){
    const navigation = useNavigation();
    return (
      <SafeAreaView style= {styles.sectionContainer} >
         <View style={styles.sectionview}>
          <Text style= {styles.sectionTitle}>EVE</Text>
          <Text style= {styles.sectioncode}> Your body, your data, With Eve {'\n'} you're in control
          </Text>
         </View>
          <View style ={styles.sectionbutton}>
           <TouchableOpacity  onPress={() => Alert.alert('Logging your period')} style={styles.button}>
            <Text style ={styles.buttonText}>Log your Period</Text>
           </TouchableOpacity>
           </View>
            <View style ={styles.sectionimage}>
            <Image source={require('../assests/home.png')} />
            </View>
            <View  style ={styles.icons}>
            <TouchableHighlight onPress={() => Alert.alert("Home")}>
            <Image style ={styles.icon}source={require('../assests/homeicon.png')} />
            </TouchableHighlight>
            <TouchableHighlight onPress={() =>Alert.alert('Today')}>
            <Image style ={styles.icon}source={require('../assests/todayicon.png')} />
            </TouchableHighlight>
            <TouchableHighlight onPress={() =>Alert.alert("Calendar")}>
            <Image style ={styles.icon}source={require('../assests/calendaricon.png')} />
            </TouchableHighlight>
            <TouchableHighlight onPress={() =>Alert.alert("Notification")}>
            <Image style ={styles.icon}source={require('../assests/noticon.png')} />
            </TouchableHighlight>
            </View>
       </SafeAreaView>
       );
            };


const styles = StyleSheet.create({
   sectionContainer: {
    paddingVertical: 65,
    // paddingHorizontal: 24,
    backgroundColor: '#ffff',
   },

   sectionTitle: {
     fontSize: 80,
     fontWeight: '900',
     color: `#008080`,
     fontStyle: 'italic',
     textAlign: 'center',
   },
   sectioncode: {
     fontSize: 15,
     color: '#008080',
     textAlign: 'center',
     fontWeight: '500'
   },
   sectionview: {
       paddingBottom: 40,
   },
 
   sectionbutton: {
     paddingLeft: 100,
     paddingBottom: 40,
     
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

   sectionimage:{
     height: 320,
     paddingHorizontal: 100
   },
     
   icons:{
    flexDirection: 'row',
    paddingBottom: 9,
    paddingTop:5,
    backgroundColor: '#008089',
   },

   icon:{
    height: 40,
    width: 30,
    padding: 20,
    marginRight: 30,
    marginLeft: 30,
   }
 });