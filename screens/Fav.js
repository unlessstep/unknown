import React from 'react'
import { View, Text, StyleSheet } from 'react-native'


const Fav = () => {
    return (
        <View style = { styles.container }>
            <Text> Favorite </Text>
        </View>
    )
}

//стили
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default Fav