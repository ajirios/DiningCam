import React, { Component, useState, useEffect, useRef } from "react";
import {Text, Modal, ActivityIndicator, View, Image, Dimensions, TouchableOpacity, Pressable, SafeAreaView, StyleSheet, TextInput, ScrollView} from 'react-native';
import { AntDesign, Entypo, Fontisto, Feather, Octicons, Ionicons, MaterialIcons, MaterialCommunityIcons, SimpleLineIcons } from '@expo/vector-icons';
import { Button } from "react-native-elements";


export default function HomeScreen(props) {
    return (
        <View style={styles.container}>
            <Text>DiningCam helps you record your food intake.</Text>
            <Button onPress={() => props.navigation.navigate("Paywalls")} title="Continue">Get Started</Button>
        </View>
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
