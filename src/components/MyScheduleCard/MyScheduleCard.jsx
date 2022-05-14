import './MyScheduleCard.css';

const MyScheduleCard = ({ user, schedule, handleDelete }) => {
	const date = new Date(schedule.date).toLocaleDateString() 
	const handleReschedule = () => {
		
	}

	return (
		<div className='schedule-card'>
			{user.name}'s scheduled event: 
			<br />
			When: {date} at {schedule.time}
			<br />
			{schedule?.service?.name}
			<br />
			{schedule?.service?.price}
			<br />
			<button type='submit' onClick={() => handleDelete(schedule._id)}>Delete</button>		
		</div>
	);
};

export default MyScheduleCard;