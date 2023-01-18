import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StackNavigation from './src/Navigations/StackNavigation';

const Root = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Root.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Root.Screen
          name="Root"
          options={{ headerShown: false }}
          component={StackNavigation}
        />
      </Root.Navigator>
    </NavigationContainer>
  );
};

export default App


