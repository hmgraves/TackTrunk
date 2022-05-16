import { useEffect } from "react";
import TackListItem from "../../components/TackList/TackList";
import './YourTack.css'
import { Link } from "react-router-dom";
import NewTackPage from "../NewTackPage/NewTackPage";
import * as tackAPI from '../../utilities/tack-api'


const YourTack = ({tacks, setTacks }) => {

	useEffect(() => {
		const getTack = async () => {
			const myTacks = await tackAPI.getAll();
			setTacks(myTacks);
		}
		getTack();
	}, [setTacks]);

	const handleDelete = async (tack) => {
		const deletedTack = await tackAPI.deleteTack(tack._id);
		const updatedTack = tacks.filter(tack => tack._id !== deletedTack._id);
		setTacks(updatedTack)
	}

	return (
		<div className="container" id="tack">
			<br /><br /><br />
			<h1>Your tack</h1>
			<Link to="/tack/new" className="new-tack-link" element={<NewTackPage tacks={tacks} setTacks={setTacks} />}>Add new tack</Link>
			<TackListItem tacks={tacks} handleDelete={handleDelete} />
		</div>
	);
};

export default YourTack