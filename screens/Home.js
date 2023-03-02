import React from "react";
import { SafeAreaView,TouchableHighlight,ImageBackground, Text, StyleSheet, View, TouchableOpacity, Image, Alert, TextInput, Button } from "react-native";
import { useNavigation } from '@react-navigation/native';
// import { createDrawerNavigator } from '@react-navigation/drawer';

// const Drawer = createDrawerNavigator();

  export default function Home(){
    const navigation = useNavigation();
    return (
      <SafeAreaView style= {styles.sectionContainer} >
        <ImageBackground source={require('../assests/home.png')}>
         <View style={styles.sectionview}>
          <Text style= {styles.sectionTitle}>March 2023</Text>
          <Text style= {styles.sectioncode}> Next Month Prediction {'\n'} 26th April 2023
          </Text>
         </View>
          <View style ={styles.sectionbutton}>
           <TouchableOpacity  onPress={() => navigation.navigate('LogPeriod')} style={styles.button}>
            <Text style ={styles.buttonText}>Log your Period</Text>
           </TouchableOpacity>
           </View>
            <View style ={styles.sectionimage}>
            
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
                fontSize: 35,
                fontWeight: '900',
                color: `#0F2F5B`,
                textAlign: 'center',
                paddingTop: 50,
                paddingBottom: 30,
                letterSpacing: 1.25
               },
              sectioncode: {
                fontSize: 21,
                color: '#0F2F5B',
                textAlign: 'center',
                fontWeight: '700',
                paddingBottom: 20,
                paddingTop: 230,
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
                  marginTop: 255,
                  
              },
            
              buttonText: {
                textAlign: 'center',
                fontSize: 20,
                color: '#ffffff',
                paddingTop: 10,
                fontWeight: '600'
              },
              
             });