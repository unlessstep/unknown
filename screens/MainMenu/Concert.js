import React from 'react'
import { View, StyleSheet, Alert, TouchableOpacity } from 'react-native'
import { Dimensions } from 'react-native'
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
  


const Concert = () => {
    const { width, height } = Dimensions.get('window');
    var height_svg = parseInt(height / 3);
    var width_svg = parseInt(width / 3);
    var poins_Consert = "M0,0 L" + width + ",0 L"+ width +","+ height_svg +" C"+ width + "," + height_svg + " " + parseInt(width/4*3) + "," + height_svg + " " + parseInt(width/2) +"," + height_svg*1.5 + " C" + parseInt(width/2) +"," + height_svg*1.5 + " " + parseInt(width/4) + "," + height_svg*2 + " " + "0," + height_svg*2 + " L 0,0";
    var x_con = parseInt(width/2) + "";
    var y_con = parseInt(height/4) + "";
    return (
        <G onPress = { () => {Alert.alert('Добро пожаловать')}}>
        <Defs>
            <LinearGradient id="grad_Concert" x1="0%" y1="0%" x2="100%" y2="0%">
                <Stop offset="0" stopColor="rgb(255,255,0)" stopOpacity="8%" />
                <Stop offset="1" stopColor="rgb(255,71,71)" stopOpacity="45%" />
            </LinearGradient>
        </Defs>
        <Path d={poins_Consert} fill="url(#grad_Concert)" stroke="none" stroke-width="5"  />
        <Text
                    fill="none"
                    stroke="purple"
                    fontSize="50"
                    fontWeight="bold"
                    x= {x_con}
                    y= {y_con}
                    textAnchor="middle">
                    Concerts
        </Text>
        </G>
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