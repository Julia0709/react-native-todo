import React, { Component } from 'react';
import { Text, TextInput, TouchableOpacity, View, StyleSheet } from 'react-native';

import Routes from './screens/Routes';

export default class App extends React.Component {
	render() {
		return (
			<View style={styles.container}>
				<Routes />
			</View>
		);
	}
}

const styles = {
	container: {
		flex: 1,
	},
};
