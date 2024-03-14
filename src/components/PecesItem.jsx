import React from "react";
import { View,Text, StyleSheet, Image,TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon5 from 'react-native-vector-icons/FontAwesome5';

const handlePress = (id) => {
    // Manejar la acción del botón aquí
    console.log('Hola mundo'+id);
  };


const Detalles = (props) =>(
    <View  style={Styles.detalles_container}>
        <View style={Styles.detalles_box}>
            <Icon name="thermometer" size={20} color="#46474B" />
            <Text style={Styles.detalles_valores}>{props.temperatura}</Text>
            <Text style={Styles.detalles_box_text}>Temperatura</Text>
        </View>
        <View style={Styles.detalles_box}>
            <Icon name="eyedropper" size={20} color="#46474B" />
            <Text style={Styles.detalles_valores}> {props.ph}</Text>
            <Text style={Styles.detalles_box_text}>pH</Text>
        </View>
        <View style={Styles.detalles_box}>
            <Icon name="birthday-cake" size={20} color="#46474B" />
            <Text style={Styles.detalles_valores}>{props.longevidad}</Text>
            <Text style={Styles.detalles_box_text}>Longevidad</Text>
        </View>
        <View style={Styles.detalles_box}>
            <Icon5 name="ruler" size={20} color="#46474B" />
            <Text style={Styles.detalles_valores} numberOfLines={1} ellipsizeMode="tail">{props.tamaño_joven_adulto}</Text>
            <Text style={Styles.detalles_box_text}>Tamaño</Text>
        </View>

    </View>
)

const PecesItem = (props) =>(
    <View key={props.id} style={Styles.container}>
        <TouchableOpacity onPress={() => handlePress(props.id)} style={Styles.button_container}>
        <View style={{flexDirection:"row"}}>
            <Image source={require('../images/GuppyEndler (2).jpg')} style={Styles.image}/>
            <View>
                <Text  style={Styles.strong}>{props.nombre_comun}</Text>
                <Text numberOfLines={1} ellipsizeMode="tail" style={Styles.nombre_cientifico}>{'('+props.nombre_cientifico+')'}</Text>
            </View>
        </View>
        <Detalles {...props}/>

        </TouchableOpacity>
    </View>
)

const Styles = StyleSheet.create({
    container: {
        padding:0,
        paddingLeft:15,
        paddingRight:15,
        width:"100%",
    },
    button_container:{
        backgroundColor:"#CEF2FE",
        padding:15,
        borderRadius:10,
        width:"100%",
        marginTop:20
    },
    strong:{
        fontSize:17,
        fontWeight:"bold",
        color:"#2C318C",
        paddingRight:7
    },
    nombre_cientifico:{
        fontSize:17,
        fontStyle:"italic",
        paddingBottom:5,
        color:"#4D59B7"
    },
    detalles_container:{
        flexDirection:"row", 
        justifyContent:"space-around",
        paddingTop:10
    },
    detalles_box:{
        alignItems:"center",
        maxWidth:"100%"
    },
    detalles_valores:{
        color:"#FF6347"  
    },
    detalles_box_text:{
        fontWeight:"bold",
        color:"#4CAF50"
    },
    image: {
        width: 50,
        height: 50,
        marginRight:10,
        borderRadius:50,
        resizeMode: "cover", // Puedes ajustar el modo de redimensionamiento según tus necesidades
      },
})

export default PecesItem