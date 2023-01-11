import React from "react";
import { Text, View } from "react-native";
import Button from "../../../common/Buton";

const ManagePickupScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    <Text>Trang 1</Text>
    {/* <Button title="Tim thu gom" 
    onPress={() => navigation.navigate("Danh Sách Đơn Hàng")} 
    /> */}
  </View>
  );
};

export default ManagePickupScreen;
