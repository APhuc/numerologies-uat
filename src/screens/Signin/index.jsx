// rncsl => import nhanh
import React, { useState } from "react";
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

import { AntDesign } from "@expo/vector-icons";
import * as Animatable from "react-native-animatable";
import { useDispatch } from "react-redux";

import { setLoading } from "../../redux/features/home/loadingSilce";
import { Colors, Images, Routes } from "../../resources";

const SigninScreen = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [state, setState] = useState({
    IGen: "",
    UserName: "Nguyễn Văn A",
  });
  const dispatch = useDispatch();
  const setLoadingAll = () => {
    const action = setLoading();
    dispatch(action);
  };
  const onOpenSignup = () => {
    navigation.navigate(Routes.signupScreen);
  };
  const onOpenForgotInfo = () => {
    navigation.navigate(Routes.forgotInfomationScreen);
  };
  return (
    <View style={styles.container}>
      <Animatable.View animation="fadeInUpBig" style={styles.main}>
        <View style={styles.header}>
          <View style={styles.headerContent}>
            <Text style={styles.text_header} weight={6}>
              {state?.UserName}
            </Text>
          </View>
          <Image style={styles.headerPosionAbs} source={Images.logoNameBlack} />
        </View>

        <View style={styles.nameLogo}>
          <Text style={styles.nameLogoText} weight={6}>
            NUMEROLOGIES
          </Text>
        </View>

        <View style={styles.idGen}>
          <Text style={styles.iGenText} weight={5}>
            iGen của bạn
          </Text>
        </View>

        <View style={styles.inputIgen}>
          <AntDesign name="idcard" size={24} color={Colors.primary} />
          <TextInput
            placeholder="IGen của bạn"
            placeholderTextColor={Colors.textColor}
            style={styles.textInput}
            autoCapitalize="none"
            onChangeText={(val) => console.log(val)}
          />
        </View>

        <View style={styles.button}>
          <TouchableOpacity style={styles.signIn} onPress={() => console.log("CLog")}>
            <View>
              <Image style={styles.buttonIcon} source={Images.logoName} />
            </View>
            <View>
              <Text style={styles.textSign}>Đăng Nhập</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.footerText}>
          <TouchableOpacity onPress={onOpenForgotInfo}>
            <Text style={{ color: Colors.primary, marginTop: 15 }}>Lấy lại thông tin</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={onOpenSignup}>
            <Text style={{ color: Colors.primary, marginTop: 15 }}>Bạn chưa có IGEN? Đăng kí ngay</Text>
          </TouchableOpacity>
        </View>
      </Animatable.View>
    </View>
  );
};
export default SigninScreen;
const styles = StyleSheet.create({
  footerText: {
    width: "91%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  inputIgen: {
    flexDirection: "row",
    marginTop: 5,
    borderWidth: 1,
    borderColor: Colors.primary,
    padding: 5,
    width: "91%",
    borderRadius: 5,
  },
  textInput: {
    fontSize: 18,
    paddingLeft: 10,
    width: "100%",
    color: Colors.primary,
  },

  container: {
    flex: 1,
    backgroundColor: Colors.black,
    // justifyContent: "center",
    // alignItems: "center",
    width: "100%",
  },
  main: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  header: {
    height: "25%",
    width: "91%",
    justifyContent: "center",
    borderRadius: 31,
    borderWidth: 2,
    borderColor: Colors.primary,
  },
  headerContent: {
    height: "90%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 31,
    borderWidth: 1,
    borderColor: Colors.primary,
  },

  headerPosionAbs: {
    position: "absolute",
    zIndex: 111,
    bottom: "-25%",
    left: "50%",
    transform: [{ translateX: -75 }],
    width: "45%",
    height: "50%",
    resizeMode: "stretch",
    // backgroundColor: Colors.black,
    // tintColor: Colors.black,
  },
  text_header: {
    color: Colors.primary,
    fontWeight: "500",
    fontSize: 30,
    textTransform: "uppercase",
  },
  nameLogo: {
    borderRadius: 10,
    marginTop: "14%",
    paddingHorizontal: 20,
    borderColor: Colors.primary,
    marginBottom: 7,
    borderWidth: 2,
    zIndex: 999,
  },
  nameLogoText: {
    color: Colors.primary,
    marginTop: 5,
    marginBottom: 5,
    fontSize: 32,
    lineHeight: 40,
    backgroundColor: Colors.black,
  },
  idGen: {
    width: "91%",
    // backgroundColor: Colors.primary,
    paddingTop: 7,
  },
  iGenText: {
    color: Colors.primary,
    fontSize: 18,
  },

  button: {
    width: "91%",
    marginTop: "10%",
  },
  buttonIcon: {
    width: 70,
    height: "70%",
    resizeMode: "stretch",
  },
  signIn: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    borderColor: Colors.primary,
    borderWidth: 2,
    height: 70,
    alignItems: "center",
    borderRadius: 5,
  },
  textSign: {
    fontSize: 32,
    fontWeight: "bold",
    color: Colors.primary,
  },
  footerIGenItem2: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 7,
  },
  footerIGenItem2Text: {
    fontSize: 32,
    color: Colors.primary,
    flex: 1,
    textAlign: "center",
  },
  imgLogo: {
    width: 120,
    height: 90,
    position: "absolute",
    top: 100,
  },
});
