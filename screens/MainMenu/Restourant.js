import React from 'react'
import { View, Text, StyleSheet, Alert, TouchableOpacity } from 'react-native'
// TouchableOpacity это зона нажатия, конкретно в этом примере, я наложил зону нажатия на весь ораньжевый блок

// в onPress мы передаем функцию и заставляем ее что то выполнить, в данном примере alert

const Restourant = () => {
    return (
        <TouchableOpacity style = { styles.container } onPress={ () => {Alert.alert('Нажми на розовую')}}>
            <Text> Restourants </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '50%',
        backgroundColor: 'orange'
    }
})


export default Restourant