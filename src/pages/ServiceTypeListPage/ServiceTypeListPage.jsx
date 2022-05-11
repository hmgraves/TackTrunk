import ServiceCard from "../../components/ServiceCard/ServiceCard";

const ServiceTypeList = ({services}) => {
	return (
		<div>
			<br /><br /><br />
			<h1>Services</h1>
			<div>
				{services.map((service, index) => <ServiceCard service={service} key={index}/>)}
			</div>
			
		</div>
	);
};

export default ServiceTypeList;