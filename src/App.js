import React from 'react'

import './App.css'
import cars from './data/cars.json'
import carBrands from './data/brands.json'

function App() {
  // const [usedCars, setUsedCars] = useState(cars)
  // const Property = 'make'
  var usedCars = cars

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="/used/index">
          Kami 'n Guys
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="home">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/used/index">
               Finance
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                role = "button"
                className="nav-link dropdown-toggle"
                href="/used/index"
                id="navbarDropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup ="true"
                aria-expanded="false"
              >
                Services
              </a>
              <div
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <a className="dropdown-item" href="/used/index">
                  Action
                </a>
                <a className="dropdown-item" href="/used/index">
                  Another action
                </a>
                <a className="dropdown-item" href="/used/index">
                  Something else here
                </a>
              </div>
            </li>
            <li className="nav-item dropdown">
              <a
                role="button"
                className="nav-link dropdown-toggle"
                href="/used/index"
                id="navbarDropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Warranty
              </a>
              <div
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <a className="dropdown-item" href="/used/index">
                  Action
                </a>
                <a className="dropdown-item" href="/used/index">
                  Another action
                </a>
                <a className="dropdown-item" href="/used/index">
                  Something else here
                </a>
              </div>
            </li>
            <li className="nav-item dropdown">
              <a
                role="button"
                className="nav-link dropdown-toggle"
                href="/used/index"
                id="navbarDropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Used Cars
              </a>
              <div
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <a className="dropdown-item" href="/used/index">
                  Action
                </a>
                <a className="dropdown-item" href="/used/index">
                  Another action
                </a>
                <a className="dropdown-item" href="/used/index">
                  Something else here
                </a>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/used/index">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/used/index">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <main>
        <img src="./assets/img/kia.jpg" alt="main slide" />
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
                      <option value={b.id}>{b.make}</option>
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
                    onclick="ga('send', 'event', 'Submit', 'Click', 'HP_Quick_Search_Menu_Search');"
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
      <div className="brands">
              {carBrands.map((brand)=> {
                return (
              <a 
                href = {`/used/cars/${brand.name}`}
                title ={`Used ${brand.name.toUpperCase()} for sale.`} >
             <img
               alt={brand.name}
               src={`./assets/img/brands/${brand.name}.png`}
             />
                </a>
                )})}
      </div>
      <div className="offers">
        <header>
          <h2>Our latest offers</h2>
        </header>
        <div>
          <div className="tech-slideshow">
            <div className="mover-1"></div>
            <div className="mover-2"></div>
          </div>
        </div>
      </div>
    </>
  )
}

// document.getElementById("model").setAttribute("disabled", "disabled")

export default App


