import {Pressable, StyleSheet, Text, TouchableWithoutFeedback, View, Keyboard, Button, TextInput} from "react-native";
import React, { useState } from "react";
import colors from "../constants/colors";

const StartGame =({onStartGame})=>{
    const [value, setValue] = useState("");
    const [confirmed, setConfirmed] = useState(false);
    const [selectedNumber, setSelectedNumber] = useState("");
  
    const handleConfirmation = () => {
      const choseNumber = parseInt(value);
      if (choseNumber === NaN || choseNumber <= 0 || choseNumber > 99) return;
  
      setConfirmed(true);
      setSelectedNumber(choseNumber);
      setValue("");
    };
  
    const handleResetInput = () => {
      setValue("");
      setConfirmed(false);
    };
  
    const handleInput = (text) => {
      console.log(text);
      setValue(text.replace(/[^0-9]/g, ""));
    };

    return(
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View style={styles.screen}> 
                <View style={styles.inputContianer}>
                    <Text>Select a Number</Text>
                    <TextInput
                        value={value} onChangeText={handleInput}
                        blurOnSubmit
                        autoCapitalization="none"
                        autoCorrect={false}
                        keyboardType="numeric"
                        maxLength={2}
                        style={styles.Input}
                    />
                    <View style={styles.buttonContianer}>
                        <Pressable style={styles.buttonClean} onPress={handleResetInput}>
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
                        <Text>{selectedNumber}</Text>
                        <Button title="Start Game" onPress={() => onStartGame(selectedNumber)} />
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
        shadowColor: colors.shadowColor,
        shadowOffset:{width:0,height:2},
        shadowRadius:6,
        shadowOpacity:0.5,
        elevation:3,
        borderRadius:10,
        backgroundColor: colors.white
    },
    buttonContianer:{
        flexDirection: "row",
        width:"90%",
        justifyContent: "space-between"
    },
    buttonClean:{
        backgroundColor: colors.backgroundColorClearBtn,
        height:35,
        width:70,
        justifyContent:"center",
        alignItems:"center",
        borderRadius:10,
    },
    buttonOk:{
        backgroundColor:colors.backgroundColorOkBtn,
        height:35,
        width:70,
        justifyContent:"center",
        alignItems:"center",
        borderRadius:10,
    },
    Input:{
        height:30,
        borderBottomColor:"black",
        borderBottomWidth:2,
        marginVertical:10,
    }
})
