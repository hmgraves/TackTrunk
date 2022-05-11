import { useState } from "react";
import TackListItem from "../../components/TackList/TackList";
import './YourTack.css'
import NewTackForm from "../../components/NewTackForm/NewTackForm";
import { Link, Route, Routes } from "react-router-dom";
import NewTackPage from "../NewTackPage/NewTackPage";


const YourTack = () => {
	const [tacks, setTacks] = useState([
		{ name: 'Bridle', brand: 'Butet', color: 'brown', size: 'horse', type: 'Bridles'},
		{ name: 'Saddle', brand: 'Butet', color: 'brown', size: 'horse', type: 'Saddles'},
	]);
	const addNewTack = (tack) => {
		setTacks([...tacks, tack])
	}
	const handleDelete = (tack) => {
			setTacks(tacks.filter((t) => {
				return t !== tack;
			}))
			localStorage.setItem("tacks", JSON.stringify(tacks));
	}
	return (
		<div className="container" id="tack">
			<br /><br /><br />
			<h1>Your tack</h1>
			<TackListItem tacks={tacks} handleDelete={handleDelete}/>
			<Link to="/tack/new" className="link">Add new tack</Link>

			<NewTackForm addNewTack={addNewTack}/>

			<Routes>
				<Route path='/tack/new/*' element={<NewTackPage tacks={tacks} setTacks={setTacks}/>} />
			</Routes>
		</div>
	);
};

export default YourTack