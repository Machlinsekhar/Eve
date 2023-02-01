/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StoreProvider } from "react-redux";
import NavigationProvider from './screens/Navigation.js'
import Start from "./screens/Start";
import SignIn from "./screens/SignIn";
import store from "./services/store.js";
import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

export default function App () {
 
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
 <Image source={require('./assests/signin.png')} />
 </View>
     </SafeAreaView>
  );
};


{/* <StoreProvider store={store}>
      <View>
        <NavigationProvider />
        </View>
 </StoreProvider>

    
    initialRouteName='Start'*/ }