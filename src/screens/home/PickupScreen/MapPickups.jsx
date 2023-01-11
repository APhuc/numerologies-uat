import React, { useState } from "react";
import { Text, View, StyleSheet, SafeAreaView, TextInput } from "react-native";
// import Button from "../../../common/Buton";

const MapPickupScreen = ({ navigation }) => {
  const [valueInput, setValueInput] = useState()
  console.log(valueInput, "value in pút");
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Trang 2</Text>
      <View style={styles.searchContainer}>
        <SafeAreaView>
          <TextInput
            style={styles.input}
            onChangeText={setValueInput}
            value={valueInput}
            placeholder="useless placeholder"
            // keyboardType="numeric"
          />
          <View >

          </View>
        </SafeAreaView>
      </View>
    </View>
  );
};

export default MapPickupScreen;
const styles = StyleSheet.create({
  searchContainer: {
    position: "absolute",
    top: 20,
    width: "90%",
    backgroundColor: "white",
    shadowOffset: { width: 2, height: 2 },
    shadowColor: "black",
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 4,
    padding: 8,
    borderRadius: 8,
  },
  input: {
    borderWidth: 0.5,
    borderColor: "#CFD2CF",
  },
});
