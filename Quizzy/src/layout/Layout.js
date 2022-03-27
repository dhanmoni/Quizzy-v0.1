
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as Screens from '../screens'
import Icon from 'react-native-vector-icons/FontAwesome';


const Tab = createBottomTabNavigator();

const screenOptions = {
    headerTitle: 'Quizzy',
    headerTitleAlign:'center', 
    headerStyle:{
        backgroundColor:'#5350d2',
    },
    headerTitleStyle:{
        fontSize:26,
        fontFamily: 'Poppins-SemiBold'
    },
    headerTintColor:'#fff',
    tabBarShowLabel: false,
    tabBarActiveTintColor: '#5350d2',
    tabBarInactiveTintColor: 'gray',
    tabBarStyle: { position: 'absolute' },
}

const Layout = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator 
        screenOptions={screenOptions}>
        <Tab.Screen 
            name="Home" 
            component={Screens.HomeScreen} 
            options={{
                tabBarIcon: ({focused }) => (
                  <Icon name="home" color={ focused? '#5350d2': '#4c5561'} size={26} />
                ),
              }}
        />
        <Tab.Screen 
            name="Search" 
            component={Screens.SearchScreen} 
            options={{
                tabBarIcon: ({focused }) => (
                  <Icon name="search" color={ focused? '#5350d2': '#4c5561'} size={25} />
                ),
              }}
        />
        <Tab.Screen 
            name="Post" 
            component={Screens.PostScreen} 
            options={{
                tabBarIcon: ({focused }) => (
                  <Icon name="plus" color={ focused? '#5350d2': '#4c5561'} size={26} />
                ),
              }}
        />
        <Tab.Screen 
            name="Notification" 
            component={Screens.NotificationScreen} 
            options={{
                tabBarIcon: ({focused }) => (
                <Icon name="bell" color={ focused? '#5350d2': '#4c5561'} size={24} />
                ),
            }}
        />
        <Tab.Screen 
            name="Profile" 
            component={Screens.ProfileScreen}
            options={{
                tabBarIcon: ({focused }) => (
                  <Icon name="user" color={ focused? '#5350d2': '#4c5561'} size={25} />
                ),
              }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default Layout