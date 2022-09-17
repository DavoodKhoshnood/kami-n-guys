import React from "react";
import { Slide } from "react-slideshow-image";

import "../../styles/Slider.css";

const responsiveSettings = [
	{
		breakpoint: 800,
		settings: {
			slidesToShow: 3,
			slidesToScroll: 3,
		},
	},
	{
		breakpoint: 600,
		settings: {
			slidesToShow: 2,
			slidesToScroll: 2,
		},
	},
];

const style = {
	textAlign: "center",
	background: "#ffff",
	border: "1px solid #e5e5e5",
	fontSize: "30px",
	color: "red",
};

const Slider = ({ usedCars }) => {
	return (
			<Slide
				slidesToScroll={1}
				slidesToShow={1}
				indicators={true}
				autoplay={true}
				responsive={responsiveSettings}
				>
				{usedCars.map((car) => {
					return (
						<div key={car.id} style={style}>
							<div style={{ height: 300 }}>
							<img className="img-thumbnail" src={car.image} alt={car.id} />
							</div>
							<br />
							<h2>{car.brand} {car.model}</h2>
							<h4>{car.year}</h4>
							<h4>{car.transmission}</h4>
							<h4>{car.color}</h4>
							<h4>Milage: {car.milage}</h4>
							<h4>Doors: {car.doors} Doors</h4>
						</div>
					);
				})}
				{usedCars.map((car) => {
					return (
						<div key={car.id+100} style={style}>
							<div style={{ height: 300 }}>
							<img className="img-thumbnail" src={car.image} alt={car.id} />
							</div>
							<br />
							<h2>{car.brand} {car.model}</h2>
							<h4>{car.year}</h4>
							<h4>{car.transmission}</h4>
							<h4>{car.color}</h4>
							<h4>Milage: {car.milage}</h4>
							<h4>Doors: {car.doors} Doors</h4>
						</div>
					);
				})}
			</Slide>
	);
};

export default Slider;
