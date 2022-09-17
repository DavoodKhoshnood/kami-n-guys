/* eslint-disable react-hooks/rules-of-hooks */
import { Route, Routes } from "react-router-dom";
import "./styles/App.css";
import Cars from "./pages/Cars";

import About from "./pages/About";
import Home from "./pages/Home";
import Main from "./pages/Main";


const App = () => (
	<Routes>
		<Route path="/" element={<Home />} >
			<Route path="/" element={<Main />} />
			<Route path="/about/this/site" element={<About />} />
			<Route path="/cars" element={<Cars />} />
		</Route>
	</Routes>
);

export default App;
