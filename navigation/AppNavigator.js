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
            tabBarIcon: ({tintColor}) => (
                <Icon
                    name="stars"
                    color={'grey'}
                    size={35}
                />
            )
        })
    },
    Feed: {
        screen: Feed,
        navigationOptions: () => ({
            tabBarIcon: ({ focused }) => {
                return (
                    <Image 
                        source={require('../pictures/events.png')}
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
                return (
                    <Image 
                        source={require('../pictures/profile.png')}
                        style={{width: 35, height: 35}}
                    />
                )
            }
        })
    }
})

//Функция контейнер, в которую мы передаем нам ToolBar
export default createAppContainer(AppNavigator) //Готовимся принять эту функцию в App.js