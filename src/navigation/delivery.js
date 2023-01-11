import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { StyleSheet, Text } from "react-native";

import { AntDesign, SimpleLineIcons, FontAwesome5, MaterialCommunityIcons } from "@expo/vector-icons";
import ManageDeliveryScreen from "../screens/home/DeliveryScreen/ManageDelivery";
import MapDeliManageDeliveryScreen from "../screens/home/DeliveryScreen/MapDelivery";

const DeliveryStackScreen = ({ navigation }) => {
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
          tabBarLabel: "QL Phát",
          tabBarIcon: ({ color, size }) => <AntDesign name="profile" size={size} color={color} />,
        }}
        name="ManageDeliveryScreen"
        component={ManageDeliveryScreen}
      />
      <Tab.Screen
        options={{
          tabBarLabel: "Tuyến đường",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="route" size={size} color={color} />
          ),
        }}
        name="MapDeliManageDeliveryScreen"
        component={MapDeliManageDeliveryScreen}
      />
    </Tab.Navigator>
  );
  return TabScreens();
};

export default DeliveryStackScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
