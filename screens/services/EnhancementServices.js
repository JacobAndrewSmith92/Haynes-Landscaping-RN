import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default class EnhancementServices extends Component {
  render() {
    return (
      <View>
        <Text>ENHANCEMENTS</Text>
        <Button onPress={() => this.props.navigation.navigate('Home')} title="🏠"/>
      </View>
    )
  }
};