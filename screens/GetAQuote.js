import React, { Component } from 'react';
import { View, Text, Button, StyleSheet, TextInput } from 'react-native';
import { SearchBar, Input } from 'react-native-elements';




export default class GetAQuote extends Component {
  render() {
    return (
      <View>
        <Input placeholder="Name"/>
        <Input placeholder="Company Name"/>
        <Input placeholder="Street Address"/>
        <Input placeholder="Phone Number"/>
        <Button onPress={() => this.props.navigation.navigate('Home')} title="🏠"/>
      </View>
    )
  }
};