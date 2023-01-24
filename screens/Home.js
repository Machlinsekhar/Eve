import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../actions/auth";
const Home = ({ navigation }) => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
const onLogout = () => {
    dispatch(logout()).then((response) => {
      if (response.status === "success") {
        navigation.replace("LoginScreen");
      }
    });
  };
return (
    <View style={Styles.container}>
      <Text style={{ fontSize: 16 }}>Welcome {state.user}</Text>
      <Button onPress={() => onLogout()} title="Logout" />
    </View>
  );
};
export default Home;
const Styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});