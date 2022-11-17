import React from "react";
import { TextInput, View, StyleSheet, Pressable } from "react-native";
import { useState } from 'react';

const GameScreen = () =>{
    const [currentGame, SetCurrentGame] = useState (Math.floor(Math.random() * 100 + 1))
     /*
    const generateRamdom=(min, max)=>{
        return Math.floor(Math.random() * ((max - min) + min))
    }
    */
   
    return (
        <View>
            <Text>Oponet Player</Text>
            <Text>{currentGame}</Text>
            <View style={styles.inputContianer}>
                <Button title="-"></Button>
                <Button title="+"></Button>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    inputContianer:{
        width:300,
        padding:20,
        alignItems:"center",
        shadowColor:"blue",
        shadowOffset:{width:0,height:2},
        shadowRadius:6,
        shadowOpacity:0.5,
        elevation:3,
        borderRadius:10,
        backgroundColor:"white"
    },
})

export default GameScreen