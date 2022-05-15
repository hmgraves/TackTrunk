import { useEffect, useRef, useState } from "react";
import TackListItem from "../../components/TackList/TackList";
import './YourTack.css'
import { Link } from "react-router-dom";
import NewTackPage from "../NewTackPage/NewTackPage";
import CategoryList from "../../components/CategoryList/CategoryList";
import * as tackAPI from '../../utilities/tack-api'


const YourTack = ({tacks, setTacks }) => {
	const categoriesRef = useRef([]);
	const [activeCat, setActiveCat] = useState("");

	// useEffect(() => {
	// 	const getTack = async () => {
	// 		const myTacks = await tackAPI.getAll();
	// 		setTacks(myTacks);
	// 	}
	// 	getTack();
	// }, []);

	// const getTack = async () =>{
	// 	const myTacks = await tackAPI.getAll();
	// 	categoriesRef.current = tacks.reduce((cats, tack) => {
	// 		const cat = tack.category.name;
	// 		return cats.includes(cat) ? cats : [...cats, cat];
	// 	}, []);
	// 	setActiveCat(categoriesRef.current[1]);
	// 	setTacks(myTacks);
	// }
	// 	getTack();
	// })

	useEffect(function () {
		const getTack = async () =>{
			const myTacks = await tackAPI.getAll();
			categoriesRef.current = tacks.reduce((cats, tack) => {
				const cat = tack.category.name;
				return cats.includes(cat) ? cats : [...cats, cat];
			}, []);
			setActiveCat(categoriesRef.current[1]);
			setTacks(myTacks);
		}
		getTack();
	}, []);

	const handleDelete = async (tack) => {
		console.log(tack)
		const deletedTack = await tackAPI.deleteTack(tack._id);
		const updatedTack = tacks.filter(tack => tack._id !== deletedTack._id);
		setTacks(updatedTack)
	}

	return (
		<div className="container" id="tack">
			<br /><br /><br />
			<h1>Your tack</h1>
			<CategoryList
					categories={categoriesRef.current}
					activeCat={activeCat}
					setActiveCat={setActiveCat}
					use
			/>
			<TackListItem tacks={tacks} handleDelete={handleDelete} />
			<Link to="/tack/new" className="link" element={<NewTackPage tacks={tacks} setTacks={setTacks} />}>Add new tack</Link>
		</div>
	);
};

export default YourTack