import { useState } from "react";
import "./NewTackForm.css";
import { Routes, Route } from "react-router-dom";
import YourTack from "../../pages/YourTack/YourTack";
import * as tackAPI from "../../utilities/tack-api";
import { useNavigate } from "react-router-dom";

const NewTackForm = () => {
	const navigate = useNavigate();

	const [formData, setFormData] = useState({
		name: "",
		brand: "",
		color: "",
		size: "Mini",
		category: "Bits",
	});

	const addTack = async (tack) => {
		await tackAPI.addTack(tack);
	};

	const handleChange = (evt) => {
		let newFormData = { ...formData, [evt.target.name]: evt.target.value };
		setFormData(newFormData);
	};

	const handleSubmit = (evt) => {
		evt.preventDefault();
		addTack(formData);
		navigate("/tack");
	};

	return (
		<div>
			<form className="newTackForm" onSubmit={handleSubmit}>
				<label>
					Tack: &nbsp;&nbsp;&nbsp;
					<input
						name="name"
						// value={formData.name}
						required
						onChange={handleChange}
					/>
				</label>
				<br />
				<label>
					Brand: &nbsp;
					<input
						name="brand"
						// value={formData.brand}
						onChange={handleChange}
					/>
				</label>
				<br />
				<label>
					Color: &nbsp;&nbsp;
					<input
						name="color"
						// value={formData.color}
						onChange={handleChange}
					/>
				</label>
				<br />
				<label>
					Size: &nbsp;&nbsp;&nbsp;&nbsp;
					<select
						name="size"
						// value={formData.size}
						onChange={(e) => handleChange(e)}
					>
						<option value="Mini">Mini</option>
						<option value="Pony">Pony</option>
						<option value="Cob">Cob</option>
						<option value="Horse">Horse</option>
						<option value="Warmblood">Warmblood</option>
						<option value="Oversize">Oversize</option>
						<option value="Small">Small</option>
						<option value="Medium">Medium</option>
						<option value="Large">Large</option>
						<option value="Other">Other</option>
					</select>
				</label>
				<br />
				<label>
					Category: &nbsp;&nbsp;&nbsp;
					<select
						name="category"
						// value={formData.type}
						required
						onChange={handleChange}
					>
						<option value="Bits">Bits</option>
						<option value="Blankets">Blankets</option>
						<option value="Bridles">Bridles</option>
						<option value="Girths">Girths</option>
						<option value="Saddles">Saddles</option>
						<option value="Saddle Pads">Saddle Pads</option>
						<option value="misc">Misc.</option>
					</select>
				</label>
				<br />
				<button type="submit">Add tack</button>
			</form>
			<Routes>
				<Route path="/tack/*" element={<YourTack />} />
			</Routes>
		</div>
	);
};

export default NewTackForm;
