import Schedule from "../../components/Schedule/Schedule";
import * as scheduleAPI from '../../utilities/schedule-api'

const CalendarPage = ({user, services}) => {

	const handleAddService = async (date, time, setMySchedule) => {
		await scheduleAPI.addAppointment(date, time, setMySchedule);
	};

	return (
		<div>
			<br />
			<br />
			<br />
			<br />
			<div><Schedule user={user} services={services} handleAddService={handleAddService}/></div>
		</div>
	);
};

export default CalendarPage;