import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Sample from '../Screens/Home';
import DrawerNavigation from './DrawerNavigation';
import Slider from '../Screens/Sliders/Slider';

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
    </Stack.Navigator>
  );
};

export default StackNavigation;
