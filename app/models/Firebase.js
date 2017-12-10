import * as firebase from 'firebase';

const firebaseConfig = {
	apiKey: 'AIzaSyC4SOmmUQMK8tBdFM85I1A8kJPhtCruDFY',
	authDomain: 'todo-app-78f8b.firebaseapp.com',
	databaseURL: 'https://todo-app-78f8b.firebaseio.com',
	projectId: 'todo-app-78f8b',
	storageBucket: '',
	messagingSenderId: '82377839508',
};
firebase.initializeApp(firebaseConfig);

export default firebase;