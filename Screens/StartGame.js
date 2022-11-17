import React from "react";
import { Text, View, StyleSheet, Pressable, TouchableWithoutFeedback, Keyboard, Button } from "react-native";
import Input from "../components/Input"
import { useState } from 'react';

const StartGame =({onGameStart})=>{
    const [value, SetValue] = useState ("")
    const [confirmed, SetConfirmed] = useState (false)
    const [selectNumber, SetSelectNumber] = useState ("")

    const handleConfirmation = () => {
        const chonseNumber = parseInt(value)
        if (chonseNumber === NaN || chonseNumber <= 0 || chonseNumber > 99)return
        SetConfirmed(true)
        SetSelectNumber(chonseNumber)
        SetValue("")
    }

    const handleResertInput = () => {
        SetValue("")
        SetConfirmed(false)
    }

    const handleInput = (text) =>{
        //  SetValue(text)
        SetValue(text.replace(/[^0-9]/g,""))
        console.log(value)
    }

    return(
        <TouchableWithoutFeedback onPress={()=> Keyboard.dismiss()}>
            <View style={styles.screen}> 
                <View style={styles.inputContianer}>
                    <Text>Select a Number</Text>
                    <Input value={value} onChangeText={text=>handleInput(text)}/>
                    <View style={styles.buttonContianer}>
                        <Pressable style={styles.buttonClean} onPress={handleResertInput}>
                            <Text>Clean</Text>
                        </Pressable>
                        <Pressable style={styles.buttonOk} onPress={handleConfirmation}>
                            <Text>OK</Text>
                        </Pressable>
                    </View>
                </View>
                {confirmed && (
                    <View style={styles.inputContianer}>
                        <Text>Select a Number</Text>
                        <Text>{selectNumber}</Text>
                        <Button title="Start Game" onPress={()=> onGameStart(selectNumber)}></Button>
                    </View>
                )}
            </View>
        </TouchableWithoutFeedback>
    )
}

export default StartGame

const styles = StyleSheet.create({
    screen:{
        flex:1,
        padding:10,
        alignItems:"center",
        marginTop:50
    },
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
    buttonContianer:{
        flexDirection: "row",
        width:"90%",
        justifyContent: "space-between"
    },
    buttonClean:{
        backgroundColor:"gray",
        height:35,
        width:70,
        justifyContent:"center",
        alignItems:"center",
        borderRadius:10,
    },
    buttonOk:{
        backgroundColor:"green",
        height:35,
        width:70,
        justifyContent:"center",
        alignItems:"center",
        borderRadius:10,
    }
})
