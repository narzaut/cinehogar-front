
import React, { useContext } from 'react'
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { Landing } from './components/pages/Landing/Landing'
import { Home } from './components/pages/Home/Home'
import { NotFound } from './components/pages/NotFound';
import { GlobalContext } from './context/GlobalState';
import { Login } from './components/pages/Login'
function App() {
  const { userState } = useContext(GlobalContext)
	const [user, setUser] = userState
	return (
    <Router>
			<Switch>
				<Route exact path='/'>
					<Landing user={user}/>	
				</Route>
				<Route exact path='/home'>
					<Home user={user}/>		
				</Route>
				<Route exact path='/login'>
					<Login />
				</Route>
				<Route>
					<NotFound/>	
				</Route>
			</Switch>
		</Router>
  );
}

export default App;
