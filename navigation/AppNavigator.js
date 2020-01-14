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
    },
    Feed: {
        screen: Feed,
    },
    Profile: {
        screen: Profile,
    }
})

//Функция контейнер, в которую мы передаем нам ToolBar
export default createAppContainer(AppNavigator) //Готовимся принять эту функцию в App.js