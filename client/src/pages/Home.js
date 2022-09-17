import React, { useEffect, useState } from "react";
import NavBar from "../components/main/NavBar";

import "./Home.css";
import { Outlet } from "react-router-dom";

export function Home() {
  const [usedCars, setUsedCars] = useState([]);

	useEffect(() => {
		fetch("/api/cars")
			.then((res) => {
				if (!res.ok) {
					throw new Error(res.statusText);
				}
				return res.json();
			})
			.then((result) => {
        console.log(result);
				setUsedCars(result);
			})
			.catch((err) => {
				console.error(err);
			});
	}, []);

	return (
		<>
			<NavBar usedCars = {usedCars} />
      <Outlet />
		</>
	);
}

export default Home;
