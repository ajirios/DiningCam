
import 'react-native-gesture-handler';
import React, { Component, useState, useEffect, useRef } from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { DrawerItem, DrawerItemList, createDrawerNavigator } from '@react-navigation/drawer';
import {Text, Modal, ActivityIndicator, View, Image, Dimensions, TouchableOpacity, Pressable, SafeAreaView, StyleSheet, TextInput, ScrollView} from 'react-native';
import { AntDesign, Entypo, Fontisto, Feather, Octicons, Ionicons, MaterialIcons, MaterialCommunityIcons, SimpleLineIcons } from '@expo/vector-icons';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import HomeScreen from './screens/HomeScreen';
import CameraScreen from './screens/CameraScreen';
import Dashboard from './screens/Dashboard';
import GenderScreen from './screens/GenderScreen';
import AgeScreen from './screens/AgeScreen';




const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name='Prescreen' component={HomeScreen} />
        <Stack.Screen name='AgeScreen' component={AgeScreen} />
        <Stack.Screen name='Paywalls' component={GenderScreen} />
        <Stack.Screen name='Dashboard' component={Dashboard} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
