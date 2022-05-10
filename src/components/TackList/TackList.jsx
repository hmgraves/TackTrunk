import './TackList.css'

const TackListItem = ({ tacks, handleDelete }) => {
    return (
		<div className='container'>
			{tacks.map((tack) => (
				<div className="tackitem column">
					{tack.name}
					<br />
					{tack.brand}
					<br /> 
					{tack.color}
					<br />
					{tack.size}
					<br />
					{tack.type}
					<br />
					<button type="submit" className="btn btn-danger" onClick={() => handleDelete(tack)}>Delete</button>
				</div>
			))}
		</div>
    );
};

export default TackListItem;