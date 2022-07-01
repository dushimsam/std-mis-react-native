import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreen from "./screens/HomeScreen";
import { Text, View } from "react-native";
import LoginScreen from "./screens/LoginScreen";
import DashboardScreen from "./screens/DashboardScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const StackNavigator = createStackNavigator();

const TabStackNavigator = createBottomTabNavigator();

const TabScreensStack = () => {
  return (
    <TabStackNavigator.Navigator>
      <TabStackNavigator.Screen name ="Dashboard"component={DashboardScreen} options ={{title: "Admin Dashboard"}}/>
    </TabStackNavigator.Navigator>
  );
};
const StackScreens = () => {
  return (
    <StackNavigator.Navigator>
      <StackNavigator.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: "Home Screen" }}
      />
      <StackNavigator.Screen
        name="Login"
        component={LoginScreen}
        options={{ title: "Login Screen" }}
      />
      <StackNavigator.Screen name="Dashboard" component={DashboardScreen} />
    </StackNavigator.Navigator>
  );
};

const RootStack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen component={StackScreens} name="AppStack" />
        <RootStack.Screen component={TabScreensStack} name="AppTabStack" />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
