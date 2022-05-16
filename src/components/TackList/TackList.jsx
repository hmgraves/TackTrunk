import React, { useState } from "react";
import './TackList.css'

const TackListItem = ({ tacks, handleDelete }) => {
	const [currentCategory, setCurrentCategory] = useState();
	const categoryArray = ['Bits', 'Blankets', 'Bridles', 'Girths', 'Saddles', 'Saddle Pads', 'Misc.'];

	const renderCategories = (category) => {
		let allMatching = [];

		allMatching = tacks?.filter(tack => {
			return tack?.category === category
		});


		let result = allMatching?.map((tack, index) => (
			<div className="tackitem">
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

	const handleOnClick = (category) => {
		if (category === currentCategory) {
			setCurrentCategory('');
		} else setCurrentCategory(category);
	}

	const saddles = (
		<>
		{categoryArray.map((category, index) => (
			<>
				<button className="tackitem button" onClick={() => handleOnClick(category)}>
					Category: {category}
				</button>
				{currentCategory === category && (
					<div>{renderCategories(category)}</div >
				)}
			</>
		))}
		</>
	);
	

	return saddles;
};

export default TackListItem;