import React from 'react';
import { useHistory } from "react-router-dom";

export const Home = ({ user }) => {
	let history = useHistory();
	const logged = (!user || !user.isLogged) && history.replace('/')
	return (
		<div>Home</div>
	)
}