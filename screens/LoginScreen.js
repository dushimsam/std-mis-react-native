import React from "react";
import { View, Image, Button, TextInput, Alert, StyleSheet,Text, Pressable } from "react-native";
import GlobalColors from "../constants/global_colors";

const LoginScreen = ({navigation}) => {
  const [form, setForm] = React.useState({
    email: "",
    password: "",
  });

  const handleChange = (name, value) => {
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit =()=>{
    Alert.alert("Login Successful "+form.password);
    navigation.navigate("AppTabStack",{
        screen: "Dashboard"
    });
  }

  return (
    <View style={styles.container}>
      <View style={styles.bodyFrame1}>
        <Text style={styles.mainTitle}>Hello, Welcome!</Text>
        <Image source={require("../assets/welcome.png")} style={styles.image} />
      </View>

      <View style={styles.bodyFrame2}>
        <View>
          <TextInput
            style={styles.input}
            onChangeText={(text) => handleChange("email", text)}
            placeholder="Enter your email"
          />
        </View>
        <View style={styles.input2}>
          <TextInput
            style={styles.input}
            onChangeText={(text) => handleChange("password", text)}
            placeholder="Enter the password"
            secureTextEntry={true}
          />
        </View>
      </View>

      <View style={styles.bodyFrame3}>
        <Pressable style={styles.signInBtn} title="Sign In" onPress={()=>handleSubmit()} >
            <Text style={styles.signInBtnText}>Sign In</Text>
        </Pressable>
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
  mainTitle: {
    fontSize: 30,
  },
  image: {
    width: 150,
    height: 200,
  },
  bodyFrame2: {
    marginTop: 40
  },
  bodyFrame3: {
    marginTop: 20,
    width: 300,
    fontSize: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: GlobalColors.mainColor,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius:20,
    height: 40,
    width: 300,
  },
  input2:{
    marginTop: 20,
  },
  signInBtn:{
    borderWidth: 1,
    backgroundColor: "#F7941D",
    borderRadius: 20,
    paddingVertical:10,
    alignItems: "center",
    fontSize: 20,
    borderColor: "black",
  },
  signInBtnText:{
    fontWeight: "bold",
    fontSize: 20,
  }
});
export default LoginScreen;
