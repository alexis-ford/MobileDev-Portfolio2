import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { StatusBar } from 'expo-status-bar';
import { useCallback, useContext } from 'react';
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';
import React from 'react';
import HomeScreen from './screens/HomeScreen'
import UpperBodyScreen from './screens/UpperBodyScreen';
import LowerBodyScreen from './screens/LowerBodyScreen';


const Stack = createNativeStackNavigator();


export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen}  />
          <Stack.Screen name="UpperBody" component={UpperBodyScreen}/>
          <Stack.Screen name="LowerBody" component={LowerBodyScreen} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});