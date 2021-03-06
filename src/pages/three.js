import React, { useState } from 'react';

import AddUser from '../components/Users/AddUser';
import UsersList from '../components/Users/UsersList';

const Three = () => {
	const [usersList, setUsersList] = useState([]);

	const addUserHandler = (userName, userAge) => {
		setUsersList((prevUsersList) => {
			return [
				...prevUsersList,
				{ name: userName, age: userAge, id: Math.random().toString() },
			];
		});
	};
	return (
		<>
			<AddUser onAddUser={addUserHandler} />
			<UsersList users={usersList} />
		</>
	);
};

export default Three;
