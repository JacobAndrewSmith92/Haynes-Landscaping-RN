import React, { Component } from 'react';
import {createStackNavigator, createSwitchNavigator } from 'react-navigation';

import SignIn from './SignIn';
import ForgotPassword from './ForgotPassword';



const AuthenticationNavigator = createStackNavigator({
  SignIn: {
    screen: SignIn,
    navigationOptions: () => ({
      headerStyle: {
        backgroundColor: '#146C00'
      }
    })
  },
  ForgotPassword: ForgotPassword
})

export default class AuthenticationScreen extends Component {
  static router = AuthenticationNavigator.router

  render() {
    return (
      <AuthenticationNavigator navigation={this.props.navigation} />
    )
  }
}

