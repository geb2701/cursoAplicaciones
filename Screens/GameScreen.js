import React from "react";
import {View, StyleSheet, Button, Text, Dimensions} from "react-native";
import { useState, useEffect } from 'react';
import colors from "../constants/colors";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const GameScreen = ({ handleResult }) => {
    const [currentGuess, setCurrentGuess] = useState();

    useEffect(() => {
        setCurrentGuess(Math.floor(Math.random() * (100 - 1) + 1));
    }, []);

    return (
        <View style={styles.screen}>
            <View style={styles.Contianer}>
                <Text>Oponet Player Number</Text>
                <Text>{currentGuess}</Text>
                <View style={styles.buttonContainer}>
                <Button
                    title="Menor"
                    onPress={() => handleResult("lower", currentGuess)}
                    />
                    <Button
                    title="Mayor"
                    onPress={() => handleResult("greater", currentGuess)}
                    />
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
        width: width / 1.2,
        minWidth:200,
        maxWidth:450,
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
      padding:10,
      flexDirection: "row",
      justifyContent: "space-between",
      marginTop: 20,
      width:'100%',
    },
    button: {
        padding:10,
        width:'50%',
    },
})

export default GameScreen