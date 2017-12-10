import React, { Component } from 'react';
import { Button, Text, TextInput, View, StyleSheet } from 'react-native';

import firebase from '../models/Firebase';



export default class LoginPage extends Component {
	state = {
		email: '',
		password: ''
	};
	handleLogin = () => {
		console.log('Log in ---------------------------------------');
		const { email, password } = this.state;
		firebase
			.auth()
			.signInWithEmailAndPassword(email, password)
			.catch(() => firebase.auth().createUserWithEmailAndPassword(email, password))
			.then(() => this.props.navigation.navigate('TodoMain'))
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
			});
	};
	render() {
		// TODO: remove later
		firebase.auth().onAuthStateChanged((user) => {
			if (user != null) {
				console.log(user);
				this.props.navigation.navigate('TodoMain');
			}
		});
		return (
			<View style={styles.container}>
				<Text style={styles.titleText}>Login Page</Text>
				<TextInput
					style={styles.textInput}
					placeholder="email"
					onChangeText={(email) => this.setState({ email })}
				/>
				<TextInput
					style={styles.textInput}
					placeholder="password"
					secureTextEntry
					onChangeText={(password) => this.setState({ password })}
				/>

				<Button title="Login or Sing Up" onPress={() => this.handleLogin()} />
			</View>
		);
	};
};

const styles = {
	container: {
		flex: 1,
		alignItems: 'center'
	},
	titleText: {
		fontSize: 24,
		padding: 10,
		marginTop: 10,
		marginBottom: 10
	},
	textInput: {
		width: '80%',
		backgroundColor: '#FFFFFF',
		padding: 5,
		marginBottom: 10
	},
};
