import { StatusBar } from "expo-status-bar"
import { useCallback } from "react"
import { Button, View, Text, StyleSheet, FlatList, Pressable } from "react-native"
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
            <Pressable style={homeStyles.button} onPress={toUpperBody}>
                <Text style={homeStyles.text}>Upper Body</Text>
            </Pressable>
            <Pressable style={homeStyles.button} onPress={toLowerBody}>
                <Text style={homeStyles.text}>Lower Body</Text>
            </Pressable>
            <StatusBar style="auto" />
        </View>
    )
}

export const homeStyles = StyleSheet.create({
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
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'black',
        margin: 10,
      },
      text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
      },
})