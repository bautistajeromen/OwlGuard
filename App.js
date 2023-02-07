/* 
Mobile Development Final Project

App Name: Owl Guard
Group Members: Ivan Rendon, Jerome Bautista, Jugoslav Lozanovic, David Benning
*/

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Signup from './components/signup';
import MainPage from './components/mainpage';
import SetupPage from './components/setup';
import EmergencyPage from './components/emergency';

const Stack = createStackNavigator();
const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen
          options={{
            title: "",
            presentation: "transparentModal",
            animationTypeForReplace: "push",
            animation: "slide_from_right",
          }}
          name="Home"
          component={MainPage}
        />
        <Stack.Screen
          options={{
            title: "",
            presentation: "transparentModal",
            animationTypeForReplace: "push",
            animation: "slide_from_right",
          }}
          name="SignupPage"
          component={Signup}
        />
        <Stack.Screen
          options={{
            title: "",
            presentation: "transparentModal",
            animationTypeForReplace: "push",
            animation: "slide_from_right",
          }}
          name="SetupPage"
          component={SetupPage}
        />
        <Stack.Screen
          options={{
            title: "",
            presentation: "transparentModal",
            animationTypeForReplace: "push",
            animation: "slide_from_right",
          }}
          name="EmergencyPage"
          component={EmergencyPage}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default MyStack;