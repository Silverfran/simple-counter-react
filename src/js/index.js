//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
//import { Home } from "./component/home.js";

//render your react application
//ReactDOM.render(<Home />, document.querySelector("#app"));

const SecondsCounter = props => {
	return (
		<div className="text-center mt-5">
			<div className="d-inline-flex p-2 bg-dark text-white">
				<div className="p-2 m-2 special-card ">
					<i className="far fa-clock" />
				</div>
				{props.digits}
			</div>
		</div>
	);
};

SecondsCounter.propTypes = {
	digits: PropTypes.array
};

let counter = 0;
setInterval(() => {
	let clockDigits = [
		Math.floor(counter / 100000),
		Math.floor(counter / 10000),
		Math.floor(counter / 1000),
		Math.floor(counter / 100),
		Math.floor(counter / 10),
		Math.floor(counter / 1)
	];
	counter++;

	if (counter >= 999999) {
		counter = 0;
	}

	const digitsInHTML = clockDigits.map((digit, i) => (
		<div key={i} className="p-2 m-2 special-card">
			{digit % 10}
		</div>
	));
	ReactDOM.render(
		<SecondsCounter digits={digitsInHTML} />,
		document.querySelector("#app")
	);
}, 1000);
