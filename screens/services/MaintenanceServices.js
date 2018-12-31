import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default class MaintenanceServices extends Component {
  render() {
    return (
      <View>
        <Text>MAINTENANCE</Text>
        <Button onPress={() => this.props.navigation.navigate('Home')} title="🏠"/>
      </View>
    )
  }
};