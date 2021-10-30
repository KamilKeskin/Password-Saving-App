import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import TabNavigator from "./TabNavigator";
import PasswordEntryScreen from "../screens/PasswordEntryScreen";

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Password"
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="PasswordScreen" component={TabNavigator} />
      <Stack.Screen name="PasswordEntry" component={PasswordEntryScreen} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
