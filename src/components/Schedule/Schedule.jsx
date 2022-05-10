import Calendar from "react-calendar";
import TimePicker from 'react-time-picker';
import Select from 'react-select';
import { useState } from "react";
import './Schedule.css';

const Schedule = () => {
	const [date, setDate] = useState(new Date());
    const [time, setTime] = useState('08:00');

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
					<br />
					<Select
						// value={}
						// onChange={}
						name="Services"
					/>
					<br />
					<button className="btn" type="submit">
						Set Appointment
					</button>
				</div>
			</form>
		</div>
	);
};

export default Schedule;