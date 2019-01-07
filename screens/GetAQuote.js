import React, { Component } from 'react';
import { View, Text, Button, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';
import { Button as Button2 } from 'react-native-elements';

import validation from '../validation/FormValidation';
import APIManager from '../managers/APIManager';




export default class GetAQuote extends Component {

  constructor () {
    super();
    this.state = {
      submitted: false
    }
  }


  handlingInputToState = (text, field) => {
    this.setState({
      [field]: text
    })
  }


  submitQuoteForm = () => {
    const url = 'http:localhost:3000/quotes/'
    // const emailError = validation('email', this.state.email)
    const { name, company, address, phone, email } = this.state;
    const collection = {
      full_name: name, 
      company,
      address,
      phone,
      email
    };
    APIManager.postAQuote(url, collection)
    .then(res => res.json())
    .catch(err => console.warn('ERR'))
    .then(response => console.warn('success'))
    // Alert.alert(`Thanks ${collection.full_name}! A representative will be in touch shortly.`)
    // this.props.navigation.navigate('Settings')
  }


  render() {
    return (
      <View style={styles.allForm}>
        <TextInput style={styles.inputField} placeholder="Full Name" onChangeText={(text) => this.handlingInputToState(text, 'name')}/>
        <TextInput style={styles.inputField} placeholder="Company Name" onChangeText={(text) => this.handlingInputToState(text, 'company')}/>
        <TextInput style={styles.inputField} placeholder="Street Address" onChangeText={(text) => this.handlingInputToState(text, 'address')}/>
        <TextInput style={styles.inputField} placeholder="Phone Number"onChangeText={(text) => this.handlingInputToState(text, 'phone')}/>
        <TextInput 
          style={styles.inputField} 
          placeholder="Email" 
          onChangeText={(text) => this.handlingInputToState(text, 'email')}
          />
        <TouchableOpacity>
          <Button2 title="Submit" onPress={() => this.submitQuoteForm()} />
        </TouchableOpacity>
        <Button onPress={() => this.props.navigation.navigate('Home')} title="🏠"/>
      </View>
    )
  }
};

const styles = StyleSheet.create({
  inputField: {
    height: 50,
    fontSize: 30,
    margin: 10
  },
  allForm: {
    flex: 1,
    justifyContent: 'center'
  }
})