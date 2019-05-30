import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Header from './Header';
import Landing from './Landing';
import Trees from './Trees';
import Classes from './Classes';
import Advisers from './Advisers';
import Settings from './Settings';



class App extends Component {
	componentDidMount(){
		this.props.fetchUser();
	}

	render(){
		return (
			<div className="container">
				<BrowserRouter>
					<div>
						<Header />
						<Route exact path="/" component={Landing} />
						<Route path="/trees" component={Trees} />
						<Route exact path="/classes" component={Classes} />
						<Route exact path="/advisers" component={Advisers} />
                        <Route exact path="/settings" component={Settings} />

					</div>
				</BrowserRouter>
			</div>
		);
	}
};

export default connect(null, actions)(App);
