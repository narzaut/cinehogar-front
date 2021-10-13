import React, { createContext, useState } from 'react';

export const GlobalContext = createContext()

export const Provider = (props) => {
	const [user, setUser] = useState() 
	return (
		<GlobalContext.Provider value={{ userState: [user, setUser] }}>
			{props.children}
		</GlobalContext.Provider>
	)
}