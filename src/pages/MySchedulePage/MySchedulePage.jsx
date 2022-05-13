import MyScheduleCard from '../../components/MyScheduleCard/MyScheduleCard';
import './MySchedulePage.css';

const mySchedulePage = ({ user, mySchedule }) => {
	return (
		<div className='mySchedulePage'>
			<br /><br /><br/>
			<h1>My schedule</h1>
			<div>
				{mySchedule.map((schedule, index) => <MyScheduleCard user={user} schedule={schedule} key={index}/>)}
			</div>
		</div>
	)
};

export default mySchedulePage;