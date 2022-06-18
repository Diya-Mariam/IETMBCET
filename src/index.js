import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "assets/css/bootstrap.min.css";
import "assets/scss/paper-kit.scss?v=1.2.0";
import "assets/demo/demo.css?v=1.2.0";

import LandingPage from "views/examples/LandingPage";
import NotFound from "views/examples/NotFound.js";
import FineTuneTalks from "views/examples/FineTuneTalks.js";

ReactDOM.render(
	<BrowserRouter>
		<Switch>
			<Route
				exact
				path="/ietmbcettest"
				render={(props) => <LandingPage {...props} />}
			/>
			<Route
				exact
				path="/science_quiz"
				render={(props) => <FineTuneTalks {...props} />}
			/>
			<Route
				exact
				path="/"
				component={() => {
					window.location.href = "/home.html";
					return null;
				}}
			/>
			<Route component={NotFound} />{" "}
		</Switch>{" "}
	</BrowserRouter>,
	document.getElementById("root")
);
