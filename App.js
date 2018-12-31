import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import Home from './screens/Home';
import Services from './screens/services/Services';
import Maintenance from './screens/services/MaintenanceServices';
import Irrigation from './screens/services/IrrigationServices';
import Enhancements from './screens/services/EnhancementServices';
import GetAQuote from './screens/GetAQuote';
import ContactUs from './screens/ContactUs';
import Settings from './screens/Settings';


const AppNavigator = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: () => ({
      title: `Hayne's Landscaping & Irrigation`,
      headerStyle: {
        backgroundColor: 'pink',
      }
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
  GetAQuote: {screen: GetAQuote }
});



const AppContainer = createAppContainer(AppNavigator)


export default class App extends Component {
  static navigationOptions = {
    title: 'BLAH'
  }

  render() {
    return (
        <AppContainer />
    )
  }
}
