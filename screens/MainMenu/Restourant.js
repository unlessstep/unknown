import React from 'react'
import { View, StyleSheet, Alert, TouchableOpacity } from 'react-native'
import Svg, {
    Circle,
    Ellipse,
    G,
    TSpan,
    TextPath,
    Path,
    Text,
    Polygon,
    Polyline,
    Line,
    Rect,
    Use,
    Image,
    Symbol,
    Defs,
    LinearGradient,
    RadialGradient,
    Stop,
    ClipPath,
    Pattern,
    Mask,
  } from 'react-native-svg';
import { Dimensions } from 'react-native'

// TouchableOpacity это зона нажатия, конкретно в этом примере, я наложил зону нажатия на весь ораньжевый блок

// в onPress мы передаем функцию и заставляем ее что то выполнить, в данном примере alert

const Restourant = () => {
    const { width, height } = Dimensions.get('window');
    var height_svg = parseInt(height / 3);
    var width_svg = parseInt(width / 3);
    var poins_Resto = "M"+ width + "," + height_svg +" C"+ width + "," + height_svg + " " + parseInt(width/4*3) + "," + height_svg + " " + parseInt(width/2) +"," + height_svg*1.5 + " C" + parseInt(width/2) +"," + height_svg*1.5 + " " + parseInt(width/4) + "," + height_svg*2 + " " + "0," + height_svg*2 + " L" + 0 + "," + height + " L" + width + "," + height + " L" + width + "," + height_svg;
    var x_res = parseInt(width/2) + "";
    var y_res = parseInt(height/4*3.2) + "";
    return (
        <G onPress={ () => {Alert.alert('Добро пожаловать')}}>
            <Defs>
                    <LinearGradient id="grad_Restoran" x1="100%" y1="0%" x2="0%" y2="0%">
                        <Stop offset="0" stopColor="rgb(0,255,255)" stopOpacity="8%" />
                        <Stop offset="1" stopColor="rgb(0,117,196)" stopOpacity="100%" />
                    </LinearGradient>
                </Defs>
                <Path d={poins_Resto} fill="url(#grad_Restoran)" stroke="none" stroke-width="5"  />
                <Text
                    fill="none"
                    stroke="purple"
                    fontSize="50"
                    fontWeight="bold"
                    x= {x_res}
                    y={y_res}
                    textAnchor="middle">
                    Restourants
                </Text>
        </G>
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