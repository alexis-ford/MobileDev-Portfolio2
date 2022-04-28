import { StatusBar } from "expo-status-bar"
import { Button, View, Text, StyleSheet, FlatList, Pressable } from "react-native"
import {  styles } from "../App"

export default function WorkoutCompleteScreen (){
    return (
        <View style={styles.container}>
            <Text>Workout Finished.</Text>
            <Text>Great Job!</Text>
            <StatusBar style="auto" />
        </View>
    )
}