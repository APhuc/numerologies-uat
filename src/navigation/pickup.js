import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { StyleSheet, Text } from "react-native";

import { AntDesign, SimpleLineIcons } from "@expo/vector-icons";
import ManagerPickUpScreen from "../screens/home/PickupScreen/ManagePickup";
import MapPickupScreen from "../screens/home/PickupScreen/MapPickups";
import { MaterialCommunityIcons } from '@expo/vector-icons';

const PickupStackScreen = ({ navigation }) => {
  // React.useEffect(() => {
  //   // console.log(navigation, " navigation");
  //   //params.setA(false)
  //   //params.prenav.setOptions({tabBarStyle:{display:"none"}})
  // });

  const Tab = createBottomTabNavigator();
  const TabScreens = () => (
    <Tab.Navigator screenOptions={{ headerShown: false, tabBarActiveTintColor: "#009387" }}>
      <Tab.Screen
        options={{
          tabBarLabel: "QL Gom",
          tabBarIcon: ({ color, size }) => <AntDesign name="profile" size={size} color={color} />,
        }}
        name="ManagePickupScreen"
        component={ManagerPickUpScreen}
      />
   
      <Tab.Screen
        options={{
          tabBarLabel: "Tìm Gom",
          tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name="map-marker-distance" size={size} color={color} />,
        }}
        name="MapPickupScreen"
        component={MapPickupScreen}
      />
    </Tab.Navigator>
  );
  return TabScreens();
};

export default PickupStackScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
