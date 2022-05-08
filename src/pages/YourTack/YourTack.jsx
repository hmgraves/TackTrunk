import { checkToken } from "../../utilities/users-service";
import './YourTack.css'


const YourTack = () => {
	const handleCheckToken = async () => {
		const expDate = await checkToken();
		console.log(expDate);
	};
	return (
		<div className="container" id="tack">
			<h1>Your tack</h1>
			<button onClick={handleCheckToken}>Check when my login expires</button>
		</div>
	);
};

export default YourTack