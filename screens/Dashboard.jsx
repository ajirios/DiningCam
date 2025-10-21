import React, { Component, useState, useEffect, useRef } from "react";
import {Text, Modal, ActivityIndicator, View, Image, Dimensions, TouchableOpacity, Pressable, SafeAreaView, StyleSheet, TextInput, ScrollView} from 'react-native';
import { AntDesign, Entypo, Fontisto, Feather, Octicons, Ionicons, MaterialIcons, MaterialCommunityIcons, SimpleLineIcons } from '@expo/vector-icons';


export default function CameraScreen(props) {
    return (
        <View style={styles.container}>
            <Text>Dashboard</Text>
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
