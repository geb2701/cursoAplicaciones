import { StyleSheet, Text, View, Image, Dimensions } from "react-native";
import React, { useState, useEffect } from "react";
import win from "../assets/images/win.jpg";
import lose from "../assets/images/lose.jpg";
import colors from "../constants/colors";


const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const FinishGame = ({ result }) => {
  const [image, setImage] = useState("");

  useEffect(() => {
    handleImage();
  }, []);

  

  const handleImage = () => {
    if (result === "Win") {
      setImage(win);
      result= result + ':)';
      return;
    }
    setImage(lose);
    result= result + ':(';
  };

  return (
    <View style={styles.Screen}>
      <View style={styles.Container}>
        <Text>{`You ${result}`}</Text>
      </View>
      <Image style={styles.Image} source={image} />
    </View>
  );
};

export default FinishGame;

const styles = StyleSheet.create({
  Screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
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
  Image: {
    height: width/1.3,
    width: width/1.3,
    marginTop: 50,
    borderRadius:3,
  },
});