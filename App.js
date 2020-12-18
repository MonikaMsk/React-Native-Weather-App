import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Home from './Home'
import Weather from './Weather'


const screens = {
    Home: {
        screen: Home
    },

    Weather: {
        screen: Weather,
    }

}

const App = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerStyle:{ backgroundColor: "#d6efff"}
    },
});


export default createAppContainer(App);





