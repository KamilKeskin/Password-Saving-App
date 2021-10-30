import * as React from 'react';
import { createSwitchNavigator, createAppContainer } from "react-navigation";

import PasswordScreen from "./screens/PasswordScreen"
import PasswordEntryScreen from "./screens/PasswordEntryScreen" 

import firebase from "firebase";
import { firebaseConfig } from "./config";

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}

const AppSwitchNavigator = createSwitchNavigator({
  PasswordScreen: PasswordScreen,
  PasswordEntryScreen: PasswordEntryScreen
});

const AppNavigator = createAppContainer(AppSwitchNavigator);

export default function App() {
  return <AppNavigator />;
}
