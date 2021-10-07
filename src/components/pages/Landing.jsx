import React from 'react';
import { useHistory } from "react-router-dom";

export const Landing = ({ user }) => {
	let history = useHistory();
	const logged = user && user.isLogged && history.replace('/home')
	
	return (
		<div>Landing</div>
	)
}