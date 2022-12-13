import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const IdeaItem = ({ item, onSelected }) => {
  return (
    <TouchableOpacity onPress={() => onSelected(item)}>
      <View style={styles.item}>
        <View>
          <Text style={styles.title}>{item.name}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default IdeaItem;

const styles = StyleSheet.create({
  item: {
    padding: 20,
    margin: 10,
    borderRadius: 3,
    backgroundColor: "#ccc",
  },
  title: {
    fontSize: 20,
    fontFamily: "Tillana",
  },
  details: {
    fontSize: 18,
  },
});