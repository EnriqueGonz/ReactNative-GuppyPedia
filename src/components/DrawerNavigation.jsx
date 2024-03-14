import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Homescreen from './Homescreen';
import PecesList from './PecesList';

const Drawer = createDrawerNavigator();

export function DrawerNavigation() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={Homescreen} />
      <Drawer.Screen name="Fishes" component={PecesList} />
    </Drawer.Navigator>
  );
}
