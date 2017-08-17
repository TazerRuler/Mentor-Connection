import React from "react";
// import {render} from "react-dom";
// import { Route, Router } from "react-router";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


import MentorProfile from "../components/MentorProfile"
import MenteeProfile from "../components/MenteeProfile"
import Landing from "../components/Landing"
import MentorForm from "../components/common/MentorForm"
import MenteeForm from "../components/common/MenteeForm"


const routes = (
			<Router>
				<Switch>
					<Route exact path="/" component={Landing} />
					<Route path="/mentor-profile" component={MentorProfile} />
					<Route path="/mentee-profile" component={MenteeProfile} />
					<Route path="/mentor-form" component={MentorForm} />
					<Route path="/mentee-form" component={MenteeForm} />
				</Switch>
			</Router>
		);
	

export default routes;


