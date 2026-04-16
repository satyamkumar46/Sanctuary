import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import AppoinmentScreen from "../screens/Appoinment/AppoinmentScreen";
import FindDoctorScreen from "../screens/FDoctor/FindDoctorScreen";
import HomeScreen from "../screens/Home/HomeScreen";
import UserProfileScreen from "../screens/UProfile/UserProfileScreen";

export default function TabNavigator() {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconname;

          if (route.name === "HOME") {
            iconname = focused ? "home" : "home-outline";
          }
          if (route.name === "APPOINMENT") {
            iconname = focused ? "calendar" : "calendar-outline";
          }
          if (route.name === "SEARCH") {
            iconname = focused ? "search" : "search-outline";
          }
          if (route.name === "PROFILE") {
            iconname = focused ? "person" : "person-outline";
          }

          return <Ionicons name={iconname} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen
        name="HOME"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="APPOINMENT"
        component={AppoinmentScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="SEARCH"
        component={FindDoctorScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="PROFILE"
        component={UserProfileScreen}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
}
