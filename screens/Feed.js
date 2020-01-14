import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

//Это два компонента из MainMenu, ораньжевый и розовый блок
import Restourant from "./MainMenu/Restourant";
import Concert from "./MainMenu/Concert";


//Компоненты мы передаем как HTML елементы
const Feed = () => {
    return (
        <View style = { styles.container }>
            <Restourant />
            <Concert />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default Feed