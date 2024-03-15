import React, { useState } from "react";
import { Text, View, Button } from "react-native";
import { ButtonTabNavigation } from "./ButtonTabNavigation.jsx";

const Homescreen = () => {

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ButtonTabNavigation />
      </View>
    </View>
  );
}

export default Homescreen;