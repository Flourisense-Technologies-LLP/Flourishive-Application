import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Sample from '../Screens/Sample';

const Stack = createNativeStackNavigator();

const StackNavigation = () => {

  return (
    <Stack.Navigator initialRouteName="Sample">
      <Stack.Screen
        name="Sample"
        component={Sample}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default StackNavigation;
