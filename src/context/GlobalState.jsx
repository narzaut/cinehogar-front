import React, { createContext, useState } from 'react';

export const GlobalContext = createContext()

export const Provider = (props) => {
	const [user, setUser] = useState({
		id: 0,
		name: 'admin',
		password: 'admin',
		roles: ["admin, user"],
		isLogged: false
	}) 
	return (
		<GlobalContext.Provider value={{ userState: [user, setUser] }}>
			{props.children}
		</GlobalContext.Provider>
	)
}