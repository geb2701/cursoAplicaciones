import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { useSelector } from 'react-redux'

const Details= () => {
  console.log(useSelector((state) => state.ideas.selected))
  const idea = useSelector((state) => state.ideas.selected)

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{idea.name}</Text>
    </View>
  )
}

export default Details

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FDBF50",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontFamily: "Tillana",
  },
})