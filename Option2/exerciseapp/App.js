import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { StatusBar } from 'expo-status-bar';
import { useCallback, useContext } from 'react';
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';
import React from 'react';
import HomeScreen from './screens/HomeScreen'
import UpperBodyScreen from './screens/UpperBodyScreen';
import LowerBodyScreen from './screens/LowerBodyScreen';
import { UpperBodyWorkoutScreen } from './screens/UpperBodyScreen';
import { LowerBodyWorkoutScreen } from './screens/LowerBodyScreen';
import WorkoutCompleteScreen from './screens/WorkoutCompleteScreen';

              //UPPER BODY EXERCISES
let upperExercises = [
  {
    name: "Bench Press",
    key: "1",
    suggestedExercise: "2",
  },
  {
    name: "Pull Ups",
    key: "2",
    suggestedExercise: "3",
  },
  {
    name: "Seated Row",
    key: "3",
    suggestedExercise: "4"
  },
  {
    name: "Military Shoulder Press",
    key: "4",
    suggestedExercise: "5"
  },
  {
    name: "Tricep Pushdown",
    key: "5",
    suggestedExercise: "6"
  },
  {
    name: "Preacher Curl",
    key: "6",
    suggestedExercise: "1"
  },
]
export const UpperContext = React.createContext(upperExercises)


              //LOWER BODY EXERCISES
let lowerExercises = [
  {
    name: "Deadlift",
    key: "1",
    suggestedExercise: "2",
  },
  {
    name: "Squat",
    key: "2",
    suggestedExercise: "3",
  },
  {
    name: "Dumbbell Lunge",
    key: "3",
    suggestedExercise: "4",
  },
  {
    name: "Barbell Hip Trusts",
    key: "4",
    suggestedExercise: "5",
  },
  {
    name: "Standing Calf Raises",
    key: "5",
    suggestedExercise: "1",
  },
  
]
export const LowerContext = React.createContext(lowerExercises)


const Stack = createNativeStackNavigator();

export default function App() {      
  return (
    <UpperContext.Provider value={upperExercises}>
      <LowerContext.Provider value={lowerExercises}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen}  />
            <Stack.Screen name="UpperBody" component={UpperBodyScreen}/>
            <Stack.Screen name="LowerBody" component={LowerBodyScreen} />
            <Stack.Screen name="UpperBodyWorkout" component={UpperBodyWorkoutScreen} />
            <Stack.Screen name="LowerBodyWorkout" component={LowerBodyWorkoutScreen} />
            <Stack.Screen name='WorkoutComplete' component={WorkoutCompleteScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </LowerContext.Provider>
    </UpperContext.Provider>
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