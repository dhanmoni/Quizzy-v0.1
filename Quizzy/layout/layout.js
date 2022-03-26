
import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/Home/HomeScreen';
import SearchScreen from '../screens/Search/SearchScreen';
import PostScreen from '../screens/Post/PostScreen';
import NotificationScreen from '../screens/Notification/NotificationScreen';
import ProfileScreen from '../screens/Profile/ProfileScreen';

import Icon from 'react-native-vector-icons/FontAwesome';


const Tab = createBottomTabNavigator();

const screenOptions = {
    headerTitle: 'Quizzy',
    headerTitleAlign:'center',
    headerStyle:{
        backgroundColor:'#5350d2',
    },
    headerTitleStyle:{
        fontSize:26
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
            component={HomeScreen} 
            options={{
                tabBarIcon: ({focused }) => (
                  <Icon name="home" color={ focused? '#5350d2': '#4c5561'} size={25} />
                ),
              }}
        />
        <Tab.Screen 
            name="Search" 
            component={SearchScreen} 
            options={{
                tabBarIcon: ({focused }) => (
                  <Icon name="search" color={ focused? '#5350d2': '#4c5561'} size={25} />
                ),
              }}
        />
        <Tab.Screen 
            name="Post" 
            component={PostScreen} 
            options={{
                tabBarIcon: ({focused }) => (
                  <Icon name="plus" color={ focused? '#5350d2': '#4c5561'} size={25} />
                ),
              }}
        />
        <Tab.Screen 
            name="Notification" 
            component={NotificationScreen} 
            options={{
                tabBarIcon: ({focused }) => (
                <Icon name="bell" color={ focused? '#5350d2': '#4c5561'} size={25} />
                ),
            }}
        />
        <Tab.Screen 
            name="Profile" 
            component={ProfileScreen}
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