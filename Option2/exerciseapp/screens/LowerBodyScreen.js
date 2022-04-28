import { StatusBar } from "expo-status-bar"
import { useCallback, useContext, useState } from "react"
import { Button, View, Text, FlatList, StyleSheet, Pressable } from "react-native"
import {  LowerContext, styles } from "../App"
import { homeStyles } from "./HomeScreen"
import { exerciseStyles } from "./UpperBodyScreen"


export function LowerBodyWorkoutScreen ({route, navigation}) {
  let {exerciseKey} = route.params
  let [count, setCount]= useState(0)
  let [set,setSet] = useState(0)
  let lowerExercises = useContext(LowerContext)
  let currentExercise = lowerExercises.find(ex => ex.key === exerciseKey)
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


      <Pressable  style={homeStyles.button} onPress={() => navigation.navigate("LowerBodyWorkout",
        {exerciseKey: currentExercise.suggestedExercise})}>
          <Text style={homeStyles.text}>{`Next Exercise: ${lowerExercises.find(ex => ex.key == currentExercise.suggestedExercise).name}`}</Text>
      </Pressable>
  
      
      <View style={{ flexDirection: "row" }}>
        <Pressable style={homeStyles.button} onPress={() => navigation.navigate("LowerBody")}>
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

export default function LowerBodyScreen ({ route, navigation }) {
  let lowerExercises = useContext(LowerContext)
  let lowerBody =  useCallback (({ key }) => {
    navigation.navigate("LowerBodyWorkout", {exerciseKey: key, count: 0, lowerExercises})
  })
  return (
    <View style={styles.container}>
      <Text style={exerciseStyles.head}>Choose Your First Exercise</Text>
      <FlatList data={lowerExercises} renderItem={({ item }) =>
        <Button color="black" title={item.name} onPress={() => lowerBody(item)}></Button>
      }/>
      <StatusBar style="auto" />
  </View>
    )
}

