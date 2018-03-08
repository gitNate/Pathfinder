import { db } from './firebase'
import { auth } from './firebase'

// User API
export const doCreateUser = (id, username, email) =>
	db.ref(`users/${id}`).set({
		username,
		email,
	})

export const onceGetUsers = () => {
	db.ref('users').once('value')
}

export const onceGetCharacters = () => {
	var userID = auth.currentUser.uid;
	console.log('db', userID);
	console.log(db.ref('users').child(userID).once('value').then(snapshot => snapshot.val()))
	console.log(db.ref('users').child(userID).child('characters'))
	
	db.ref('users').child(auth.currentUser.uid).child('characters').on('value')
}

	
