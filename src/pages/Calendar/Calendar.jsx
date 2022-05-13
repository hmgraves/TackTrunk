import Schedule from "../../components/Schedule/Schedule";
import * as scheduleAPI from '../../utilities/schedule-api'

const CalendarPage = ({user, services, setServices}) => {

	const handleAddService = async (date, time, selectService) => {
		const service = await scheduleAPI.addAppointment(date, time, selectService);
		setServices([...services, service]);
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