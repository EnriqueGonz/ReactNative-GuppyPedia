import React from "react";
import { View } from "react-native";
import Navigation from "./Navigation.jsx";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from '@react-navigation/native';
import { DrawerNavigation } from "./DrawerNavigation.jsx";

const Main = () =>{
    return(
        <View style={{flex:1}}>
            <StatusBar style="dark"></StatusBar>
            {/* <Navigation></Navigation> */}
            <NavigationContainer>
                <DrawerNavigation></DrawerNavigation>
            </NavigationContainer>
        </View>
    )
}

export default Main