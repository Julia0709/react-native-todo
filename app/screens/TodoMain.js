import React from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, TouchableOpacity, Button } from 'react-native';
import Moment from 'moment';
import firebase from '../models/Firebase';

import Card from '../components/card.js';

export default class TodoMain extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			notes: [],
			note: ''
		};
	}
	componentDidMount() {
		console.log('ComponentDidMount -------------------------------');
		console.log(firebase.database);
		firebase.database().ref('todo').on('value', (snap) => {
			const notes = snap.val();
			this.setState([ notes ]);
		});
		console.log('state.notes: ' + this.state.notes);
	}
	render() {
		let notes = this.state.notes.map((note, key) => {
			return <Card key={key} keyval={key} note={note} onPress={() => this.deletMethod(key)} />;
		});

		return (
			<View style={styles.container}>
				<View style={styles.header}>
					<TextInput
						value={this.state.note}
						placeholderTextColor={'white'}
						style={styles.textInput}
						placeholderStyle={{ color: 'white' }}
						placeholder={' < Notes Here  '}
						onChangeText={(note) => this.setState({ note })}
					/>
					<TouchableOpacity style={styles.addButton} onPress={ () => this.handlePress() }>
						<Text style={styles.addButtonText}> + </Text>
					</TouchableOpacity>
				</View>
				<View style={styles.midContainer}>
					<ScrollView>{notes}</ScrollView>
				</View>

				<View style={styles.footer}>
					<Text style={styles.headerText}> Memos Always Help </Text>
				</View>
			</View>
		);
	}
	deletMethod(key) {
		this.state.notes.splice(key, 1);
		this.setState({ notes: this.state.notes });
		console.log('this is delete' + this.state.notes);
	}
	handlePress() {
		console.log('Todo Button pressed ----------------------------------');
		// TODO: Implement firebase connection
		if (this.state.note) {
			const firebaseRef = firebase.datebase().ref('todo').push().key;
			firebase.databese().ref('todo').child(firebaseRef).update({
				date: Moment().format('MMMM Do YYYY'),
				note: this.state.note
			});
			// this.state.notes.push({
			// 	date: Moment().format('MMMM Do YYYY'),
			// 	note: this.state.note
			// });
			this.setState({ notes: this.state.notes });
			this.setState({ note: '' });
			console.log(this.state.notes);
		}
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	header: {
		paddingBottom: 30,
		//   paddingLeft:40,
		flex: 0.8,
		width: '100%',
		backgroundColor: '#FF4200',
		justifyContent: 'center',
		alignItems: 'center',
	},
	textInput: {
		marginLeft: 40,
		marginTop: 30,
		width: '100%',
		color: 'white',
		height: 30,
		paddingLeft: 10,
		borderLeftWidth: 5,
		borderLeftColor: 'white',
	},
	headerText: {
		fontSize: 20,
		color: 'white',
		fontWeight: '600',
	},
	midContainer: {
		flex: 4,
		width: '100%',
	},
	footer: {
		backgroundColor: '#242426',
		flex: 0.5,
		flexDirection: 'row',
		width: '100%',
		justifyContent: 'center',
		alignItems: 'center',
	},
	addButton: {
		position: 'absolute',
		backgroundColor: '#ffffff',
		zIndex: 12,
		width: 60,
		height: 60,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 50,
		top: 35,
		right: 20,
		elevation: 8,
	},
	addButtonText: {
		color: '#FA0034',
		fontSize: 36,
		backgroundColor: 'transparent',
	},
});
