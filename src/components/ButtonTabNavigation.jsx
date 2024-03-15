import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
/* import Homescreen from './Homescreen'; */
import PecesList from './PecesList';

const Tab = createBottomTabNavigator();

export function ButtonTabNavigation() {
  return (
    <Tab.Navigator>
      {/* <Tab.Screen name="Home" component={Homescreen} /> */}
      <Tab.Screen name="Fishes" component={PecesList} />
    </Tab.Navigator>
  );
}