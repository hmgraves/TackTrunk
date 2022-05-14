import { useState } from "react";
import "./NewTackForm.css";
import { Routes, Route } from "react-router-dom";
import YourTack from "../../pages/YourTack/YourTack";
import * as tackAPI from "../../utilities/tack-api";

const NewTackForm = ({ tacks, setTacks, updateTack }) => {
	const [formData, setFormData] = useState(
		tacks
			? tacks
			: {
					name: "",
					brand: "",
					color: "",
					size: "Mini",
					type: "Blankets",
			  }
	);

	const addTack = async (tack) => {
		console.log(tack);
		const newTack = await tackAPI.addTack(tack);
		setTacks([...tacks, newTack]);
	};
	

	const handleSubmit = (evt) => {
		evt.preventDefault();
		console.log(formData);
		if (tacks) {
			updateTack(formData);
		} else {
			addTack(formData);
		}
	};

	const handleChange = (evt) => {
		let newFormData = { ...formData, [evt.target.name]: evt.target.value };
		setFormData(newFormData);
	};

	return (
		<div>
			<form className="newTackForm" onSubmit={handleSubmit}>
				<label>
					Tack: &nbsp;&nbsp;&nbsp;
					<input
						name="name"
						value={formData.name}
						required
						onChange={handleChange}
					/>
				</label>
				<br />
				<label>
					Brand: &nbsp;
					<input
						name="brand"
						value={formData.brand}
						onChange={handleChange}
					/>
				</label>
				<br />
				<label>
					Color: &nbsp;&nbsp;
					<input
						name="color"
						value={formData.color}
						onChange={handleChange}
					/>
				</label>
				<br />
				<label>
					Size: &nbsp;&nbsp;&nbsp;&nbsp;
					<select
						name="size"
						value={formData.size}
						onChange={(e) => handleChange(e)}
					>
						<option value="mini">Mini</option>
						<option value="pony">Pony</option>
						<option value="cob">Cob</option>
						<option value="horse">Horse</option>
						<option value="warmblood">Warmblood</option>
						<option value="oversize">Oversize</option>
						<option value="small">Small</option>
						<option value="medium">Medium</option>
						<option value="large">Large</option>
						<option value="other">Other</option>
					</select>
				</label>
				<br />
				<label>
					Type: &nbsp;&nbsp;&nbsp;
					<select
						name="type"
						value={formData.type}
						required
						onChange={handleChange}
					>
						<option value="blankets">Blankets</option>
						<option value="boots">Boots</option>
						<option value="bridles">Bridles</option>
						<option value="grooming">Grooming</option>
						<option value="saddles">Saddles</option>
						<option value="saddle-accessories">
							Saddle Accessories
						</option>
						<option value="misc">Misc.</option>
					</select>
				</label>
				<br />
				<button type="submit">Add tack</button>
			</form>
			<Routes>
				<Route path="/tack/*" element={<YourTack tacks={tacks} />} />
			</Routes>
		</div>
	);
};

export default NewTackForm;
