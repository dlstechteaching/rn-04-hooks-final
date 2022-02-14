import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { AppStack } from './src/navigation/AppNavigator';

export default function App() {
  return (
    <NavigationContainer>
      <AppStack />
    </NavigationContainer>
  );
};