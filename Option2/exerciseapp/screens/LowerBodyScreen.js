import { StatusBar } from "expo-status-bar"
import { useCallback } from "react"
import { Button, View, Text } from "react-native"
import {  styles } from "../App"

let exerciseList = [
    {
      name: "Squats",
      key: "3",
      suggestedNextExercise: "4"
    },
    {
      name: "Lunges",
      key: "4",
      suggestedNextExercise: "3"
    },
  ]

export default function LowerBodyScreen ({ navigation }) {
    return (
        <Text>Lower Body</Text>
    )
}
