import { createStackNavigator, createAppContainer } from "react-navigation"
import HomeScreen from '../pages/Home';

const appNavigator = createStackNavigator({
    Home: HomeScreen
})

export default createAppContainer(appNavigator);


