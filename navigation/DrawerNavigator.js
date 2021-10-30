import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import StackNavigator from "./StackNavigator";
import PasswordEntryScreen from "../screens/PasswordEntryScreen";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="PasswordScreen" component={StackNavigator} />
      <Drawer.Screen name="PasswordEntry" component={PasswordEntryScreen} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
