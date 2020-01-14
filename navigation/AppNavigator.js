import React, {Component} from 'react';
import { Icon } from 'react-native-elements'
import { Image } from 'react-native-elements'
import { createAppContainer } from 'react-navigation' //Подключаем некий контейнер в который мы позже засунем наш тулбар
import { createBottomTabNavigator } from 'react-navigation-tabs' //Функция которая создает Тулбар

import Feed from "../screens/Feed"
import Fav from "../screens/Fav"
import Profile from "../screens/Profile"

const AppNavigator = createBottomTabNavigator({ //Создаем тулбар
    //Название кнопки
    Fav: {
        //screen отвечает за действие после нажатия, в данном примере он открывает страницу Fav
        screen: Fav,
        navigationOptions: () => ({
            tabBarIcon: ({ focused }) => {
                const image = focused
                ? require('../pictures/fave_active.png')
                : require('../pictures/fave.png')
                return (
                    <Image 
                        source={image}
                        style={{width: 35, height: 35}}
                    />
                )
            }
        })
    },
    Feed: {
        screen: Feed,
        navigationOptions: () => ({
            tabBarIcon: ({ focused }) => {
                const image = focused
                ? require('../pictures/events_active.png')
                : require('../pictures/events.png')
                return (
                    <Image 
                        source={image}
                        style={{width: 35, height: 35}}
                    />
                )
            }
        })
    },
    Profile: {
        screen: Profile,
        navigationOptions: () => ({
            tabBarIcon: ({ focused }) => {
                const image = focused
                ? require('../pictures/profile_active.png')
                : require('../pictures/profile.png')
                return (
                    <Image 
                        source={image}
                        style={{width: 35, height: 35}}
                    />
                )
            }
        })
    }
},
);

//Функция контейнер, в которую мы передаем нам ToolBar
export default createAppContainer(AppNavigator) //Готовимся принять эту функцию в App.js