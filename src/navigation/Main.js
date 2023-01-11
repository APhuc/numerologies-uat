import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useEffect } from "react";
import OrientationLoadingOverlay from "react-native-orientation-loading-overlay";
import { useDispatch, useSelector } from "react-redux";
import { checkLogin } from "../redux/features/auth/signinSlice";
import SigninScreen from "../screens/Signin";
import Storage from "../untils/Storage";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { WelcomeTabScreens } from "./home";
import PickupStackScreen from "./pickup";
import DeliveryStackScreen from "./delivery";
import SignupScreen from "../screens/Signup";
import ForgotInfomationScreen from "../screens/ForgotInfo";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Main = ({ params }) => {
  const loginReducer = useSelector((state) => state.signin);
  const { isLoading } = useSelector((state) => state.loading);
  const dispatch = useDispatch();

  const { isLogin } = loginReducer;
  // const isLogin = false;
  const GetTokenStorage = async () => {
    let _token = await Storage.getItem("_token");
    if (_token) {
      dispatch(checkLogin(_token));
    }
  };
  useEffect(() => {
    GetTokenStorage();
  }, []);
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          {isLogin ? (
            <>
              <Stack.Group screenOptions={{ headerShown: false }}>
                {/* <Stack.Screen name="Home">{() => <HomeScreen />}</Stack.Screen> */}
                <Stack.Screen name="WelcomeScreen" component={WelcomeTabScreens} />
              </Stack.Group>
              <Stack.Group
                screenOptions={{
                  headerTitleAlign: "center",
                }}
              >
                <Stack.Screen
                  name="ManagerPickUpScreen"
                  options={{ title: "Quản lí thu gom" }}
                  component={PickupStackScreen}
                />
                <Stack.Screen
                  name="ManagerDeliveryScreen"
                  options={{ title: "Quản lí phát" }}
                  component={DeliveryStackScreen}
                />
              </Stack.Group>
            </>
          ) : (
            <Stack.Group screenOptions={{ headerShown: false }}>
              <Stack.Screen name="Signup" component={SignupScreen} />
              <Stack.Screen name="Signin" component={SigninScreen} />
              <Stack.Screen name="ForgotInfomation" component={ForgotInfomationScreen} />
              <Stack.Screen name="WelcomeScreen" component={WelcomeTabScreens} />
            </Stack.Group>
          )}
        </Stack.Navigator>
      </NavigationContainer>
      <OrientationLoadingOverlay
        visible={isLoading}
        color="white"
        indicatorSize="large"
        messageFontSize={24}
        message="L o a d i n g. . ."
      />
    </>
  );
};

export default Main;
