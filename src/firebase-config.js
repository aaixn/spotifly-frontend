import { initializeApp } from 'firebase/app'

const firebaseConfig = {
	apiKey: process.env.REACT_APP_API_KEY,
	authDomain: "spotifly-2ef38.firebaseapp.com",
	projectId: "spotifly-2ef38",
	storageBucket: "spotifly-2ef38.appspot.com",
	messagingSenderId: "802715144341",
	appId: "1:802715144341:web:e053dc5060af3f26614b9c"
}

export const app = initializeApp(firebaseConfig)