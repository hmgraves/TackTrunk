import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import TimePicker from "react-time-picker";
import Select from "react-select";
import { useState } from "react";
import "./Schedule.css";
import { useNavigate } from "react-router-dom";

const Schedule = ({ services, handleAddService }) => {
	const [date, setDate] = useState(new Date());
	const [time, setTime] = useState("08:00");
	const [selectedService, setSelectedService] = useState([]);
	const navigate = useNavigate();

	const serviceTypes = services.map((service, idx) => ({
		value: `${service._id}`,
		label: `${service.name}`,
	}));

	const handleSubmit = (evt) => {
		evt.preventDefault();
		handleAddService(date, time, selectedService);
		navigate("/my-schedule");
	};

	const handleChange = (evt) => {
		services.map((service) => {
			if (service._id.includes(evt.value)) {
				setSelectedService({
					name: service.name,
					price: service.price,
				});
			}
		});
	};

	return (
		<div>
			<form className="calendar" onSubmit={handleSubmit}>
				<Calendar
					className="react-calendar"
					value={date}
					onChange={setDate}
					minDate={new Date()}
				/>
				<br />
				<div>
					<TimePicker
						value={time}
						onChange={setTime}
						disableClock={true}
					/>
					<br />
					<br />
					<Select
						options={serviceTypes}
						onChange={handleChange}
						name="Services"
						className="select-services"
					/>
					<br />
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
