import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from 'react-native-vector-icons/Feather';
import LoginIcon from 'react-native-vector-icons/MaterialIcons'
import DetailsIcon from 'react-native-vector-icons/MaterialIcons'
import Home from "../mainApp/Home";
import Menu from "../mainApp/Menu";
import Details from "../mainApp/Details";
import Login from "../mainApp/Login";

const Tab = createBottomTabNavigator();

const MainTabNavigator = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;
        if (route.name === "Home") {
          iconName = focused ? "home" :
            "home";
        } else if (route.name === "Menu") {
          iconName = "menu";
        }
        else if (route.name === "Login") {
          iconName = "login";
          return <LoginIcon name={iconName} size={30} color="green" />
        }
        else if (route.name === "Details") {
          iconName = "summarize";
          return <DetailsIcon name={iconName} size={30} color="green" />
        }
        return <Icon name={iconName} size={30} color="green" />
      },
      tabBarActiveTintColor: "tomato",
      tabBarActiveBackgroundColor: "#FFE6F7"
    })}
  >
    <Tab.Screen name="Home" component={Home} />
    <Tab.Screen name="Menu" component={Menu} />
    <Tab.Screen name="Details" component={Details} />
    <Tab.Screen name="Login" component={Login} />
  </Tab.Navigator>
);

export default MainTabNavigator;