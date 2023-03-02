import React, {useEffect} from 'react';
import {
    SafeAreaView,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    ImageBackground,
    Alert,
  } from 'react-native';
  import { useNavigation } from '@react-navigation/native';

  export default function Hello () {
    const navigation = useNavigation();
    useEffect(() => {
      setTimeout(() => {
        navigation.navigate('Pregnant');
      }, 2000)
    }, [])
    return (
      <SafeAreaView style ={styles.sectionContainer}>
 
    <ImageBackground source={require('../assests/hello.png')} style ={styles.sectionimage}>
      </ImageBackground>
     </SafeAreaView>
   );
    }

 
 const styles = StyleSheet.create({
   sectionContainer: {
     flex: 1,
     backgroundColor: '#D3B1C2'
   },
   sectionTitle: {
    fontSize: 80,
    fontWeight: '900',
    color: `#ff2316`,
    fontStyle: 'italic',
    textAlign: 'center',
    marginTop: 30,
  },
  sectioncode: {
    fontSize: 15,
    color: '#613659',
    textAlign: 'center',
    fontWeight: '500'
  },
   sectionbutton: {
     alignItems: 'center',
     
   },
 
   button: { 
    backgroundColor: '#6359A6',
    borderRadius: 6,
    width: 360,
    height: 45,
    marginTop: 685,
    
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