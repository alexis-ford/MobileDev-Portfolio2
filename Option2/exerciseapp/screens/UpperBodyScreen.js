import { StatusBar } from "expo-status-bar"
import { useCallback, useContext, useState } from "react"
import { Button, View, Text, StyleSheet, FlatList, Pressable } from "react-native"
import {  styles, UpperContext } from "../App"
import { homeStyles } from "./HomeScreen"

export function UpperBodyWorkoutScreen ({route, navigation}) {
  let {exerciseKey} = route.params
  let [count, setCount] = useState(0)
  let [set,setSet] = useState(0)
  let upperExercises = useContext(UpperContext)
  let currentExercise = upperExercises.find(ex => ex.key === exerciseKey)
  let toComplete =  useCallback (() => {
    navigation.navigate("WorkoutComplete")
  })  

  
  return (
    <View style={styles.container}>
      <Text style={exerciseStyles.head}>{currentExercise.name}</Text>
      <Text style={exerciseStyles.instructions}>4 sets x 10 reps</Text>
      <Text style={exerciseStyles.tracker}>Sets: {set} Reps: {count}</Text>
      <View style={{ flexDirection: "row" }}>
        <Pressable style={homeStyles.button} onPress={() => setCount(count=>count+1)}>
          <Text style={homeStyles.text}>Add Rep</Text>
        </Pressable>
        <Pressable style={homeStyles.button} onPress={() => setCount(0)}>
          <Text style={homeStyles.text}>Reset Reps</Text>
        </Pressable>
        <Pressable style={homeStyles.button} onPress={() => setSet(set=>set+1)}>
          <Text style={homeStyles.text}>Add Set</Text>
        </Pressable>
        <Pressable style={homeStyles.button} onPress={() => setSet(0)}>
          <Text style={homeStyles.text}>Reset Sets</Text>
        </Pressable>
      </View>

      <Pressable  style={homeStyles.button} onPress={() => navigation.navigate("UpperBodyWorkout",
        {exerciseKey: currentExercise.suggestedExercise})}>
          <Text style={homeStyles.text}>{`Next Exercise: ${upperExercises.find(ex => ex.key == currentExercise.suggestedExercise).name}`}</Text>
      </Pressable>
  
      
      <View style={{ flexDirection: "row" }}>
        <Pressable style={homeStyles.button} onPress={() => navigation.navigate("UpperBody")}>
          <Text style={homeStyles.text}>Back To Exercise Selection</Text>
        </Pressable>
        <Pressable style={homeStyles.button} onPress={() => navigation.navigate("Home")}>
          <Text style={homeStyles.text}>Home</Text>
        </Pressable>
        <Pressable style={homeStyles.button} onPress={() => navigation.navigate("WorkoutComplete")}>
          <Text style={homeStyles.text}>Workout Finished</Text>
        </Pressable>
      </View>
      <StatusBar style="auto" />
    </View>
  )
 }
  
 export default function UpperBodyScreen ({navigation, route }) {
    let upperExercises = useContext(UpperContext)
    let upperBody =  useCallback (({ key }) => {
      navigation.navigate("UpperBodyWorkout", {exerciseKey: key, count: 0, upperExercises})
    })

    return (
        <View style={styles.container}>
          <Text style={exerciseStyles.head}>Choose Your First Exercise</Text>
          <FlatList data={upperExercises} renderItem={({ item }) =>
            <Button color="black" onPress={() => upperBody(item)} title={item.name}></Button>
          }/>
          <StatusBar style="auto" />
        </View>
      
    )
 }
 


export const exerciseStyles = StyleSheet.create({
  head: {
      textAlign: 'center',
      fontWeight: 'bold',
      fontSize: 40,
      marginBottom: 10
  },
  instructions: {
    textAlign: 'center',
    fontStyle: 'italic',
    fontSize: 30,
    marginBottom: 10
},
tracker: {
  textAlign: 'center',
  fontSize: 20,
  marginBottom: 10
},
})