import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import NavBar from "../components/main/NavBar";

import "./Home.css";
import mainImage from "../assets/img/kia.jpg";

export function Home() {
	// const [message, setMessage] = useState("Loading...");
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
			<main>
        <img src={mainImage} alt="main slide" />
        <div className="form-div">
          <form method="get" action="/search_page.php">
            <fieldset className="fieldset fieldset--search">
              <div className="fieldset__wrapper">
                <div className="form-group form-group--make">
                  <select
                    name="make"
                    id="make"
                    data-search-field="main"
                    data-search-filters="type,injectedLocation,location,budgetmin,budgetmax,yearmin,yearmax"
                    className=""
                  >
                    <option value="">Any make</option>
                    {usedCars.map((b) => (
                      <option value={b.id}>{b.name}</option>
                    ))}
                  </select>
                </div>
                <div className="form-group form-group--model">
                  <select
                    name="model"
                    id="model"
                    data-search-field="main"
                    data-search-filters="type,injectedLocation,location,make,trim,body,gearbox,doors,body_colour,fuel_type,budgetmin,budgetmax,seats,yearmin,yearmax"
                    className="default"
                  >
                    <option value="">Any model </option>
                  </select>
                </div>
              </div>
            </fieldset>

            <fieldset className="fieldset fieldset--price">
              <div className="fieldset__wrapper">
                <div className="budget-toggle"></div>
                <div className="form-group form-group--budgetmax">
                  <select
                    name="budgetmax"
                    id="budgetmax"
                    data-search-field="aside"
                    data-search-filters="type,injectedLocation,location,make,model,variant,trim,body,gearbox,doors,body_colour,fuel_type,seats,yearmin,yearmax"
                    className="default"
                  >
                    <option value="">Price (Max)</option>
                    <option value="10000">To £10,000</option>
                    <option value="11000">To £11,000</option>
                    <option value="12000">To £12,000</option>
                  </select>
                </div>
              </div>
            </fieldset>

            <fieldset className="fieldset fieldset--button">
              <div className="fieldset__wrapper">
                {/* <!-- Button Group --> */}
                <div className="button-group button-group--search">
                  <button
                    type="submit"
                    className="a-btn search-button"
                    // onclick="ga('send', 'event', 'Submit', 'Click', 'HP_Quick_Search_Menu_Search');"
                  >
                    Search
                  </button>
                </div>
                {/* <!-- // Button Group --> */}
              </div>
            </fieldset>
          </form>
        </div>
      </main>
			{/* <div>
				<img
					className="logo"
					data-qa="logo"
					src={logo}
					alt="Just the React logo"
				/>
				<h1 className="message" data-qa="message">
					{message}
				</h1>
				<Link to="/about/this/site">About</Link>
			</div> */}
		</>
	);
}

export default Home;
