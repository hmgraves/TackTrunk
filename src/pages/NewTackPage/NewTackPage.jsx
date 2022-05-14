import NewTackForm from "../../components/NewTackForm/NewTackForm"

const NewTackPage = ({ updateTack}) => {
	
	return (
		<div>
			<br /><br /><br />
			<h1>Add new tack</h1>
			<NewTackForm  updateTack={updateTack} />
		</div>
	);
};

export default NewTackPage;