import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Admin from '../src/pages/admin/admin';
import Login from '../src/pages/login/login';

class App extends Component {
	state = {}
	render() {
		return (
			<BrowserRouter>
				<Switch>
					<Route path="/login" component={Login} />
					<Route path="/" component={Admin} />
				</Switch>
			</BrowserRouter>
		);
	}
}

export default App;