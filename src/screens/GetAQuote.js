import React, { Component } from 'react';
import { View, Text, Button, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';
import { Button as RNEButton } from 'react-native-elements';

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
    const { name, company, address, phone, email } = this.state;
    const firstName = this.state.name.split(' ')
    const url = 'http:localhost:3000/quotes/'
    
    const collection = {
      full_name: name, 
      company,
      address,
      phone,
      email
    };
    APIManager.postAQuote(url, collection)
      .then(res => res.json())
      .then(response => console.warn('success:', response))
      .catch(err => console.log('ERR', err))
  
    Alert.alert(`Thanks ${firstName[0]}! A representative will be in touch shortly!`)
    this.props.navigation.navigate('Home')
  }


  render() {
    return (
      <View style={styles.allForm}>
        <TextInput style={styles.inputField} textContentType={'name'} placeholder='Full Name' onChangeText={(text) => this.handlingInputToState(text, 'name')}/>
        <TextInput style={styles.inputField} textContentType={'organizationName'} placeholder='Company Name' onChangeText={(text) => this.handlingInputToState(text, 'company')}/>
        <TextInput style={styles.inputField} textContentType={'fullStreetAddress'} placeholder='Street Address' onChangeText={(text) => this.handlingInputToState(text, 'address')}/>
        <TextInput style={styles.inputField} textContentType={'telephoneNumber'} placeholder='Phone Number'onChangeText={(text) => this.handlingInputToState(text, 'phone')}/>
        <TextInput style={styles.inputField} textContentType={'emailAddress'} placeholder='Email' onChangeText={(text) => this.handlingInputToState(text, 'email')}
          />
        <TouchableOpacity>
          <RNEButton title='Submit' onPress={() => this.submitQuoteForm()} />
        </TouchableOpacity>
        <Button onPress={() => this.props.navigation.navigate('Services')} title='🏠'/>
      </View>
    )
  }
};

const styles = StyleSheet.create({
  inputField: {
    height: 50,
    fontSize: 30,
    margin: 10,
    color: 'green',
  },
  allForm: {
    flex: 1,
  }
})