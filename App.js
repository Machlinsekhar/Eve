/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
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
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import Start from "./screens/Start";
import SignIn from "./screens/SignIn";

const Stack = createNativeStackNavigator();

const App: () => Node = () => {
 
  return (
   /*initialRouteName='Start'*/
    <NavigationContainer>
    <Stack.Navigator> 
    <Stack.Screen name="SignIn" component={SignIn} options={{headerShown: false}}/>
    <Stack.Screen name="Start" component={Start} options={{headerShown: false}}/>
    
    </Stack.Navigator>
    </NavigationContainer>
    
  );
};

export default App;