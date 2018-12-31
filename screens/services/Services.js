import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default class Services extends Component {
  render() {
    return (
      <View>
        <Button onPress={() => this.props.navigation.navigate('Maintenance')} title="Maintenance"/>
        <Button onPress={() => this.props.navigation.navigate('Irrigation')} title="Irrigation"/>
        <Button onPress={() => this.props.navigation.navigate('Enhancements')} title="Enhancements"/>
        <Button onPress={() => this.props.navigation.navigate('Home')} title="🏠"/>
      </View>
    )
  }
};


const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: '#000',
    borderStyle: 'solid'
  },
  title: {
    fontSize: 18
  }
})

