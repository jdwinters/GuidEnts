import React, { Component } from 'react';

/*
<li class="tab"><a href="#test1">Test 1</a></li>
<li class="tab"><a href="#test1">Test 2</a></li>
<li class="tab"><a href="#test1">Test 3</a></li>
<li class="tab"><a href="#test1">Test 4</a></li>*/


class NavBar extends Component {
	render(){
		return (
      <nav>
        <div className="nav-content left">
          <ul class = "tabs tabs-transparent">
            <li><a href="sass.html"><i class="material-icons">view_list</i></a></li>
            <li><a href="sass.html"><i class="material-icons">search</i></a></li>
            <li><a href="sass.html"><i class="material-icons">insert_invitation</i></a></li>
            <li><a href="sass.html"><i class="material-icons right">contacts</i></a></li>
          </ul>
        </div>
      </nav>
		);
	}
}

export default NavBar;
