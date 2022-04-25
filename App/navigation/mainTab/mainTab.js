import React from 'react';
import {Image, Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Home from '../../screens/Home';
import Fovorites from '../../screens/Favorites';

import home from '../../assets/icons/home.png';
import home_2 from '../../assets/icons/home-2.png';
import favorite from '../../assets/icons/favorite-2.png';
import favorite_2 from '../../assets/icons/favorite.png';

import ROUTES from '../../constants/routes';
import styles from './styles';

const Tab = createBottomTabNavigator();

const MainTab = () => (
  <Tab.Navigator
    screenOptions={{
      headerShown: false,
      tabBarStyle: styles.container,
      screenContainerStyle: styles.container,
      tabBarActiveBackgroundColor: null,
      tabBarItemStyle: {
        marginBottom: 2,
        marginTop: 6,
      },
    }}
    initialRouteName={ROUTES.HOME}>
    <Tab.Screen
      name={ROUTES.HOME}
      component={Home}
      options={{
        tabBarLabel: ({focused}) => (
          <Text style={focused ? styles.activeLabelStyle : styles.labelStyle}>
            Home
          </Text>
        ),
        tabBarIcon: ({focused}) => (
          <Image source={focused ? home : home_2} style={styles.icon} />
        ),
      }}
    />
    <Tab.Screen
      name={ROUTES.FAVORITES}
      component={Fovorites}
      options={{
        tabBarLabel: ({focused}) => (
          <Text style={focused ? styles.activeLabelStyle : styles.labelStyle}>
            Favorites
          </Text>
        ),
        tabBarIcon: ({focused}) => (
          <Image source={focused ? favorite_2 : favorite} style={styles.icon} />
        ),
      }}
    />
  </Tab.Navigator>
);

export default MainTab;
