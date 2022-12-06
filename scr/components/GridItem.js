import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from "react-native";
import colors from "../constants/colors";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;


const GridItem = ({ item, onSelected }) => {
  return (
    <View style={styles.gridITem}>
      <TouchableOpacity
        style={{ ...styles.container, backgroundColor: item.color }}
        onPress={() => onSelected(item)}
      >
        <View>
          <Text style={styles.title}>{item.title}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default GridItem;

const styles = StyleSheet.create({
  gridITem: {
    flex:1,
        padding:10,
        alignItems:"center",
        marginTop:50
  },
  container: {
    width: width / 2.1,
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
