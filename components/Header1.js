import React from "react";
import { Text, View, StyleSheet } from "react-native";


const Header1 = ({titule}) => {
    return(
        <View style={styles.header}>
            <Text style={styles.headerTitule}>
                {titule}
            </Text>
        </View>
    )
}

export default Header1

const styles = StyleSheet.create({
    header:{
        backgroundColor: "green",
        height:80,
        paddingTop:36,
        alignItems: "center",
        justifyContent:"center"
    },
    headerTitule:{
        color:"black",
        frontSide:22,
    },
})

