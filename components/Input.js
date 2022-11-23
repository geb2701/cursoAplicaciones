import React from "react";
import { TextInput, View, StyleSheet, Pressable } from "react-native";

const Input = (style, ...restProps ) =>{
    return (
        <TextInput
            blurOnSubmit
            autoCapitalization="none"
            autoCorrect={false}
            keyboardType="numeric"
            maxLength={2}
            style={{ ...styles.input, ...style }}
            {...restProps}
        />
    )
}

const styles = StyleSheet.create({
    Input:{
        height:30,
        borderBottomColor:"black",
        borderBottomWidth:2,
        marginVertical:10,
    }
})

export default Input