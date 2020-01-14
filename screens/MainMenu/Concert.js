import React from 'react'
import { View, Text, StyleSheet, Alert, TouchableOpacity } from 'react-native'


const Concert = () => {
    return (
        <TouchableOpacity style = { styles.container } onPress = { () => {Alert.alert('КТО ПРОЧИТАЛ ТОТ СДОХНЕТ')} }>
            <Text> Concerts </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: '50%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FF369B'
    },

})

export default Concert