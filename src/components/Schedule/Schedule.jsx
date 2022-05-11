import Calendar from "react-calendar";
import TimePicker from 'react-time-picker';
import Select from 'react-select';
import { useState } from "react";
import './Schedule.css';

const Schedule = ({user, services}) => {
	const [date, setDate] = useState(new Date());
    const [time, setTime] = useState('08:00');
	const [selectService, setSelectService] = useState([]);

	const serviceTypes =  services.map((service, idx) => (
		{ value: `${service._id}` , label: `${service.name}`}
	))

	return (
		<div>
			<form>
				<Calendar
					className="react-calendar"
					value={date}
					onChange={setDate}
				/>
				<div>
					<TimePicker
						value={time}
						onChange={setTime}
						disableClock={true}
					/>
					<br /><br />
					<Select
						options={serviceTypes}
						// onChange={}
						name="Services"
					/>
					<br />
					<button className="date-btn" type="submit">
						Set Appointment
					</button>
				</div>
			</form>
		</div>
	);
};

export default Schedule;