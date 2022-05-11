import './ServiceCard.css';

const ServiceCard = ({ service }) => {
	return (
		<div className='service-card'>
			<h3>{service.name}</h3>
			<p>{service.price}</p>
		</div>
	);
};

export default ServiceCard;