import React from 'react';
import { useHistory } from "react-router-dom";

export const Home = ({ user, token }) => {
	let history = useHistory();
	const logged = (!user || !token) && history.replace('/')
	return (
		<div>Home</div>
	)
}