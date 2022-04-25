import { StatusBar } from "expo-status-bar"
import { useCallback } from "react"
import { Button, View, Text } from "react-native"
import {  styles } from "../App"

let exerciseList = [
    {
      name: "Pull Up",
      key: "1",
      suggestedNextExercise: "2"
    },
    {
      name: "Push Ups",
      key: "2",
      suggestedNextExercise: "1"
    },
  ]


export default function UpperBodyScreen ({ navigation }) {
    return (
        <Text>Upper Body</Text>
    )
}