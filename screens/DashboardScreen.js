import React from "react";
import { View, Text, Button, FlatList, StyleSheet } from "react-native";
import DropShadow from "react-native-drop-shadow";

const SingleListItem = ({ item }) => {
  return (
    // <DropShadow style={styles.itemShadowStyles}>
      <View style={styles.singleListItem}>
        <Text style={styles.itemMainTextStyle}>{item.name}</Text>
      </View>
    // </DropShadow>
  );
};

const DashboardScreen = ({ navigation }) => {
  const [students, setStudents] = React.useState([
    { name: " Samuel  ", id: "1" },
    { name: " Fiston  ", id: "2" },
    { name: " Emmy  ", id: "3" },
    { name: " Mukiza ", id: "4" },
    { name: " Joyeuse ", id: "5" },
  ]);

  return (
    <View style={styles.container}>
      <Text>DashboardScreen</Text>
      <FlatList
        data={students}
        keyExtractor={(item) => item.id}
        renderItem={SingleListItem}
      ></FlatList>
    </View>
  );
};

const styles = StyleSheet.create({
  singleListItem: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  itemMainTextStyle: {
    fontSize: 30,
    fontWeight: "bold",
  },
  itemShadowStyles: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 1,
    shadowRadius: 5,
  },
});

export default DashboardScreen;
