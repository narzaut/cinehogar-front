import React from 'react';
import { useHistory } from "react-router-dom";
import { Header } from './Header'

export const Landing = ({ user }) => {
	let history = useHistory();
	const logged = user && user.isLogged && history.replace('/home')
	
	return (
		<div className='font header h-screen glass darker-glass shadow-2xl'>
			<Header />
		</div>
	)
}