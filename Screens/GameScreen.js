import React from "react";
import {View, StyleSheet, Button, Text } from "react-native";
import { useState, useEffect } from 'react';
import colors from "../constants/colors";

const GameScreen = () =>{
    const [currentGame, SetCurrentGame] = useState();

    useEffect(() => {
        SetCurrentGame(Math.floor(Math.random() * (100 - 1) + 1));
      }, []);
   
    return (
        <View style={styles.screen}>
            <View style={styles.Contianer}>
                <Text>Oponet Player</Text>
                <Text>{currentGame}</Text>
                <View style={styles.buttonContainer}>
                    <Button title="-"></Button>
                    <Button title="+"></Button>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    screen:{
        flex:1,
        padding:10,
        alignItems:"center",
        marginTop:50
    },
    Contianer:{
        width:300,
        padding:20,
        alignItems:"center",
        shadowColor: colors.shadowColor,
        shadowOffset:{width:0,height:2},
        shadowRadius:6,
        shadowOpacity:0.5,
        elevation:3,
        borderRadius:10,
        backgroundColor: colors.backgroundColorContainer,
    },
    buttonContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginTop: 20,
      width: 300,
    },
    
})

export default GameScreen