import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, BrowserRouter, Route } from 'react-router-dom';

const TreeTabs = () => {
	return(
		<div class="nav-content">
			<ul class="tabs tabs-transparent">
			  <li class="tab"><Link to="/trees/trees1">Tree 1</Link></li>
			  <li class="tab"><Link to="/trees/trees2">Tree 2</Link></li>
			  <li class="tab"><Link to="/trees/trees3">Tree 3</Link></li>
			  <li class="tab"><Link to="/trees/trees4">Tree 4</Link></li>
			</ul>
		</div>
	);
};

export default TreeTabs;
