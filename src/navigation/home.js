import { AntDesign } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../redux/features/auth/signinSlice";
import PhucKhangScreen from "../screens/home/HomePhucKhang";
import MapPickup from "../screens/home/PickupScreen/MapPickups";
import Storage from "../untils/Storage";

import ProfileScreen from "../screens/profile/HomeProfile";



const Tab = createBottomTabNavigator();
export const WelcomeTabScreens = ({ navigation }) => {
  return (
    <Tab.Navigator screenOptions={{ tabBarActiveTintColor: "#009387", headerTitleAlign:"center" }}>
      <Tab.Screen
        navigationKey="XLogHome"
        options={{
          title:"Trang chủ",
          tabBarLabel: "Phúc Khang ",
          tabBarIcon: ({ color, size }) => <AntDesign name="profile" size={size} color={color} />,
        }}
        name="Home"
        component={PhucKhangScreen}
      />
      <Tab.Screen
        options={{
          tabBarLabel: "Tài Khoản",
          title: "Tài Khoản",
          tabBarIcon: ({ color, size }) => <AntDesign name="user" size={size} color={color} />,
        }}
        name="Account"
        component={ProfileScreen}
      />
    </Tab.Navigator>
  );
};
// Tab Setting

// const HomeStack = createNativeStackNavigator();
// export function HomeStackScreen({ navigation }) {
//   const dispatch = useDispatch();
//   const onPress = () => {
//     Storage.removeItem("_token");
//     dispatch(logout());
//   };
//   return (
//     <HomeStack.Navigator>
//       <HomeStack.Screen name="Xlog" component={XLogScreen} />
//       <HomeStack.Screen name="Danh Sách Đơn Hàng" component={MapPickup} />
//     </HomeStack.Navigator>
//   );
// }

// const SettingStack = createNativeStackNavigator();
// export function SettingsStackScreen() {
//   return (
//     <SettingStack.Navigator>
//       <SettingStack.Screen name="Settings" component={ProfileScreen} />
//       {/* <SettingStack.Screen name="Details" component={DetailsScreen} /> */}
//     </SettingStack.Navigator>
//   );
// }