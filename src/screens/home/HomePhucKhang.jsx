import React from "react";
import { Dimensions, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useSelector } from "react-redux";

let { height, width } = Dimensions.get("window");
const PhucKhangScreen = ({ navigation }) => {
  const info = useSelector((state) => state.signin);
  console.log(info);
  
  return (
    <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.container}>
        <Text>{info?.data}</Text>
        
      </View>
    </ScrollView>

  );
};

export default PhucKhangScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  box: {
    minWidth: "90%",
    paddingVertical: "20%",
    marginVertical: "2%",
    borderRadius: 8,
    backgroundColor: "#319DA0",
    textAlign: "center",
    alignItems: "center",
  },
  textColor: {
    color: "#FFF",
    fontSize: 30,
  },
});
