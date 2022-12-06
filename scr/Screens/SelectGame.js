import { Button, StyleSheet, Text, View,Dimensions } from "react-native";
import React from "react";
import colors from "../constants/colors";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const CategoriesScreen = ({navigation}) => {
  return (
    <View style={styles.screen}>
        <View style={styles.container}>
            <Text style={styles.title}>GAMES</Text>
        </View>
        <View style={styles.container}>
            <Button title="Go to Game 1" onPress={() => navigation.navigate("Juego1")} />
        </View>
        <View style={styles.container}>
            <Button title="Go to Game 2" onPress={() => navigation.navigate("Juego2")} />
        </View>
        <View style={styles.container}>
            <Button title="Go to Shop" onPress={() => navigation.navigate("Shop")} />
        </View>
    </View>
  );
};

export default CategoriesScreen;

const styles = StyleSheet.create({
    screen:{
        flex:1,
        padding:10,
        alignItems:"center",
        marginTop:50
    },
    container: {
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
        backgroundColor: colors.white
    },
    title: {
        fontFamily: "Tillana",
    },
});
