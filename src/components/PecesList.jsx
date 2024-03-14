import React from "react";
import { FlatList } from "react-native";
import infoPeces from '../data/peces_informacion.js';
import PecesItem from "./PecesItem.jsx";

const PecesList = () =>{
    return(
        <FlatList data={infoPeces} 
        /* ItemSeparatorComponent={() => <Text></Text>}  */
        renderItem={({ item: info }) => (
            <PecesItem {...info}/>
        )}>
        </FlatList>
        
    )
}

export default PecesList