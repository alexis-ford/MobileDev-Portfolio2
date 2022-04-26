import { StatusBar } from "expo-status-bar"
import { useCallback } from "react"
import { Button, View, Text, StyleSheet, FlatList } from "react-native"
import {  styles } from "../App"

function upperWorkout ({route, navigation}) {
  let upperBody =  useCallback (({ name }) => {
    navigation.push("UpperBody", {name: "SitUps", count: route.params.count})
  })
  return (
    <View style={styles.container}>
      <Text>{route.params.name} : {route.params.count}</Text>
      <Button onPress={upperBody} title="go to screen"></Button>
      <StatusBar style="auto" />
    </View>
  )
 }
  
 export default function UpperBodyScreen ({ route, navigation }) {
  let upperExercises = [
    {
        name: "Push Ups",
        key: "1"
    },
    {
        name: "Pull Ups",
        key: "2"
    }
 ]
  
  let upperBody =  useCallback (({ name }) => {
    navigation.navigate("UpperBody", {name: name, count: 0})
  })
  
  return (
      <View style={styles.container}>
        <Text style={exerciseStyles.head}>Choose Your First Exercise</Text>
        <FlatList data={upperExercises} renderItem={({ item }) =>
          <Button title={item.name} onPress={() => upperBody(item)}></Button>
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