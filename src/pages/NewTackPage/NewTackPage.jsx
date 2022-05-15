import NewTackForm from "../../components/NewTackForm/NewTackForm";

const NewTackPage = ({ tacks, setTacks }) => {

	return (
		<div>
			<br /><br /><br />
			<h1>Add new tack</h1>
			<NewTackForm  tacks={tacks} setTacks={setTacks}/>
		</div>
	);
};


export default NewTackPage;