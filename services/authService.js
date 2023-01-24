import AsyncStorage from "@react-native-async-storage/async-storage";
const logIn = async (user) => {
  console.log("user info", user);
  const { username, password } = user;
  if (username === "Admin" && password === "Admin123") {
    AsyncStorage.setItem("user", JSON.stringify(user));
    return {
      status: "success",
      message: "You are redirecting to home page",
      user: username,
    };
  }
};
const logOut = async () => {
  AsyncStorage.clear();
  return {
    status: "success",
    message: "You are logged out",
  };
};
export default {
  logIn,
  logOut,
};