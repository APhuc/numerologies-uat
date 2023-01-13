// rncsl => import nhanh
import React, { useState } from "react";
import { Alert, Image, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View, Button } from "react-native";
import { Feather, FontAwesome, MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import * as Animatable from "react-native-animatable";

import Input from "../../common/Input";
import { login } from "../../redux/features/auth/signinSlice";
import { setLoading } from "../../redux/features/home/loadingSilce";
import { Images, Colors, Routes } from "../../resources";

import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { unwrapResult } from "@reduxjs/toolkit";
import moment from "moment/moment";

import DateTimePickerModal from "react-native-modal-datetime-picker";

const SignupScreen = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const info = useSelector((state) => state.signin);
  // console.log(info, "inffo");

  const setLoadingAll = () => {
    const action = setLoading();
    dispatch(action);
  };
  const onOpenSignin = () => {
    navigation.navigate(Routes.signinScreen);
  };
  const onOpenHome = () => {
    navigation.navigate(Routes.welcomeScreen);
  };
  // const loginReducer = useSelector((state) => state.signin);
  const [state, setState] = useState({
    data: {
      userName: "",
      DoB: "",
      phone: "",
      email: "admin@gmail.com",
    },
    dataValidate: {
      isValidUserName: true,
      isValidDoB: true,
      isValidPhone: true,
      isValidEmail: true,
    },
    messageVadid: {
      isValidUserName: "Vui lòng nhập họ và tên của bạn",
      isValidDoB: "Vui lòng chọn ngày sinh của bạn",
      isValidPhone: "Vui lòng nhập số điện thoại của bạn",
      // isValidEmail: "Vui lòng nhập địa chỉ email của bạn",
    },
  });
  const _setState = (value, key, validateKey, validateValue = true, validMes = "Mục này không được để trống") => {
    setState({
      ...state,
      data: { ...state.data, [key]: value },
      dataValidate: { ...state.dataValidate, [validateKey]: validateValue },
      messageVadid: { ...state.messageVadid, [validateKey]: validMes },
    });
  };
  const getNameValid = (name) => {
    switch (name) {
      case "userName":
        return "isValidUserName";
      case "DoB":
        return "isValidDoB";
      case "phone":
        return "isValidPhone";
      case "email":
        return "isValidEmail";
      default:
        break;
    }
  };
  function isVietnamesePhoneNumber(number) {
    return /(03|05|07|08|09|01[2|6|8|9])+([0-9]{8})\b/.test(number);
  }
  const textUserNameChange = (value, key, validateKey) => {
    if (key === "userName" && value) {
      _setState(value, key, validateKey);
    } else {
      _setState(value, key, validateKey, false, "Vui lòng nhập tên của bạn");
    }
  };
  const textPhoneChange = (value, key, validateKey) => {
    if (key === "phone" && value) {
      if (isVietnamesePhoneNumber(value)) {
        _setState(value, key, validateKey);
      } else {
        _setState(value, key, validateKey, false, "Vui lòng nhập số điện thoại Việt Nam");
      }
    } else {
      _setState(value, key, validateKey, false);
    }
  };
  const textEmailChange = (value, key, validateKey) => {
    if (key === "email" && value) {
      _setState(value, key, validateKey);
    } else {
      _setState("admin@gmail.com", key, validateKey);
    }
  };
  const uppercase = (str) => {
    let array1 = str.split(" ");
    let newarray1 = [];

    for (let x = 0; x < array1.length; x++) {
      newarray1.push(array1[x].charAt(0).toUpperCase() + array1[x].slice(1));
    }
    return newarray1.join(" ");
  };

  const loginHandle = async () => {
    let valid = true;
    Object.keys(state.data).forEach((key) => {
      if (state.data[key] === "") {
        console.log(key, " key");
        let keyValid = getNameValid(key);
        console.log(keyValid, " key valid");
        setState((prev) => ({
          ...prev,
          dataValidate: { ...prev.dataValidate, [keyValid]: false },
        }));
        valid = false;
      }
    });
    if (
      valid &&
      state?.dataValidate?.isValidDoB &&
      state?.dataValidate?.isValidPhone &&
      state?.dataValidate?.isValidUserName
    ) {
      const temp = state?.data;
      const dobTemp = temp.DoB.split("/");

      const dataSubmit = {
        fullname: uppercase(temp.userName),
        dayofbirth: dobTemp[0],
        monthofbirth: dobTemp[1],
        yearofbirth: dobTemp[2],
      };
      // console.log(dataSubmit, " data");

      const action = login(dataSubmit);
      const resultAction = await dispatch(action);
      const dataUser = unwrapResult(resultAction);
      // console.log("Subimit", dataUser.data);
      // onOpenHome()
    } else {
      console.log("object");
      // return Alert()
    }
  };
  const formatDate = (value) => {
    let fullDate = moment(value)?.format("DD/MM/YYYY") || "";
    console.log(value, fullDate, "value format date");
    if (fullDate) {
      _setState(fullDate, "DoB", "isValidDoB");
    } else {
      _setState(fullDate, "DoB", "isValidDoB", false, "Vui lòng chọn ngày sinh của bạn");
    }
  };
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(false);
    formatDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = (value) => {
    if (value || state.data.DoB) {
      setDatePickerVisibility(false);
    } else {
      setState({ ...state, dataValidate: { ...state.dataValidate, isValidDoB: false } });
      setDatePickerVisibility(false);
    }
  };

  const handleConfirm = (date) => {
    formatDate(date);
    hideDatePicker(date);
  };
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.text_header}>PHUC KHANG NUMEROLOGIES</Text>
        </View>
        <Animatable.View animation="fadeInUpBig" style={styles.footer}>
          <Input
            title="Họ và tên"
            placeholder="Họ và tên của bạn"
            name="userName"
            nameValidate="isValidUserName"
            onChangeText={textUserNameChange}
            icon={() => <FontAwesome name="user-o" color={Colors.primary} size={20} />}
            helperStatus={state.dataValidate.isValidUserName}
            helperText={state?.messageVadid?.isValidUserName}
          />
          <TouchableOpacity style={styles.paddingV} onPress={showDatePicker}>
            <Text style={styles.text_footer}>Ngày sinh</Text>
            <View style={styles.action}>
              <MaterialIcons name="date-range" size={20} color={Colors.primary} />
              <Text style={[{ color: state.data.DoB === "" ? Colors.textColor : Colors.primary }, styles.textDate]}>
                {state?.data?.DoB ? state?.data?.DoB : "Chọn ngày sinh"}
              </Text>

              <DateTimePickerModal
                isVisible={isDatePickerVisible}
                // style={{backgroundColor:"red", width:"100%", height:"20%"}}
                value={state.data.DoB ? state.data.DoB : new Date()}
                mode="date"
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
              />
            </View>
            {state?.dataValidate?.isValidDoB ? null : (
              <Animatable.View animation="fadeInLeft" duration={500}>
                <Text style={styles.errorMsg}>{state?.messageVadid?.isValidDoB}</Text>
              </Animatable.View>
            )}
          </TouchableOpacity>

          <Input
            title="Số điện thoại"
            placeholder="Số điện thoại của bạn "
            name="phone"
            nameValidate="isValidPhone"
            onChangeText={textPhoneChange}
            icon={() => <Feather name="phone" size={20} color={Colors.primary} />}
            helperStatus={state?.dataValidate?.isValidPhone}
            helperText={state?.messageVadid?.isValidPhone}
            keyboardType="phone-pad"
          />
          <Input
            title="Email"
            placeholder="Địa chỉ email của bạn "
            name="email"
            nameValidate="isValidEmail"
            onChangeText={textEmailChange}
            icon={() => <MaterialCommunityIcons name="email-outline" size={20} color={Colors.primary} />}
            helperStatus={state?.dataValidate?.isValidEmail}
            helperText={state?.messageVadid?.isValidEmail}
          />

          <View style={styles.button}>
            <TouchableOpacity style={styles.signIn} onPress={loginHandle}>
              <View>
                <Image style={styles.tinyLogo} source={Images.logoName} />
              </View>
              <View>
                <Text style={styles.textSign}>Khám Phá</Text>
              </View>
            </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={onOpenSignin}>
            <Text style={{ color: Colors.primary, marginTop: 15, textAlign: "right" }}>
              Bạn đã có IGEN? Đăng nhập ngay
            </Text>
          </TouchableOpacity>
          <View style={styles.lineTop}>
            <Text style={{ color: Colors.primary, marginTop: 15, textAlign: "left", fontSize: 18 }}>
              {!!info?.data && info?.data}
            </Text>
          </View>
        </Animatable.View>
      </ScrollView>
    </View>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({
  lineTop: {
    width: "100%",
    marginTop: 10,
    borderTopWidth: 1,
    borderTopColor: Colors.primary,

    // textAlign:"center",

    // paddingBottom: 5,
  },
  container: {
    flex: 1,
    backgroundColor: Colors.black,
  },
  header: {
    flex: 1,
    justifyContent: "flex-end",
    paddingHorizontal: 20,
    // paddingBottom: 50,
    paddingVertical: 50,
  },
  footer: {
    flex: 4,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  text_header: {
    color: Colors.primary,
    fontWeight: "bold",
    fontSize: 30,
  },
  textDate: {
    flex: 1,
    paddingLeft: 10,
    fontSize: 18,
  },
  text_footer: {
    color: Colors.primary,
    fontSize: 18,
  },
  icon: {
    color: Colors.primary,
  },

  button: {
    marginTop: 50,
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
  tinyLogo: {
    width: 70,
    height: "70%",
    resizeMode: "stretch",
  },
  textSign: {
    fontSize: 32,
    fontWeight: "bold",
    color: Colors.primary,
  },
  paddingV: {
    paddingBottom: 15,
  },
  action: {
    flexDirection: "row",
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: Colors.primary,
    paddingBottom: 5,
  },
  actionError: {
    flexDirection: "row",
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: Colors.red,
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === "ios" ? 0 : -12,
    paddingLeft: 10,
    color: Colors.primary,
  },
  errorMsg: {
    color: Colors.red,
    fontSize: 14,
  },
  text_footer: {
    color: Colors.primary,
    fontSize: 18,
  },
});
