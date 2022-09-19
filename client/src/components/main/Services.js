import React from "react";
import finance from "./assets/theme/finance.jpg";
import warranty from "./assets/theme/warranty.jpg";
import parts from "./assets/theme/parts.jpg";
import service from "./assets/theme/service.jpg";
import "../../styles/services.css";

const Services = () => {
	return (
		<div className="main-container">
			<div className="service-details"
				style={{
					backgroundImage: `url(${finance})`,
				}}
			>
				<h1>Finance</h1>
			</div>
			<div className="service-details"
				style={{
					backgroundImage: `url(${parts})`,
				}}
			>
				<h1>Parts</h1>
			</div>
			<div className="service-details"
				style={{
					backgroundImage: `url(${warranty})`,
				}}
			>
				<h1>Warranty</h1>
			</div>
			<div className="service-details"
				style={{
					backgroundImage: `url(${service})`,
				}}
			>
				<h1>Service</h1>
			</div>
		</div>
	);
};

export default Services;
