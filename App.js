/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Start from './screens/Start';
import SignIn from './screens/SignIn';
import Home from './screens/Home.js';
import Hello from './screens/Hello.js';
import Register from './screens/Register.js';
import Pregnant from './screens/Pregnant';
import DOB from './screens/DOB';
import Cycle from './screens/Cycle';
import PCOS from './screens/PCOS';
import Loading from './screens/Loading';
import Info from './screens/Info';
import LogPeriod from './screens/LogPeriod';
import Entry from './screens/Entry';
import Symptoms from './screens/Symptoms';
import Calendar from './screens/Calendar';
import Welcome from './screens/Welcome';
import HomeRegister1 from './screens/HomeRegister1.js';
import AuthMiddleware from './screens/AuthMiddleware';
import Logout from './screens/Logout';
import {NavigationContainer} from '@react-navigation/native';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="AuthMiddleware"
          component={AuthMiddleware}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Start"
          component={Start}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Info"
          component={Info}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Pregnant"
          component={Pregnant}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="DOB"
          component={DOB}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Cycle"
          component={Cycle}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="PCOS"
          component={PCOS}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Loading"
          component={Loading}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Hello"
          component={Hello}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="HomeRegister1"
          component={HomeRegister1}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SignIn"
          component={SignIn}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="LogPeriod"
          component={LogPeriod}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Entry"
          component={Entry}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Symptoms"
          component={Symptoms}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Calendar"
          component={Calendar}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Logout"
          component={Logout}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

{
  /* <StoreProvider store={store}>
      <View>
        <NavigationProvider />
        </View>
 </StoreProvider>

    
    initialRouteName='Start'*/
}
