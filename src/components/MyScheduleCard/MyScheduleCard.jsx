import './MyScheduleCard.css';

const MyScheduleCard = ({ user, schedule }) => {
	const date = new Date(schedule.date).toLocaleDateString() 

	return (
		<div className='schedule-card'>
			{user.name}'s scheduled event: 
			<br />
			When: {date} at {schedule.time}
			<br />
			{schedule.service.name}
			<br />
			{schedule.service.price}
		</div>
	);
};

export default MyScheduleCard;