import { StatusBar } from "expo-status-bar"
import { useCallback } from "react"
import { Button, View, Text, StyleSheet } from "react-native"
import {  styles } from "../App"
import UpperBodyScreen from "./UpperBodyScreen"
import LowerBodyScreen from "./LowerBodyScreen"

export default function HomeScreen({ navigation }) {
    let toUpperBody =  useCallback (() => {
        navigation.navigate("UpperBody")
    })
    let toLowerBody =  useCallback (() => {
        navigation.navigate("LowerBody")
    })
    return (
        <View style={styles.container}>
            <Text style={homeStyles.title}>Welcome To Fundamental Fitness!</Text>
            <Text style={homeStyles.head}>Choose Your Workout Split.</Text>
            <Button title="UpperBody" onPress={toUpperBody}></Button>
            <Button title="LowerBody" onPress={toLowerBody}></Button>
            <StatusBar style="auto" />
        </View>
    )
}

let homeStyles = StyleSheet.create({
    title: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 40,
        marginBottom: 30
    },
    head: {
        textAlign: 'center',
        fontStyle: 'italic',
        fontSize: 20,
        marginBottom: 10
    },
})