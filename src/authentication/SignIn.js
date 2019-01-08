// SignInScreen.js

import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, Image } from 'react-native';
import { Button as RNEButton } from 'react-native-elements';


import MainLogo from '../images/main-logo.png';

export default class SignInScreen extends Component {

  // Fakes user authentication into the app
  onSubmitSignIn = () => { this.props.navigation.navigate('Home') }
  onSubmitSignUp = () => { this.props.navigation.navigate('Home') }

  render() {
    return (
      <View style={styles.container}>
          <Image source={MainLogo} style={styles.mainLogo} />
          <TextInput style={styles.inputs} placeholder='Email'/>
          <TextInput style={styles.inputs} secureTextEntry={true} placeholder='Password'/>
        <View style={styles.buttonContainer}>
          <RNEButton style={styles.button} title='Sign In' onPress={this.onSubmitSignIn}/>
          <RNEButton style={styles.button} title='Sign Up' onPress={this.onSubmitSignUp} />
        </View>
      </View>
    )
  }
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  inputs: {
    height: 50,
    fontSize: 30,
    margin: 10,
    borderColor: 'black',
    borderWidth: 2,
    width: 350
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  mainLogo: {
    marginTop: 100,
    marginBottom: 50
  },
  button: {
    margin: 5
  }
})