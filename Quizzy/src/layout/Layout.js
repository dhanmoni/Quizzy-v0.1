
import React from 'react'
import {connect} from 'react-redux'
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as Screens from '../screens'
import Icon from 'react-native-vector-icons/FontAwesome';


const Tab = createBottomTabNavigator();

const AuthStack = createNativeStackNavigator()

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#fff'
  },
};

const tabScreenOptions = {
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
    tabBarHideOnKeyboard: true
    
}

const authScreenOptions = {
  
  headerShown: false
}

const Layout = (props) => {

  console.log(props.auth.loggedIn)

  if(props.auth.loggedIn == false) {
    return (

        <NavigationContainer theme={MyTheme}>
          <AuthStack.Navigator screenOptions={authScreenOptions}>
            <AuthStack.Screen name="Auth" component={Screens.AuthScreen} />
          </AuthStack.Navigator>
        </NavigationContainer>
      )
  } else {

    
    return (
      <NavigationContainer theme={MyTheme}>
      <Tab.Navigator 
        screenOptions={tabScreenOptions}>
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
}

const mapStateToProps = (state) => {
  return {
      auth: state.auth
    }
};


export default connect(mapStateToProps)(Layout);