import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

import Button from "../../common/Buton";

const ProfileScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.avatar} source={{ uri: "https://bootdey.com/img/Content/avatar/avatar6.png" }} />
      </View>

      <View style={styles.body}>
        {/* <View style={styles.bodyContent}> */}
        <Text style={styles.name}>John Doe</Text>
        <Text style={styles.info}>UX Designer / Mobile developer</Text>
        <Text style={styles.description}>
          Lorem ipsum dolor sit amet, saepe sapientem eu nam. Qui ne assum electram expetendis, omittam deseruisse
          consequuntur ius an,
        </Text>

        <TouchableOpacity style={styles.buttonContainer}>
          <Text>Opcion 1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonContainer}>
          <Text>Opcion 2</Text>
        </TouchableOpacity>
      </View>
      {/* </View> */}
    </View>
  );
};

export default ProfileScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    textAlign: "center",
    // backgroundColor:"red"
  },
  header: {
    backgroundColor: "#00BFFF",
    // height: 200,
    flex: 30,
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom: 10,
    alignSelf: "center",
    position: "absolute",
    // marginTop: 130,
    bottom: "-40%",
  },
  name: {
    fontSize: 22,
    color: "#FFFFFF",
    fontWeight: "600",
  },
  body: {
    flex: 70,
    marginTop: "20%",
    alignItems: "center",
  },
  bodyContent: {
    flex: 1,
    // padding: 30,
    // marginTop: 40,
  },
  name: {
    fontSize: 28,
    color: "#696969",
    fontWeight: "600",
  },
  info: {
    fontSize: 16,
    color: "#00BFFF",
    marginTop: 10,
  },
  description: {
    fontSize: 16,
    color: "#696969",
    marginTop: 10,
    textAlign: "center",
  },
  buttonContainer: {
    marginTop: 10,
    height: 45,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    width: 250,
    borderRadius: 30,
    backgroundColor: "#00BFFF",
  },
});
