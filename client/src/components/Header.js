import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, BrowserRouter, Route } from 'react-router-dom';
import TreeTabs from './pieces/TreeTabs';

class Header extends Component {
	renderLoginContent(){
		switch(this.props.auth){
			case null:
				return;
			case false:
				return (
					<li><a href="/auth/google">Login With Google</a></li>
				);
			default:
				return (
					[<li><a href="/api/logout">Logout {this.props.auth.givenName}</a></li>,
					<li></li>]
				);
		}
	}
	renderPaginationContent(){
		switch(this.props.auth){
			case null:
				return;
			case false:
				return;
			default:
				return (
					<ul id="nav-mobile" className="right hide-on-med-and-down">
					    <li><Link to="/trees">Trees</Link></li>
					    <li><Link to="/classes">Classes</Link></li>
					    <li><Link to="/advisers">Advisers</Link></li>
				  	</ul>
				);
		}
	}
	render(){
		return(
			<nav className="nav-extended">
			    <div className="nav-wrapper">
					<Link
						style={{ margin: '0 10px'}}
		  				to={this.props.auth ? '/dashboard' : '/'}
		  				className="left brand-logo"
		  			>
		  				GuidEnts
		  			</Link>
					<ul className="right">
						{this.renderLoginContent()}
					</ul>
			      	{this.renderPaginationContent()}
			    </div>
				<div className="nav-content">
					<Route path="/trees" component={TreeTabs} />
				</div>
			  </nav>
		);
	}
}
function mapStateToProps({ auth }){
	return { auth };

}
//render content based off boolean/int using switch table
export default connect(mapStateToProps)(Header);
