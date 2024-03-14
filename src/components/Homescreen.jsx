import React, { useState } from "react";
import { Text, View, Button } from "react-native";
import DrawerNavigation from "./DrawerNavigation";

const Homescreen = () => {
  const [drawerVisible, setDrawerVisible] = useState(false);

  const toggleDrawer = () => {
    setDrawerVisible(!drawerVisible);
  };

  return (
    <View>
      {drawerVisible && <DrawerNavigation />}

      <View>
        <Button title="Mostrar drawer" onPress={toggleDrawer} />
      </View>
      <View>
        <Text style={{ color: "red" }}>Hola mundo</Text>
      </View>
      <View>
        <Button title="Press me" />
      </View>
    </View>
  );
}

export default Homescreen;