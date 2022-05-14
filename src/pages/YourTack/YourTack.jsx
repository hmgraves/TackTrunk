import { useState } from "react";
import TackListItem from "../../components/TackList/TackList";
import './YourTack.css'
import { Link, Route, Routes } from "react-router-dom";
import NewTackPage from "../NewTackPage/NewTackPage";
import * as tackAPI from '../../utilities/tack-api'


const YourTack = () => {
	const [tacks, setTacks] = useState([]);
	

	const updateTack = async (tack) => {
		const updatedTack = await updateTack(tack);
		const updatedTacks = tacks.map((t) => t._id === updatedTack._id ? updatedTack : t);
    	setTacks(updatedTacks);
	}

	const handleDelete = (tack) => {
			setTacks(tacks.filter((t) => {
				return t !== tack;
			}))
	}
	return (
		<div className="container" id="tack">
			<br /><br /><br />
			<h1>Your tack</h1>
			<TackListItem tacks={tacks} handleDelete={handleDelete}/>
			<Link to="/tack/new" className="link">Add new tack</Link>

			<Routes>
				<Route path='/tack/new/*' element={<NewTackPage tacks={tacks} setTacks={setTacks} updateTack={updateTack}/>} />
			</Routes>
		</div>
	);
};

export default YourTack