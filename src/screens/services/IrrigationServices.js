import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default class IrrigationServices extends Component {
  render() {
    return (
      <View>
        <Text>IRRIGATION</Text>
        <Button onPress={() => this.props.navigation.navigate('Home')} title="🏠"/>
      </View>
    )
  }
};