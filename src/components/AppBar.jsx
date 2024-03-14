import React from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import Constants from 'expo-constants'
import Icon from 'react-native-vector-icons/MaterialIcons';


const styles = StyleSheet.create({
  container_appbar: {
    backgroundColor: "#fefefe",
    display: "flex",
    flexDirection: 'row',
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: Constants.statusBarHeight + 10,
    paddingBottom: 20,
  },
  container_username:{
    paddingRight: 10,
    fontSize: 18,
  },
  separator: {
    backgroundColor:"#1B1830",
    borderRadius:5,
    width:30,
    height:4,
  },
  button_menu:{
    display:"flex",
    flexDirection:"column",
    flexWrap:"nowrap",
    justifyContent: "space-evenly",
    width:30,
    height:30
  }
})


const AppBar = () => {
  return (
    <View style={styles.container_appbar}>
      <TouchableOpacity style={styles.button_menu} >
        <View style={styles.separator}>
        </View>
        <View style={styles.separator}>
        </View>
        <View style={styles.separator}>
        </View>
        {/* <Icon name="menu" size={35} color="#46474B" /> */}
      </TouchableOpacity>

      <View>
        <Text style={styles.container_username}>EnriqueGonz</Text>
      </View>

    </View>
  )
}

export default AppBar