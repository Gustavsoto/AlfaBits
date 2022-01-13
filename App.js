import 'react-native-gesture-handler';
import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import HomeScreen from './HomeScreen';

import SecondScreen from './Game';

const Stack = createStackNavigator();

export default function App() {
  
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Home', headerStyle:{backgroundColor : '#9be37f'} }}/>
        <Stack.Screen name="Game" component={SecondScreen} options={{ title: 'Spēle', headerStyle:{backgroundColor : '#9be37f'} }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}