import React from "react";
import { View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { DrawerNavigation } from "./DrawerNavigation.jsx";
import { ButtonTabNavigation } from "./ButtonTabNavigation.jsx";

const Stack = createStackNavigator();


const Main = () =>{
    return(
        <View style={{flex:1}}>
            <StatusBar style="dark"></StatusBar>
            {/* <Navigation></Navigation> */}
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen
                        name="Drawer"
                        component={DrawerNavigation}
                        options={{ headerShown: false }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </View>
    )
}

export default Main