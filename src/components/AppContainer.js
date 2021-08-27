import React, { useState } from 'react';

import Header from '../components/Header';
import Main from '../pages/main'
import Login from '../pages/login'

const AppContainer = () => {
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	const loginHandler = (email, password) => {
		// We should of course check email and password
		// But it's just a dummy/ demo anyways
		setIsLoggedIn(true);
	};

	const logoutHandler = () => {
		setIsLoggedIn(false);
	};

	return (
		<>
			<Header isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
			<main>
				{!isLoggedIn && <Login onLogin={loginHandler} />}
				{isLoggedIn && <Main onLogout={logoutHandler} />}
			</main>
		</>
	);
};

export default AppContainer;
