import MyScheduleCard from '../../components/MyScheduleCard/MyScheduleCard';
import './MySchedulePage.css';
import * as scheduleAPI from '../../utilities/schedule-api'
import { useEffect, useState } from 'react';

const MySchedulePage = ({ user  }) => {
	const [mySchedule, setMySchedule] = useState([]);

	//useEffect hook for side effect - getting the schedule for the user of all upcoming events
	useEffect(() => {
		const getSchedule = async () => {
			const mySchedule = await scheduleAPI.getAll();
			setMySchedule(mySchedule);
		}
		getSchedule();
	}, []);	

	// async function to delete any appointents
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