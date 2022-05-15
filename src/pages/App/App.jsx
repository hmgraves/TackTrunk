import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import NavBar from '../../components/NavBar/NavBar';
import { getUser } from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage';
import NewTackPage from '../NewTackPage/NewTackPage';
import YourTack from '../YourTack/YourTack';
import MySchedulePage from '../MySchedulePage/MySchedulePage';
import * as servicesAPI from '../../utilities/services-api';
import * as scheduleAPI from '../../utilities/schedule-api';
import './App.css';
import { useEffect } from 'react';
import ServiceTypeList from '../ServiceTypeListPage/ServiceTypeListPage';
import HomePage from '../HomePage/HomePage';
import CalendarPage from '../Calendar/Calendar';
// import {loadStripe} from '@stripe/stripe-js';


const App = () => {
	const [user, setUser] = useState(getUser());
	const [services, setServices] = useState([]);
	const [mySchedule, setMySchedule] = useState([]);
	const [tacks, setTacks] = useState([]);

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
					<Route path='/*' element={<HomePage/>} />
					<Route path='/tack/*' element={<YourTack tacks={tacks} setTacks={setTacks} />} />
					<Route path='/tack/new/*' element={<NewTackPage tacks={tacks} setTacks={setTacks}/>} />
					<Route path='/schedule' element={<CalendarPage user={user} services={services} setServices={setServices} setMySchedule={setMySchedule}/>} />
					<Route path='/services-types' element={<ServiceTypeList user={user} services={services} />} />
					<Route path='/my-schedule' element={<MySchedulePage user={user} mySchedule={mySchedule} services={services} setServices={setServices} setMySchedule={setMySchedule}/>} />
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
