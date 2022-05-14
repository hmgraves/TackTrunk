import Schedule from "../../components/Schedule/Schedule";
import * as scheduleAPI from '../../utilities/schedule-api'

const CalendarPage = ({user, services, setMySchedule}) => {

	const handleAddService = async (date, time, setMySchedule) => {
		const service = await scheduleAPI.addAppointment(date, time, setMySchedule);
		setMySchedule([...services, service]);
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