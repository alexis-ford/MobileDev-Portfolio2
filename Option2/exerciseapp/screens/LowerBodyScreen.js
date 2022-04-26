import { StatusBar } from "expo-status-bar"
import { useCallback } from "react"
import { Button, View, Text, FlatList, StyleSheet } from "react-native"
import {  styles } from "../App"

function lowerWorkout ({route, navigation}) {
  let lowerBody =  useCallback (({ name }) => {
    navigation.push("LowerBody", {name: "Squats", count: route.params.count})
  })
  return (
    <View style={styles.container}>
      <Text>{route.params.name} : {route.params.count}</Text>
      <Button onPress={lowerBody} title="go to screen"></Button>
      <StatusBar style="auto" />
    </View>
  )
 }

export default function LowerBodyScreen ({ route, navigation }) {
  let lowerExercises = [
    {
      name: "Squats",
      key: "1",
    },
    {
      name: "Lunges",
      key: "2",
    },
  ]
  let upperBody =  useCallback (({ name }) => {
    navigation.navigate("LowerBody", {name: name, count: 0})
  })
  return (
    <View style={styles.container}>
      <Text style={exerciseStyles.head}>Choose Your First Exercise</Text>
      <FlatList data={lowerExercises} renderItem={({ item }) =>
        <Button title={item.name} onPress={() => lowerBody(item)}></Button>
      }/>
      <StatusBar style="auto" />
  </View>
    )
}

let exerciseStyles = StyleSheet.create({
  head: {
      textAlign: 'center',
      fontWeight: 'bold',
      fontSize: 20,
      marginBottom: 10
  },
})
