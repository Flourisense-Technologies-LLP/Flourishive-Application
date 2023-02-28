import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DrawerNavigation from './DrawerNavigation';
import Slider from '../Screens/Sliders/Slider';
import SignIn from '../Screens/Authentication/SignIn';
import SignUp from '../Screens/Authentication/SignUp';
import ForgotPass from '../Screens/Authentication/ForgotPass';
import Profile from '../Screens/Profile/Profile';

const Stack = createNativeStackNavigator();

const StackNavigation = () => {

  return (
    <Stack.Navigator initialRouteName="Slider">
      <Stack.Screen
        name="DrawerNavigation"
        component={DrawerNavigation}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Slider"
        component={Slider}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="ForgotPass"
        component={ForgotPass}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: true,
        }}
      />
    </Stack.Navigator>
  );
};

export default StackNavigation;
