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
import Home from './screens/Home.js';
import Today from './screens/Today.js'
import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

export default function App () {
 
    return (
    <NavigationContainer>
    <Stack.Navigator>
    <Stack.Screen name="Start" component={Start} options={{headerShown: false}}/>
      <Stack.Screen name="Home" component={Home}/>
      <Stack.Screen name="SignIn" component={SignIn} />
      {/* <Stack.Screen name="Today" component={Today} /> */}
    </Stack.Navigator>
    </NavigationContainer>
  );
}



{/* <StoreProvider store={store}>
      <View>
        <NavigationProvider />
        </View>
 </StoreProvider>

    
    initialRouteName='Start'*/ }