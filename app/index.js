import React, { Component } from 'react'
import { Text, TextInput, TouchableOpacity, View, StyleSheet } from 'react-native'

import moment from 'moment'
import * as firebase from 'firebase';

import Routes from './screens/Routes';

const config = {
    // Initialize Firebase
    apiKey: "AIzaSyC4SOmmUQMK8tBdFM85I1A8kJPhtCruDFY",
    authDomain: "todo-app-78f8b.firebaseapp.com",
    databaseURL: "https://todo-app-78f8b.firebaseio.com",
    projectId: "todo-app-78f8b",
    storageBucket: "",
    messagingSenderId: "82377839508"
};
firebase.initializeApp(config);

export default class App extends React.Component {
 
  render() {
 
    return (
        <View style={{flex: 1}}>
            <Routes />
        </View>
     )
  }
};