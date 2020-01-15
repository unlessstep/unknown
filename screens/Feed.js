import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Dimensions } from 'react-native'
//Это два компонента из MainMenu, ораньжевый и розовый блок
import Restourant from "./MainMenu/Restourant";
import Concert from "./MainMenu/Concert";
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
  

//Компоненты мы передаем как HTML елементы
const Feed = () => {
    const { width, height } = Dimensions.get('window');
    var height_svg = parseInt(height / 3);
    var width_svg = parseInt(width / 3);

    var poins_Consert = "M0,0 L" + width + ",0 L"+ width +","+ height_svg +" C"+ width + "," + height_svg + " " + parseInt(width/4*3) + "," + height_svg + " " + parseInt(width/2) +"," + height_svg*1.5 + " C" + parseInt(width/2) +"," + height_svg*1.5 + " " + parseInt(width/4) + "," + height_svg*2 + " " + "0," + height_svg*2 + " L 0,0";
    var poins_Resto = "M"+ width + "," + height_svg +" C"+ width + "," + height_svg + " " + parseInt(width/4*3) + "," + height_svg + " " + parseInt(width/2) +"," + height_svg*1.5 + " C" + parseInt(width/2) +"," + height_svg*1.5 + " " + parseInt(width/4) + "," + height_svg*2 + " " + "0," + height_svg*2 + " L" + 0 + "," + height + " L" + width + "," + height + " L" + width + "," + height_svg;
    var x_con = parseInt(width/2) + "";
    var y_con = parseInt(height/4) + "";
    var x_res = parseInt(width/2) + "";
    var y_res = parseInt(height/4*3.2) + "";


    return (
            <Svg  height="100%" width="100%" >
                <Concert/>
                <Restourant/>
            </Svg>
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