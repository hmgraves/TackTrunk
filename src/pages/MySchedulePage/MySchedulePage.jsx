import MyScheduleCard from '../../components/MyScheduleCard/MyScheduleCard';
import './MySchedulePage.css';
import * as scheduleAPI from '../../utilities/schedule-api'
import { useEffect, useState } from 'react';

const MySchedulePage = ({ user, services, setServices }) => {
	const [mySchedule, setMySchedule] = useState([]);
	useEffect(() => {
		const getSchedule = async () => {
			const mySchedule = await scheduleAPI.getAll();
			setMySchedule(mySchedule);
		}
		getSchedule();
	}, []);
	const handleDelete = async (id) => {
		const deleteService = await scheduleAPI.deleteAppointment(id);
		const updatedServices = mySchedule.filter(service => service._id !== deleteService._id);
		setMySchedule(updatedServices)
	}
	return (
		<div className='mySchedulePage'>
			<br /><br /><br/>
			<h1>My schedule</h1>
			<div>
				{mySchedule.map((schedule, index) => <MyScheduleCard user={user} schedule={schedule} key={index} handleDelete={handleDelete}/>)}
			</div>

			
		</div>
	)
};

export default MySchedulePage;