import React, { Compornent, Component } from 'react';
import { View, Route } from 'react-native';
import { StackNavigator } from 'react-navigation';

import LoginPage from './LoginPage';
import TodoMain from './TodoMain';

const routes = StackNavigator({
	LoginPage: {
		screen: LoginPage
	},
	TodoMain: {
		screen: TodoMain
	}
});

export default routes;