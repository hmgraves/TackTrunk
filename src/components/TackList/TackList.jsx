import React, { useState } from "react";
import './TackList.css'

const TackListItem = ({ tacks, handleDelete }) => {
	const [currentCategory, setCurrentCategory] = useState();
	const categoryArray = ['Bits', 'Blankets', 'Bridles', 'Girths', 'Saddles', 'Saddle Pads', 'Misc.'];

	const renderCategories = (category) => {
		// empty array for matching tack
		let allMatching = [];

		// function to search through tack and divide into categories
		allMatching = tacks?.filter(tack => {
			return tack?.category === category
		});

		// function to only display tack in a specific category when clicked on
		let result = allMatching?.map((tack, index) => (
			<div className="tackitem card" key={index}>
				<div>
					Name: {tack?.name}
				</div>
				<div>
					Brand: {tack?.brand}
				</div>
				<div>
					Color: {tack?.color}
				</div>
				<div>
					Size: {tack?.size}
				</div>
				<button type="submit" className="btn btn-danger" onClick={() => handleDelete(tack)}>Delete</button>
			</div>
		));

		return result;
	}

	// function to handle on click to show only tack in the specific category
	const handleOnClick = (category) => {
		if (category === currentCategory) {
			setCurrentCategory('');
		} else setCurrentCategory(category);
	}

	// shows each category of possible tack
	const tack = (
		<>
		{categoryArray.map((category, index) => (
			<div key={index}>
				<button className="tackitem cat-button" onClick={() => handleOnClick(category)}>
					Category: {category}
				</button>
				{currentCategory === category && (
					<div>{renderCategories(category)}</div >
				)}
			</div>
		))}
		</>
	);
	

	return (
		<div className="tack-container">
			{tack}
		</div>
	);
};

export default TackListItem;