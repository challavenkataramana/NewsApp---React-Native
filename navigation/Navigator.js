import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import AllNews from "../screens/AllNews";
import NewsItem from "../screens/NewsItem";
import LatestNews from "../screens/LatestNews";
import { AppScreens, AppStackContainers } from "../utils/constants";
import Icon from "react-native-vector-icons/MaterialIcons";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const NavigationController = () => {
  return (
    <NavigationContainer>
      <TabNavigators />
    </NavigationContainer>
  );
};

const TabNavigators = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        options={{
          tabBarIcon: (props) => <Icon name="new-releases" {...props} />,
        }}
        name={AppStackContainers.LatestNewsStack}
        component={LatestNewsStack}
      />
      <Tab.Screen
        options={{
          tabBarIcon: (props) => <Icon name="newspaper" {...props} />,
        }}
        name={AppStackContainers.AllNewsStack}
        component={AllNewsStack}
      />
    </Tab.Navigator>
  );
};

const AllNewsStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={AppScreens.AllNews} component={AllNews} />
      <Stack.Screen name={AppScreens.NewsItem} component={NewsItem} />
    </Stack.Navigator>
  );
};

const LatestNewsStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={AppScreens.LatestNews} component={LatestNews} />
      <Stack.Screen name={AppScreens.NewsItem} component={NewsItem} />
    </Stack.Navigator>
  );
};

export default NavigationController;
