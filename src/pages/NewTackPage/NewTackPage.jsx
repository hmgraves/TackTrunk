import NewTackForm from "../../components/NewTackForm/NewTackForm"

const NewTackPage = ({tacks, setTacks}) => {
	
	const addNewTack = (tack) => {
		setTacks([...tacks, tack])
	}
	return (
		<div>
			<br /><br /><br />
			<h1>Add new tack</h1>
			<NewTackForm addNewTack={addNewTack}/>
		</div>
	);
};

export default NewTackPage;