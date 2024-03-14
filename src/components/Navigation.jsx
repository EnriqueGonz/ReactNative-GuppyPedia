import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon5 from 'react-native-vector-icons/FontAwesome5';

import Homescreen from "./Homescreen";
import PecesList from "./PecesList";


const Tab = createBottomTabNavigator();

function MyTabs(){
    return(
        <Tab.Navigator initialRouteName="Home" screenOptions={{
            tabBarActiveTintColor:"blue",
        }}>

            <Tab.Screen name="Home" component={Homescreen} options={{
                tabBarLabel:"Home",
                tabBarActiveTintColor:"red",
                headerShown: false,
                tabBarIcon: ({ }) =>{
                    return <Icon name="home" size={20} color="#46474B" />
                }
            }}></Tab.Screen>

            <Tab.Screen name="Lista" component={PecesList} options={{
                tabBarLabel:"Peces",
                tabBarIcon: ({ }) =>{
                    return <Icon5 name="fish" size={20} color="#46474B" />
                }
                }}>

            </Tab.Screen>
        </Tab.Navigator>
    )
}

export default function Navigation(){
    return(
        <NavigationContainer>
            <MyTabs></MyTabs>
        </NavigationContainer>
    )
}