import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';
import { getUser } from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage';
import NewOrderPage from '../NewOrderPage/NewOrderPage';
import YourTack from '../YourTack/YourTack';
import './App.css';

const App = () => {
	const [user, setUser] = useState(getUser())
  	return (
		<main className='App'>
			{ user ?
			<>
				<NavBar user={user} setUser={setUser}/>
				<Routes>
					<Route path='/orders/new' element={<NewOrderPage />} />
					<Route path='/tack' element={<YourTack />} />
				</Routes>	
			</>
			:
			<AuthPage setUser={setUser}/>
			}
			<h1>TackTrunk!</h1>
		</main>
  	);
}




export default App;
