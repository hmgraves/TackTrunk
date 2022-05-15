import { useNavigate } from "react-router-dom";
import "./MyScheduleCard.css";

const MyScheduleCard = ({ user, schedule, handleDelete }) => {
	const date = new Date(schedule.date).toLocaleDateString();
	const navigate = useNavigate();

	const handleReschedule = (id) => {
		handleDelete(id);
		navigate("/schedule");
	};

	return (
		<div className="schedule-card">
			{user.name}'s scheduled event:
			<br />
			When: {date} at {schedule.time}
			<br />
			{schedule?.service?.name}
			<br />
			{schedule?.service?.price}
			<br />
			<br />
			<button type="submit" onClick={() => handleDelete(schedule._id)}>
				Cancel
			</button>
			<br />
			<button
				type="submit"
				onClick={() => handleReschedule(schedule._id)}
			>
				Reschedule
			</button>
		</div>
	);
};

export default MyScheduleCard;
