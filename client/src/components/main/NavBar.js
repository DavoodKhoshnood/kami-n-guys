import React from "react";
import "./navBar.css";

const NavBar = ({ usedCars }) => {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
			<a className="navbar-brand" href="/">
				Kamin Guys
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
							role="button"
							className="nav-link dropdown-toggle"
							href="/used/index"
							id="navbarDropdownMenuLink"
							data-toggle="dropdown"
							aria-haspopup="true"
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
							{usedCars.map((car, index) => {
								return (
                                    <a className="dropdown-item" href="/used/index" key={index}>
                                        {car.brand} {car.model} {car.year}
                                    </a>
								);
							})}
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
	);
};

export default NavBar;
