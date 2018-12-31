import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import Home from './screens/Home';
import Services from './screens/services/Services';
import Maintenance from './screens/services/MaintenanceServices';
import Irrigation from './screens/services/IrrigationServices';
import Enhancements from './screens/services/EnhancementServices';
import ContactUs from './screens/ContactUs';
import Settings from './screens/Settings';


const AppNavigator = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: () => ({
      title: "Hayne's Landscaping & Irrigation",
    }),
  },
  Services: {screen: Services},
  Maintenance: {screen: Maintenance},
  Irrigation: {screen: Irrigation}  ,
  Enhancements: {screen: Enhancements},
  ContactUs: {screen: ContactUs},
  Settings: {screen: Settings}
});

const AppContainer = createAppContainer(AppNavigator)


export default class App extends Component {


  render() {
    return (
        <AppContainer />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'orange'
  }
})