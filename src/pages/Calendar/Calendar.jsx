import Schedule from "../../components/Schedule/Schedule";

const Calendar = ({user, services}) => {
	return (
		<div>
			<br />
			<br />
			<br />
			<br />
			<div><Schedule user={user} services={services}/></div>
		</div>
	);
};

export default Calendar;