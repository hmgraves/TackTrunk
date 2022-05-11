import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import NavBar from '../../components/NavBar/NavBar';
import { getUser } from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage';
import Calendar from '../Calendar/Calendar';
import NewTackPage from '../NewTackPage/NewTackPage';
import YourTack from '../YourTack/YourTack';
import * as servicesAPI from '../../utilities/services-api';
import './App.css';
import { useEffect } from 'react';
import ServiceTypeList from '../ServiceTypeListPage/ServiceTypeListPage';

const App = () => {
	const [user, setUser] = useState(getUser());
	const [services, setServices] = useState([]);

	useEffect(() => {
		const getServices = async () => {
			const services = await servicesAPI.getAll();
      		setServices(services);
		};
		getServices();
	}, []);

  	return (
		<main className='App'>
			{ user ?
			<>
				<NavBar user={user} setUser={setUser}/>
				<Routes>
					<Route path='/tack/*' element={<YourTack/>} />
					<Route path='/tack/new/*' element={<NewTackPage />} />
					<Route path='/schedule' element={<Calendar user={user} services={services}/>} />
					<Route path='/services-types' element={<ServiceTypeList user={user} services={services} />} />
				</Routes>	
			</>
			:
			<AuthPage setUser={setUser}/>
			}
			<br />
			<Footer />
		</main>
  	);
}




export default App;
