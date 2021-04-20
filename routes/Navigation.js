import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import HomeScreen from "../components/Home";
import AboutScreen from "../components/About";
import ProfilScreen from "../components/Profil";

const screens = {
  Home: {
    screen: HomeScreen,
  },
  AboutScreen: {
    screen: AboutScreen,
  },
  ProfilScreen: {
    screen: ProfilScreen,
  },
};

const HomeStack = createStackNavigator(screens);
export default createAppContainer(HomeStack);
