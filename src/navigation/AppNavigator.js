// npm dependencies
import React from 'react';
import { Button, TouchableOpacity } from 'react-native';
import {createStackNavigator, createSwitchNavigator, createAppContainer } from 'react-navigation';

// component imports
import Home from '../screens/Home';
import Portfolio from '../screens/portfolio/Portfolio';
import Services from '../screens/services/Services';
import Maintenance from '../screens/services/MaintenanceServices';
import Irrigation from '../screens/services/IrrigationServices';
import Enhancements from '../screens/services/EnhancementServices';
import GetAQuote from '../screens/GetAQuote';
import ContactUs from '../screens/ContactUs';
import Settings from '../screens/Settings';
import AuthenticationNavigator from '../authentication/AuthenticationNavigator';

const AppStack = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: ({ navigation }) => ({
      title: `HAYNE'S 🌻`,
      headerStyle: {
        backgroundColor: 'pink',
      },
      headerRight: (
        <Button onPress={() => navigation.navigate('Auth')} title='Logout'/>
      )
    })
  },
  Services: {
    screen: Services,
    navigationOptions: () => ({
      title: 'Our Core Services',
    })
  },
  Maintenance: {screen: Maintenance},
  Irrigation: {screen: Irrigation}  ,
  Enhancements: {screen: Enhancements},
  ContactUs: {screen: ContactUs},
  Settings: {screen: Settings},
  GetAQuote: {
    screen: GetAQuote,
    navigationOptions: () => ({
      title: 'Your Quote'
    })
  },
  Portfolio: {
    screen: Portfolio,
    navigationOptions: () => ({
      title: 'Our Portfolio',
      headerLeft: null
    })
  }
});



const AppContainer = createAppContainer(createSwitchNavigator(
  {
    Auth: AuthenticationNavigator,
    Home: AppStack
  },
))

export default AppContainer
