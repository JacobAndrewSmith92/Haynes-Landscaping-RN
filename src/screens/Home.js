import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, Button, Alert } from 'react-native';

import Image1 from '../images/landscape-architect.png';

export default class Home extends Component {

  render() {

    return (
      
      <View style={styles.container}>
        <Image source={Image1} style={styles.image1} />
        <View>
          <View>
            <Button onPress={() => this.props.navigation.navigate('Services')} title="Services"/>
          </View>
          <View>
            <Button onPress={() => this.props.navigation.navigate('Portfolio')} title="Portfolio"/>
          </View>
          <View>
            <Button onPress={() => this.props.navigation.navigate('GetAQuote')} title="Get A Quote"/>
          </View>
          <Button onPress={() => this.props.navigation.navigate('ContactUs')} title="Contact Us"/>
          <Button onPress={() => this.props.navigation.navigate('Settings')} title="⚙"/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    // backgroundColor: 'pink',
  },
  image1: {
    width: 500,
    height: 300,
  },
  main: {
    margin: 10,
    borderColor: 'black',
    borderWidth: 1
  },
  cardOne: {
    borderWidth: 1,
    borderColor: 'red'
  },
  title: {
    fontSize: 18,
    fontWeight: '900'
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  servicesBtn: {
    borderWidth: 1,
    borderColor: '#000',
    borderStyle: 'solid',
  },
});

