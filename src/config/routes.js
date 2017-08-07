import React from "react";
// import {render} from "react-dom";
// import { Route, Router } from "react-router";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

import Home from "../components/Home"
import MentorProfile from "../components/MentorProfile"
import MenteeProfile from "../components/MenteeProfile"


const routes = (
			<Router>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="/home" component={Home} />
					<Route path="/mentor" component={MentorProfile} />
					<Route path="/mentee" component={MenteeProfile} />
				</Switch>
			</Router>
		);
	

export default routes;
