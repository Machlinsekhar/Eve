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
import Register from './screens/Register.js'
import Pregnant from "./screens/Pregnant"
import DOB from "./screens/DOB"
import Cycle from "./screens/Cycle"
import Symptoms from "./screens/Symptoms"
import RepHelDis from "./screens/RepHelDis"
import Sleep from "./screens/Sleep"
import MentalHel from "./screens/MentalHel"
import FitnessGoal from "./screens/FitnessGoal"
import Loading from "./screens/Loading"
import Info from "./screens/Info"
import { NavigationContainer } from '@react-navigation/native';


const Stack = createNativeStackNavigator();

export default function App () {
 
    return (
    <NavigationContainer>
    <Stack.Navigator>
    <Stack.Screen name="Start" component={Start} options={{headerShown: false}}/>
    <Stack.Screen name="Register" component={Register} />
    <Stack.Screen name="Info" component={Info} options={{headerShown: false}}/>
    <Stack.Screen name="Pregnant" component={Pregnant} />
    <Stack.Screen name="DOB" component={DOB} />
    <Stack.Screen name="Cycle" component={Cycle} />
    <Stack.Screen name="Symptoms" component={Symptoms} />
    <Stack.Screen name="Sleep" component={Sleep} />
    <Stack.Screen name="MentalHel" component={MentalHel} />
    <Stack.Screen name="RepHelDis" component={RepHelDis} />
    <Stack.Screen name="FitnessGoal" component={FitnessGoal} />
    <Stack.Screen name="Loading" component={Loading} />
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