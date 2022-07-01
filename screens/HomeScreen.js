import React from "react";
import { View, Image,Text, Button, StyleSheet } from "react-native";
import GlobalColors from "../constants/global_colors";

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      {/* <Image source={require("../assets/welcome.png")} style={styles.image}/> */}
      <View style={styles.bodyFrame}>
        <Text style={styles.mainTitle}>Welcome to RCA!</Text>
        <Text style={styles.titleDesc}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus euismod
          lacus, pharetra dui.{" "}
        </Text>
        
      </View>

      <View style={styles.buttonsFrame}>
        <Button
          title="Login"
          color={GlobalColors.mainColor}
          onPress={() => navigation.push("Login")}
          style={styles.signInBtn}
        />
        <Button
          title="Sign up"
          color="#008080"
          onPress={() => {}}
          style={styles.signUpBtn}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  titleDesc:{
    fontSize:20,
  },
  image: {
    marginTop:"10%",
    width: "15em",
    height:"15em"
  },
  bodyFrame: {
    marginTop: 20,
  },
  buttonsFrame:{
    marginTop: 20,
  },
  signInBtn: {
    width: "50%",
    marginTop: 20,
    background:GlobalColors.mainColor,
  },
  signUpBtn: {
    background:"#FFFFFF",
    color:GlobalColors.mainColor,
  },
});
export default HomeScreen;
