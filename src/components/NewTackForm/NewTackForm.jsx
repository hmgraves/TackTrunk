import { useState } from 'react';
import './NewTackForm.css';
import { Routes, Route, Redirect } from 'react-router-dom';
import YourTack from '../../pages/YourTack/YourTack';

const NewTackForm = ({ addNewTack }) => {
	const [tacks, setTacks] = useState({
		name: "",
		brand: "",
		color: "",
		size: "Mini", 
		type: "Blankets"
	});
	const handleChange = (evt) => {
		evt.preventDefault();
		const newTack = {
			...tacks,
			[evt.target.name]: evt.target.value,
		};
		setTacks(newTack);
	};
	const handleAddTack = (evt) => {
		evt.preventDefault();
		console.log(tacks)
		addNewTack(tacks);
	};
	return (
		<div>
			<form className='newTackForm' onSubmit={handleAddTack} action="/tack">
				<label>
					Tack: &nbsp;&nbsp;&nbsp; 
					<input 
						name='name'
						value={tacks.name}
						required
						onChange={handleChange}
					/>
				</label>
				<br />
				<label>
					Brand: &nbsp;
					<input 
						name='brand'
						value={tacks.brand}
						onChange={handleChange}
					/>
				</label>
				<br />
				<label>
					Color: &nbsp;&nbsp; 
					<input 
						name='color'
						// value={tacks.color}
						onChange={handleChange}
					/>
				</label>
				<br />
				<label>
					Size: &nbsp;&nbsp;&nbsp;&nbsp;
					<select 
						name='size'
						value={tacks.size}
						onChange={(e) => handleChange(e)}
					>
						<option value='mini'>Mini</option>
						<option value='pony'>Pony</option>
						<option value='cob'>Cob</option>
						<option value='horse'>Horse</option>
						<option value='warmblood'>Warmblood</option>
						<option value='oversize'>Oversize</option>
						<option value='small'>Small</option>
						<option value='medium'>Medium</option>
						<option value='large'>Large</option>
						<option value='other'>Other</option>
					</select>
				</label>
				<br />
				<label>
					Type: &nbsp;&nbsp;&nbsp;
					<select 
						name='type'
						value={tacks.type}
						required
						onChange={handleChange}
					>
						<option value='blankets'>Blankets</option>
						<option value='boots'>Boots</option>
						<option value='bridles'>Bridles</option>
						<option value='grooming'>Grooming</option>
						<option value='saddles'>Saddles</option>
						<option value='saddle-accessories'>Saddle Accessories</option>
						<option value='misc'>Misc.</option>
					</select>
				</label>
				<br />
				<button type='submit'>Add tack</button>
			</form>
			<Routes>
					<Route path='/tack/*' element={<YourTack tacks={tacks}/>} />
			</Routes>	
		</div>
		
	)
};

export default NewTackForm;