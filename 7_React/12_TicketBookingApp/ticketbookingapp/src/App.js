import logo from './logo.svg';
import './App.css';
import User from './User';
import Guest from './Guest';
import { useState } from 'react';

function App() {
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	if (isLoggedIn){
		return(
			<User setIsLoggedIn={setIsLoggedIn}/>
		)
	}
	else{
		return (
			<Guest setIsLoggedIn={setIsLoggedIn}/>
		)
	}
}

export default App;
