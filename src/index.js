// import React, {Component} from 'react';
// import ReactDOM from 'react-dom';
// import App from './components/App';





// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// );



import React from "react";
import {render} from "react-dom"
// import { Route, Router } from "react-router";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./components/Home"
import MentorProfile from "./components/MentorProfile"


class App extends React.Component {
	render() {
		return(
			<Router>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="/home" component={Home} />
					<Route path="/mentor" component={MentorProfile} />
				</Switch>
			</Router>
		);
	}
}

render(<App />, window.document.getElementById('root'))