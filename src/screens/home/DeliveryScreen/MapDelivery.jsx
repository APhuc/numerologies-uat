import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { StyleSheet, Text } from "react-native";

import { View } from "react-native-animatable";

const MapDeliveryScreen = ({ params }) => {

  return (
    <View style={styles.container}>
      <Text>Đây Là cái map Nha mọi người</Text>
    </View>
  );
};

export default MapDeliveryScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "ryan",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 50,
  },
});
