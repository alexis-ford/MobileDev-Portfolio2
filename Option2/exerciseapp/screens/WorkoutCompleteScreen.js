import { StatusBar } from "expo-status-bar"
import { View, Text, StyleSheet, Pressable } from "react-native"
import {  styles } from "../App"
import { homeStyles } from "./HomeScreen"
import check from "/Users/alexis/MobileDev-Portfolio2/Option2/exerciseapp/assets/check.png"

export default function WorkoutCompleteScreen ({ navigation}){

    return (
        <View style={styles.container}>
            <img src={check} width={250} height={250} />
            <Text style={completeStyles.text}>Workout Finished.</Text>
            <Text style={completeStyles.text}>Great Job!</Text>
            <Pressable style={homeStyles.button} onPress={() => navigation.navigate("Home")}>
                <Text style={homeStyles.text}>Home</Text>
            </Pressable>
            <StatusBar style="auto" />
        </View>
    )
}

let completeStyles = StyleSheet.create({
    text: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 40,
        marginBottom: 10
    },

  })